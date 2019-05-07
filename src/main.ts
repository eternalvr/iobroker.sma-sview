/*
 * Created with @iobroker/create-adapter v1.12.1
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
import * as utils from "@iobroker/adapter-core";
import * as request from "request";


import {SMAObjects, D2PConst} from "./SMAObjects";
import { isNumber } from "util";
import { Agent } from "http";

//require("request-debug")(request);
let _self : any     = this;
// Load your modules here, e.g.:
// import * as fs from "fs";

// Augment the adapter.config object with the actual types
// TODO: delete this in the next version
declare global {
	namespace ioBroker {
		interface AdapterConfig {
			// Define the shape of your options here (recommended)
			inverterIP: string;
			rescanInterval: number;
			smartViewEnabled: boolean;
			loginNeeded: boolean;
			loginUser: string;
			loginPassword: string;
			// Or use a catch-all approach
			[key: string]: any;
		}
	}
}

class SmaSview extends utils.Adapter {

	static JSON_SMARTVIEW: string = "getDashValues";
	static JSON_VALUES: string = "getAllOnlValues";
	static JSON_LOGIN: string = "login";

	sessionId : string = "";
	loggedIn : boolean = false;
	
	constructor(options: Partial<ioBroker.AdapterOptions> = {}) {
		super({
			...options,
			name: "sma-sview",
		});
		_self = this;
		this.on("ready", this.onReady.bind(this));
	//	this.on("objectChange", this.onObjectChange.bind(this));
	//	this.on("stateChange", this.onStateChange.bind(this));
		// this.on("message", this.onMessage.bind(this));
		this.on("unload", this.onUnload.bind(this));
			
	}

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	private async onReady() {

		this.log.info("Inverter IP: " + this.config.inverterIP);
		request.defaults({
			jar: true,
			gzip: true,
			headers: {
				"Referer": "http://"+this.config.inverterIP+"/",
				"Accept-Language" : "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7",
				"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
				"Content-Type" : "application/json;charset=UTF-8",
				"Accept" : "application/json, text/plain, */*"
			}});

		const requestFilename = (this.config.smartViewEnabled) ? SmaSview.JSON_SMARTVIEW : SmaSview.JSON_VALUES;

		if(this.config.smartViewEnabled) {
			this.requestJSONFromInverter();
		} else {
			if(this.config.loginNeeded == false) {
				this.log.warn("You need to enable login if smartview is disabled");
				return;
			}
			this.log.debug("Fetching Cookie");
			this.snackCookie(). then(() => {
				
				this.tryLogin().then(() => {
					this.log.debug("Requesting JSON " + requestFilename + " with session " + this.sessionId);
					this.requestJSONFromInverter(requestFilename, "http", this.sessionId);	
				}).catch((reason) => {
					this.log.warn("Login not successful: " + reason + " Trying again in 30s");
					setTimeout(() => {
						this.onReady.bind(this);
					}, 30000);
				});
			}).catch((reason)=> {
				this.log.warn("Connection failed: " + reason);
			});
			
		}
		
		
	}
	private snackCookie(): Promise<void> {
		_self.log.debug("Getting cookie");
		return new Promise<void>((resolve, reject) => {
			_self.log.debug("Requesting " + _self.config.inverterIP);
			request("http://"+_self.config.inverterIP + "/", (error: any, response: request.Response, body: any) => {
				if(error){
					reject("failed to connect");
					return;
				}
					
				resolve();
				
			});
			
		});
	}
	private tryLogin(): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			this.log.debug("requesting " + "http://" + this.config.inverterIP + "/dyn/" + SmaSview.JSON_LOGIN + ".json");
			
			request.post(
			{ 
				url: "http://" + this.config.inverterIP + "/dyn/" + SmaSview.JSON_LOGIN + ".json",
				form: JSON.stringify({
					"right": this.config.loginUser,
					"pass": this.config.loginPassword
				})
			}, (error: any, response: request.Response, body: any) => {
				if(error) {
					this.log.error(error);
					reject(error);

					return;
				}
				if(response.statusCode == 200) {
					const res = JSON.parse(body);
					
					if(res.result) {
						if(res.result.sid) {
							this.loggedIn = true;
							this.sessionId = res.result.sid;
							this.log.debug("Logged in with Session ID: " + this.sessionId);
							resolve();
							
							return;
						}
					} 
				}
				this.loggedIn = false;
				this.sessionId = "";
				reject("unsuccessful: " + body);
			})
		});
		
	}
	requestJSONFromInverter (jsonFile: string = SmaSview.JSON_SMARTVIEW, schema: string = "https", sid: String = "") : Promise<object> {
		_self.log.debug("this is: ");
		_self.log.debug(typeof this);
		process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0";
		return new Promise<object>((resolve, reject) => {
			const url = schema + "://" + _self.config.inverterIP + "/dyn/"+ jsonFile + ".json?sid="+sid;
			_self.log.debug("Requesting: "+ url);
			request(url, { method: 'POST', form: JSON.stringify({destDev: [], keys: []})}, (error: any, response: request.Response, body: any) => {
				if(error) {
					_self.log.error(error);
					reject(error);
					return;
				}
				_self.log.debug("Status: " + response.statusCode);
				if(response.statusCode == 200){
					let obj = JSON.parse(body);
					
					if(!obj) {
						_self.log.error("Parsing JSON failed: " + body);
						reject("JSON");
						return;
					}
					if(obj.result) {
						for(let t in obj.result) {
							_self.log.debug("First Key: " + t);

							const states = this.parseResult(obj.result[t]);
							_self.createStates(states, () => {
								setTimeout(() => { _self.requestJSONFromInverter(jsonFile, schema, sid); }, _self.config.rescanInterval);
								resolve({});
							});
						}
					} else {
						_self.log.error("Result Object not found in : " + JSON.stringify(obj));
						reject("No result object");
						return;
					}
				}

				
		});
		});
}
createStates(states: any, callback: Function) {
	if(!states || states.length == 0){
		_self.log.warn("States Array is empty.");
		return;
	}

	for(let t in states) {
		_self.log.debug("Setting state " + t + " to " + states[t]);
		let typ = (isNumber(states[t])) ? "value" : "string";
		_self.getObjectAsync(t).then((g:any) => {

			if(!g) {
				_self.setObjectAsync(t, {
					type: "state",
					common: {
						name: t,
						type: "string",
						role: typ,
						read: true,
						write: false,
						
					},
					
					native: {},
				}).then(()=>{
					_self.setState(t, states[t], true);
				});
			} else {
				_self.setState(t, states[t], true);
			}
			
		}).catch((reason:any) => {
			_self.log.warn("Could not set state: " + reason);
		});
	}
	callback();
}
parseResult(obj: any) : any {
	
	let states : any= {}; 
	for ( var l in obj) {
		if(SMAObjects.OBJECTS[l]) {
			for(var x in obj[l]){
			for( var o in obj[l][x]){
				if(obj[l][x][o].val){
					states[SMAObjects.OBJECTS[l]] = obj[l][x][o].val;

					// if is an array with a tag
					if(!states[SMAObjects.OBJECTS[l]].length) 
						continue;

					const tag = states[SMAObjects.OBJECTS[l]][0].tag;
					if( tag ) {
						if( D2PConst[tag]) {
							states[SMAObjects.OBJECTS[l]] = D2PConst[tag].toString();
						}
					}
					
				}
				
			}
		}
			
		}
	}

	return states;
}

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 */
	private onUnload(callback: () => void) {
		try {
			this.log.info("cleaned everything up...");
			callback();
		} catch (e) {
			callback();
		}
	}

	
	// /**
	//  * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
	//  * Using this method requires "common.message" property to be set to true in io-package.json
	//  */
	// private onMessage(obj: ioBroker.Message) {
	// 	if (typeof obj === "object" && obj.message) {
	// 		if (obj.command === "send") {
	// 			// e.g. send email or pushover or whatever
	// 			this.log.info("send command");

	// 			// Send response in callback if required
	// 			if (obj.callback) this.sendTo(obj.from, obj.command, "Message received", obj.callback);
	// 		}
	// 	}
	// }

}

if (module.parent) {
	// Export the constructor in compact mode
	module.exports = (options: Partial<ioBroker.AdapterOptions> | undefined) => new SmaSview(options);
} else {
	// otherwise start the instance directly
	(() => new SmaSview())();
}