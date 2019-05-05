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
class SmaSview extends utils.Adapter {
    constructor(options = {}) {
        super(Object.assign({}, options, { name: "sma-sview" }));
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
            // Initialize your adapter here
            // The adapters config (in the instance object everything under the attribute "native") is accessible via
            // this.config:
            this.log.info("Inverter IP: " + this.config.smartViewIP);
            this.log.info("Rescan Interval: " + this.config.rescanInterval);
            this.requestJSONFromInverter();
        });
    }
    requestJSONFromInverter() {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0";
        request("https://" + this.config.smartViewIP + "/dyn/getDashValues.json", { method: 'POST', formData: { destDev: [], keys: [] } }, (error, response, body) => {
            if (error) {
                this.log.error(error);
                return;
            }
            this.log.debug("Status: " + response.statusCode);
            if (response.statusCode == 200) {
                let obj = JSON.parse(body);
                if (!obj) {
                    this.log.error("Parsing JSON failed: " + body);
                    return;
                }
                if (obj.result) {
                    for (let t in obj.result) {
                        this.log.debug("First Key: " + t);
                        const states = this.parseResult(obj.result[t]);
                        this.createStates(states, () => {
                            setTimeout(() => { this.requestJSONFromInverter(); }, this.config.rescanInterval);
                        });
                    }
                }
                else {
                    this.log.error("Result Object not found in : " + JSON.stringify(obj));
                    return;
                }
            }
        });
    }
    createStates(states, callback) {
        if (!states || states.length == 0) {
            this.log.warn("States Array is empty.");
            return;
        }
        for (let t in states) {
            this.log.debug("Setting state " + t + " to " + states[t]);
            let typ = (util_1.isNumber(states[t])) ? "value" : "string";
            this.getObjectAsync(t).then(() => {
                this.setState(t, states[t], true);
            }).catch((reason) => {
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
                }).then(() => {
                    this.setState(t, states[t], true);
                });
            });
        }
        callback();
    }
    parseResult(obj) {
        let states = {};
        for (var l in obj) {
            if (SMAObjects_1.SMAObjects.OBJECTS[l]) {
                for (var o in obj[l]["1"]) {
                    if (obj[l]["1"][o].val) {
                        states[SMAObjects_1.SMAObjects.OBJECTS[l]] = obj[l]["1"][o].val;
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
if (module.parent) {
    // Export the constructor in compact mode
    module.exports = (options) => new SmaSview(options);
}
else {
    // otherwise start the instance directly
    (() => new SmaSview())();
}
