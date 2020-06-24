/*!
 * @fms-cat/wavenerd-deck v0.3.0
 * a
 * Copyright (c) 2019 FMS-Cat
 * @fms-cat/wavenerd-deck is distributed under the MIT License
 * https://opensource.org/licenses/MIT
 * Repository: [object Object]
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["WAVENERD_DECK"] = factory();
	else
		root["WAVENERD_DECK"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/BeatManager.ts":
/*!****************************!*\
  !*** ./src/BeatManager.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BeatManager = void 0;
var EventEmittable_1 = __webpack_require__(/*! ./utils/EventEmittable */ "./src/utils/EventEmittable.ts");
var applyMixins_1 = __webpack_require__(/*! ./utils/applyMixins */ "./src/utils/applyMixins.ts");
var mod_1 = __webpack_require__(/*! ./utils/mod */ "./src/utils/mod.ts");
var BeatManager = /** @class */ (function () {
    function BeatManager() {
        this.__bpm = 140.0;
        this.__time = 0.0;
        this.__sixteenBar = 0.0;
    }
    Object.defineProperty(BeatManager.prototype, "bpm", {
        get: function () {
            return this.__bpm;
        },
        set: function (value) {
            var prevBpm = this.__bpm;
            this.__bpm = Math.max(0.0, value);
            this.__sixteenBar = this.__sixteenBar * prevBpm / this.__bpm;
            this.__emit('changeBPM', { bpm: this.__bpm });
        },
        enumerable: false,
        configurable: true
    });
    BeatManager.CalcBeatSeconds = function (bpm) {
        return 60.0 / bpm;
    };
    BeatManager.CalcBarSeconds = function (bpm) {
        // return this.beatLength * 4.0;
        return 240.0 / bpm;
    };
    BeatManager.CalcSixteenBarSeconds = function (bpm) {
        // return this.barLength * 16.0;
        return 3840.0 / bpm;
    };
    BeatManager.prototype.reset = function () {
        this.__time = 0.0;
        this.__sixteenBar = 0.0;
    };
    BeatManager.prototype.update = function (time) {
        var beatSeconds = BeatManager.CalcBeatSeconds(this.__bpm);
        var barSeconds = BeatManager.CalcBarSeconds(this.__bpm);
        var sixteenBarSeconds = BeatManager.CalcSixteenBarSeconds(this.__bpm);
        var deltaTime = time - this.__time;
        this.__sixteenBar = mod_1.mod(this.__sixteenBar + deltaTime, sixteenBarSeconds);
        var sixteenBar = this.__sixteenBar;
        var bar = mod_1.mod(sixteenBar, barSeconds);
        var beat = mod_1.mod(bar, beatSeconds);
        this.__time = time;
        var event = {
            time: time,
            deltaTime: deltaTime,
            bpm: this.__bpm,
            beat: beat,
            bar: bar,
            sixteenBar: sixteenBar
        };
        this.__emit('update', event);
        return event;
    };
    return BeatManager;
}());
exports.BeatManager = BeatManager;
applyMixins_1.applyMixins(BeatManager, [EventEmittable_1.EventEmittable]);


/***/ }),

/***/ "./src/WavenerdDeck.ts":
/*!*****************************!*\
  !*** ./src/WavenerdDeck.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WavenerdDeck = void 0;
var BeatManager_1 = __webpack_require__(/*! ./BeatManager */ "./src/BeatManager.ts");
var shaderchunks_1 = __webpack_require__(/*! ./shaderchunks */ "./src/shaderchunks.ts");
var EventEmittable_1 = __webpack_require__(/*! ./utils/EventEmittable */ "./src/utils/EventEmittable.ts");
var applyMixins_1 = __webpack_require__(/*! ./utils/applyMixins */ "./src/utils/applyMixins.ts");
var vertQuad = "#version 300 es\nin vec2 p;\nvoid main() {\n  gl_Position = vec4( p, 0.0, 1.0 );\n}\n";
var WavenerdDeck = /** @class */ (function () {
    /**
     * Constructor of the WavenerdDeck.
     */
    function WavenerdDeck(_a) {
        var _this = this;
        var glCat = _a.glCat, audio = _a.audio, hostDeck = _a.hostDeck, bufferSize = _a.bufferSize, chunkSize = _a.chunkSize, bpm = _a.bpm, timeErrorThreshold = _a.timeErrorThreshold;
        /**
         * Its current cue status.
         * `'none'`: There is nothing in its current cue.
         * `'ready'`: There is a cue shader and is ready to be applied.
         * `'applying'`: There is a cue shader and is going to be applied in the next bar.
         */
        this.__cueStatus = 'none';
        this.__chunkHead = 0;
        /**
         * Its current time.
         */
        this.__time = 0;
        this.__program = null;
        this.__programCue = null;
        this.__samples = new Map();
        this.timeErrorThreshold = timeErrorThreshold !== null && timeErrorThreshold !== void 0 ? timeErrorThreshold : 0.01;
        this.__bufferSize = bufferSize !== null && bufferSize !== void 0 ? bufferSize : 2048;
        this.__chunkSize = chunkSize !== null && chunkSize !== void 0 ? chunkSize : 64;
        // -- host deck --------------------------------------------------------------------------------
        if (hostDeck) {
            this.hostDeck = hostDeck;
        }
        // -- beat manager -----------------------------------------------------------------------------
        this.__beatManager = new BeatManager_1.BeatManager();
        this.__beatManager.bpm = bpm !== null && bpm !== void 0 ? bpm : 140;
        this.__beatManager.on('changeBPM', function (_a) {
            var bpm = _a.bpm;
            _this.__chunkHead = 0;
            _this.__emit('changeBPM', { bpm: bpm });
        });
        // -- glCat ------------------------------------------------------------------------------------
        this.__glCat = glCat;
        var gl = glCat.gl;
        this.__bufferQuad = glCat.createBuffer();
        this.__bufferQuad.setVertexbuffer(new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]));
        this.__renderbuffer = glCat.createRenderbuffer();
        this.__renderbuffer.renderbufferStorage(this.__bufferSize / 2, this.__chunkSize, { format: gl.RGBA32F });
        this.__framebuffer = glCat.createFramebuffer();
        this.__framebuffer.attachRenderbuffer(this.__renderbuffer, { attachment: gl.COLOR_ATTACHMENT0 });
        this.__pixelBuffer = new Float32Array(this.__bufferSize * 2 * this.__chunkSize);
        // -- audio ------------------------------------------------------------------------------------
        this.__audio = audio;
        this.__node = audio.createScriptProcessor(this.__bufferSize, 2, 2);
        this.__node.onaudioprocess = function (event) { return _this.__handleProcess(event); };
    }
    Object.defineProperty(WavenerdDeck.prototype, "cueStatus", {
        get: function () {
            return this.__cueStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "bufferSize", {
        get: function () {
            return this.__bufferSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "chunkSize", {
        get: function () {
            return this.__chunkSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "bpm", {
        /**
         * Its current bpm.
         */
        get: function () {
            return this.beatManager.bpm;
        },
        set: function (value) {
            this.beatManager.bpm = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "time", {
        get: function () {
            if (this.hostDeck) {
                return this.hostDeck.time;
            }
            return this.__time;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "glCat", {
        get: function () {
            return this.__glCat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "lastError", {
        get: function () {
            return this.__lastError;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "audio", {
        get: function () {
            return this.__audio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "node", {
        get: function () {
            return this.__node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "sampleRate", {
        /**
         * Alias for the `audio.sampleRate` .
         */
        get: function () {
            return this.__audio.sampleRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "beatManager", {
        get: function () {
            var _a;
            var hostDeckBeatManager = (_a = this.hostDeck) === null || _a === void 0 ? void 0 : _a.beatManager;
            if (hostDeckBeatManager) {
                return hostDeckBeatManager;
            }
            return this.__beatManager;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "samples", {
        get: function () {
            if (this.hostDeck) {
                return this.hostDeck.samples;
            }
            return this.__samples;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Dispose this WavenerdDeck.
     */
    WavenerdDeck.prototype.dispose = function () {
        this.__setCueStatus('none');
        this.__bufferQuad.dispose();
        if (this.__program) {
            this.__program.program.dispose(true);
        }
        if (this.__programCue) {
            this.__programCue.program.dispose(true);
        }
    };
    /**
     * Compile given shader code and cue the shader.
     */
    WavenerdDeck.prototype.compile = function (code) {
        return __awaiter(this, void 0, Promise, function () {
            var program, requiredSamples, _a, _b, name;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.__setCueStatus('compiling');
                        return [4 /*yield*/, this.__glCat.lazyProgramAsync(vertQuad, shaderchunks_1.shaderchunkPre + code + shaderchunks_1.shaderchunkPost).catch(function (e) {
                                var error = _this.__processErrorMessage(e);
                                _this.__lastError = error;
                                _this.__programCue = null;
                                _this.__setCueStatus('none');
                                _this.__emit('error', { error: error });
                                throw new Error(error !== null && error !== void 0 ? error : undefined);
                            })];
                    case 1:
                        program = _d.sent();
                        requiredSamples = new Set();
                        try {
                            for (_a = __values(this.samples.keys()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                name = _b.value;
                                if (code.search('sample_' + name) !== -1) {
                                    requiredSamples.add(name);
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        this.__programCue = {
                            program: program,
                            code: code,
                            requiredSamples: requiredSamples
                        };
                        this.__setCueStatus('ready');
                        this.__emit('error', { error: null });
                        this.__lastError = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Apply the cue shader after the bar ends.
     */
    WavenerdDeck.prototype.applyCue = function () {
        if (this.__cueStatus === 'ready') {
            this.__setCueStatus('applying');
        }
    };
    /**
     * Load a sample and store as a uniform texture.
     */
    WavenerdDeck.prototype.loadSample = function (name, buffer) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.__audio.decodeAudioData(buffer)
                    .then(function (audioBuffer) {
                    var sampleRate = audioBuffer.sampleRate, duration = audioBuffer.duration;
                    var frames = audioBuffer.length;
                    var width = 2048;
                    var lengthCeiled = Math.ceil(frames / 2048.0);
                    var height = lengthCeiled;
                    var buffer = new Float32Array(width * height * 4);
                    var channels = audioBuffer.numberOfChannels;
                    var dataL = audioBuffer.getChannelData(0);
                    var dataR = audioBuffer.getChannelData(channels === 1 ? 0 : 1);
                    for (var i = 0; i < frames; i++) {
                        buffer[i * 4 + 0] = dataL[i];
                        buffer[i * 4 + 1] = dataR[i];
                    }
                    var glCat = _this.__glCat;
                    var gl = glCat.gl;
                    var texture = _this.__glCat.createTexture();
                    texture.setTextureFromArray(width, height, buffer, {
                        internalformat: gl.RGBA32F,
                        format: gl.RGBA,
                        type: gl.FLOAT,
                    });
                    texture.textureFilter(gl.NEAREST);
                    _this.__samples.set(name, {
                        name: name,
                        texture: texture,
                        sampleRate: sampleRate,
                        duration: duration
                    });
                    if (_this.__program && _this.__program.code.search('sample_' + name)) {
                        _this.__program.requiredSamples.add(name);
                    }
                    if (_this.__programCue && _this.__programCue.code.search('sample_' + name)) {
                        _this.__programCue.requiredSamples.add(name);
                    }
                    _this.__emit('loadSample', { name: name, duration: duration, sampleRate: sampleRate });
                });
                return [2 /*return*/];
            });
        });
    };
    /**
     * Delete a sample.
     */
    WavenerdDeck.prototype.deleteSample = function (name) {
        if (this.__samples.has(name)) {
            this.__samples.delete(name);
            this.__emit('deleteSample', { name: name });
        }
    };
    WavenerdDeck.prototype.__handleProcess = function (event) {
        var time = this.time;
        if (!this.hostDeck) {
            time += this.__bufferSize / this.__audio.sampleRate;
            if (this.timeErrorThreshold < Math.abs(time - event.playbackTime)) {
                time = event.playbackTime;
            }
        }
        this.__time = time;
        var beatManagerUpdateEvent = this.beatManager.update(time);
        var bpm = beatManagerUpdateEvent.bpm, bar = beatManagerUpdateEvent.bar;
        var barSeconds = BeatManager_1.BeatManager.CalcBarSeconds(bpm);
        var outL = event.outputBuffer.getChannelData(0);
        var outR = event.outputBuffer.getChannelData(1);
        // should I process the next program?
        var _a = this, sampleRate = _a.sampleRate, bufferSize = _a.__bufferSize;
        var beginNext = this.__cueStatus === 'applying'
            ? Math.min(bufferSize, Math.floor((barSeconds - bar) * sampleRate))
            : bufferSize;
        if (this.__chunkHead === 0) {
            this.__prepareBuffer(beatManagerUpdateEvent);
        }
        // insert into its audio buffer
        for (var i = 0; i < beginNext; i++) {
            var chunkIndex = this.__chunkHead * this.__bufferSize * 2;
            outL[i] = this.__pixelBuffer[chunkIndex + i * 2 + 0];
            outR[i] = this.__pixelBuffer[chunkIndex + i * 2 + 1];
        }
        // process the next program??
        if (beginNext !== bufferSize) {
            this.__setCueStatus('none');
            if (this.__programCue) {
                var prevProgram = this.__program;
                this.__program = this.__programCue;
                if (prevProgram) {
                    prevProgram.program.dispose(true);
                }
                this.__programCue = null;
                // render
                this.__prepareBuffer(beatManagerUpdateEvent);
            }
            this.__chunkHead = 0;
            // insert into its audio buffer
            for (var i = beginNext; i < bufferSize; i++) {
                outL[i] = this.__pixelBuffer[i * 2 + 0];
                outR[i] = this.__pixelBuffer[i * 2 + 1];
            }
        }
        this.__chunkHead = (this.__chunkHead + 1) % this.__chunkSize;
        // emit an event
        this.__emit('process');
    };
    WavenerdDeck.prototype.__prepareBuffer = function (event) {
        var _this = this;
        var time = event.time, beat = event.beat, bar = event.bar, sixteenBar = event.sixteenBar, bpm = event.bpm;
        var beatSeconds = BeatManager_1.BeatManager.CalcBeatSeconds(bpm);
        var barSeconds = BeatManager_1.BeatManager.CalcBarSeconds(bpm);
        var sixteenBarSeconds = BeatManager_1.BeatManager.CalcSixteenBarSeconds(bpm);
        var _a = this, sampleRate = _a.sampleRate, bufferSize = _a.__bufferSize, chunkSize = _a.__chunkSize;
        var gl = this.__glCat.gl;
        // render
        if (this.__program) {
            this.samples.forEach(function (sample) {
                _this.__program.program.uniformTexture('sample_' + sample.name, sample.texture);
                _this.__program.program.uniform4f('sample_' + sample.name + '_meta', sample.texture.width, sample.texture.height, sample.sampleRate, sample.duration);
            });
            this.__program.program.attribute('p', this.__bufferQuad, 2);
            this.__program.program.uniform1f('bpm', this.bpm);
            this.__program.program.uniform1f('_deltaSample', 1.0 / sampleRate);
            this.__program.program.uniform1f('_deltaChunk', this.__bufferSize / sampleRate);
            this.__program.program.uniform4f('timeLength', beatSeconds, barSeconds, sixteenBarSeconds, 1E16);
            this.__program.program.uniform4f('_timeHead', beat, bar, sixteenBar, time);
            this.__glCat.useProgram(this.__program.program, function () {
                _this.__glCat.bindFramebuffer(_this.__framebuffer, function () {
                    gl.viewport(0, 0, _this.__bufferSize / 2, _this.__chunkSize);
                    gl.blendFunc(_this.__glCat.gl.ONE, _this.__glCat.gl.ZERO);
                    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                });
            });
            // read pixels
            gl.flush();
            this.__glCat.bindFramebuffer(this.__framebuffer, function () {
                gl.readBuffer(_this.__glCat.gl.COLOR_ATTACHMENT0);
                gl.readPixels(0, // x
                0, // y
                bufferSize / 2, // width
                chunkSize, // height
                _this.__glCat.gl.RGBA, // format
                _this.__glCat.gl.FLOAT, // type
                _this.__pixelBuffer // dst
                );
            });
        }
    };
    WavenerdDeck.prototype.__setCueStatus = function (cueStatus) {
        this.__cueStatus = cueStatus;
        this.__emit('changeCueStatus', { cueStatus: cueStatus });
    };
    WavenerdDeck.prototype.__processErrorMessage = function (error) {
        var _a;
        var str = (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : error;
        if (!str) {
            return null;
        }
        return str.replace(/ERROR: (\d+):(\d+)/g, function (match) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var line = parseInt(args[1]) - shaderchunks_1.shaderchunkPreLines + 1;
            return "ERROR: " + args[0] + ":" + line;
        });
    };
    return WavenerdDeck;
}());
exports.WavenerdDeck = WavenerdDeck;
applyMixins_1.applyMixins(WavenerdDeck, [EventEmittable_1.EventEmittable]);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WavenerdDeck_1 = __webpack_require__(/*! ./WavenerdDeck */ "./src/WavenerdDeck.ts");
Object.defineProperty(exports, "WavenerdDeck", { enumerable: true, get: function () { return WavenerdDeck_1.WavenerdDeck; } });
var BeatManager_1 = __webpack_require__(/*! ./BeatManager */ "./src/BeatManager.ts");
Object.defineProperty(exports, "BeatManager", { enumerable: true, get: function () { return BeatManager_1.BeatManager; } });
var WavenerdDeck_2 = __webpack_require__(/*! ./WavenerdDeck */ "./src/WavenerdDeck.ts");
exports.default = WavenerdDeck_2.WavenerdDeck;


/***/ }),

/***/ "./src/shaderchunks.ts":
/*!*****************************!*\
  !*** ./src/shaderchunks.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.shaderchunkPost = exports.shaderchunkPreLines = exports.shaderchunkPre = void 0;
exports.shaderchunkPre = "#version 300 es\n\nprecision highp float;\n\n#define _PI 3.14159265359\n\nuniform float bpm;\nuniform vec4 timeLength;\nuniform float sampleRate;\nuniform float _deltaSample;\nuniform float _deltaChunk;\nuniform vec4 _timeHead;\n\nout vec4 fragColor;\n\nvec2 sampleNearest( sampler2D s, vec4 meta, float time ) {\n  if ( meta.w < time ) { return vec2( 0.0 ); }\n  float x = time / meta.x * meta.z;\n  vec2 uv = fract( vec2(\n    x,\n    floor( x ) / meta.y\n  ) ) + 0.5 / meta.xy;\n  return texture( s, uv ).xy;\n}\n\n// I have 0% confidence that the algorithm is perfect\nvec2 sampleSinc( sampler2D s, vec4 meta, float time ) {\n  if ( meta.w < time ) { return vec2( 0.0 ); }\n  vec2 sum = vec2( 0.0 );\n  float def = 0.5 - fract( time * meta.z );\n  for ( int i = -5; i <= 5; i ++ ) {\n    float x = floor( time * meta.z + float( i ) ) / meta.x;\n    float deft = def + float( i );\n    vec2 uv = fract( vec2(\n      x,\n      floor( x ) / meta.y\n    ) ) + 0.5 / meta.xy;\n    sum += texture( s, uv ).xy * min( sin( deft * _PI ) / deft / _PI, 1.0 );\n  }\n  return sum;\n}\n";
exports.shaderchunkPreLines = exports.shaderchunkPre.split('\n').length;
exports.shaderchunkPost = "void main() {\n  float off = floor( gl_FragCoord.x ) * 2.0;\n  vec4 head = _timeHead + _deltaChunk * floor( gl_FragCoord.y );\n  fragColor = vec4(\n    mainAudio( mod( head + ( off ) * _deltaSample, timeLength ) ),\n    mainAudio( mod( head + ( off + 1.0 ) * _deltaSample, timeLength ) )\n  );\n}";


/***/ }),

/***/ "./src/utils/EventEmittable.ts":
/*!*************************************!*\
  !*** ./src/utils/EventEmittable.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Ref: https://github.com/andywer/typed-emitter/blob/master/index.d.ts
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmittable = void 0;
var EventEmittable = /** @class */ (function () {
    function EventEmittable() {
    }
    EventEmittable.prototype.on = function (type, listener) {
        this.__eventListeners = this.__eventListeners || new Map();
        var array = this.__eventListeners.get(type);
        if (!array) {
            array = [];
            this.__eventListeners.set(type, array);
        }
        array.push(listener);
        return listener;
    };
    EventEmittable.prototype.off = function (type, listener) {
        this.__eventListeners = this.__eventListeners || new Map();
        var array = this.__eventListeners.get(type);
        if (!array) {
            array = [];
            this.__eventListeners.set(type, array);
        }
        var index = array.indexOf(listener);
        if (index !== -1) {
            array.splice(index, 1);
        }
    };
    EventEmittable.prototype.__emit = function () {
        var _a;
        var _b = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _b[_i] = arguments[_i];
        }
        var _c = __read(_b, 2), type = _c[0], event = _c[1];
        this.__eventListeners = this.__eventListeners || new Map();
        (_a = this.__eventListeners.get(type)) === null || _a === void 0 ? void 0 : _a.forEach(function (listener) { return listener(event); });
    };
    return EventEmittable;
}());
exports.EventEmittable = EventEmittable;


/***/ }),

/***/ "./src/utils/applyMixins.ts":
/*!**********************************!*\
  !*** ./src/utils/applyMixins.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMixins = void 0;
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
exports.applyMixins = applyMixins;


/***/ }),

/***/ "./src/utils/mod.ts":
/*!**************************!*\
  !*** ./src/utils/mod.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mod = void 0;
function mod(value, divisor) {
    return value - Math.floor(value / divisor) * divisor;
}
exports.mod = mod;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dBVkVORVJEX0RFQ0svLi9zcmMvQmVhdE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vV0FWRU5FUkRfREVDSy8uL3NyYy9XYXZlbmVyZERlY2sudHMiLCJ3ZWJwYWNrOi8vV0FWRU5FUkRfREVDSy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLLy4vc3JjL3NoYWRlcmNodW5rcy50cyIsIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLLy4vc3JjL3V0aWxzL0V2ZW50RW1pdHRhYmxlLnRzIiwid2VicGFjazovL1dBVkVORVJEX0RFQ0svLi9zcmMvdXRpbHMvYXBwbHlNaXhpbnMudHMiLCJ3ZWJwYWNrOi8vV0FWRU5FUkRfREVDSy8uL3NyYy91dGlscy9tb2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVB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LE9BQU8sQ0FBRSxVQUFFLFFBQVE7UUFDM0IsTUFBTSxDQUFDLG1CQUFtQixDQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUUsQ0FBQyxPQUFPLENBQUUsVUFBRSxJQUFJO1lBQzlELE1BQU0sQ0FBQyxjQUFjLENBQ25CLFdBQVcsQ0FBQyxTQUFTLEVBQ3JCLElBQUksRUFDSixNQUFNLENBQUMsd0JBQXdCLENBQUUsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUcsQ0FDN0QsQ0FBQztRQUNKLENBQUMsQ0FBRSxDQUFDO0lBQ04sQ0FBQyxDQUFFLENBQUM7QUFDTixDQUFDO0FBVkQsa0NBVUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWRCxTQUFnQixHQUFHLENBQUUsS0FBYSxFQUFFLE9BQWU7SUFDakQsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxLQUFLLEdBQUcsT0FBTyxDQUFFLEdBQUcsT0FBTyxDQUFDO0FBQ3pELENBQUM7QUFGRCxrQkFFQyIsImZpbGUiOiJ3YXZlbmVyZC1kZWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiV0FWRU5FUkRfREVDS1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJXQVZFTkVSRF9ERUNLXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBFdmVudEVtaXR0YWJsZSB9IGZyb20gJy4vdXRpbHMvRXZlbnRFbWl0dGFibGUnO1xuaW1wb3J0IHsgYXBwbHlNaXhpbnMgfSBmcm9tICcuL3V0aWxzL2FwcGx5TWl4aW5zJztcbmltcG9ydCB7IG1vZCB9IGZyb20gJy4vdXRpbHMvbW9kJztcblxuZXhwb3J0IGludGVyZmFjZSBCZWF0TWFuYWdlclVwZGF0ZUV2ZW50IHtcbiAgdGltZTogbnVtYmVyO1xuICBkZWx0YVRpbWU6IG51bWJlcjtcbiAgYnBtOiBudW1iZXI7XG4gIGJlYXQ6IG51bWJlcjtcbiAgYmFyOiBudW1iZXI7XG4gIHNpeHRlZW5CYXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEJlYXRNYW5hZ2VyIHtcbiAgcHVibGljIF9fYnBtOiBudW1iZXIgPSAxNDAuMDtcbiAgcHVibGljIGdldCBicG0oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fX2JwbTtcbiAgfVxuICBwdWJsaWMgc2V0IGJwbSggdmFsdWU6IG51bWJlciApIHtcbiAgICBjb25zdCBwcmV2QnBtID0gdGhpcy5fX2JwbTtcbiAgICB0aGlzLl9fYnBtID0gTWF0aC5tYXgoIDAuMCwgdmFsdWUgKTtcbiAgICB0aGlzLl9fc2l4dGVlbkJhciA9IHRoaXMuX19zaXh0ZWVuQmFyICogcHJldkJwbSAvIHRoaXMuX19icG07XG4gICAgdGhpcy5fX2VtaXQoICdjaGFuZ2VCUE0nLCB7IGJwbTogdGhpcy5fX2JwbSB9ICk7XG4gIH1cblxuICBwcml2YXRlIF9fdGltZSA9IDAuMDtcbiAgcHJpdmF0ZSBfX3NpeHRlZW5CYXIgPSAwLjA7XG5cbiAgcHVibGljIHN0YXRpYyBDYWxjQmVhdFNlY29uZHMoIGJwbTogbnVtYmVyICk6IG51bWJlciB7XG4gICAgcmV0dXJuIDYwLjAgLyBicG07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIENhbGNCYXJTZWNvbmRzKCBicG06IG51bWJlciApOiBudW1iZXIge1xuICAgIC8vIHJldHVybiB0aGlzLmJlYXRMZW5ndGggKiA0LjA7XG4gICAgcmV0dXJuIDI0MC4wIC8gYnBtO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBDYWxjU2l4dGVlbkJhclNlY29uZHMoIGJwbTogbnVtYmVyICk6IG51bWJlciB7XG4gICAgLy8gcmV0dXJuIHRoaXMuYmFyTGVuZ3RoICogMTYuMDtcbiAgICByZXR1cm4gMzg0MC4wIC8gYnBtO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuX190aW1lID0gMC4wO1xuICAgIHRoaXMuX19zaXh0ZWVuQmFyID0gMC4wO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSggdGltZTogbnVtYmVyICk6IEJlYXRNYW5hZ2VyVXBkYXRlRXZlbnQge1xuICAgIGNvbnN0IGJlYXRTZWNvbmRzID0gQmVhdE1hbmFnZXIuQ2FsY0JlYXRTZWNvbmRzKCB0aGlzLl9fYnBtICk7XG4gICAgY29uc3QgYmFyU2Vjb25kcyA9IEJlYXRNYW5hZ2VyLkNhbGNCYXJTZWNvbmRzKCB0aGlzLl9fYnBtICk7XG4gICAgY29uc3Qgc2l4dGVlbkJhclNlY29uZHMgPSBCZWF0TWFuYWdlci5DYWxjU2l4dGVlbkJhclNlY29uZHMoIHRoaXMuX19icG0gKTtcblxuICAgIGNvbnN0IGRlbHRhVGltZSA9IHRpbWUgLSB0aGlzLl9fdGltZTtcblxuICAgIHRoaXMuX19zaXh0ZWVuQmFyID0gbW9kKCB0aGlzLl9fc2l4dGVlbkJhciArIGRlbHRhVGltZSwgc2l4dGVlbkJhclNlY29uZHMgKTtcblxuICAgIGNvbnN0IHNpeHRlZW5CYXIgPSB0aGlzLl9fc2l4dGVlbkJhcjtcbiAgICBjb25zdCBiYXIgPSBtb2QoIHNpeHRlZW5CYXIsIGJhclNlY29uZHMgKTtcbiAgICBjb25zdCBiZWF0ID0gbW9kKCBiYXIsIGJlYXRTZWNvbmRzICk7XG5cbiAgICB0aGlzLl9fdGltZSA9IHRpbWU7XG5cbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIHRpbWUsXG4gICAgICBkZWx0YVRpbWUsXG4gICAgICBicG06IHRoaXMuX19icG0sXG4gICAgICBiZWF0LFxuICAgICAgYmFyLFxuICAgICAgc2l4dGVlbkJhclxuICAgIH07XG5cbiAgICB0aGlzLl9fZW1pdCggJ3VwZGF0ZScsIGV2ZW50ICk7XG5cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBCZWF0TWFuYWdlciBleHRlbmRzIEV2ZW50RW1pdHRhYmxlPHtcbiAgdXBkYXRlOiBCZWF0TWFuYWdlclVwZGF0ZUV2ZW50O1xuICBjaGFuZ2VCUE06IHsgYnBtOiBudW1iZXIgfTtcbn0+IHt9XG5hcHBseU1peGlucyggQmVhdE1hbmFnZXIsIFsgRXZlbnRFbWl0dGFibGUgXSApO1xuIiwiaW1wb3J0IHsgQmVhdE1hbmFnZXIsIEJlYXRNYW5hZ2VyVXBkYXRlRXZlbnQgfSBmcm9tICcuL0JlYXRNYW5hZ2VyJztcbmltcG9ydCB0eXBlIHsgR0xDYXQsIEdMQ2F0QnVmZmVyLCBHTENhdEZyYW1lYnVmZmVyLCBHTENhdFByb2dyYW0sIEdMQ2F0UmVuZGVyYnVmZmVyLCBHTENhdFRleHR1cmUgfSBmcm9tICdAZm1zLWNhdC9nbGNhdC10cyc7XG5pbXBvcnQgeyBzaGFkZXJjaHVua1Bvc3QsIHNoYWRlcmNodW5rUHJlLCBzaGFkZXJjaHVua1ByZUxpbmVzIH0gZnJvbSAnLi9zaGFkZXJjaHVua3MnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGFibGUgfSBmcm9tICcuL3V0aWxzL0V2ZW50RW1pdHRhYmxlJztcbmltcG9ydCB7IGFwcGx5TWl4aW5zIH0gZnJvbSAnLi91dGlscy9hcHBseU1peGlucyc7XG5cbmludGVyZmFjZSBXYXZlbmVyZERlY2tQcm9ncmFtIHtcbiAgcHJvZ3JhbTogR0xDYXRQcm9ncmFtPFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ+O1xuICBjb2RlOiBzdHJpbmc7XG4gIHJlcXVpcmVkU2FtcGxlczogU2V0PHN0cmluZz47XG59XG5cbmludGVyZmFjZSBXYXZlbmVyZERlY2tTYW1wbGVFbnRyeSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdGV4dHVyZTogR0xDYXRUZXh0dXJlPFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ+O1xuICBzYW1wbGVSYXRlOiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG59XG5cbmNvbnN0IHZlcnRRdWFkID0gYCN2ZXJzaW9uIDMwMCBlc1xuaW4gdmVjMiBwO1xudm9pZCBtYWluKCkge1xuICBnbF9Qb3NpdGlvbiA9IHZlYzQoIHAsIDAuMCwgMS4wICk7XG59XG5gO1xuXG5leHBvcnQgY2xhc3MgV2F2ZW5lcmREZWNrIHtcbiAgLyoqXG4gICAqIFRocmVzaG9sZCBvZiB0aW1lIGVycm9yLCBpbiBzZWNvbmRzLlxuICAgKi9cbiAgcHVibGljIHRpbWVFcnJvclRocmVzaG9sZDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJdHMgaG9zdCBkZWNrLlxuICAgKiBJdCdzIGhpZ2hseSByZWNvbW1lbmRlZCB0byBjb25uZWN0IHRoZSBub2RlIG9mIHRoZSBob3N0IGRlY2sgaW50byB0aGUgbm9kZSBvZiB0aGlzIGRlY2ssIHRvIGVuc3VyZSB0aGUgdGltaW5nIGNvbnNpc3RlbmN5LlxuICAgKi9cbiAgcHVibGljIGhvc3REZWNrPzogV2F2ZW5lcmREZWNrO1xuXG4gIC8qKlxuICAgKiBJdHMgY3VycmVudCBjdWUgc3RhdHVzLlxuICAgKiBgJ25vbmUnYDogVGhlcmUgaXMgbm90aGluZyBpbiBpdHMgY3VycmVudCBjdWUuXG4gICAqIGAncmVhZHknYDogVGhlcmUgaXMgYSBjdWUgc2hhZGVyIGFuZCBpcyByZWFkeSB0byBiZSBhcHBsaWVkLlxuICAgKiBgJ2FwcGx5aW5nJ2A6IFRoZXJlIGlzIGEgY3VlIHNoYWRlciBhbmQgaXMgZ29pbmcgdG8gYmUgYXBwbGllZCBpbiB0aGUgbmV4dCBiYXIuXG4gICAqL1xuICBwcml2YXRlIF9fY3VlU3RhdHVzOiAnbm9uZScgfCAnY29tcGlsaW5nJyB8ICdyZWFkeScgfCAnYXBwbHlpbmcnID0gJ25vbmUnO1xuICBwdWJsaWMgZ2V0IGN1ZVN0YXR1cygpOiAnbm9uZScgfCAnY29tcGlsaW5nJyB8ICdyZWFkeScgfCAnYXBwbHlpbmcnIHtcbiAgICByZXR1cm4gdGhpcy5fX2N1ZVN0YXR1cztcbiAgfVxuXG4gIC8qKlxuICAgKiBJdHMgYnVmZmVyIHNpemUuXG4gICAqL1xuICBwcml2YXRlIF9fYnVmZmVyU2l6ZTogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IGJ1ZmZlclNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fX2J1ZmZlclNpemU7XG4gIH1cblxuICAvKipcbiAgICogSXRzIGNodW5rIHNpemUuXG4gICAqL1xuICBwcml2YXRlIF9fY2h1bmtTaXplOiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgY2h1bmtTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX19jaHVua1NpemU7XG4gIH1cblxuICBwcml2YXRlIF9fY2h1bmtIZWFkID0gMDtcblxuICAvKipcbiAgICogSXRzIGN1cnJlbnQgYnBtLlxuICAgKi9cbiAgcHVibGljIGdldCBicG0oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5iZWF0TWFuYWdlci5icG07XG4gIH1cbiAgcHVibGljIHNldCBicG0oIHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5iZWF0TWFuYWdlci5icG0gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdHMgY3VycmVudCB0aW1lLlxuICAgKi9cbiAgcHJpdmF0ZSBfX3RpbWUgPSAwO1xuICBwdWJsaWMgZ2V0IHRpbWUoKTogbnVtYmVyIHtcbiAgICBpZiAoIHRoaXMuaG9zdERlY2sgKSB7XG4gICAgICByZXR1cm4gdGhpcy5ob3N0RGVjay50aW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9fdGltZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdHMgYm91bmQgYEdMQ2F0YC5cbiAgICovXG4gIHByaXZhdGUgX19nbENhdDogR0xDYXQ8V2ViR0wyUmVuZGVyaW5nQ29udGV4dD47XG4gIHB1YmxpYyBnZXQgZ2xDYXQoKTogR0xDYXQ8V2ViR0wyUmVuZGVyaW5nQ29udGV4dD4ge1xuICAgIHJldHVybiB0aGlzLl9fZ2xDYXQ7XG4gIH1cblxuICAvKipcbiAgICogSXRzIGxhc3QgY29tcGlsZSBlcnJvciBoYXBwZW5lZCBpbiBbW1dhdmVuZXJkRGVjay5jb21waWxlXV0uXG4gICAqL1xuICBwcml2YXRlIF9fbGFzdEVycm9yOiBhbnk7XG4gIHB1YmxpYyBnZXQgbGFzdEVycm9yKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX19sYXN0RXJyb3I7XG4gIH1cblxuICAvKipcbiAgICogSXRzIGJpbmRlZCBgQXVkaW9Db250ZXh0YC5cbiAgICovXG4gIHByaXZhdGUgX19hdWRpbzogQXVkaW9Db250ZXh0O1xuICBwdWJsaWMgZ2V0IGF1ZGlvKCk6IEF1ZGlvQ29udGV4dCB7XG4gICAgcmV0dXJuIHRoaXMuX19hdWRpbztcbiAgfVxuXG4gIC8qKlxuICAgKiBJdHMgbm9kZSBvZiB0aGUgQXVkaW9Db250ZXh0LlxuICAgKi9cbiAgcHJpdmF0ZSBfX25vZGU6IFNjcmlwdFByb2Nlc3Nvck5vZGU7XG4gIHB1YmxpYyBnZXQgbm9kZSgpOiBTY3JpcHRQcm9jZXNzb3JOb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fX25vZGU7XG4gIH1cblxuICAvKipcbiAgICogQWxpYXMgZm9yIHRoZSBgYXVkaW8uc2FtcGxlUmF0ZWAgLlxuICAgKi9cbiAgcHVibGljIGdldCBzYW1wbGVSYXRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX19hdWRpby5zYW1wbGVSYXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBfX2JlYXRNYW5hZ2VyOiBCZWF0TWFuYWdlcjtcbiAgcHVibGljIGdldCBiZWF0TWFuYWdlcigpOiBCZWF0TWFuYWdlciB7XG4gICAgY29uc3QgaG9zdERlY2tCZWF0TWFuYWdlciA9IHRoaXMuaG9zdERlY2s/LmJlYXRNYW5hZ2VyO1xuICAgIGlmICggaG9zdERlY2tCZWF0TWFuYWdlciApIHtcbiAgICAgIHJldHVybiBob3N0RGVja0JlYXRNYW5hZ2VyO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9fYmVhdE1hbmFnZXI7XG4gIH1cblxuICBwcml2YXRlIF9fYnVmZmVyUXVhZDogR0xDYXRCdWZmZXI8V2ViR0wyUmVuZGVyaW5nQ29udGV4dD47XG4gIHByaXZhdGUgX19yZW5kZXJidWZmZXI6IEdMQ2F0UmVuZGVyYnVmZmVyPFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ+O1xuICBwcml2YXRlIF9fZnJhbWVidWZmZXI6IEdMQ2F0RnJhbWVidWZmZXI8V2ViR0wyUmVuZGVyaW5nQ29udGV4dD47XG4gIHByaXZhdGUgX19wcm9ncmFtOiBXYXZlbmVyZERlY2tQcm9ncmFtIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX19wcm9ncmFtQ3VlOiBXYXZlbmVyZERlY2tQcm9ncmFtIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX19waXhlbEJ1ZmZlcjogRmxvYXQzMkFycmF5O1xuXG4gIHByaXZhdGUgX19zYW1wbGVzID0gbmV3IE1hcDxzdHJpbmcsIFdhdmVuZXJkRGVja1NhbXBsZUVudHJ5PigpO1xuICBwcml2YXRlIGdldCBzYW1wbGVzKCk6IE1hcDxzdHJpbmcsIFdhdmVuZXJkRGVja1NhbXBsZUVudHJ5PiB7XG4gICAgaWYgKCB0aGlzLmhvc3REZWNrICkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdERlY2suc2FtcGxlcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fX3NhbXBsZXM7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3Igb2YgdGhlIFdhdmVuZXJkRGVjay5cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcigge1xuICAgIGdsQ2F0LFxuICAgIGF1ZGlvLFxuICAgIGhvc3REZWNrLFxuICAgIGJ1ZmZlclNpemUsXG4gICAgY2h1bmtTaXplLFxuICAgIGJwbSxcbiAgICB0aW1lRXJyb3JUaHJlc2hvbGRcbiAgfToge1xuICAgIGdsQ2F0OiBHTENhdDxXZWJHTDJSZW5kZXJpbmdDb250ZXh0PjtcbiAgICBhdWRpbzogQXVkaW9Db250ZXh0O1xuICAgIGhvc3REZWNrPzogV2F2ZW5lcmREZWNrO1xuICAgIGJ1ZmZlclNpemU/OiBudW1iZXI7XG4gICAgY2h1bmtTaXplPzogbnVtYmVyO1xuICAgIGJwbT86IG51bWJlcjtcbiAgICB0aW1lRXJyb3JUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIH0gKSB7XG4gICAgdGhpcy50aW1lRXJyb3JUaHJlc2hvbGQgPSB0aW1lRXJyb3JUaHJlc2hvbGQgPz8gMC4wMTtcbiAgICB0aGlzLl9fYnVmZmVyU2l6ZSA9IGJ1ZmZlclNpemUgPz8gMjA0ODtcbiAgICB0aGlzLl9fY2h1bmtTaXplID0gY2h1bmtTaXplID8/IDY0O1xuXG4gICAgLy8gLS0gaG9zdCBkZWNrIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaWYgKCBob3N0RGVjayApIHtcbiAgICAgIHRoaXMuaG9zdERlY2sgPSBob3N0RGVjaztcbiAgICB9XG5cbiAgICAvLyAtLSBiZWF0IG1hbmFnZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLl9fYmVhdE1hbmFnZXIgPSBuZXcgQmVhdE1hbmFnZXIoKTtcbiAgICB0aGlzLl9fYmVhdE1hbmFnZXIuYnBtID0gYnBtID8/IDE0MDtcbiAgICB0aGlzLl9fYmVhdE1hbmFnZXIub24oICdjaGFuZ2VCUE0nLCAoIHsgYnBtIH0gKSA9PiB7XG4gICAgICB0aGlzLl9fY2h1bmtIZWFkID0gMDtcbiAgICAgIHRoaXMuX19lbWl0KCAnY2hhbmdlQlBNJywgeyBicG0gfSApO1xuICAgIH0gKTtcblxuICAgIC8vIC0tIGdsQ2F0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuX19nbENhdCA9IGdsQ2F0O1xuICAgIGNvbnN0IHsgZ2wgfSA9IGdsQ2F0O1xuICAgIHRoaXMuX19idWZmZXJRdWFkID0gZ2xDYXQuY3JlYXRlQnVmZmVyKCkhO1xuICAgIHRoaXMuX19idWZmZXJRdWFkLnNldFZlcnRleGJ1ZmZlciggbmV3IEZsb2F0MzJBcnJheSggWyAtMSwgLTEsIDEsIC0xLCAtMSwgMSwgMSwgMSBdICkgKTtcbiAgICB0aGlzLl9fcmVuZGVyYnVmZmVyID0gZ2xDYXQuY3JlYXRlUmVuZGVyYnVmZmVyKCkhO1xuICAgIHRoaXMuX19yZW5kZXJidWZmZXIucmVuZGVyYnVmZmVyU3RvcmFnZShcbiAgICAgIHRoaXMuX19idWZmZXJTaXplIC8gMixcbiAgICAgIHRoaXMuX19jaHVua1NpemUsXG4gICAgICB7IGZvcm1hdDogZ2wuUkdCQTMyRiB9XG4gICAgKTtcbiAgICB0aGlzLl9fZnJhbWVidWZmZXIgPSBnbENhdC5jcmVhdGVGcmFtZWJ1ZmZlcigpITtcbiAgICB0aGlzLl9fZnJhbWVidWZmZXIuYXR0YWNoUmVuZGVyYnVmZmVyKFxuICAgICAgdGhpcy5fX3JlbmRlcmJ1ZmZlcixcbiAgICAgIHsgYXR0YWNobWVudDogZ2wuQ09MT1JfQVRUQUNITUVOVDAgfVxuICAgICk7XG4gICAgdGhpcy5fX3BpeGVsQnVmZmVyID0gbmV3IEZsb2F0MzJBcnJheSggdGhpcy5fX2J1ZmZlclNpemUgKiAyICogdGhpcy5fX2NodW5rU2l6ZSApO1xuXG4gICAgLy8gLS0gYXVkaW8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5fX2F1ZGlvID0gYXVkaW87XG4gICAgdGhpcy5fX25vZGUgPSBhdWRpby5jcmVhdGVTY3JpcHRQcm9jZXNzb3IoIHRoaXMuX19idWZmZXJTaXplLCAyLCAyICk7XG4gICAgdGhpcy5fX25vZGUub25hdWRpb3Byb2Nlc3MgPSAoIGV2ZW50ICkgPT4gdGhpcy5fX2hhbmRsZVByb2Nlc3MoIGV2ZW50ICk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcG9zZSB0aGlzIFdhdmVuZXJkRGVjay5cbiAgICovXG4gIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX19zZXRDdWVTdGF0dXMoICdub25lJyApO1xuICAgIHRoaXMuX19idWZmZXJRdWFkLmRpc3Bvc2UoKTtcbiAgICBpZiAoIHRoaXMuX19wcm9ncmFtICkge1xuICAgICAgdGhpcy5fX3Byb2dyYW0ucHJvZ3JhbS5kaXNwb3NlKCB0cnVlICk7XG4gICAgfVxuICAgIGlmICggdGhpcy5fX3Byb2dyYW1DdWUgKSB7XG4gICAgICB0aGlzLl9fcHJvZ3JhbUN1ZS5wcm9ncmFtLmRpc3Bvc2UoIHRydWUgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29tcGlsZSBnaXZlbiBzaGFkZXIgY29kZSBhbmQgY3VlIHRoZSBzaGFkZXIuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgY29tcGlsZSggY29kZTogc3RyaW5nICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX19zZXRDdWVTdGF0dXMoICdjb21waWxpbmcnICk7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGF3YWl0IHRoaXMuX19nbENhdC5sYXp5UHJvZ3JhbUFzeW5jKFxuICAgICAgdmVydFF1YWQsXG4gICAgICBzaGFkZXJjaHVua1ByZSArIGNvZGUgKyBzaGFkZXJjaHVua1Bvc3RcbiAgICApLmNhdGNoKCAoIGUgKSA9PiB7XG4gICAgICBjb25zdCBlcnJvciA9IHRoaXMuX19wcm9jZXNzRXJyb3JNZXNzYWdlKCBlICk7XG4gICAgICB0aGlzLl9fbGFzdEVycm9yID0gZXJyb3I7XG4gICAgICB0aGlzLl9fcHJvZ3JhbUN1ZSA9IG51bGw7XG4gICAgICB0aGlzLl9fc2V0Q3VlU3RhdHVzKCAnbm9uZScgKTtcbiAgICAgIHRoaXMuX19lbWl0KCAnZXJyb3InLCB7IGVycm9yIH0gKTtcbiAgICAgIHRocm93IG5ldyBFcnJvciggZXJyb3IgPz8gdW5kZWZpbmVkICk7XG4gICAgfSApO1xuXG4gICAgY29uc3QgcmVxdWlyZWRTYW1wbGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yICggY29uc3QgbmFtZSBvZiB0aGlzLnNhbXBsZXMua2V5cygpICkge1xuICAgICAgaWYgKCBjb2RlLnNlYXJjaCggJ3NhbXBsZV8nICsgbmFtZSApICE9PSAtMSApIHtcbiAgICAgICAgcmVxdWlyZWRTYW1wbGVzLmFkZCggbmFtZSApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX19wcm9ncmFtQ3VlID0ge1xuICAgICAgcHJvZ3JhbSxcbiAgICAgIGNvZGUsXG4gICAgICByZXF1aXJlZFNhbXBsZXNcbiAgICB9O1xuICAgIHRoaXMuX19zZXRDdWVTdGF0dXMoICdyZWFkeScgKTtcbiAgICB0aGlzLl9fZW1pdCggJ2Vycm9yJywgeyBlcnJvcjogbnVsbCB9ICk7XG4gICAgdGhpcy5fX2xhc3RFcnJvciA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIGN1ZSBzaGFkZXIgYWZ0ZXIgdGhlIGJhciBlbmRzLlxuICAgKi9cbiAgcHVibGljIGFwcGx5Q3VlKCk6IHZvaWQge1xuICAgIGlmICggdGhpcy5fX2N1ZVN0YXR1cyA9PT0gJ3JlYWR5JyApIHtcbiAgICAgIHRoaXMuX19zZXRDdWVTdGF0dXMoICdhcHBseWluZycgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBhIHNhbXBsZSBhbmQgc3RvcmUgYXMgYSB1bmlmb3JtIHRleHR1cmUuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgbG9hZFNhbXBsZSggbmFtZTogc3RyaW5nLCBidWZmZXI6IEFycmF5QnVmZmVyICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX19hdWRpby5kZWNvZGVBdWRpb0RhdGEoIGJ1ZmZlciApXG4gICAgLnRoZW4oICggYXVkaW9CdWZmZXIgKSA9PiB7XG4gICAgICBjb25zdCB7IHNhbXBsZVJhdGUsIGR1cmF0aW9uIH0gPSBhdWRpb0J1ZmZlcjtcbiAgICAgIGNvbnN0IGZyYW1lcyA9IGF1ZGlvQnVmZmVyLmxlbmd0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gMjA0ODtcbiAgICAgIGNvbnN0IGxlbmd0aENlaWxlZCA9IE1hdGguY2VpbCggZnJhbWVzIC8gMjA0OC4wICk7XG4gICAgICBjb25zdCBoZWlnaHQgPSBsZW5ndGhDZWlsZWQ7XG5cbiAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoIHdpZHRoICogaGVpZ2h0ICogNCApO1xuICAgICAgY29uc3QgY2hhbm5lbHMgPSBhdWRpb0J1ZmZlci5udW1iZXJPZkNoYW5uZWxzO1xuXG4gICAgICBjb25zdCBkYXRhTCA9IGF1ZGlvQnVmZmVyLmdldENoYW5uZWxEYXRhKCAwICk7XG4gICAgICBjb25zdCBkYXRhUiA9IGF1ZGlvQnVmZmVyLmdldENoYW5uZWxEYXRhKCBjaGFubmVscyA9PT0gMSA/IDAgOiAxICk7XG5cbiAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGZyYW1lczsgaSArKyApIHtcbiAgICAgICAgYnVmZmVyWyBpICogNCArIDAgXSA9IGRhdGFMWyBpIF07XG4gICAgICAgIGJ1ZmZlclsgaSAqIDQgKyAxIF0gPSBkYXRhUlsgaSBdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBnbENhdCA9IHRoaXMuX19nbENhdDtcbiAgICAgIGNvbnN0IHsgZ2wgfSA9IGdsQ2F0O1xuICAgICAgY29uc3QgdGV4dHVyZSA9IHRoaXMuX19nbENhdC5jcmVhdGVUZXh0dXJlKCkhO1xuICAgICAgdGV4dHVyZS5zZXRUZXh0dXJlRnJvbUFycmF5KFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICBidWZmZXIsXG4gICAgICAgIHtcbiAgICAgICAgICBpbnRlcm5hbGZvcm1hdDogZ2wuUkdCQTMyRixcbiAgICAgICAgICBmb3JtYXQ6IGdsLlJHQkEsXG4gICAgICAgICAgdHlwZTogZ2wuRkxPQVQsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0ZXh0dXJlLnRleHR1cmVGaWx0ZXIoIGdsLk5FQVJFU1QgKTtcblxuICAgICAgdGhpcy5fX3NhbXBsZXMuc2V0KFxuICAgICAgICBuYW1lLFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICB0ZXh0dXJlLFxuICAgICAgICAgIHNhbXBsZVJhdGUsXG4gICAgICAgICAgZHVyYXRpb25cbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgaWYgKCB0aGlzLl9fcHJvZ3JhbSAmJiB0aGlzLl9fcHJvZ3JhbS5jb2RlLnNlYXJjaCggJ3NhbXBsZV8nICsgbmFtZSApICkge1xuICAgICAgICB0aGlzLl9fcHJvZ3JhbS5yZXF1aXJlZFNhbXBsZXMuYWRkKCBuYW1lICk7XG4gICAgICB9XG5cbiAgICAgIGlmICggdGhpcy5fX3Byb2dyYW1DdWUgJiYgdGhpcy5fX3Byb2dyYW1DdWUuY29kZS5zZWFyY2goICdzYW1wbGVfJyArIG5hbWUgKSApIHtcbiAgICAgICAgdGhpcy5fX3Byb2dyYW1DdWUucmVxdWlyZWRTYW1wbGVzLmFkZCggbmFtZSApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9fZW1pdCggJ2xvYWRTYW1wbGUnLCB7IG5hbWUsIGR1cmF0aW9uLCBzYW1wbGVSYXRlIH0gKTtcbiAgICB9ICk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgc2FtcGxlLlxuICAgKi9cbiAgcHVibGljIGRlbGV0ZVNhbXBsZSggbmFtZTogc3RyaW5nICk6IHZvaWQge1xuICAgIGlmICggdGhpcy5fX3NhbXBsZXMuaGFzKCBuYW1lICkgKSB7XG4gICAgICB0aGlzLl9fc2FtcGxlcy5kZWxldGUoIG5hbWUgKTtcbiAgICAgIHRoaXMuX19lbWl0KCAnZGVsZXRlU2FtcGxlJywgeyBuYW1lIH0gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9faGFuZGxlUHJvY2VzcyggZXZlbnQ6IEF1ZGlvUHJvY2Vzc2luZ0V2ZW50ICk6IHZvaWQge1xuICAgIGxldCB0aW1lID0gdGhpcy50aW1lO1xuICAgIGlmICggIXRoaXMuaG9zdERlY2sgKSB7XG4gICAgICB0aW1lICs9IHRoaXMuX19idWZmZXJTaXplIC8gdGhpcy5fX2F1ZGlvLnNhbXBsZVJhdGU7XG4gICAgICBpZiAoIHRoaXMudGltZUVycm9yVGhyZXNob2xkIDwgTWF0aC5hYnMoIHRpbWUgLSBldmVudC5wbGF5YmFja1RpbWUgKSApIHtcbiAgICAgICAgdGltZSA9IGV2ZW50LnBsYXliYWNrVGltZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fX3RpbWUgPSB0aW1lO1xuXG4gICAgY29uc3QgYmVhdE1hbmFnZXJVcGRhdGVFdmVudCA9IHRoaXMuYmVhdE1hbmFnZXIudXBkYXRlKCB0aW1lICk7XG5cbiAgICBjb25zdCB7IGJwbSwgYmFyIH0gPSBiZWF0TWFuYWdlclVwZGF0ZUV2ZW50O1xuICAgIGNvbnN0IGJhclNlY29uZHMgPSBCZWF0TWFuYWdlci5DYWxjQmFyU2Vjb25kcyggYnBtICk7XG5cbiAgICBjb25zdCBvdXRMID0gZXZlbnQub3V0cHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKCAwICk7XG4gICAgY29uc3Qgb3V0UiA9IGV2ZW50Lm91dHB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YSggMSApO1xuXG4gICAgLy8gc2hvdWxkIEkgcHJvY2VzcyB0aGUgbmV4dCBwcm9ncmFtP1xuICAgIGNvbnN0IHsgc2FtcGxlUmF0ZSwgX19idWZmZXJTaXplOiBidWZmZXJTaXplIH0gPSB0aGlzO1xuICAgIGNvbnN0IGJlZ2luTmV4dCA9IHRoaXMuX19jdWVTdGF0dXMgPT09ICdhcHBseWluZydcbiAgICAgID8gTWF0aC5taW4oIGJ1ZmZlclNpemUsIE1hdGguZmxvb3IoICggYmFyU2Vjb25kcyAtIGJhciApICogc2FtcGxlUmF0ZSApIClcbiAgICAgIDogYnVmZmVyU2l6ZTtcblxuICAgIGlmICggdGhpcy5fX2NodW5rSGVhZCA9PT0gMCApIHtcbiAgICAgIHRoaXMuX19wcmVwYXJlQnVmZmVyKCBiZWF0TWFuYWdlclVwZGF0ZUV2ZW50ICk7XG4gICAgfVxuXG4gICAgLy8gaW5zZXJ0IGludG8gaXRzIGF1ZGlvIGJ1ZmZlclxuICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGJlZ2luTmV4dDsgaSArKyApIHtcbiAgICAgIGNvbnN0IGNodW5rSW5kZXggPSB0aGlzLl9fY2h1bmtIZWFkICogdGhpcy5fX2J1ZmZlclNpemUgKiAyO1xuXG4gICAgICBvdXRMWyBpIF0gPSB0aGlzLl9fcGl4ZWxCdWZmZXJbIGNodW5rSW5kZXggKyBpICogMiArIDAgXTtcbiAgICAgIG91dFJbIGkgXSA9IHRoaXMuX19waXhlbEJ1ZmZlclsgY2h1bmtJbmRleCArIGkgKiAyICsgMSBdO1xuICAgIH1cblxuICAgIC8vIHByb2Nlc3MgdGhlIG5leHQgcHJvZ3JhbT8/XG4gICAgaWYgKCBiZWdpbk5leHQgIT09IGJ1ZmZlclNpemUgKSB7XG4gICAgICB0aGlzLl9fc2V0Q3VlU3RhdHVzKCAnbm9uZScgKTtcblxuICAgICAgaWYgKCB0aGlzLl9fcHJvZ3JhbUN1ZSApIHtcbiAgICAgICAgY29uc3QgcHJldlByb2dyYW0gPSB0aGlzLl9fcHJvZ3JhbTtcbiAgICAgICAgdGhpcy5fX3Byb2dyYW0gPSB0aGlzLl9fcHJvZ3JhbUN1ZTtcblxuICAgICAgICBpZiAoIHByZXZQcm9ncmFtICkge1xuICAgICAgICAgIHByZXZQcm9ncmFtLnByb2dyYW0uZGlzcG9zZSggdHJ1ZSApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19wcm9ncmFtQ3VlID0gbnVsbDtcblxuICAgICAgICAvLyByZW5kZXJcbiAgICAgICAgdGhpcy5fX3ByZXBhcmVCdWZmZXIoIGJlYXRNYW5hZ2VyVXBkYXRlRXZlbnQgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX2NodW5rSGVhZCA9IDA7XG5cbiAgICAgIC8vIGluc2VydCBpbnRvIGl0cyBhdWRpbyBidWZmZXJcbiAgICAgIGZvciAoIGxldCBpID0gYmVnaW5OZXh0OyBpIDwgYnVmZmVyU2l6ZTsgaSArKyApIHtcbiAgICAgICAgb3V0TFsgaSBdID0gdGhpcy5fX3BpeGVsQnVmZmVyWyBpICogMiArIDAgXTtcbiAgICAgICAgb3V0UlsgaSBdID0gdGhpcy5fX3BpeGVsQnVmZmVyWyBpICogMiArIDEgXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fY2h1bmtIZWFkID0gKCB0aGlzLl9fY2h1bmtIZWFkICsgMSApICUgdGhpcy5fX2NodW5rU2l6ZTtcblxuICAgIC8vIGVtaXQgYW4gZXZlbnRcbiAgICB0aGlzLl9fZW1pdCggJ3Byb2Nlc3MnICk7XG4gIH1cblxuICBwcml2YXRlIF9fcHJlcGFyZUJ1ZmZlciggZXZlbnQ6IEJlYXRNYW5hZ2VyVXBkYXRlRXZlbnQgKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgdGltZSxcbiAgICAgIGJlYXQsXG4gICAgICBiYXIsXG4gICAgICBzaXh0ZWVuQmFyLFxuICAgICAgYnBtXG4gICAgfSA9IGV2ZW50O1xuICAgIGNvbnN0IGJlYXRTZWNvbmRzID0gQmVhdE1hbmFnZXIuQ2FsY0JlYXRTZWNvbmRzKCBicG0gKTtcbiAgICBjb25zdCBiYXJTZWNvbmRzID0gQmVhdE1hbmFnZXIuQ2FsY0JhclNlY29uZHMoIGJwbSApO1xuICAgIGNvbnN0IHNpeHRlZW5CYXJTZWNvbmRzID0gQmVhdE1hbmFnZXIuQ2FsY1NpeHRlZW5CYXJTZWNvbmRzKCBicG0gKTtcbiAgICBjb25zdCB7IHNhbXBsZVJhdGUsIF9fYnVmZmVyU2l6ZTogYnVmZmVyU2l6ZSwgX19jaHVua1NpemU6IGNodW5rU2l6ZSB9ID0gdGhpcztcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLl9fZ2xDYXQ7XG5cbiAgICAvLyByZW5kZXJcbiAgICBpZiAoIHRoaXMuX19wcm9ncmFtICkge1xuICAgICAgdGhpcy5zYW1wbGVzLmZvckVhY2goICggc2FtcGxlICkgPT4ge1xuICAgICAgICB0aGlzLl9fcHJvZ3JhbSEucHJvZ3JhbS51bmlmb3JtVGV4dHVyZSggJ3NhbXBsZV8nICsgc2FtcGxlLm5hbWUsIHNhbXBsZS50ZXh0dXJlICk7XG4gICAgICAgIHRoaXMuX19wcm9ncmFtIS5wcm9ncmFtLnVuaWZvcm00ZihcbiAgICAgICAgICAnc2FtcGxlXycgKyBzYW1wbGUubmFtZSArICdfbWV0YScsXG4gICAgICAgICAgc2FtcGxlLnRleHR1cmUud2lkdGgsXG4gICAgICAgICAgc2FtcGxlLnRleHR1cmUuaGVpZ2h0LFxuICAgICAgICAgIHNhbXBsZS5zYW1wbGVSYXRlLFxuICAgICAgICAgIHNhbXBsZS5kdXJhdGlvblxuICAgICAgICApO1xuICAgICAgfSApO1xuXG4gICAgICB0aGlzLl9fcHJvZ3JhbS5wcm9ncmFtLmF0dHJpYnV0ZSggJ3AnLCB0aGlzLl9fYnVmZmVyUXVhZCwgMiApO1xuICAgICAgdGhpcy5fX3Byb2dyYW0ucHJvZ3JhbS51bmlmb3JtMWYoICdicG0nLCB0aGlzLmJwbSApO1xuICAgICAgdGhpcy5fX3Byb2dyYW0ucHJvZ3JhbS51bmlmb3JtMWYoICdfZGVsdGFTYW1wbGUnLCAxLjAgLyBzYW1wbGVSYXRlICk7XG4gICAgICB0aGlzLl9fcHJvZ3JhbS5wcm9ncmFtLnVuaWZvcm0xZiggJ19kZWx0YUNodW5rJywgdGhpcy5fX2J1ZmZlclNpemUgLyBzYW1wbGVSYXRlICk7XG4gICAgICB0aGlzLl9fcHJvZ3JhbS5wcm9ncmFtLnVuaWZvcm00ZihcbiAgICAgICAgJ3RpbWVMZW5ndGgnLFxuICAgICAgICBiZWF0U2Vjb25kcyxcbiAgICAgICAgYmFyU2Vjb25kcyxcbiAgICAgICAgc2l4dGVlbkJhclNlY29uZHMsXG4gICAgICAgIDFFMTZcbiAgICAgICk7XG4gICAgICB0aGlzLl9fcHJvZ3JhbS5wcm9ncmFtLnVuaWZvcm00ZihcbiAgICAgICAgJ190aW1lSGVhZCcsXG4gICAgICAgIGJlYXQsXG4gICAgICAgIGJhcixcbiAgICAgICAgc2l4dGVlbkJhcixcbiAgICAgICAgdGltZVxuICAgICAgKTtcblxuICAgICAgdGhpcy5fX2dsQ2F0LnVzZVByb2dyYW0oIHRoaXMuX19wcm9ncmFtLnByb2dyYW0sICgpID0+IHtcbiAgICAgICAgdGhpcy5fX2dsQ2F0LmJpbmRGcmFtZWJ1ZmZlciggdGhpcy5fX2ZyYW1lYnVmZmVyLCAoKSA9PiB7XG4gICAgICAgICAgZ2wudmlld3BvcnQoIDAsIDAsIHRoaXMuX19idWZmZXJTaXplIC8gMiwgdGhpcy5fX2NodW5rU2l6ZSApO1xuICAgICAgICAgIGdsLmJsZW5kRnVuYyggdGhpcy5fX2dsQ2F0LmdsLk9ORSwgdGhpcy5fX2dsQ2F0LmdsLlpFUk8gKTtcblxuICAgICAgICAgIGdsLmRyYXdBcnJheXMoIGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0ICk7XG4gICAgICAgIH0gKTtcbiAgICAgIH0gKTtcblxuICAgICAgLy8gcmVhZCBwaXhlbHNcbiAgICAgIGdsLmZsdXNoKCk7XG5cbiAgICAgIHRoaXMuX19nbENhdC5iaW5kRnJhbWVidWZmZXIoIHRoaXMuX19mcmFtZWJ1ZmZlciwgKCkgPT4ge1xuICAgICAgICBnbC5yZWFkQnVmZmVyKCB0aGlzLl9fZ2xDYXQuZ2wuQ09MT1JfQVRUQUNITUVOVDAgKTtcbiAgICAgICAgZ2wucmVhZFBpeGVscyhcbiAgICAgICAgICAwLCAvLyB4XG4gICAgICAgICAgMCwgLy8geVxuICAgICAgICAgIGJ1ZmZlclNpemUgLyAyLCAvLyB3aWR0aFxuICAgICAgICAgIGNodW5rU2l6ZSwgLy8gaGVpZ2h0XG4gICAgICAgICAgdGhpcy5fX2dsQ2F0LmdsLlJHQkEsIC8vIGZvcm1hdFxuICAgICAgICAgIHRoaXMuX19nbENhdC5nbC5GTE9BVCwgLy8gdHlwZVxuICAgICAgICAgIHRoaXMuX19waXhlbEJ1ZmZlciAvLyBkc3RcbiAgICAgICAgKTtcbiAgICAgIH0gKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9fc2V0Q3VlU3RhdHVzKCBjdWVTdGF0dXM6ICdub25lJyB8ICdjb21waWxpbmcnIHwgJ3JlYWR5JyB8ICdhcHBseWluZycgKTogdm9pZCB7XG4gICAgdGhpcy5fX2N1ZVN0YXR1cyA9IGN1ZVN0YXR1cztcbiAgICB0aGlzLl9fZW1pdCggJ2NoYW5nZUN1ZVN0YXR1cycsIHsgY3VlU3RhdHVzIH0gKTtcbiAgfVxuXG4gIHByaXZhdGUgX19wcm9jZXNzRXJyb3JNZXNzYWdlKCBlcnJvcjogYW55ICk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IHN0cjogc3RyaW5nIHwgdW5kZWZpbmVkID0gZXJyb3I/Lm1lc3NhZ2UgPz8gZXJyb3I7XG4gICAgaWYgKCAhc3RyICkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvRVJST1I6IChcXGQrKTooXFxkKykvZywgKCBtYXRjaCwgLi4uYXJncyApID0+IHtcbiAgICAgIGNvbnN0IGxpbmUgPSBwYXJzZUludCggYXJnc1sgMSBdICkgLSBzaGFkZXJjaHVua1ByZUxpbmVzICsgMTtcbiAgICAgIHJldHVybiBgRVJST1I6ICR7IGFyZ3NbIDAgXSB9OiR7IGxpbmUgfWA7XG4gICAgfSApO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2F2ZW5lcmREZWNrIGV4dGVuZHMgRXZlbnRFbWl0dGFibGU8e1xuICBwcm9jZXNzOiB2b2lkO1xuICBjaGFuZ2VDdWVTdGF0dXM6IHsgY3VlU3RhdHVzOiAnbm9uZScgfCAnY29tcGlsaW5nJyB8ICdyZWFkeScgfCAnYXBwbHlpbmcnIH07XG4gIGxvYWRTYW1wbGU6IHsgbmFtZTogc3RyaW5nOyBzYW1wbGVSYXRlOiBudW1iZXI7IGR1cmF0aW9uOiBudW1iZXIgfVxuICBkZWxldGVTYW1wbGU6IHsgbmFtZTogc3RyaW5nIH07XG4gIGNoYW5nZUJQTTogeyBicG06IG51bWJlciB9O1xuICBlcnJvcjogeyBlcnJvcjogc3RyaW5nIHwgbnVsbCB9O1xufT4ge31cbmFwcGx5TWl4aW5zKCBXYXZlbmVyZERlY2ssIFsgRXZlbnRFbWl0dGFibGUgXSApO1xuIiwiZXhwb3J0IHsgV2F2ZW5lcmREZWNrIH0gZnJvbSAnLi9XYXZlbmVyZERlY2snO1xuZXhwb3J0IHsgQmVhdE1hbmFnZXIgfSBmcm9tICcuL0JlYXRNYW5hZ2VyJztcblxuaW1wb3J0IHsgV2F2ZW5lcmREZWNrIH0gZnJvbSAnLi9XYXZlbmVyZERlY2snO1xuZXhwb3J0IGRlZmF1bHQgV2F2ZW5lcmREZWNrO1xuIiwiZXhwb3J0IGNvbnN0IHNoYWRlcmNodW5rUHJlID0gYCN2ZXJzaW9uIDMwMCBlc1xuXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XG5cbiNkZWZpbmUgX1BJIDMuMTQxNTkyNjUzNTlcblxudW5pZm9ybSBmbG9hdCBicG07XG51bmlmb3JtIHZlYzQgdGltZUxlbmd0aDtcbnVuaWZvcm0gZmxvYXQgc2FtcGxlUmF0ZTtcbnVuaWZvcm0gZmxvYXQgX2RlbHRhU2FtcGxlO1xudW5pZm9ybSBmbG9hdCBfZGVsdGFDaHVuaztcbnVuaWZvcm0gdmVjNCBfdGltZUhlYWQ7XG5cbm91dCB2ZWM0IGZyYWdDb2xvcjtcblxudmVjMiBzYW1wbGVOZWFyZXN0KCBzYW1wbGVyMkQgcywgdmVjNCBtZXRhLCBmbG9hdCB0aW1lICkge1xuICBpZiAoIG1ldGEudyA8IHRpbWUgKSB7IHJldHVybiB2ZWMyKCAwLjAgKTsgfVxuICBmbG9hdCB4ID0gdGltZSAvIG1ldGEueCAqIG1ldGEuejtcbiAgdmVjMiB1diA9IGZyYWN0KCB2ZWMyKFxuICAgIHgsXG4gICAgZmxvb3IoIHggKSAvIG1ldGEueVxuICApICkgKyAwLjUgLyBtZXRhLnh5O1xuICByZXR1cm4gdGV4dHVyZSggcywgdXYgKS54eTtcbn1cblxuLy8gSSBoYXZlIDAlIGNvbmZpZGVuY2UgdGhhdCB0aGUgYWxnb3JpdGhtIGlzIHBlcmZlY3RcbnZlYzIgc2FtcGxlU2luYyggc2FtcGxlcjJEIHMsIHZlYzQgbWV0YSwgZmxvYXQgdGltZSApIHtcbiAgaWYgKCBtZXRhLncgPCB0aW1lICkgeyByZXR1cm4gdmVjMiggMC4wICk7IH1cbiAgdmVjMiBzdW0gPSB2ZWMyKCAwLjAgKTtcbiAgZmxvYXQgZGVmID0gMC41IC0gZnJhY3QoIHRpbWUgKiBtZXRhLnogKTtcbiAgZm9yICggaW50IGkgPSAtNTsgaSA8PSA1OyBpICsrICkge1xuICAgIGZsb2F0IHggPSBmbG9vciggdGltZSAqIG1ldGEueiArIGZsb2F0KCBpICkgKSAvIG1ldGEueDtcbiAgICBmbG9hdCBkZWZ0ID0gZGVmICsgZmxvYXQoIGkgKTtcbiAgICB2ZWMyIHV2ID0gZnJhY3QoIHZlYzIoXG4gICAgICB4LFxuICAgICAgZmxvb3IoIHggKSAvIG1ldGEueVxuICAgICkgKSArIDAuNSAvIG1ldGEueHk7XG4gICAgc3VtICs9IHRleHR1cmUoIHMsIHV2ICkueHkgKiBtaW4oIHNpbiggZGVmdCAqIF9QSSApIC8gZGVmdCAvIF9QSSwgMS4wICk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn1cbmA7XG5cbmV4cG9ydCBjb25zdCBzaGFkZXJjaHVua1ByZUxpbmVzID0gc2hhZGVyY2h1bmtQcmUuc3BsaXQoICdcXG4nICkubGVuZ3RoO1xuXG5leHBvcnQgY29uc3Qgc2hhZGVyY2h1bmtQb3N0ID0gYHZvaWQgbWFpbigpIHtcbiAgZmxvYXQgb2ZmID0gZmxvb3IoIGdsX0ZyYWdDb29yZC54ICkgKiAyLjA7XG4gIHZlYzQgaGVhZCA9IF90aW1lSGVhZCArIF9kZWx0YUNodW5rICogZmxvb3IoIGdsX0ZyYWdDb29yZC55ICk7XG4gIGZyYWdDb2xvciA9IHZlYzQoXG4gICAgbWFpbkF1ZGlvKCBtb2QoIGhlYWQgKyAoIG9mZiApICogX2RlbHRhU2FtcGxlLCB0aW1lTGVuZ3RoICkgKSxcbiAgICBtYWluQXVkaW8oIG1vZCggaGVhZCArICggb2ZmICsgMS4wICkgKiBfZGVsdGFTYW1wbGUsIHRpbWVMZW5ndGggKSApXG4gICk7XG59YDtcbiIsIi8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FuZHl3ZXIvdHlwZWQtZW1pdHRlci9ibG9iL21hc3Rlci9pbmRleC5kLnRzXG5cbmV4cG9ydCB0eXBlIEV2ZW50TGlzdGVuZXI8VD4gPSAoIGV2ZW50OiBUICkgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIEV2ZW50RW1pdHRhYmxlPFRFdmVudHMgZXh0ZW5kcyB7IFsgdHlwZTogc3RyaW5nIF06IGFueSB9PiB7XG4gIHByb3RlY3RlZCBfX2V2ZW50TGlzdGVuZXJzPzogTWFwPGtleW9mIFRFdmVudHMsIEV2ZW50TGlzdGVuZXI8YW55PltdPjtcblxuICBwdWJsaWMgb248VFR5cGUgZXh0ZW5kcyBrZXlvZiBURXZlbnRzICYgc3RyaW5nPihcbiAgICB0eXBlOiBUVHlwZSxcbiAgICBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcjxURXZlbnRzWyBUVHlwZSBdPlxuICApOiBFdmVudExpc3RlbmVyPFRFdmVudHNbIFRUeXBlIF0+IHtcbiAgICB0aGlzLl9fZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLl9fZXZlbnRMaXN0ZW5lcnMgfHwgbmV3IE1hcCgpO1xuICAgIGxldCBhcnJheSA9IHRoaXMuX19ldmVudExpc3RlbmVycy5nZXQoIHR5cGUgKTtcbiAgICBpZiAoICFhcnJheSApIHtcbiAgICAgIGFycmF5ID0gW107XG4gICAgICB0aGlzLl9fZXZlbnRMaXN0ZW5lcnMuc2V0KCB0eXBlLCBhcnJheSApO1xuICAgIH1cblxuICAgIGFycmF5LnB1c2goIGxpc3RlbmVyICk7XG5cbiAgICByZXR1cm4gbGlzdGVuZXI7XG4gIH1cblxuICBwdWJsaWMgb2ZmPFRUeXBlIGV4dGVuZHMga2V5b2YgVEV2ZW50cyAmIHN0cmluZz4oXG4gICAgdHlwZTogVFR5cGUsXG4gICAgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXI8VEV2ZW50c1sgVFR5cGUgXT5cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5fX2V2ZW50TGlzdGVuZXJzID0gdGhpcy5fX2V2ZW50TGlzdGVuZXJzIHx8IG5ldyBNYXAoKTtcbiAgICBsZXQgYXJyYXkgPSB0aGlzLl9fZXZlbnRMaXN0ZW5lcnMuZ2V0KCB0eXBlICk7XG4gICAgaWYgKCAhYXJyYXkgKSB7XG4gICAgICBhcnJheSA9IFtdO1xuICAgICAgdGhpcy5fX2V2ZW50TGlzdGVuZXJzLnNldCggdHlwZSwgYXJyYXkgKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoIGxpc3RlbmVyICk7XG4gICAgaWYgKCBpbmRleCAhPT0gLTEgKSB7XG4gICAgICBhcnJheS5zcGxpY2UoIGluZGV4LCAxICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9fZW1pdDxUVHlwZSBleHRlbmRzIGtleW9mIFRFdmVudHM+KFxuICAgIC4uLlsgdHlwZSwgZXZlbnQgXTogVEV2ZW50c1sgVFR5cGUgXSBleHRlbmRzIHZvaWQgPyBbIFRUeXBlIF0gOiBbIFRUeXBlLCBURXZlbnRzWyBUVHlwZSBdIF1cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5fX2V2ZW50TGlzdGVuZXJzID0gdGhpcy5fX2V2ZW50TGlzdGVuZXJzIHx8IG5ldyBNYXAoKTtcbiAgICB0aGlzLl9fZXZlbnRMaXN0ZW5lcnMuZ2V0KCB0eXBlICk/LmZvckVhY2goICggbGlzdGVuZXIgKSA9PiBsaXN0ZW5lciggZXZlbnQgKSApO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYXBwbHlNaXhpbnMoIGRlcml2ZWRDdG9yOiBhbnksIGJhc2VDdG9yczogYW55W10gKTogdm9pZCB7XG4gIGJhc2VDdG9ycy5mb3JFYWNoKCAoIGJhc2VDdG9yICkgPT4ge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCBiYXNlQ3Rvci5wcm90b3R5cGUgKS5mb3JFYWNoKCAoIG5hbWUgKSA9PiB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgIGRlcml2ZWRDdG9yLnByb3RvdHlwZSxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggYmFzZUN0b3IucHJvdG90eXBlLCBuYW1lICkhXG4gICAgICApO1xuICAgIH0gKTtcbiAgfSApO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1vZCggdmFsdWU6IG51bWJlciwgZGl2aXNvcjogbnVtYmVyICk6IG51bWJlciB7XG4gIHJldHVybiB2YWx1ZSAtIE1hdGguZmxvb3IoIHZhbHVlIC8gZGl2aXNvciApICogZGl2aXNvcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=