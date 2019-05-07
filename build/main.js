"use strict";
/*
 * Created with @iobroker/create-adapter v1.12.1
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");
const request = require("request");
const SMAObjects_1 = require("./SMAObjects");
const util_1 = require("util");
//require("request-debug")(request);
let _self = this;
class SmaSview extends utils.Adapter {
    constructor(options = {}) {
        super(Object.assign({}, options, { name: "sma-sview" }));
        this.sessionId = "";
        this.loggedIn = false;
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
    onReady() {
        return __awaiter(this, void 0, void 0, function* () {
            this.log.info("Inverter IP: " + this.config.inverterIP);
            request.defaults({
                jar: true,
                gzip: true,
                headers: {
                    "Referer": "http://" + this.config.inverterIP + "/",
                    "Accept-Language": "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7",
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
                    "Content-Type": "application/json;charset=UTF-8",
                    "Accept": "application/json, text/plain, */*"
                }
            });
            const requestFilename = (this.config.smartViewEnabled) ? SmaSview.JSON_SMARTVIEW : SmaSview.JSON_VALUES;
            if (this.config.smartViewEnabled) {
                this.requestJSONFromInverter();
            }
            else {
                if (this.config.loginNeeded == false) {
                    this.log.warn("You need to enable login if smartview is disabled");
                    return;
                }
                this.log.debug("Fetching Cookie");
                this.snackCookie().then(() => {
                    this.tryLogin().then(() => {
                        this.log.debug("Requesting JSON " + requestFilename + " with session " + this.sessionId);
                        this.requestJSONFromInverter(requestFilename, "http", this.sessionId);
                    }).catch((reason) => {
                        this.log.warn("Login not successful: " + reason + " Trying again in 30s");
                        setTimeout(() => {
                            this.onReady.bind(this);
                        }, 30000);
                    });
                }).catch((reason) => {
                    this.log.warn("Connection failed: " + reason);
                });
            }
        });
    }
    snackCookie() {
        _self.log.debug("Getting cookie");
        return new Promise((resolve, reject) => {
            _self.log.debug("Requesting " + _self.config.inverterIP);
            request("http://" + _self.config.inverterIP + "/", (error, response, body) => {
                if (error) {
                    reject("failed to connect");
                    return;
                }
                resolve();
            });
        });
    }
    tryLogin() {
        return new Promise((resolve, reject) => {
            this.log.debug("requesting " + "http://" + this.config.inverterIP + "/dyn/" + SmaSview.JSON_LOGIN + ".json");
            request.post({
                url: "http://" + this.config.inverterIP + "/dyn/" + SmaSview.JSON_LOGIN + ".json",
                form: JSON.stringify({
                    "right": this.config.loginUser,
                    "pass": this.config.loginPassword
                })
            }, (error, response, body) => {
                if (error) {
                    this.log.error(error);
                    reject(error);
                    return;
                }
                if (response.statusCode == 200) {
                    const res = JSON.parse(body);
                    if (res.result) {
                        if (res.result.sid) {
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
            });
        });
    }
    requestJSONFromInverter(jsonFile = SmaSview.JSON_SMARTVIEW, schema = "https", sid = "") {
        _self.log.debug("this is: ");
        _self.log.debug(typeof this);
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0";
        return new Promise((resolve, reject) => {
            const url = schema + "://" + _self.config.inverterIP + "/dyn/" + jsonFile + ".json?sid=" + sid;
            _self.log.debug("Requesting: " + url);
            request(url, { method: 'POST', form: JSON.stringify({ destDev: [], keys: [] }) }, (error, response, body) => {
                if (error) {
                    _self.log.error(error);
                    reject(error);
                    return;
                }
                _self.log.debug("Status: " + response.statusCode);
                if (response.statusCode == 200) {
                    let obj = JSON.parse(body);
                    if (!obj) {
                        _self.log.error("Parsing JSON failed: " + body);
                        reject("JSON");
                        return;
                    }
                    if (obj.result) {
                        for (let t in obj.result) {
                            _self.log.debug("First Key: " + t);
                            const states = this.parseResult(obj.result[t]);
                            this.createStates(states, () => {
                                setTimeout(() => { _self.requestJSONFromInverter(jsonFile, schema, sid); }, _self.config.rescanInterval);
                                resolve({});
                            });
                        }
                    }
                    else {
                        _self.log.error("Result Object not found in : " + JSON.stringify(obj));
                        reject("No result object");
                        return;
                    }
                }
            });
        });
    }
    createStates(states, callback) {
        if (!states || states.length == 0) {
            _self.log.warn("States Array is empty.");
            return;
        }
        for (let t in states) {
            _self.log.debug("Setting state " + t + " to " + states[t]);
            let typ = (util_1.isNumber(states[t])) ? "value" : "string";
            _self.getObjectAsync(t).then((g) => {
                _self.setState(t, states[t], true);
            }).catch((reason) => {
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
                }).then(() => {
                    _self.setState(t, states[t], true);
                });
            });
        }
        callback();
    }
    parseResult(obj) {
        let states = {};
        for (var l in obj) {
            if (SMAObjects_1.SMAObjects.OBJECTS[l]) {
                for (var x in obj[l]) {
                    for (var o in obj[l][x]) {
                        if (obj[l][x][o].val) {
                            states[SMAObjects_1.SMAObjects.OBJECTS[l]] = obj[l][x][o].val;
                            // if is an array with a tag
                            if (!states[SMAObjects_1.SMAObjects.OBJECTS[l]].length)
                                continue;
                            const tag = states[SMAObjects_1.SMAObjects.OBJECTS[l]][0].tag;
                            if (tag) {
                                if (SMAObjects_1.D2PConst[tag]) {
                                    states[SMAObjects_1.SMAObjects.OBJECTS[l]] = SMAObjects_1.D2PConst[tag].toString();
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
    onUnload(callback) {
        try {
            this.log.info("cleaned everything up...");
            callback();
        }
        catch (e) {
            callback();
        }
    }
}
SmaSview.JSON_SMARTVIEW = "getDashValues";
SmaSview.JSON_VALUES = "getAllOnlValues";
SmaSview.JSON_LOGIN = "login";
if (module.parent) {
    // Export the constructor in compact mode
    module.exports = (options) => new SmaSview(options);
}
else {
    // otherwise start the instance directly
    (() => new SmaSview())();
}
