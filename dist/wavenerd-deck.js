/*!
 * @fms-cat/wavenerd-deck v0.3.1
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
        glCat.getExtension('EXT_color_buffer_float');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dBVkVORVJEX0RFQ0svLi9zcmMvQmVhdE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vV0FWRU5FUkRfREVDSy8uL3NyYy9XYXZlbmVyZERlY2sudHMiLCJ3ZWJwYWNrOi8vV0FWRU5FUkRfREVDSy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLLy4vc3JjL3NoYWRlcmNodW5rcy50cyIsIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLLy4vc3JjL3V0aWxzL0V2ZW50RW1pdHRhYmxlLnRzIiwid2VicGFjazovL1dBVkVORVJEX0RFQ0svLi9zcmMvdXRpbHMvYXBwbHlNaXhpbnMudHMiLCJ3ZWJwYWNrOi8vV0FWRU5FUkRfREVDSy8uL3NyYy91dGlscy9tb2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVB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LFdBQVcsQ0FBRSxXQUFnQixFQUFFLFNBQWdCO0lBQzdELFNBQVMsQ0FBQyxPQUFPLENBQUUsVUFBRSxRQUFRO1FBQzNCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBRSxRQUFRLENBQUMsU0FBUyxDQUFFLENBQUMsT0FBTyxDQUFFLFVBQUUsSUFBSTtZQUM5RCxNQUFNLENBQUMsY0FBYyxDQUNuQixXQUFXLENBQUMsU0FBUyxFQUNyQixJQUFJLEVBQ0osTUFBTSxDQUFDLHdCQUF3QixDQUFFLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFHLENBQzdELENBQUM7UUFDSixDQUFDLENBQUUsQ0FBQztJQUNOLENBQUMsQ0FBRSxDQUFDO0FBQ04sQ0FBQztBQVZELGtDQVVDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkQsU0FBZ0IsR0FBRyxDQUFFLEtBQWEsRUFBRSxPQUFlO0lBQ2pELE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBRSxHQUFHLE9BQU8sQ0FBQztBQUN6RCxDQUFDO0FBRkQsa0JBRUMiLCJmaWxlIjoid2F2ZW5lcmQtZGVjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIldBVkVORVJEX0RFQ0tcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiV0FWRU5FUkRfREVDS1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGFibGUgfSBmcm9tICcuL3V0aWxzL0V2ZW50RW1pdHRhYmxlJztcbmltcG9ydCB7IGFwcGx5TWl4aW5zIH0gZnJvbSAnLi91dGlscy9hcHBseU1peGlucyc7XG5pbXBvcnQgeyBtb2QgfSBmcm9tICcuL3V0aWxzL21vZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmVhdE1hbmFnZXJVcGRhdGVFdmVudCB7XG4gIHRpbWU6IG51bWJlcjtcbiAgZGVsdGFUaW1lOiBudW1iZXI7XG4gIGJwbTogbnVtYmVyO1xuICBiZWF0OiBudW1iZXI7XG4gIGJhcjogbnVtYmVyO1xuICBzaXh0ZWVuQmFyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBCZWF0TWFuYWdlciB7XG4gIHB1YmxpYyBfX2JwbTogbnVtYmVyID0gMTQwLjA7XG4gIHB1YmxpYyBnZXQgYnBtKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX19icG07XG4gIH1cbiAgcHVibGljIHNldCBicG0oIHZhbHVlOiBudW1iZXIgKSB7XG4gICAgY29uc3QgcHJldkJwbSA9IHRoaXMuX19icG07XG4gICAgdGhpcy5fX2JwbSA9IE1hdGgubWF4KCAwLjAsIHZhbHVlICk7XG4gICAgdGhpcy5fX3NpeHRlZW5CYXIgPSB0aGlzLl9fc2l4dGVlbkJhciAqIHByZXZCcG0gLyB0aGlzLl9fYnBtO1xuICAgIHRoaXMuX19lbWl0KCAnY2hhbmdlQlBNJywgeyBicG06IHRoaXMuX19icG0gfSApO1xuICB9XG5cbiAgcHJpdmF0ZSBfX3RpbWUgPSAwLjA7XG4gIHByaXZhdGUgX19zaXh0ZWVuQmFyID0gMC4wO1xuXG4gIHB1YmxpYyBzdGF0aWMgQ2FsY0JlYXRTZWNvbmRzKCBicG06IG51bWJlciApOiBudW1iZXIge1xuICAgIHJldHVybiA2MC4wIC8gYnBtO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBDYWxjQmFyU2Vjb25kcyggYnBtOiBudW1iZXIgKTogbnVtYmVyIHtcbiAgICAvLyByZXR1cm4gdGhpcy5iZWF0TGVuZ3RoICogNC4wO1xuICAgIHJldHVybiAyNDAuMCAvIGJwbTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgQ2FsY1NpeHRlZW5CYXJTZWNvbmRzKCBicG06IG51bWJlciApOiBudW1iZXIge1xuICAgIC8vIHJldHVybiB0aGlzLmJhckxlbmd0aCAqIDE2LjA7XG4gICAgcmV0dXJuIDM4NDAuMCAvIGJwbTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLl9fdGltZSA9IDAuMDtcbiAgICB0aGlzLl9fc2l4dGVlbkJhciA9IDAuMDtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoIHRpbWU6IG51bWJlciApOiBCZWF0TWFuYWdlclVwZGF0ZUV2ZW50IHtcbiAgICBjb25zdCBiZWF0U2Vjb25kcyA9IEJlYXRNYW5hZ2VyLkNhbGNCZWF0U2Vjb25kcyggdGhpcy5fX2JwbSApO1xuICAgIGNvbnN0IGJhclNlY29uZHMgPSBCZWF0TWFuYWdlci5DYWxjQmFyU2Vjb25kcyggdGhpcy5fX2JwbSApO1xuICAgIGNvbnN0IHNpeHRlZW5CYXJTZWNvbmRzID0gQmVhdE1hbmFnZXIuQ2FsY1NpeHRlZW5CYXJTZWNvbmRzKCB0aGlzLl9fYnBtICk7XG5cbiAgICBjb25zdCBkZWx0YVRpbWUgPSB0aW1lIC0gdGhpcy5fX3RpbWU7XG5cbiAgICB0aGlzLl9fc2l4dGVlbkJhciA9IG1vZCggdGhpcy5fX3NpeHRlZW5CYXIgKyBkZWx0YVRpbWUsIHNpeHRlZW5CYXJTZWNvbmRzICk7XG5cbiAgICBjb25zdCBzaXh0ZWVuQmFyID0gdGhpcy5fX3NpeHRlZW5CYXI7XG4gICAgY29uc3QgYmFyID0gbW9kKCBzaXh0ZWVuQmFyLCBiYXJTZWNvbmRzICk7XG4gICAgY29uc3QgYmVhdCA9IG1vZCggYmFyLCBiZWF0U2Vjb25kcyApO1xuXG4gICAgdGhpcy5fX3RpbWUgPSB0aW1lO1xuXG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0aW1lLFxuICAgICAgZGVsdGFUaW1lLFxuICAgICAgYnBtOiB0aGlzLl9fYnBtLFxuICAgICAgYmVhdCxcbiAgICAgIGJhcixcbiAgICAgIHNpeHRlZW5CYXJcbiAgICB9O1xuXG4gICAgdGhpcy5fX2VtaXQoICd1cGRhdGUnLCBldmVudCApO1xuXG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmVhdE1hbmFnZXIgZXh0ZW5kcyBFdmVudEVtaXR0YWJsZTx7XG4gIHVwZGF0ZTogQmVhdE1hbmFnZXJVcGRhdGVFdmVudDtcbiAgY2hhbmdlQlBNOiB7IGJwbTogbnVtYmVyIH07XG59PiB7fVxuYXBwbHlNaXhpbnMoIEJlYXRNYW5hZ2VyLCBbIEV2ZW50RW1pdHRhYmxlIF0gKTtcbiIsImltcG9ydCB7IEJlYXRNYW5hZ2VyLCBCZWF0TWFuYWdlclVwZGF0ZUV2ZW50IH0gZnJvbSAnLi9CZWF0TWFuYWdlcic7XG5pbXBvcnQgdHlwZSB7IEdMQ2F0LCBHTENhdEJ1ZmZlciwgR0xDYXRGcmFtZWJ1ZmZlciwgR0xDYXRQcm9ncmFtLCBHTENhdFJlbmRlcmJ1ZmZlciwgR0xDYXRUZXh0dXJlIH0gZnJvbSAnQGZtcy1jYXQvZ2xjYXQtdHMnO1xuaW1wb3J0IHsgc2hhZGVyY2h1bmtQb3N0LCBzaGFkZXJjaHVua1ByZSwgc2hhZGVyY2h1bmtQcmVMaW5lcyB9IGZyb20gJy4vc2hhZGVyY2h1bmtzJztcbmltcG9ydCB7IEV2ZW50RW1pdHRhYmxlIH0gZnJvbSAnLi91dGlscy9FdmVudEVtaXR0YWJsZSc7XG5pbXBvcnQgeyBhcHBseU1peGlucyB9IGZyb20gJy4vdXRpbHMvYXBwbHlNaXhpbnMnO1xuXG5pbnRlcmZhY2UgV2F2ZW5lcmREZWNrUHJvZ3JhbSB7XG4gIHByb2dyYW06IEdMQ2F0UHJvZ3JhbTxXZWJHTDJSZW5kZXJpbmdDb250ZXh0PjtcbiAgY29kZTogc3RyaW5nO1xuICByZXF1aXJlZFNhbXBsZXM6IFNldDxzdHJpbmc+O1xufVxuXG5pbnRlcmZhY2UgV2F2ZW5lcmREZWNrU2FtcGxlRW50cnkge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRleHR1cmU6IEdMQ2F0VGV4dHVyZTxXZWJHTDJSZW5kZXJpbmdDb250ZXh0PjtcbiAgc2FtcGxlUmF0ZTogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xufVxuXG5jb25zdCB2ZXJ0UXVhZCA9IGAjdmVyc2lvbiAzMDAgZXNcbmluIHZlYzIgcDtcbnZvaWQgbWFpbigpIHtcbiAgZ2xfUG9zaXRpb24gPSB2ZWM0KCBwLCAwLjAsIDEuMCApO1xufVxuYDtcblxuZXhwb3J0IGNsYXNzIFdhdmVuZXJkRGVjayB7XG4gIC8qKlxuICAgKiBUaHJlc2hvbGQgb2YgdGltZSBlcnJvciwgaW4gc2Vjb25kcy5cbiAgICovXG4gIHB1YmxpYyB0aW1lRXJyb3JUaHJlc2hvbGQ6IG51bWJlcjtcblxuICAvKipcbiAgICogSXRzIGhvc3QgZGVjay5cbiAgICogSXQncyBoaWdobHkgcmVjb21tZW5kZWQgdG8gY29ubmVjdCB0aGUgbm9kZSBvZiB0aGUgaG9zdCBkZWNrIGludG8gdGhlIG5vZGUgb2YgdGhpcyBkZWNrLCB0byBlbnN1cmUgdGhlIHRpbWluZyBjb25zaXN0ZW5jeS5cbiAgICovXG4gIHB1YmxpYyBob3N0RGVjaz86IFdhdmVuZXJkRGVjaztcblxuICAvKipcbiAgICogSXRzIGN1cnJlbnQgY3VlIHN0YXR1cy5cbiAgICogYCdub25lJ2A6IFRoZXJlIGlzIG5vdGhpbmcgaW4gaXRzIGN1cnJlbnQgY3VlLlxuICAgKiBgJ3JlYWR5J2A6IFRoZXJlIGlzIGEgY3VlIHNoYWRlciBhbmQgaXMgcmVhZHkgdG8gYmUgYXBwbGllZC5cbiAgICogYCdhcHBseWluZydgOiBUaGVyZSBpcyBhIGN1ZSBzaGFkZXIgYW5kIGlzIGdvaW5nIHRvIGJlIGFwcGxpZWQgaW4gdGhlIG5leHQgYmFyLlxuICAgKi9cbiAgcHJpdmF0ZSBfX2N1ZVN0YXR1czogJ25vbmUnIHwgJ2NvbXBpbGluZycgfCAncmVhZHknIHwgJ2FwcGx5aW5nJyA9ICdub25lJztcbiAgcHVibGljIGdldCBjdWVTdGF0dXMoKTogJ25vbmUnIHwgJ2NvbXBpbGluZycgfCAncmVhZHknIHwgJ2FwcGx5aW5nJyB7XG4gICAgcmV0dXJuIHRoaXMuX19jdWVTdGF0dXM7XG4gIH1cblxuICAvKipcbiAgICogSXRzIGJ1ZmZlciBzaXplLlxuICAgKi9cbiAgcHJpdmF0ZSBfX2J1ZmZlclNpemU6IG51bWJlcjtcbiAgcHVibGljIGdldCBidWZmZXJTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX19idWZmZXJTaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0cyBjaHVuayBzaXplLlxuICAgKi9cbiAgcHJpdmF0ZSBfX2NodW5rU2l6ZTogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IGNodW5rU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9fY2h1bmtTaXplO1xuICB9XG5cbiAgcHJpdmF0ZSBfX2NodW5rSGVhZCA9IDA7XG5cbiAgLyoqXG4gICAqIEl0cyBjdXJyZW50IGJwbS5cbiAgICovXG4gIHB1YmxpYyBnZXQgYnBtKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuYmVhdE1hbmFnZXIuYnBtO1xuICB9XG4gIHB1YmxpYyBzZXQgYnBtKCB2YWx1ZTogbnVtYmVyICkge1xuICAgIHRoaXMuYmVhdE1hbmFnZXIuYnBtID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogSXRzIGN1cnJlbnQgdGltZS5cbiAgICovXG4gIHByaXZhdGUgX190aW1lID0gMDtcbiAgcHVibGljIGdldCB0aW1lKCk6IG51bWJlciB7XG4gICAgaWYgKCB0aGlzLmhvc3REZWNrICkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdERlY2sudGltZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fX3RpbWU7XG4gIH1cblxuICAvKipcbiAgICogSXRzIGJvdW5kIGBHTENhdGAuXG4gICAqL1xuICBwcml2YXRlIF9fZ2xDYXQ6IEdMQ2F0PFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ+O1xuICBwdWJsaWMgZ2V0IGdsQ2F0KCk6IEdMQ2F0PFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ+IHtcbiAgICByZXR1cm4gdGhpcy5fX2dsQ2F0O1xuICB9XG5cbiAgLyoqXG4gICAqIEl0cyBsYXN0IGNvbXBpbGUgZXJyb3IgaGFwcGVuZWQgaW4gW1tXYXZlbmVyZERlY2suY29tcGlsZV1dLlxuICAgKi9cbiAgcHJpdmF0ZSBfX2xhc3RFcnJvcjogYW55O1xuICBwdWJsaWMgZ2V0IGxhc3RFcnJvcigpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9fbGFzdEVycm9yO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0cyBiaW5kZWQgYEF1ZGlvQ29udGV4dGAuXG4gICAqL1xuICBwcml2YXRlIF9fYXVkaW86IEF1ZGlvQ29udGV4dDtcbiAgcHVibGljIGdldCBhdWRpbygpOiBBdWRpb0NvbnRleHQge1xuICAgIHJldHVybiB0aGlzLl9fYXVkaW87XG4gIH1cblxuICAvKipcbiAgICogSXRzIG5vZGUgb2YgdGhlIEF1ZGlvQ29udGV4dC5cbiAgICovXG4gIHByaXZhdGUgX19ub2RlOiBTY3JpcHRQcm9jZXNzb3JOb2RlO1xuICBwdWJsaWMgZ2V0IG5vZGUoKTogU2NyaXB0UHJvY2Vzc29yTm9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX19ub2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsaWFzIGZvciB0aGUgYGF1ZGlvLnNhbXBsZVJhdGVgIC5cbiAgICovXG4gIHB1YmxpYyBnZXQgc2FtcGxlUmF0ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9fYXVkaW8uc2FtcGxlUmF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgX19iZWF0TWFuYWdlcjogQmVhdE1hbmFnZXI7XG4gIHB1YmxpYyBnZXQgYmVhdE1hbmFnZXIoKTogQmVhdE1hbmFnZXIge1xuICAgIGNvbnN0IGhvc3REZWNrQmVhdE1hbmFnZXIgPSB0aGlzLmhvc3REZWNrPy5iZWF0TWFuYWdlcjtcbiAgICBpZiAoIGhvc3REZWNrQmVhdE1hbmFnZXIgKSB7XG4gICAgICByZXR1cm4gaG9zdERlY2tCZWF0TWFuYWdlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fX2JlYXRNYW5hZ2VyO1xuICB9XG5cbiAgcHJpdmF0ZSBfX2J1ZmZlclF1YWQ6IEdMQ2F0QnVmZmVyPFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ+O1xuICBwcml2YXRlIF9fcmVuZGVyYnVmZmVyOiBHTENhdFJlbmRlcmJ1ZmZlcjxXZWJHTDJSZW5kZXJpbmdDb250ZXh0PjtcbiAgcHJpdmF0ZSBfX2ZyYW1lYnVmZmVyOiBHTENhdEZyYW1lYnVmZmVyPFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ+O1xuICBwcml2YXRlIF9fcHJvZ3JhbTogV2F2ZW5lcmREZWNrUHJvZ3JhbSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9fcHJvZ3JhbUN1ZTogV2F2ZW5lcmREZWNrUHJvZ3JhbSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9fcGl4ZWxCdWZmZXI6IEZsb2F0MzJBcnJheTtcblxuICBwcml2YXRlIF9fc2FtcGxlcyA9IG5ldyBNYXA8c3RyaW5nLCBXYXZlbmVyZERlY2tTYW1wbGVFbnRyeT4oKTtcbiAgcHJpdmF0ZSBnZXQgc2FtcGxlcygpOiBNYXA8c3RyaW5nLCBXYXZlbmVyZERlY2tTYW1wbGVFbnRyeT4ge1xuICAgIGlmICggdGhpcy5ob3N0RGVjayApIHtcbiAgICAgIHJldHVybiB0aGlzLmhvc3REZWNrLnNhbXBsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX19zYW1wbGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIG9mIHRoZSBXYXZlbmVyZERlY2suXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3IoIHtcbiAgICBnbENhdCxcbiAgICBhdWRpbyxcbiAgICBob3N0RGVjayxcbiAgICBidWZmZXJTaXplLFxuICAgIGNodW5rU2l6ZSxcbiAgICBicG0sXG4gICAgdGltZUVycm9yVGhyZXNob2xkXG4gIH06IHtcbiAgICBnbENhdDogR0xDYXQ8V2ViR0wyUmVuZGVyaW5nQ29udGV4dD47XG4gICAgYXVkaW86IEF1ZGlvQ29udGV4dDtcbiAgICBob3N0RGVjaz86IFdhdmVuZXJkRGVjaztcbiAgICBidWZmZXJTaXplPzogbnVtYmVyO1xuICAgIGNodW5rU2l6ZT86IG51bWJlcjtcbiAgICBicG0/OiBudW1iZXI7XG4gICAgdGltZUVycm9yVGhyZXNob2xkPzogbnVtYmVyO1xuICB9ICkge1xuICAgIHRoaXMudGltZUVycm9yVGhyZXNob2xkID0gdGltZUVycm9yVGhyZXNob2xkID8/IDAuMDE7XG4gICAgdGhpcy5fX2J1ZmZlclNpemUgPSBidWZmZXJTaXplID8/IDIwNDg7XG4gICAgdGhpcy5fX2NodW5rU2l6ZSA9IGNodW5rU2l6ZSA/PyA2NDtcblxuICAgIC8vIC0tIGhvc3QgZGVjayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmICggaG9zdERlY2sgKSB7XG4gICAgICB0aGlzLmhvc3REZWNrID0gaG9zdERlY2s7XG4gICAgfVxuXG4gICAgLy8gLS0gYmVhdCBtYW5hZ2VyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5fX2JlYXRNYW5hZ2VyID0gbmV3IEJlYXRNYW5hZ2VyKCk7XG4gICAgdGhpcy5fX2JlYXRNYW5hZ2VyLmJwbSA9IGJwbSA/PyAxNDA7XG4gICAgdGhpcy5fX2JlYXRNYW5hZ2VyLm9uKCAnY2hhbmdlQlBNJywgKCB7IGJwbSB9ICkgPT4ge1xuICAgICAgdGhpcy5fX2NodW5rSGVhZCA9IDA7XG4gICAgICB0aGlzLl9fZW1pdCggJ2NoYW5nZUJQTScsIHsgYnBtIH0gKTtcbiAgICB9ICk7XG5cbiAgICAvLyAtLSBnbENhdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLl9fZ2xDYXQgPSBnbENhdDtcbiAgICBjb25zdCB7IGdsIH0gPSBnbENhdDtcblxuICAgIGdsQ2F0LmdldEV4dGVuc2lvbiggJ0VYVF9jb2xvcl9idWZmZXJfZmxvYXQnICk7XG5cbiAgICB0aGlzLl9fYnVmZmVyUXVhZCA9IGdsQ2F0LmNyZWF0ZUJ1ZmZlcigpITtcbiAgICB0aGlzLl9fYnVmZmVyUXVhZC5zZXRWZXJ0ZXhidWZmZXIoIG5ldyBGbG9hdDMyQXJyYXkoIFsgLTEsIC0xLCAxLCAtMSwgLTEsIDEsIDEsIDEgXSApICk7XG4gICAgdGhpcy5fX3JlbmRlcmJ1ZmZlciA9IGdsQ2F0LmNyZWF0ZVJlbmRlcmJ1ZmZlcigpITtcbiAgICB0aGlzLl9fcmVuZGVyYnVmZmVyLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoXG4gICAgICB0aGlzLl9fYnVmZmVyU2l6ZSAvIDIsXG4gICAgICB0aGlzLl9fY2h1bmtTaXplLFxuICAgICAgeyBmb3JtYXQ6IGdsLlJHQkEzMkYgfVxuICAgICk7XG4gICAgdGhpcy5fX2ZyYW1lYnVmZmVyID0gZ2xDYXQuY3JlYXRlRnJhbWVidWZmZXIoKSE7XG4gICAgdGhpcy5fX2ZyYW1lYnVmZmVyLmF0dGFjaFJlbmRlcmJ1ZmZlcihcbiAgICAgIHRoaXMuX19yZW5kZXJidWZmZXIsXG4gICAgICB7IGF0dGFjaG1lbnQ6IGdsLkNPTE9SX0FUVEFDSE1FTlQwIH1cbiAgICApO1xuICAgIHRoaXMuX19waXhlbEJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoIHRoaXMuX19idWZmZXJTaXplICogMiAqIHRoaXMuX19jaHVua1NpemUgKTtcblxuICAgIC8vIC0tIGF1ZGlvIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuX19hdWRpbyA9IGF1ZGlvO1xuICAgIHRoaXMuX19ub2RlID0gYXVkaW8uY3JlYXRlU2NyaXB0UHJvY2Vzc29yKCB0aGlzLl9fYnVmZmVyU2l6ZSwgMiwgMiApO1xuICAgIHRoaXMuX19ub2RlLm9uYXVkaW9wcm9jZXNzID0gKCBldmVudCApID0+IHRoaXMuX19oYW5kbGVQcm9jZXNzKCBldmVudCApO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3Bvc2UgdGhpcyBXYXZlbmVyZERlY2suXG4gICAqL1xuICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9fc2V0Q3VlU3RhdHVzKCAnbm9uZScgKTtcbiAgICB0aGlzLl9fYnVmZmVyUXVhZC5kaXNwb3NlKCk7XG4gICAgaWYgKCB0aGlzLl9fcHJvZ3JhbSApIHtcbiAgICAgIHRoaXMuX19wcm9ncmFtLnByb2dyYW0uZGlzcG9zZSggdHJ1ZSApO1xuICAgIH1cbiAgICBpZiAoIHRoaXMuX19wcm9ncmFtQ3VlICkge1xuICAgICAgdGhpcy5fX3Byb2dyYW1DdWUucHJvZ3JhbS5kaXNwb3NlKCB0cnVlICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbXBpbGUgZ2l2ZW4gc2hhZGVyIGNvZGUgYW5kIGN1ZSB0aGUgc2hhZGVyLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGNvbXBpbGUoIGNvZGU6IHN0cmluZyApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9fc2V0Q3VlU3RhdHVzKCAnY29tcGlsaW5nJyApO1xuICAgIGNvbnN0IHByb2dyYW0gPSBhd2FpdCB0aGlzLl9fZ2xDYXQubGF6eVByb2dyYW1Bc3luYyhcbiAgICAgIHZlcnRRdWFkLFxuICAgICAgc2hhZGVyY2h1bmtQcmUgKyBjb2RlICsgc2hhZGVyY2h1bmtQb3N0XG4gICAgKS5jYXRjaCggKCBlICkgPT4ge1xuICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9fcHJvY2Vzc0Vycm9yTWVzc2FnZSggZSApO1xuICAgICAgdGhpcy5fX2xhc3RFcnJvciA9IGVycm9yO1xuICAgICAgdGhpcy5fX3Byb2dyYW1DdWUgPSBudWxsO1xuICAgICAgdGhpcy5fX3NldEN1ZVN0YXR1cyggJ25vbmUnICk7XG4gICAgICB0aGlzLl9fZW1pdCggJ2Vycm9yJywgeyBlcnJvciB9ICk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoIGVycm9yID8/IHVuZGVmaW5lZCApO1xuICAgIH0gKTtcblxuICAgIGNvbnN0IHJlcXVpcmVkU2FtcGxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoIGNvbnN0IG5hbWUgb2YgdGhpcy5zYW1wbGVzLmtleXMoKSApIHtcbiAgICAgIGlmICggY29kZS5zZWFyY2goICdzYW1wbGVfJyArIG5hbWUgKSAhPT0gLTEgKSB7XG4gICAgICAgIHJlcXVpcmVkU2FtcGxlcy5hZGQoIG5hbWUgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fcHJvZ3JhbUN1ZSA9IHtcbiAgICAgIHByb2dyYW0sXG4gICAgICBjb2RlLFxuICAgICAgcmVxdWlyZWRTYW1wbGVzXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0Q3VlU3RhdHVzKCAncmVhZHknICk7XG4gICAgdGhpcy5fX2VtaXQoICdlcnJvcicsIHsgZXJyb3I6IG51bGwgfSApO1xuICAgIHRoaXMuX19sYXN0RXJyb3IgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSBjdWUgc2hhZGVyIGFmdGVyIHRoZSBiYXIgZW5kcy5cbiAgICovXG4gIHB1YmxpYyBhcHBseUN1ZSgpOiB2b2lkIHtcbiAgICBpZiAoIHRoaXMuX19jdWVTdGF0dXMgPT09ICdyZWFkeScgKSB7XG4gICAgICB0aGlzLl9fc2V0Q3VlU3RhdHVzKCAnYXBwbHlpbmcnICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgYSBzYW1wbGUgYW5kIHN0b3JlIGFzIGEgdW5pZm9ybSB0ZXh0dXJlLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGxvYWRTYW1wbGUoIG5hbWU6IHN0cmluZywgYnVmZmVyOiBBcnJheUJ1ZmZlciApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9fYXVkaW8uZGVjb2RlQXVkaW9EYXRhKCBidWZmZXIgKVxuICAgIC50aGVuKCAoIGF1ZGlvQnVmZmVyICkgPT4ge1xuICAgICAgY29uc3QgeyBzYW1wbGVSYXRlLCBkdXJhdGlvbiB9ID0gYXVkaW9CdWZmZXI7XG4gICAgICBjb25zdCBmcmFtZXMgPSBhdWRpb0J1ZmZlci5sZW5ndGg7XG4gICAgICBjb25zdCB3aWR0aCA9IDIwNDg7XG4gICAgICBjb25zdCBsZW5ndGhDZWlsZWQgPSBNYXRoLmNlaWwoIGZyYW1lcyAvIDIwNDguMCApO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gbGVuZ3RoQ2VpbGVkO1xuXG4gICAgICBjb25zdCBidWZmZXIgPSBuZXcgRmxvYXQzMkFycmF5KCB3aWR0aCAqIGhlaWdodCAqIDQgKTtcbiAgICAgIGNvbnN0IGNoYW5uZWxzID0gYXVkaW9CdWZmZXIubnVtYmVyT2ZDaGFubmVscztcblxuICAgICAgY29uc3QgZGF0YUwgPSBhdWRpb0J1ZmZlci5nZXRDaGFubmVsRGF0YSggMCApO1xuICAgICAgY29uc3QgZGF0YVIgPSBhdWRpb0J1ZmZlci5nZXRDaGFubmVsRGF0YSggY2hhbm5lbHMgPT09IDEgPyAwIDogMSApO1xuXG4gICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBmcmFtZXM7IGkgKysgKSB7XG4gICAgICAgIGJ1ZmZlclsgaSAqIDQgKyAwIF0gPSBkYXRhTFsgaSBdO1xuICAgICAgICBidWZmZXJbIGkgKiA0ICsgMSBdID0gZGF0YVJbIGkgXTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZ2xDYXQgPSB0aGlzLl9fZ2xDYXQ7XG4gICAgICBjb25zdCB7IGdsIH0gPSBnbENhdDtcbiAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLl9fZ2xDYXQuY3JlYXRlVGV4dHVyZSgpITtcbiAgICAgIHRleHR1cmUuc2V0VGV4dHVyZUZyb21BcnJheShcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgYnVmZmVyLFxuICAgICAgICB7XG4gICAgICAgICAgaW50ZXJuYWxmb3JtYXQ6IGdsLlJHQkEzMkYsXG4gICAgICAgICAgZm9ybWF0OiBnbC5SR0JBLFxuICAgICAgICAgIHR5cGU6IGdsLkZMT0FULFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgdGV4dHVyZS50ZXh0dXJlRmlsdGVyKCBnbC5ORUFSRVNUICk7XG5cbiAgICAgIHRoaXMuX19zYW1wbGVzLnNldChcbiAgICAgICAgbmFtZSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgdGV4dHVyZSxcbiAgICAgICAgICBzYW1wbGVSYXRlLFxuICAgICAgICAgIGR1cmF0aW9uXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGlmICggdGhpcy5fX3Byb2dyYW0gJiYgdGhpcy5fX3Byb2dyYW0uY29kZS5zZWFyY2goICdzYW1wbGVfJyArIG5hbWUgKSApIHtcbiAgICAgICAgdGhpcy5fX3Byb2dyYW0ucmVxdWlyZWRTYW1wbGVzLmFkZCggbmFtZSApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIHRoaXMuX19wcm9ncmFtQ3VlICYmIHRoaXMuX19wcm9ncmFtQ3VlLmNvZGUuc2VhcmNoKCAnc2FtcGxlXycgKyBuYW1lICkgKSB7XG4gICAgICAgIHRoaXMuX19wcm9ncmFtQ3VlLnJlcXVpcmVkU2FtcGxlcy5hZGQoIG5hbWUgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fX2VtaXQoICdsb2FkU2FtcGxlJywgeyBuYW1lLCBkdXJhdGlvbiwgc2FtcGxlUmF0ZSB9ICk7XG4gICAgfSApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHNhbXBsZS5cbiAgICovXG4gIHB1YmxpYyBkZWxldGVTYW1wbGUoIG5hbWU6IHN0cmluZyApOiB2b2lkIHtcbiAgICBpZiAoIHRoaXMuX19zYW1wbGVzLmhhcyggbmFtZSApICkge1xuICAgICAgdGhpcy5fX3NhbXBsZXMuZGVsZXRlKCBuYW1lICk7XG4gICAgICB0aGlzLl9fZW1pdCggJ2RlbGV0ZVNhbXBsZScsIHsgbmFtZSB9ICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfX2hhbmRsZVByb2Nlc3MoIGV2ZW50OiBBdWRpb1Byb2Nlc3NpbmdFdmVudCApOiB2b2lkIHtcbiAgICBsZXQgdGltZSA9IHRoaXMudGltZTtcbiAgICBpZiAoICF0aGlzLmhvc3REZWNrICkge1xuICAgICAgdGltZSArPSB0aGlzLl9fYnVmZmVyU2l6ZSAvIHRoaXMuX19hdWRpby5zYW1wbGVSYXRlO1xuICAgICAgaWYgKCB0aGlzLnRpbWVFcnJvclRocmVzaG9sZCA8IE1hdGguYWJzKCB0aW1lIC0gZXZlbnQucGxheWJhY2tUaW1lICkgKSB7XG4gICAgICAgIHRpbWUgPSBldmVudC5wbGF5YmFja1RpbWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX190aW1lID0gdGltZTtcblxuICAgIGNvbnN0IGJlYXRNYW5hZ2VyVXBkYXRlRXZlbnQgPSB0aGlzLmJlYXRNYW5hZ2VyLnVwZGF0ZSggdGltZSApO1xuXG4gICAgY29uc3QgeyBicG0sIGJhciB9ID0gYmVhdE1hbmFnZXJVcGRhdGVFdmVudDtcbiAgICBjb25zdCBiYXJTZWNvbmRzID0gQmVhdE1hbmFnZXIuQ2FsY0JhclNlY29uZHMoIGJwbSApO1xuXG4gICAgY29uc3Qgb3V0TCA9IGV2ZW50Lm91dHB1dEJ1ZmZlci5nZXRDaGFubmVsRGF0YSggMCApO1xuICAgIGNvbnN0IG91dFIgPSBldmVudC5vdXRwdXRCdWZmZXIuZ2V0Q2hhbm5lbERhdGEoIDEgKTtcblxuICAgIC8vIHNob3VsZCBJIHByb2Nlc3MgdGhlIG5leHQgcHJvZ3JhbT9cbiAgICBjb25zdCB7IHNhbXBsZVJhdGUsIF9fYnVmZmVyU2l6ZTogYnVmZmVyU2l6ZSB9ID0gdGhpcztcbiAgICBjb25zdCBiZWdpbk5leHQgPSB0aGlzLl9fY3VlU3RhdHVzID09PSAnYXBwbHlpbmcnXG4gICAgICA/IE1hdGgubWluKCBidWZmZXJTaXplLCBNYXRoLmZsb29yKCAoIGJhclNlY29uZHMgLSBiYXIgKSAqIHNhbXBsZVJhdGUgKSApXG4gICAgICA6IGJ1ZmZlclNpemU7XG5cbiAgICBpZiAoIHRoaXMuX19jaHVua0hlYWQgPT09IDAgKSB7XG4gICAgICB0aGlzLl9fcHJlcGFyZUJ1ZmZlciggYmVhdE1hbmFnZXJVcGRhdGVFdmVudCApO1xuICAgIH1cblxuICAgIC8vIGluc2VydCBpbnRvIGl0cyBhdWRpbyBidWZmZXJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBiZWdpbk5leHQ7IGkgKysgKSB7XG4gICAgICBjb25zdCBjaHVua0luZGV4ID0gdGhpcy5fX2NodW5rSGVhZCAqIHRoaXMuX19idWZmZXJTaXplICogMjtcblxuICAgICAgb3V0TFsgaSBdID0gdGhpcy5fX3BpeGVsQnVmZmVyWyBjaHVua0luZGV4ICsgaSAqIDIgKyAwIF07XG4gICAgICBvdXRSWyBpIF0gPSB0aGlzLl9fcGl4ZWxCdWZmZXJbIGNodW5rSW5kZXggKyBpICogMiArIDEgXTtcbiAgICB9XG5cbiAgICAvLyBwcm9jZXNzIHRoZSBuZXh0IHByb2dyYW0/P1xuICAgIGlmICggYmVnaW5OZXh0ICE9PSBidWZmZXJTaXplICkge1xuICAgICAgdGhpcy5fX3NldEN1ZVN0YXR1cyggJ25vbmUnICk7XG5cbiAgICAgIGlmICggdGhpcy5fX3Byb2dyYW1DdWUgKSB7XG4gICAgICAgIGNvbnN0IHByZXZQcm9ncmFtID0gdGhpcy5fX3Byb2dyYW07XG4gICAgICAgIHRoaXMuX19wcm9ncmFtID0gdGhpcy5fX3Byb2dyYW1DdWU7XG5cbiAgICAgICAgaWYgKCBwcmV2UHJvZ3JhbSApIHtcbiAgICAgICAgICBwcmV2UHJvZ3JhbS5wcm9ncmFtLmRpc3Bvc2UoIHRydWUgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fcHJvZ3JhbUN1ZSA9IG51bGw7XG5cbiAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgIHRoaXMuX19wcmVwYXJlQnVmZmVyKCBiZWF0TWFuYWdlclVwZGF0ZUV2ZW50ICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX19jaHVua0hlYWQgPSAwO1xuXG4gICAgICAvLyBpbnNlcnQgaW50byBpdHMgYXVkaW8gYnVmZmVyXG4gICAgICBmb3IgKCBsZXQgaSA9IGJlZ2luTmV4dDsgaSA8IGJ1ZmZlclNpemU7IGkgKysgKSB7XG4gICAgICAgIG91dExbIGkgXSA9IHRoaXMuX19waXhlbEJ1ZmZlclsgaSAqIDIgKyAwIF07XG4gICAgICAgIG91dFJbIGkgXSA9IHRoaXMuX19waXhlbEJ1ZmZlclsgaSAqIDIgKyAxIF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fX2NodW5rSGVhZCA9ICggdGhpcy5fX2NodW5rSGVhZCArIDEgKSAlIHRoaXMuX19jaHVua1NpemU7XG5cbiAgICAvLyBlbWl0IGFuIGV2ZW50XG4gICAgdGhpcy5fX2VtaXQoICdwcm9jZXNzJyApO1xuICB9XG5cbiAgcHJpdmF0ZSBfX3ByZXBhcmVCdWZmZXIoIGV2ZW50OiBCZWF0TWFuYWdlclVwZGF0ZUV2ZW50ICk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpbWUsXG4gICAgICBiZWF0LFxuICAgICAgYmFyLFxuICAgICAgc2l4dGVlbkJhcixcbiAgICAgIGJwbVxuICAgIH0gPSBldmVudDtcbiAgICBjb25zdCBiZWF0U2Vjb25kcyA9IEJlYXRNYW5hZ2VyLkNhbGNCZWF0U2Vjb25kcyggYnBtICk7XG4gICAgY29uc3QgYmFyU2Vjb25kcyA9IEJlYXRNYW5hZ2VyLkNhbGNCYXJTZWNvbmRzKCBicG0gKTtcbiAgICBjb25zdCBzaXh0ZWVuQmFyU2Vjb25kcyA9IEJlYXRNYW5hZ2VyLkNhbGNTaXh0ZWVuQmFyU2Vjb25kcyggYnBtICk7XG4gICAgY29uc3QgeyBzYW1wbGVSYXRlLCBfX2J1ZmZlclNpemU6IGJ1ZmZlclNpemUsIF9fY2h1bmtTaXplOiBjaHVua1NpemUgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5fX2dsQ2F0O1xuXG4gICAgLy8gcmVuZGVyXG4gICAgaWYgKCB0aGlzLl9fcHJvZ3JhbSApIHtcbiAgICAgIHRoaXMuc2FtcGxlcy5mb3JFYWNoKCAoIHNhbXBsZSApID0+IHtcbiAgICAgICAgdGhpcy5fX3Byb2dyYW0hLnByb2dyYW0udW5pZm9ybVRleHR1cmUoICdzYW1wbGVfJyArIHNhbXBsZS5uYW1lLCBzYW1wbGUudGV4dHVyZSApO1xuICAgICAgICB0aGlzLl9fcHJvZ3JhbSEucHJvZ3JhbS51bmlmb3JtNGYoXG4gICAgICAgICAgJ3NhbXBsZV8nICsgc2FtcGxlLm5hbWUgKyAnX21ldGEnLFxuICAgICAgICAgIHNhbXBsZS50ZXh0dXJlLndpZHRoLFxuICAgICAgICAgIHNhbXBsZS50ZXh0dXJlLmhlaWdodCxcbiAgICAgICAgICBzYW1wbGUuc2FtcGxlUmF0ZSxcbiAgICAgICAgICBzYW1wbGUuZHVyYXRpb25cbiAgICAgICAgKTtcbiAgICAgIH0gKTtcblxuICAgICAgdGhpcy5fX3Byb2dyYW0ucHJvZ3JhbS5hdHRyaWJ1dGUoICdwJywgdGhpcy5fX2J1ZmZlclF1YWQsIDIgKTtcbiAgICAgIHRoaXMuX19wcm9ncmFtLnByb2dyYW0udW5pZm9ybTFmKCAnYnBtJywgdGhpcy5icG0gKTtcbiAgICAgIHRoaXMuX19wcm9ncmFtLnByb2dyYW0udW5pZm9ybTFmKCAnX2RlbHRhU2FtcGxlJywgMS4wIC8gc2FtcGxlUmF0ZSApO1xuICAgICAgdGhpcy5fX3Byb2dyYW0ucHJvZ3JhbS51bmlmb3JtMWYoICdfZGVsdGFDaHVuaycsIHRoaXMuX19idWZmZXJTaXplIC8gc2FtcGxlUmF0ZSApO1xuICAgICAgdGhpcy5fX3Byb2dyYW0ucHJvZ3JhbS51bmlmb3JtNGYoXG4gICAgICAgICd0aW1lTGVuZ3RoJyxcbiAgICAgICAgYmVhdFNlY29uZHMsXG4gICAgICAgIGJhclNlY29uZHMsXG4gICAgICAgIHNpeHRlZW5CYXJTZWNvbmRzLFxuICAgICAgICAxRTE2XG4gICAgICApO1xuICAgICAgdGhpcy5fX3Byb2dyYW0ucHJvZ3JhbS51bmlmb3JtNGYoXG4gICAgICAgICdfdGltZUhlYWQnLFxuICAgICAgICBiZWF0LFxuICAgICAgICBiYXIsXG4gICAgICAgIHNpeHRlZW5CYXIsXG4gICAgICAgIHRpbWVcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuX19nbENhdC51c2VQcm9ncmFtKCB0aGlzLl9fcHJvZ3JhbS5wcm9ncmFtLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX19nbENhdC5iaW5kRnJhbWVidWZmZXIoIHRoaXMuX19mcmFtZWJ1ZmZlciwgKCkgPT4ge1xuICAgICAgICAgIGdsLnZpZXdwb3J0KCAwLCAwLCB0aGlzLl9fYnVmZmVyU2l6ZSAvIDIsIHRoaXMuX19jaHVua1NpemUgKTtcbiAgICAgICAgICBnbC5ibGVuZEZ1bmMoIHRoaXMuX19nbENhdC5nbC5PTkUsIHRoaXMuX19nbENhdC5nbC5aRVJPICk7XG5cbiAgICAgICAgICBnbC5kcmF3QXJyYXlzKCBnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCApO1xuICAgICAgICB9ICk7XG4gICAgICB9ICk7XG5cbiAgICAgIC8vIHJlYWQgcGl4ZWxzXG4gICAgICBnbC5mbHVzaCgpO1xuXG4gICAgICB0aGlzLl9fZ2xDYXQuYmluZEZyYW1lYnVmZmVyKCB0aGlzLl9fZnJhbWVidWZmZXIsICgpID0+IHtcbiAgICAgICAgZ2wucmVhZEJ1ZmZlciggdGhpcy5fX2dsQ2F0LmdsLkNPTE9SX0FUVEFDSE1FTlQwICk7XG4gICAgICAgIGdsLnJlYWRQaXhlbHMoXG4gICAgICAgICAgMCwgLy8geFxuICAgICAgICAgIDAsIC8vIHlcbiAgICAgICAgICBidWZmZXJTaXplIC8gMiwgLy8gd2lkdGhcbiAgICAgICAgICBjaHVua1NpemUsIC8vIGhlaWdodFxuICAgICAgICAgIHRoaXMuX19nbENhdC5nbC5SR0JBLCAvLyBmb3JtYXRcbiAgICAgICAgICB0aGlzLl9fZ2xDYXQuZ2wuRkxPQVQsIC8vIHR5cGVcbiAgICAgICAgICB0aGlzLl9fcGl4ZWxCdWZmZXIgLy8gZHN0XG4gICAgICAgICk7XG4gICAgICB9ICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfX3NldEN1ZVN0YXR1cyggY3VlU3RhdHVzOiAnbm9uZScgfCAnY29tcGlsaW5nJyB8ICdyZWFkeScgfCAnYXBwbHlpbmcnICk6IHZvaWQge1xuICAgIHRoaXMuX19jdWVTdGF0dXMgPSBjdWVTdGF0dXM7XG4gICAgdGhpcy5fX2VtaXQoICdjaGFuZ2VDdWVTdGF0dXMnLCB7IGN1ZVN0YXR1cyB9ICk7XG4gIH1cblxuICBwcml2YXRlIF9fcHJvY2Vzc0Vycm9yTWVzc2FnZSggZXJyb3I6IGFueSApOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBzdHI6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGVycm9yPy5tZXNzYWdlID8/IGVycm9yO1xuICAgIGlmICggIXN0ciApIHsgcmV0dXJuIG51bGw7IH1cblxuICAgIHJldHVybiBzdHIucmVwbGFjZSggL0VSUk9SOiAoXFxkKyk6KFxcZCspL2csICggbWF0Y2gsIC4uLmFyZ3MgKSA9PiB7XG4gICAgICBjb25zdCBsaW5lID0gcGFyc2VJbnQoIGFyZ3NbIDEgXSApIC0gc2hhZGVyY2h1bmtQcmVMaW5lcyArIDE7XG4gICAgICByZXR1cm4gYEVSUk9SOiAkeyBhcmdzWyAwIF0gfTokeyBsaW5lIH1gO1xuICAgIH0gKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdhdmVuZXJkRGVjayBleHRlbmRzIEV2ZW50RW1pdHRhYmxlPHtcbiAgcHJvY2Vzczogdm9pZDtcbiAgY2hhbmdlQ3VlU3RhdHVzOiB7IGN1ZVN0YXR1czogJ25vbmUnIHwgJ2NvbXBpbGluZycgfCAncmVhZHknIHwgJ2FwcGx5aW5nJyB9O1xuICBsb2FkU2FtcGxlOiB7IG5hbWU6IHN0cmluZzsgc2FtcGxlUmF0ZTogbnVtYmVyOyBkdXJhdGlvbjogbnVtYmVyIH1cbiAgZGVsZXRlU2FtcGxlOiB7IG5hbWU6IHN0cmluZyB9O1xuICBjaGFuZ2VCUE06IHsgYnBtOiBudW1iZXIgfTtcbiAgZXJyb3I6IHsgZXJyb3I6IHN0cmluZyB8IG51bGwgfTtcbn0+IHt9XG5hcHBseU1peGlucyggV2F2ZW5lcmREZWNrLCBbIEV2ZW50RW1pdHRhYmxlIF0gKTtcbiIsImV4cG9ydCB7IFdhdmVuZXJkRGVjayB9IGZyb20gJy4vV2F2ZW5lcmREZWNrJztcbmV4cG9ydCB7IEJlYXRNYW5hZ2VyIH0gZnJvbSAnLi9CZWF0TWFuYWdlcic7XG5cbmltcG9ydCB7IFdhdmVuZXJkRGVjayB9IGZyb20gJy4vV2F2ZW5lcmREZWNrJztcbmV4cG9ydCBkZWZhdWx0IFdhdmVuZXJkRGVjaztcbiIsImV4cG9ydCBjb25zdCBzaGFkZXJjaHVua1ByZSA9IGAjdmVyc2lvbiAzMDAgZXNcblxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuXG4jZGVmaW5lIF9QSSAzLjE0MTU5MjY1MzU5XG5cbnVuaWZvcm0gZmxvYXQgYnBtO1xudW5pZm9ybSB2ZWM0IHRpbWVMZW5ndGg7XG51bmlmb3JtIGZsb2F0IHNhbXBsZVJhdGU7XG51bmlmb3JtIGZsb2F0IF9kZWx0YVNhbXBsZTtcbnVuaWZvcm0gZmxvYXQgX2RlbHRhQ2h1bms7XG51bmlmb3JtIHZlYzQgX3RpbWVIZWFkO1xuXG5vdXQgdmVjNCBmcmFnQ29sb3I7XG5cbnZlYzIgc2FtcGxlTmVhcmVzdCggc2FtcGxlcjJEIHMsIHZlYzQgbWV0YSwgZmxvYXQgdGltZSApIHtcbiAgaWYgKCBtZXRhLncgPCB0aW1lICkgeyByZXR1cm4gdmVjMiggMC4wICk7IH1cbiAgZmxvYXQgeCA9IHRpbWUgLyBtZXRhLnggKiBtZXRhLno7XG4gIHZlYzIgdXYgPSBmcmFjdCggdmVjMihcbiAgICB4LFxuICAgIGZsb29yKCB4ICkgLyBtZXRhLnlcbiAgKSApICsgMC41IC8gbWV0YS54eTtcbiAgcmV0dXJuIHRleHR1cmUoIHMsIHV2ICkueHk7XG59XG5cbi8vIEkgaGF2ZSAwJSBjb25maWRlbmNlIHRoYXQgdGhlIGFsZ29yaXRobSBpcyBwZXJmZWN0XG52ZWMyIHNhbXBsZVNpbmMoIHNhbXBsZXIyRCBzLCB2ZWM0IG1ldGEsIGZsb2F0IHRpbWUgKSB7XG4gIGlmICggbWV0YS53IDwgdGltZSApIHsgcmV0dXJuIHZlYzIoIDAuMCApOyB9XG4gIHZlYzIgc3VtID0gdmVjMiggMC4wICk7XG4gIGZsb2F0IGRlZiA9IDAuNSAtIGZyYWN0KCB0aW1lICogbWV0YS56ICk7XG4gIGZvciAoIGludCBpID0gLTU7IGkgPD0gNTsgaSArKyApIHtcbiAgICBmbG9hdCB4ID0gZmxvb3IoIHRpbWUgKiBtZXRhLnogKyBmbG9hdCggaSApICkgLyBtZXRhLng7XG4gICAgZmxvYXQgZGVmdCA9IGRlZiArIGZsb2F0KCBpICk7XG4gICAgdmVjMiB1diA9IGZyYWN0KCB2ZWMyKFxuICAgICAgeCxcbiAgICAgIGZsb29yKCB4ICkgLyBtZXRhLnlcbiAgICApICkgKyAwLjUgLyBtZXRhLnh5O1xuICAgIHN1bSArPSB0ZXh0dXJlKCBzLCB1diApLnh5ICogbWluKCBzaW4oIGRlZnQgKiBfUEkgKSAvIGRlZnQgLyBfUEksIDEuMCApO1xuICB9XG4gIHJldHVybiBzdW07XG59XG5gO1xuXG5leHBvcnQgY29uc3Qgc2hhZGVyY2h1bmtQcmVMaW5lcyA9IHNoYWRlcmNodW5rUHJlLnNwbGl0KCAnXFxuJyApLmxlbmd0aDtcblxuZXhwb3J0IGNvbnN0IHNoYWRlcmNodW5rUG9zdCA9IGB2b2lkIG1haW4oKSB7XG4gIGZsb2F0IG9mZiA9IGZsb29yKCBnbF9GcmFnQ29vcmQueCApICogMi4wO1xuICB2ZWM0IGhlYWQgPSBfdGltZUhlYWQgKyBfZGVsdGFDaHVuayAqIGZsb29yKCBnbF9GcmFnQ29vcmQueSApO1xuICBmcmFnQ29sb3IgPSB2ZWM0KFxuICAgIG1haW5BdWRpbyggbW9kKCBoZWFkICsgKCBvZmYgKSAqIF9kZWx0YVNhbXBsZSwgdGltZUxlbmd0aCApICksXG4gICAgbWFpbkF1ZGlvKCBtb2QoIGhlYWQgKyAoIG9mZiArIDEuMCApICogX2RlbHRhU2FtcGxlLCB0aW1lTGVuZ3RoICkgKVxuICApO1xufWA7XG4iLCIvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmR5d2VyL3R5cGVkLWVtaXR0ZXIvYmxvYi9tYXN0ZXIvaW5kZXguZC50c1xuXG5leHBvcnQgdHlwZSBFdmVudExpc3RlbmVyPFQ+ID0gKCBldmVudDogVCApID0+IHZvaWQ7XG5cbmV4cG9ydCBjbGFzcyBFdmVudEVtaXR0YWJsZTxURXZlbnRzIGV4dGVuZHMgeyBbIHR5cGU6IHN0cmluZyBdOiBhbnkgfT4ge1xuICBwcm90ZWN0ZWQgX19ldmVudExpc3RlbmVycz86IE1hcDxrZXlvZiBURXZlbnRzLCBFdmVudExpc3RlbmVyPGFueT5bXT47XG5cbiAgcHVibGljIG9uPFRUeXBlIGV4dGVuZHMga2V5b2YgVEV2ZW50cyAmIHN0cmluZz4oXG4gICAgdHlwZTogVFR5cGUsXG4gICAgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXI8VEV2ZW50c1sgVFR5cGUgXT5cbiAgKTogRXZlbnRMaXN0ZW5lcjxURXZlbnRzWyBUVHlwZSBdPiB7XG4gICAgdGhpcy5fX2V2ZW50TGlzdGVuZXJzID0gdGhpcy5fX2V2ZW50TGlzdGVuZXJzIHx8IG5ldyBNYXAoKTtcbiAgICBsZXQgYXJyYXkgPSB0aGlzLl9fZXZlbnRMaXN0ZW5lcnMuZ2V0KCB0eXBlICk7XG4gICAgaWYgKCAhYXJyYXkgKSB7XG4gICAgICBhcnJheSA9IFtdO1xuICAgICAgdGhpcy5fX2V2ZW50TGlzdGVuZXJzLnNldCggdHlwZSwgYXJyYXkgKTtcbiAgICB9XG5cbiAgICBhcnJheS5wdXNoKCBsaXN0ZW5lciApO1xuXG4gICAgcmV0dXJuIGxpc3RlbmVyO1xuICB9XG5cbiAgcHVibGljIG9mZjxUVHlwZSBleHRlbmRzIGtleW9mIFRFdmVudHMgJiBzdHJpbmc+KFxuICAgIHR5cGU6IFRUeXBlLFxuICAgIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyPFRFdmVudHNbIFRUeXBlIF0+XG4gICk6IHZvaWQge1xuICAgIHRoaXMuX19ldmVudExpc3RlbmVycyA9IHRoaXMuX19ldmVudExpc3RlbmVycyB8fCBuZXcgTWFwKCk7XG4gICAgbGV0IGFycmF5ID0gdGhpcy5fX2V2ZW50TGlzdGVuZXJzLmdldCggdHlwZSApO1xuICAgIGlmICggIWFycmF5ICkge1xuICAgICAgYXJyYXkgPSBbXTtcbiAgICAgIHRoaXMuX19ldmVudExpc3RlbmVycy5zZXQoIHR5cGUsIGFycmF5ICk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKCBsaXN0ZW5lciApO1xuICAgIGlmICggaW5kZXggIT09IC0xICkge1xuICAgICAgYXJyYXkuc3BsaWNlKCBpbmRleCwgMSApO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfX2VtaXQ8VFR5cGUgZXh0ZW5kcyBrZXlvZiBURXZlbnRzPihcbiAgICAuLi5bIHR5cGUsIGV2ZW50IF06IFRFdmVudHNbIFRUeXBlIF0gZXh0ZW5kcyB2b2lkID8gWyBUVHlwZSBdIDogWyBUVHlwZSwgVEV2ZW50c1sgVFR5cGUgXSBdXG4gICk6IHZvaWQge1xuICAgIHRoaXMuX19ldmVudExpc3RlbmVycyA9IHRoaXMuX19ldmVudExpc3RlbmVycyB8fCBuZXcgTWFwKCk7XG4gICAgdGhpcy5fX2V2ZW50TGlzdGVuZXJzLmdldCggdHlwZSApPy5mb3JFYWNoKCAoIGxpc3RlbmVyICkgPT4gbGlzdGVuZXIoIGV2ZW50ICkgKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TWl4aW5zKCBkZXJpdmVkQ3RvcjogYW55LCBiYXNlQ3RvcnM6IGFueVtdICk6IHZvaWQge1xuICBiYXNlQ3RvcnMuZm9yRWFjaCggKCBiYXNlQ3RvciApID0+IHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyggYmFzZUN0b3IucHJvdG90eXBlICkuZm9yRWFjaCggKCBuYW1lICkgPT4ge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgICBkZXJpdmVkQ3Rvci5wcm90b3R5cGUsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIGJhc2VDdG9yLnByb3RvdHlwZSwgbmFtZSApIVxuICAgICAgKTtcbiAgICB9ICk7XG4gIH0gKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBtb2QoIHZhbHVlOiBudW1iZXIsIGRpdmlzb3I6IG51bWJlciApOiBudW1iZXIge1xuICByZXR1cm4gdmFsdWUgLSBNYXRoLmZsb29yKCB2YWx1ZSAvIGRpdmlzb3IgKSAqIGRpdmlzb3I7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9