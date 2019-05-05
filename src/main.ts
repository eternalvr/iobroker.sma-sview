/*
 * Created with @iobroker/create-adapter v1.12.1
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
import * as utils from "@iobroker/adapter-core";
import * as request from "request";
import {SMAObjects, D2PConst} from "./SMAObjects";
import { isNumber } from "util";

// Load your modules here, e.g.:
// import * as fs from "fs";

// Augment the adapter.config object with the actual types
// TODO: delete this in the next version
declare global {
	namespace ioBroker {
		interface AdapterConfig {
			// Define the shape of your options here (recommended)
			smartViewIP: string;
			rescanInterval: number;
			// Or use a catch-all approach
			[key: string]: any;
		}
	}
}

class SmaSview extends utils.Adapter {

	constructor(options: Partial<ioBroker.AdapterOptions> = {}) {
		super({
			...options,
			name: "sma-sview",
		});
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
		// Initialize your adapter here

		// The adapters config (in the instance object everything under the attribute "native") is accessible via
		// this.config:
		this.log.info("Inverter IP: " + this.config.smartViewIP);
		this.log.info("Rescan Interval: " + this.config.rescanInterval);

		

		
		this.requestJSONFromInverter();
		
	}
	private requestJSONFromInverter(){
		process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0";
		 
		request("https://" + this.config.smartViewIP + "/dyn/getDashValues.json", { method: 'POST', formData: {destDev: [], keys: []}}, (error: any, response: request.Response, body: any) => {
				if(error) {
					this.log.error(error);
					return;
				}
				this.log.debug("Status: " + response.statusCode);
				if(response.statusCode == 200){
					let obj = JSON.parse(body);
					
					if(!obj) {
						this.log.error("Parsing JSON failed: " + body);

						return;
					}
					if(obj.result) {
						for(let t in obj.result) {
							this.log.debug("First Key: " + t);

							const states = this.parseResult(obj.result[t]);
							this.createStates(states, () => {
								setTimeout(() => { this.requestJSONFromInverter(); }, this.config.rescanInterval);
							});
						}
					} else {
						this.log.error("Result Object not found in : " + JSON.stringify(obj));

						return;
					}
				}

				
		});
}
createStates(states: any, callback: Function) {
	if(!states || states.length == 0){
		this.log.warn("States Array is empty.");
		return;
	}

	for(let t in states) {
		this.log.debug("Setting state " + t + " to " + states[t]);
		let typ = (isNumber(states[t])) ? "value" : "string";
		this.getObjectAsync(t).then(() => {
			this.setState(t, states[t], true);
		}).catch((reason:any) => {
			this.setObjectAsync(t, {
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
				this.setState(t, states[t], true);
			});
		});
	}
	callback();
}
parseResult(obj: any) : any {
	let states : any= {}; 
	for ( var l in obj) {
		if(SMAObjects.OBJECTS[l]) {
			for( var o in obj[l]["1"]){
				if(obj[l]["1"][o].val){
					states[SMAObjects.OBJECTS[l]] = obj[l]["1"][o].val;

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