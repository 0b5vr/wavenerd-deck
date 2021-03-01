/*!
 * @fms-cat/wavenerd-deck v0.4.0
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
        this.__deltaTime = 0.0;
        this.__beat = 0.0;
        this.__bar = 0.0;
        this.__sixteenBar = 0.0;
    }
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
    Object.defineProperty(BeatManager.prototype, "beatSeconds", {
        get: function () {
            return BeatManager.CalcBeatSeconds(this.__bpm);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BeatManager.prototype, "barSeconds", {
        get: function () {
            return BeatManager.CalcBarSeconds(this.__bpm);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BeatManager.prototype, "sixteenBarSeconds", {
        get: function () {
            return BeatManager.CalcSixteenBarSeconds(this.__bpm);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BeatManager.prototype, "time", {
        get: function () {
            return this.__time;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BeatManager.prototype, "deltaTime", {
        get: function () {
            return this.__deltaTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BeatManager.prototype, "beat", {
        get: function () {
            return this.__beat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BeatManager.prototype, "bar", {
        get: function () {
            return this.__bar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BeatManager.prototype, "sixteenBar", {
        get: function () {
            return this.__sixteenBar;
        },
        enumerable: false,
        configurable: true
    });
    BeatManager.prototype.reset = function () {
        this.__time = 0.0;
        this.__sixteenBar = 0.0;
    };
    BeatManager.prototype.update = function (time) {
        var beatSeconds = BeatManager.CalcBeatSeconds(this.__bpm);
        var barSeconds = BeatManager.CalcBarSeconds(this.__bpm);
        var sixteenBarSeconds = BeatManager.CalcSixteenBarSeconds(this.__bpm);
        this.__deltaTime = time - this.__time;
        this.__sixteenBar = mod_1.mod(this.__sixteenBar + this.__deltaTime, sixteenBarSeconds);
        this.__bar = mod_1.mod(this.__sixteenBar, barSeconds);
        this.__beat = mod_1.mod(this.__bar, beatSeconds);
        this.__time = time;
        var event = {
            time: time,
            deltaTime: this.__deltaTime,
            bpm: this.__bpm,
            beat: this.__beat,
            bar: this.__bar,
            sixteenBar: this.__sixteenBar,
        };
        this.__emit('update', event);
        return event;
    };
    return BeatManager;
}());
exports.BeatManager = BeatManager;
applyMixins_1.applyMixins(BeatManager, [EventEmittable_1.EventEmittable]);


/***/ }),

/***/ "./src/Pool.ts":
/*!*********************!*\
  !*** ./src/Pool.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = void 0;
var Pool = /** @class */ (function () {
    function Pool(array) {
        this.__index = 0;
        this.array = array;
    }
    Object.defineProperty(Pool.prototype, "current", {
        get: function () {
            return this.array[this.__index];
        },
        enumerable: false,
        configurable: true
    });
    Pool.prototype.next = function () {
        this.__index = (this.__index + 1) % this.array.length;
        return this.current;
    };
    return Pool;
}());
exports.Pool = Pool;


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
exports.WavenerdDeck = exports.shaderFrag = void 0;
var shaderchunks_1 = __webpack_require__(/*! ./shaderchunks */ "./src/shaderchunks.ts");
var BeatManager_1 = __webpack_require__(/*! ./BeatManager */ "./src/BeatManager.ts");
var EventEmittable_1 = __webpack_require__(/*! ./utils/EventEmittable */ "./src/utils/EventEmittable.ts");
var Pool_1 = __webpack_require__(/*! ./Pool */ "./src/Pool.ts");
var applyMixins_1 = __webpack_require__(/*! ./utils/applyMixins */ "./src/utils/applyMixins.ts");
var lerp_1 = __webpack_require__(/*! ./utils/lerp */ "./src/utils/lerp.ts");
exports.shaderFrag = "#version 300 es\n\nvoid main() {\n  discard;\n}";
var WavenerdDeck = /** @class */ (function () {
    /**
     * Constructor of the WavenerdDeck.
     */
    function WavenerdDeck(_a) {
        var _this = this;
        var glCat = _a.glCat, audio = _a.audio, hostDeck = _a.hostDeck, bufferLength = _a.bufferLength, bpm = _a.bpm;
        /**
         * Its current cue status.
         * `'none'`: There is nothing in its current cue.
         * `'ready'`: There is a cue shader and is ready to be applied.
         * `'applying'`: There is a cue shader and is going to be applied in the next bar.
         */
        this.__cueStatus = 'none';
        this.__prevBufferSource = null;
        this.__program = null;
        this.__programCue = null;
        this.__programSwapTime = 0.0;
        this.__params = new Map();
        this.__samples = new Map();
        this.__bufferLength = bufferLength !== null && bufferLength !== void 0 ? bufferLength : 4096;
        // -- host deck --------------------------------------------------------------------------------
        if (hostDeck) {
            this.hostDeck = hostDeck;
        }
        // -- beat manager -----------------------------------------------------------------------------
        this.__beatManager = new BeatManager_1.BeatManager();
        this.__beatManager.bpm = bpm !== null && bpm !== void 0 ? bpm : 140;
        this.__beatManager.on('changeBPM', function (_a) {
            var bpm = _a.bpm;
            _this.__emit('changeBPM', { bpm: bpm });
        });
        // -- glCat ------------------------------------------------------------------------------------
        this.__glCat = glCat;
        var gl = glCat.gl;
        var bufferOffArray = new Array(this.__bufferLength)
            .fill(0)
            .map(function (_, i) { return i; });
        this.__bufferOff = glCat.createBuffer();
        this.__bufferOff.setVertexbuffer(new Float32Array(bufferOffArray));
        this.__bufferTransformFeedbacks = [
            glCat.createBuffer(),
            glCat.createBuffer(),
        ];
        this.__transformFeedback = glCat.createTransformFeedback();
        this.__bufferTransformFeedbacks[0].setVertexbuffer(this.__bufferLength * Float32Array.BYTES_PER_ELEMENT, gl.DYNAMIC_COPY);
        this.__bufferTransformFeedbacks[1].setVertexbuffer(this.__bufferLength * Float32Array.BYTES_PER_ELEMENT, gl.DYNAMIC_COPY);
        this.__transformFeedback.bindBuffer(0, this.__bufferTransformFeedbacks[0]);
        this.__transformFeedback.bindBuffer(1, this.__bufferTransformFeedbacks[1]);
        // -- audio ------------------------------------------------------------------------------------
        this.__audio = audio;
        this.__node = audio.createGain();
        this.__bufferPool = new Pool_1.Pool([
            audio.createBuffer(2, this.__bufferLength, audio.sampleRate),
            audio.createBuffer(2, this.__bufferLength, audio.sampleRate),
        ]);
    }
    Object.defineProperty(WavenerdDeck.prototype, "cueStatus", {
        get: function () {
            return this.__cueStatus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WavenerdDeck.prototype, "bufferLength", {
        get: function () {
            return this.__bufferLength;
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
    Object.defineProperty(WavenerdDeck.prototype, "params", {
        get: function () {
            return this.__params;
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
        this.__transformFeedback.dispose();
        this.__bufferTransformFeedbacks[0].dispose();
        this.__bufferTransformFeedbacks[1].dispose();
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
                        return [4 /*yield*/, this.__glCat.lazyProgramAsync(shaderchunks_1.shaderchunkPre + code + shaderchunks_1.shaderchunkPost, exports.shaderFrag, {
                                transformFeedbackVaryings: ['outL', 'outR'],
                            }).catch(function (e) {
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
            this.__programSwapTime =
                this.beatManager.time - this.beatManager.bar + this.beatManager.barSeconds;
        }
    };
    /**
     * Set a uniform value.
     */
    WavenerdDeck.prototype.setParam = function (name, value, factor) {
        if (factor === void 0) { factor = 50.0; }
        var param = this.__params.get(name);
        if (param) {
            param.target = value;
            param.factor = factor;
        }
        else {
            this.__params.set(name, { name: name, target: value, value: value, factor: factor });
        }
    };
    /**
     * Load a sample and store as a uniform texture.
     */
    WavenerdDeck.prototype.loadSample = function (name, inputBuffer) {
        return __awaiter(this, void 0, Promise, function () {
            var audioBuffer, sampleRate, duration, frames, width, lengthCeiled, height, buffer, channels, dataL, dataR, i, glCat, gl, texture;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.__audio.decodeAudioData(inputBuffer)];
                    case 1:
                        audioBuffer = _a.sent();
                        sampleRate = audioBuffer.sampleRate, duration = audioBuffer.duration;
                        frames = audioBuffer.length;
                        width = 2048;
                        lengthCeiled = Math.ceil(frames / 2048.0);
                        height = lengthCeiled;
                        buffer = new Float32Array(width * height * 4);
                        channels = audioBuffer.numberOfChannels;
                        dataL = audioBuffer.getChannelData(0);
                        dataR = audioBuffer.getChannelData(channels === 1 ? 0 : 1);
                        for (i = 0; i < frames; i++) {
                            buffer[i * 4 + 0] = dataL[i];
                            buffer[i * 4 + 1] = dataR[i];
                        }
                        glCat = this.__glCat;
                        gl = glCat.gl;
                        texture = this.__glCat.createTexture();
                        texture.setTextureFromArray(width, height, buffer, {
                            internalformat: gl.RGBA32F,
                            format: gl.RGBA,
                            type: gl.FLOAT,
                        });
                        texture.textureFilter(gl.NEAREST);
                        this.__samples.set(name, {
                            name: name,
                            texture: texture,
                            sampleRate: sampleRate,
                            duration: duration
                        });
                        if (this.__program && this.__program.code.search('sample_' + name)) {
                            this.__program.requiredSamples.add(name);
                        }
                        if (this.__programCue && this.__programCue.code.search('sample_' + name)) {
                            this.__programCue.requiredSamples.add(name);
                        }
                        this.__emit('loadSample', { name: name, duration: duration, sampleRate: sampleRate });
                        return [2 /*return*/];
                }
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
    WavenerdDeck.prototype.update = function () {
        var _a;
        var _b = this, sampleRate = _b.sampleRate, bufferLength = _b.__bufferLength, audio = _b.__audio;
        var genTime = audio.currentTime;
        this.beatManager.update(genTime);
        // should I process the next program?
        var beginNext = this.__cueStatus === 'applying'
            ? Math.floor((this.__programSwapTime - genTime) * sampleRate)
            : Infinity;
        beginNext = Math.min(beginNext, bufferLength);
        if (beginNext < 0) {
            this.__setCueStatus('none');
            var prevProgram = this.__program;
            this.__program = this.__programCue;
            if (prevProgram) {
                prevProgram.program.dispose(true);
            }
            this.__programCue = null;
            beginNext = bufferLength;
        }
        var buffer = this.__bufferPool.next();
        if (this.__program) {
            this.__prepareBuffer(this.__program, buffer, 0, beginNext);
        }
        // process the next program??
        if (beginNext < bufferLength) {
            // render
            if (this.__programCue) {
                this.__prepareBuffer(this.__programCue, buffer, beginNext, bufferLength - beginNext);
            }
        }
        var bufferSource = audio.createBufferSource();
        bufferSource.buffer = buffer;
        bufferSource.connect(this.__node);
        var delay = audio.currentTime - genTime;
        (_a = this.__prevBufferSource) === null || _a === void 0 ? void 0 : _a.stop(audio.currentTime);
        bufferSource.start(audio.currentTime, delay);
        this.__prevBufferSource = bufferSource;
        // emit an event
        this.__emit('update');
    };
    WavenerdDeck.prototype.__prepareBuffer = function (program, buffer, first, count) {
        var _this = this;
        var _a = this.beatManager, time = _a.time, beatSeconds = _a.beatSeconds, barSeconds = _a.barSeconds, sixteenBarSeconds = _a.sixteenBarSeconds, beat = _a.beat, bar = _a.bar, sixteenBar = _a.sixteenBar, deltaTime = _a.deltaTime;
        var sampleRate = this.sampleRate;
        var gl = this.__glCat.gl;
        // render
        this.params.forEach(function (param) {
            if (param.factor <= 0.0) {
                param.value = param.target;
            }
            else {
                param.value = lerp_1.lerp(param.target, param.value, Math.exp(-param.factor * deltaTime));
            }
            program.program.uniform4f('param_' + param.name, param.target, param.value, param.factor, 0.0);
        });
        this.samples.forEach(function (sample) {
            program.program.uniformTexture('sample_' + sample.name, sample.texture);
            program.program.uniform4f('sample_' + sample.name + '_meta', sample.texture.width, sample.texture.height, sample.sampleRate, sample.duration);
        });
        program.program.attribute('off', this.__bufferOff, 1);
        program.program.uniform1f('bpm', this.bpm);
        program.program.uniform1f('_deltaSample', 1.0 / sampleRate);
        program.program.uniform4f('timeLength', beatSeconds, barSeconds, sixteenBarSeconds, 1E16);
        program.program.uniform4f('_timeHead', beat, bar, sixteenBar, time);
        this.__glCat.useProgram(program.program, function () {
            _this.__glCat.bindTransformFeedback(_this.__transformFeedback, function () {
                gl.enable(gl.RASTERIZER_DISCARD);
                gl.beginTransformFeedback(gl.POINTS);
                gl.drawArrays(gl.POINTS, first, count);
                gl.endTransformFeedback();
                gl.disable(gl.RASTERIZER_DISCARD);
            });
        });
        gl.flush();
        var outL = buffer.getChannelData(0);
        this.__glCat.bindVertexBuffer(this.__bufferTransformFeedbacks[0], function () {
            gl.getBufferSubData(gl.ARRAY_BUFFER, 0, outL, first, count);
        });
        var outR = buffer.getChannelData(1);
        this.__glCat.bindVertexBuffer(this.__bufferTransformFeedbacks[1], function () {
            gl.getBufferSubData(gl.ARRAY_BUFFER, 0, outR, first, count);
        });
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
exports.shaderchunkPre = "#version 300 es\n\nprecision highp float;\n\n#define _PI 3.14159265359\n\nuniform float bpm;\nuniform vec4 timeLength;\nuniform float sampleRate;\nuniform float _deltaSample;\nuniform vec4 _timeHead;\n\nin float off;\n\nout float outL;\nout float outR;\n\nfloat paramFetch( vec4 param ) {\n  return mix( param.x, param.y, exp( -param.z * off * _deltaSample ) );\n}\n\nvec2 sampleNearest( sampler2D s, vec4 meta, float time ) {\n  if ( meta.w < time ) { return vec2( 0.0 ); }\n  float x = time / meta.x * meta.z;\n  vec2 uv = fract( vec2(\n    x,\n    floor( x ) / meta.y\n  ) ) + 0.5 / meta.xy;\n  return texture( s, uv ).xy;\n}\n\n// I have 0% confidence that the algorithm is perfect\nvec2 sampleSinc( sampler2D s, vec4 meta, float time ) {\n  if ( meta.w < time ) { return vec2( 0.0 ); }\n  vec2 sum = vec2( 0.0 );\n  float def = 0.5 - fract( time * meta.z );\n  for ( int i = -5; i <= 5; i ++ ) {\n    float x = floor( time * meta.z + float( i ) ) / meta.x;\n    float deft = def + float( i );\n    vec2 uv = fract( vec2(\n      x,\n      floor( x ) / meta.y\n    ) ) + 0.5 / meta.xy;\n    sum += texture( s, uv ).xy * min( sin( deft * _PI ) / deft / _PI, 1.0 );\n  }\n  return sum;\n}\n";
exports.shaderchunkPreLines = exports.shaderchunkPre.split('\n').length;
exports.shaderchunkPost = "void main() {\n  vec2 out2 = mainAudio( mod( _timeHead + off * _deltaSample, timeLength ) );\n  outL = out2.x;\n  outR = out2.y;\n}";


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

/***/ "./src/utils/lerp.ts":
/*!***************************!*\
  !*** ./src/utils/lerp.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.lerp = void 0;
/**
 * `lerp`, or `mix`
 */
function lerp(a, b, x) {
    return a + (b - a) * x;
}
exports.lerp = lerp;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1dBVkVORVJEX0RFQ0svLi9zcmMvQmVhdE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vV0FWRU5FUkRfREVDSy8uL3NyYy9Qb29sLnRzIiwid2VicGFjazovL1dBVkVORVJEX0RFQ0svLi9zcmMvV2F2ZW5lcmREZWNrLnRzIiwid2VicGFjazovL1dBVkVORVJEX0RFQ0svLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vV0FWRU5FUkRfREVDSy8uL3NyYy9zaGFkZXJjaHVua3MudHMiLCJ3ZWJwYWNrOi8vV0FWRU5FUkRfREVDSy8uL3NyYy91dGlscy9FdmVudEVtaXR0YWJsZS50cyIsIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLLy4vc3JjL3V0aWxzL2FwcGx5TWl4aW5zLnRzIiwid2VicGFjazovL1dBVkVORVJEX0RFQ0svLi9zcmMvdXRpbHMvbGVycC50cyIsIndlYnBhY2s6Ly9XQVZFTkVSRF9ERUNLLy4vc3JjL3V0aWxzL21vZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7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OiJ3YXZlbmVyZC1kZWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiV0FWRU5FUkRfREVDS1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJXQVZFTkVSRF9ERUNLXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBFdmVudEVtaXR0YWJsZSB9IGZyb20gJy4vdXRpbHMvRXZlbnRFbWl0dGFibGUnO1xuaW1wb3J0IHsgYXBwbHlNaXhpbnMgfSBmcm9tICcuL3V0aWxzL2FwcGx5TWl4aW5zJztcbmltcG9ydCB7IG1vZCB9IGZyb20gJy4vdXRpbHMvbW9kJztcblxuZXhwb3J0IGludGVyZmFjZSBCZWF0TWFuYWdlclVwZGF0ZUV2ZW50IHtcbiAgdGltZTogbnVtYmVyO1xuICBkZWx0YVRpbWU6IG51bWJlcjtcbiAgYnBtOiBudW1iZXI7XG4gIGJlYXQ6IG51bWJlcjtcbiAgYmFyOiBudW1iZXI7XG4gIHNpeHRlZW5CYXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEJlYXRNYW5hZ2VyIHtcbiAgcHVibGljIHN0YXRpYyBDYWxjQmVhdFNlY29uZHMoIGJwbTogbnVtYmVyICk6IG51bWJlciB7XG4gICAgcmV0dXJuIDYwLjAgLyBicG07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIENhbGNCYXJTZWNvbmRzKCBicG06IG51bWJlciApOiBudW1iZXIge1xuICAgIC8vIHJldHVybiB0aGlzLmJlYXRMZW5ndGggKiA0LjA7XG4gICAgcmV0dXJuIDI0MC4wIC8gYnBtO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBDYWxjU2l4dGVlbkJhclNlY29uZHMoIGJwbTogbnVtYmVyICk6IG51bWJlciB7XG4gICAgLy8gcmV0dXJuIHRoaXMuYmFyTGVuZ3RoICogMTYuMDtcbiAgICByZXR1cm4gMzg0MC4wIC8gYnBtO1xuICB9XG5cbiAgcHVibGljIF9fYnBtOiBudW1iZXIgPSAxNDAuMDtcbiAgcHVibGljIGdldCBicG0oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fX2JwbTtcbiAgfVxuICBwdWJsaWMgc2V0IGJwbSggdmFsdWU6IG51bWJlciApIHtcbiAgICBjb25zdCBwcmV2QnBtID0gdGhpcy5fX2JwbTtcbiAgICB0aGlzLl9fYnBtID0gTWF0aC5tYXgoIDAuMCwgdmFsdWUgKTtcbiAgICB0aGlzLl9fc2l4dGVlbkJhciA9IHRoaXMuX19zaXh0ZWVuQmFyICogcHJldkJwbSAvIHRoaXMuX19icG07XG4gICAgdGhpcy5fX2VtaXQoICdjaGFuZ2VCUE0nLCB7IGJwbTogdGhpcy5fX2JwbSB9ICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGJlYXRTZWNvbmRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIEJlYXRNYW5hZ2VyLkNhbGNCZWF0U2Vjb25kcyggdGhpcy5fX2JwbSApO1xuICB9XG5cbiAgcHVibGljIGdldCBiYXJTZWNvbmRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIEJlYXRNYW5hZ2VyLkNhbGNCYXJTZWNvbmRzKCB0aGlzLl9fYnBtICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNpeHRlZW5CYXJTZWNvbmRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIEJlYXRNYW5hZ2VyLkNhbGNTaXh0ZWVuQmFyU2Vjb25kcyggdGhpcy5fX2JwbSApO1xuICB9XG5cbiAgcHJpdmF0ZSBfX3RpbWUgPSAwLjA7XG4gIHB1YmxpYyBnZXQgdGltZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9fdGltZTtcbiAgfVxuXG4gIHByaXZhdGUgX19kZWx0YVRpbWUgPSAwLjA7XG4gIHB1YmxpYyBnZXQgZGVsdGFUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX19kZWx0YVRpbWU7XG4gIH1cblxuICBwcml2YXRlIF9fYmVhdCA9IDAuMDtcbiAgcHVibGljIGdldCBiZWF0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX19iZWF0O1xuICB9XG5cbiAgcHJpdmF0ZSBfX2JhciA9IDAuMDtcbiAgcHVibGljIGdldCBiYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fX2JhcjtcbiAgfVxuXG4gIHByaXZhdGUgX19zaXh0ZWVuQmFyID0gMC4wO1xuICBwdWJsaWMgZ2V0IHNpeHRlZW5CYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fX3NpeHRlZW5CYXI7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5fX3RpbWUgPSAwLjA7XG4gICAgdGhpcy5fX3NpeHRlZW5CYXIgPSAwLjA7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCB0aW1lOiBudW1iZXIgKTogQmVhdE1hbmFnZXJVcGRhdGVFdmVudCB7XG4gICAgY29uc3QgYmVhdFNlY29uZHMgPSBCZWF0TWFuYWdlci5DYWxjQmVhdFNlY29uZHMoIHRoaXMuX19icG0gKTtcbiAgICBjb25zdCBiYXJTZWNvbmRzID0gQmVhdE1hbmFnZXIuQ2FsY0JhclNlY29uZHMoIHRoaXMuX19icG0gKTtcbiAgICBjb25zdCBzaXh0ZWVuQmFyU2Vjb25kcyA9IEJlYXRNYW5hZ2VyLkNhbGNTaXh0ZWVuQmFyU2Vjb25kcyggdGhpcy5fX2JwbSApO1xuXG4gICAgdGhpcy5fX2RlbHRhVGltZSA9IHRpbWUgLSB0aGlzLl9fdGltZTtcblxuICAgIHRoaXMuX19zaXh0ZWVuQmFyID0gbW9kKCB0aGlzLl9fc2l4dGVlbkJhciArIHRoaXMuX19kZWx0YVRpbWUsIHNpeHRlZW5CYXJTZWNvbmRzICk7XG4gICAgdGhpcy5fX2JhciA9IG1vZCggdGhpcy5fX3NpeHRlZW5CYXIsIGJhclNlY29uZHMgKTtcbiAgICB0aGlzLl9fYmVhdCA9IG1vZCggdGhpcy5fX2JhciwgYmVhdFNlY29uZHMgKTtcblxuICAgIHRoaXMuX190aW1lID0gdGltZTtcblxuICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgdGltZSxcbiAgICAgIGRlbHRhVGltZTogdGhpcy5fX2RlbHRhVGltZSxcbiAgICAgIGJwbTogdGhpcy5fX2JwbSxcbiAgICAgIGJlYXQ6IHRoaXMuX19iZWF0LFxuICAgICAgYmFyOiB0aGlzLl9fYmFyLFxuICAgICAgc2l4dGVlbkJhcjogdGhpcy5fX3NpeHRlZW5CYXIsXG4gICAgfTtcblxuICAgIHRoaXMuX19lbWl0KCAndXBkYXRlJywgZXZlbnQgKTtcblxuICAgIHJldHVybiBldmVudDtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJlYXRNYW5hZ2VyIGV4dGVuZHMgRXZlbnRFbWl0dGFibGU8e1xuICB1cGRhdGU6IEJlYXRNYW5hZ2VyVXBkYXRlRXZlbnQ7XG4gIGNoYW5nZUJQTTogeyBicG06IG51bWJlciB9O1xufT4ge31cbmFwcGx5TWl4aW5zKCBCZWF0TWFuYWdlciwgWyBFdmVudEVtaXR0YWJsZSBdICk7XG4iLCJleHBvcnQgY2xhc3MgUG9vbDxUPiB7XG4gIHB1YmxpYyBhcnJheTogVFtdO1xuXG4gIHByaXZhdGUgX19pbmRleCA9IDA7XG5cbiAgcHVibGljIGdldCBjdXJyZW50KCk6IFQge1xuICAgIHJldHVybiB0aGlzLmFycmF5WyB0aGlzLl9faW5kZXggXTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciggYXJyYXk6IFRbXSApIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBwdWJsaWMgbmV4dCgpOiBUIHtcbiAgICB0aGlzLl9faW5kZXggPSAoIHRoaXMuX19pbmRleCArIDEgKSAlIHRoaXMuYXJyYXkubGVuZ3RoO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgR0xDYXQsIEdMQ2F0QnVmZmVyLCBHTENhdFByb2dyYW0sIEdMQ2F0VGV4dHVyZSwgR0xDYXRUcmFuc2Zvcm1GZWVkYmFjayB9IGZyb20gJ0BmbXMtY2F0L2dsY2F0LXRzJztcbmltcG9ydCB7IHNoYWRlcmNodW5rUG9zdCwgc2hhZGVyY2h1bmtQcmUsIHNoYWRlcmNodW5rUHJlTGluZXMgfSBmcm9tICcuL3NoYWRlcmNodW5rcyc7XG5pbXBvcnQgeyBCZWF0TWFuYWdlciB9IGZyb20gJy4vQmVhdE1hbmFnZXInO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGFibGUgfSBmcm9tICcuL3V0aWxzL0V2ZW50RW1pdHRhYmxlJztcbmltcG9ydCB7IFBvb2wgfSBmcm9tICcuL1Bvb2wnO1xuaW1wb3J0IHsgYXBwbHlNaXhpbnMgfSBmcm9tICcuL3V0aWxzL2FwcGx5TWl4aW5zJztcbmltcG9ydCB7IGxlcnAgfSBmcm9tICcuL3V0aWxzL2xlcnAnO1xuXG5pbnRlcmZhY2UgV2F2ZW5lcmREZWNrUHJvZ3JhbSB7XG4gIHByb2dyYW06IEdMQ2F0UHJvZ3JhbTxXZWJHTDJSZW5kZXJpbmdDb250ZXh0PjtcbiAgY29kZTogc3RyaW5nO1xuICByZXF1aXJlZFNhbXBsZXM6IFNldDxzdHJpbmc+O1xufVxuXG5pbnRlcmZhY2UgV2F2ZW5lcmREZWNrUGFyYW1FbnRyeSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbiAgZmFjdG9yOiBudW1iZXI7XG4gIHRhcmdldDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgV2F2ZW5lcmREZWNrU2FtcGxlRW50cnkge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRleHR1cmU6IEdMQ2F0VGV4dHVyZTxXZWJHTDJSZW5kZXJpbmdDb250ZXh0PjtcbiAgc2FtcGxlUmF0ZTogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3Qgc2hhZGVyRnJhZyA9IGAjdmVyc2lvbiAzMDAgZXNcblxudm9pZCBtYWluKCkge1xuICBkaXNjYXJkO1xufWA7XG5cbmV4cG9ydCBjbGFzcyBXYXZlbmVyZERlY2sge1xuICAvKipcbiAgICogSXRzIGhvc3QgZGVjay5cbiAgICogSXQncyBoaWdobHkgcmVjb21tZW5kZWQgdG8gY29ubmVjdCB0aGUgbm9kZSBvZiB0aGUgaG9zdCBkZWNrIGludG8gdGhlIG5vZGUgb2YgdGhpcyBkZWNrLCB0byBlbnN1cmUgdGhlIHRpbWluZyBjb25zaXN0ZW5jeS5cbiAgICovXG4gIHB1YmxpYyBob3N0RGVjaz86IFdhdmVuZXJkRGVjaztcblxuICAvKipcbiAgICogSXRzIGN1cnJlbnQgY3VlIHN0YXR1cy5cbiAgICogYCdub25lJ2A6IFRoZXJlIGlzIG5vdGhpbmcgaW4gaXRzIGN1cnJlbnQgY3VlLlxuICAgKiBgJ3JlYWR5J2A6IFRoZXJlIGlzIGEgY3VlIHNoYWRlciBhbmQgaXMgcmVhZHkgdG8gYmUgYXBwbGllZC5cbiAgICogYCdhcHBseWluZydgOiBUaGVyZSBpcyBhIGN1ZSBzaGFkZXIgYW5kIGlzIGdvaW5nIHRvIGJlIGFwcGxpZWQgaW4gdGhlIG5leHQgYmFyLlxuICAgKi9cbiAgcHJpdmF0ZSBfX2N1ZVN0YXR1czogJ25vbmUnIHwgJ2NvbXBpbGluZycgfCAncmVhZHknIHwgJ2FwcGx5aW5nJyA9ICdub25lJztcbiAgcHVibGljIGdldCBjdWVTdGF0dXMoKTogJ25vbmUnIHwgJ2NvbXBpbGluZycgfCAncmVhZHknIHwgJ2FwcGx5aW5nJyB7XG4gICAgcmV0dXJuIHRoaXMuX19jdWVTdGF0dXM7XG4gIH1cblxuICAvKipcbiAgICogSXRzIGJ1ZmZlciBsZW5ndGguXG4gICAqL1xuICBwcml2YXRlIF9fYnVmZmVyTGVuZ3RoOiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgYnVmZmVyTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX19idWZmZXJMZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogSXRzIGN1cnJlbnQgYnBtLlxuICAgKi9cbiAgcHVibGljIGdldCBicG0oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5iZWF0TWFuYWdlci5icG07XG4gIH1cbiAgcHVibGljIHNldCBicG0oIHZhbHVlOiBudW1iZXIgKSB7XG4gICAgdGhpcy5iZWF0TWFuYWdlci5icG0gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdHMgYm91bmQgYEdMQ2F0YC5cbiAgICovXG4gIHByaXZhdGUgX19nbENhdDogR0xDYXQ8V2ViR0wyUmVuZGVyaW5nQ29udGV4dD47XG4gIHB1YmxpYyBnZXQgZ2xDYXQoKTogR0xDYXQ8V2ViR0wyUmVuZGVyaW5nQ29udGV4dD4ge1xuICAgIHJldHVybiB0aGlzLl9fZ2xDYXQ7XG4gIH1cblxuICAvKipcbiAgICogSXRzIGxhc3QgY29tcGlsZSBlcnJvciBoYXBwZW5lZCBpbiBbW1dhdmVuZXJkRGVjay5jb21waWxlXV0uXG4gICAqL1xuICBwcml2YXRlIF9fbGFzdEVycm9yOiBhbnk7XG4gIHB1YmxpYyBnZXQgbGFzdEVycm9yKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX19sYXN0RXJyb3I7XG4gIH1cblxuICAvKipcbiAgICogSXRzIGJpbmRlZCBgQXVkaW9Db250ZXh0YC5cbiAgICovXG4gIHByaXZhdGUgX19hdWRpbzogQXVkaW9Db250ZXh0O1xuICBwdWJsaWMgZ2V0IGF1ZGlvKCk6IEF1ZGlvQ29udGV4dCB7XG4gICAgcmV0dXJuIHRoaXMuX19hdWRpbztcbiAgfVxuXG4gIC8qKlxuICAgKiBJdHMgbm9kZSBvZiB0aGUgQXVkaW9Db250ZXh0LlxuICAgKi9cbiAgcHJpdmF0ZSBfX25vZGU6IEdhaW5Ob2RlO1xuICBwdWJsaWMgZ2V0IG5vZGUoKTogR2Fpbk5vZGUge1xuICAgIHJldHVybiB0aGlzLl9fbm9kZTtcbiAgfVxuXG4gIHByaXZhdGUgX19idWZmZXJQb29sOiBQb29sPEF1ZGlvQnVmZmVyPjtcblxuICBwcml2YXRlIF9fcHJldkJ1ZmZlclNvdXJjZTogQXVkaW9CdWZmZXJTb3VyY2VOb2RlIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEFsaWFzIGZvciB0aGUgYGF1ZGlvLnNhbXBsZVJhdGVgIC5cbiAgICovXG4gIHB1YmxpYyBnZXQgc2FtcGxlUmF0ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9fYXVkaW8uc2FtcGxlUmF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgX19iZWF0TWFuYWdlcjogQmVhdE1hbmFnZXI7XG4gIHB1YmxpYyBnZXQgYmVhdE1hbmFnZXIoKTogQmVhdE1hbmFnZXIge1xuICAgIGNvbnN0IGhvc3REZWNrQmVhdE1hbmFnZXIgPSB0aGlzLmhvc3REZWNrPy5iZWF0TWFuYWdlcjtcbiAgICBpZiAoIGhvc3REZWNrQmVhdE1hbmFnZXIgKSB7XG4gICAgICByZXR1cm4gaG9zdERlY2tCZWF0TWFuYWdlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fX2JlYXRNYW5hZ2VyO1xuICB9XG5cbiAgcHJpdmF0ZSBfX2J1ZmZlck9mZjogR0xDYXRCdWZmZXI8V2ViR0wyUmVuZGVyaW5nQ29udGV4dD47XG4gIHByaXZhdGUgX19idWZmZXJUcmFuc2Zvcm1GZWVkYmFja3M6IFtcbiAgICBHTENhdEJ1ZmZlcjxXZWJHTDJSZW5kZXJpbmdDb250ZXh0PixcbiAgICBHTENhdEJ1ZmZlcjxXZWJHTDJSZW5kZXJpbmdDb250ZXh0PlxuICBdO1xuICBwcml2YXRlIF9fdHJhbnNmb3JtRmVlZGJhY2s6IEdMQ2F0VHJhbnNmb3JtRmVlZGJhY2s8V2ViR0wyUmVuZGVyaW5nQ29udGV4dD47XG5cbiAgcHJpdmF0ZSBfX3Byb2dyYW06IFdhdmVuZXJkRGVja1Byb2dyYW0gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfX3Byb2dyYW1DdWU6IFdhdmVuZXJkRGVja1Byb2dyYW0gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfX3Byb2dyYW1Td2FwVGltZTogbnVtYmVyID0gMC4wO1xuXG4gIHByaXZhdGUgX19wYXJhbXMgPSBuZXcgTWFwPHN0cmluZywgV2F2ZW5lcmREZWNrUGFyYW1FbnRyeT4oKTtcbiAgcHJpdmF0ZSBnZXQgcGFyYW1zKCk6IE1hcDxzdHJpbmcsIFdhdmVuZXJkRGVja1BhcmFtRW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5fX3BhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgX19zYW1wbGVzID0gbmV3IE1hcDxzdHJpbmcsIFdhdmVuZXJkRGVja1NhbXBsZUVudHJ5PigpO1xuICBwcml2YXRlIGdldCBzYW1wbGVzKCk6IE1hcDxzdHJpbmcsIFdhdmVuZXJkRGVja1NhbXBsZUVudHJ5PiB7XG4gICAgaWYgKCB0aGlzLmhvc3REZWNrICkge1xuICAgICAgcmV0dXJuIHRoaXMuaG9zdERlY2suc2FtcGxlcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fX3NhbXBsZXM7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0b3Igb2YgdGhlIFdhdmVuZXJkRGVjay5cbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcigge1xuICAgIGdsQ2F0LFxuICAgIGF1ZGlvLFxuICAgIGhvc3REZWNrLFxuICAgIGJ1ZmZlckxlbmd0aCxcbiAgICBicG0sXG4gIH06IHtcbiAgICBnbENhdDogR0xDYXQ8V2ViR0wyUmVuZGVyaW5nQ29udGV4dD47XG4gICAgYXVkaW86IEF1ZGlvQ29udGV4dDtcbiAgICBob3N0RGVjaz86IFdhdmVuZXJkRGVjaztcbiAgICBidWZmZXJMZW5ndGg/OiBudW1iZXI7XG4gICAgYnBtPzogbnVtYmVyO1xuICB9ICkge1xuICAgIHRoaXMuX19idWZmZXJMZW5ndGggPSBidWZmZXJMZW5ndGggPz8gNDA5NjtcblxuICAgIC8vIC0tIGhvc3QgZGVjayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGlmICggaG9zdERlY2sgKSB7XG4gICAgICB0aGlzLmhvc3REZWNrID0gaG9zdERlY2s7XG4gICAgfVxuXG4gICAgLy8gLS0gYmVhdCBtYW5hZ2VyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5fX2JlYXRNYW5hZ2VyID0gbmV3IEJlYXRNYW5hZ2VyKCk7XG4gICAgdGhpcy5fX2JlYXRNYW5hZ2VyLmJwbSA9IGJwbSA/PyAxNDA7XG4gICAgdGhpcy5fX2JlYXRNYW5hZ2VyLm9uKCAnY2hhbmdlQlBNJywgKCB7IGJwbSB9ICkgPT4ge1xuICAgICAgdGhpcy5fX2VtaXQoICdjaGFuZ2VCUE0nLCB7IGJwbSB9ICk7XG4gICAgfSApO1xuXG4gICAgLy8gLS0gZ2xDYXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5fX2dsQ2F0ID0gZ2xDYXQ7XG4gICAgY29uc3QgeyBnbCB9ID0gZ2xDYXQ7XG5cbiAgICBjb25zdCBidWZmZXJPZmZBcnJheSA9IG5ldyBBcnJheSggdGhpcy5fX2J1ZmZlckxlbmd0aCApXG4gICAgICAuZmlsbCggMCApXG4gICAgICAubWFwKCAoIF8sIGkgKSA9PiBpICk7XG4gICAgdGhpcy5fX2J1ZmZlck9mZiA9IGdsQ2F0LmNyZWF0ZUJ1ZmZlcigpO1xuICAgIHRoaXMuX19idWZmZXJPZmYuc2V0VmVydGV4YnVmZmVyKCBuZXcgRmxvYXQzMkFycmF5KCBidWZmZXJPZmZBcnJheSApICk7XG5cbiAgICB0aGlzLl9fYnVmZmVyVHJhbnNmb3JtRmVlZGJhY2tzID0gW1xuICAgICAgZ2xDYXQuY3JlYXRlQnVmZmVyKCksXG4gICAgICBnbENhdC5jcmVhdGVCdWZmZXIoKSxcbiAgICBdO1xuICAgIHRoaXMuX190cmFuc2Zvcm1GZWVkYmFjayA9IGdsQ2F0LmNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrKCk7XG5cbiAgICB0aGlzLl9fYnVmZmVyVHJhbnNmb3JtRmVlZGJhY2tzWyAwIF0uc2V0VmVydGV4YnVmZmVyKFxuICAgICAgdGhpcy5fX2J1ZmZlckxlbmd0aCAqIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcbiAgICAgIGdsLkRZTkFNSUNfQ09QWVxuICAgICk7XG5cbiAgICB0aGlzLl9fYnVmZmVyVHJhbnNmb3JtRmVlZGJhY2tzWyAxIF0uc2V0VmVydGV4YnVmZmVyKFxuICAgICAgdGhpcy5fX2J1ZmZlckxlbmd0aCAqIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCxcbiAgICAgIGdsLkRZTkFNSUNfQ09QWVxuICAgICk7XG5cbiAgICB0aGlzLl9fdHJhbnNmb3JtRmVlZGJhY2suYmluZEJ1ZmZlciggMCwgdGhpcy5fX2J1ZmZlclRyYW5zZm9ybUZlZWRiYWNrc1sgMCBdICk7XG4gICAgdGhpcy5fX3RyYW5zZm9ybUZlZWRiYWNrLmJpbmRCdWZmZXIoIDEsIHRoaXMuX19idWZmZXJUcmFuc2Zvcm1GZWVkYmFja3NbIDEgXSApO1xuXG4gICAgLy8gLS0gYXVkaW8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5fX2F1ZGlvID0gYXVkaW87XG4gICAgdGhpcy5fX25vZGUgPSBhdWRpby5jcmVhdGVHYWluKCk7XG5cbiAgICB0aGlzLl9fYnVmZmVyUG9vbCA9IG5ldyBQb29sKCBbXG4gICAgICBhdWRpby5jcmVhdGVCdWZmZXIoIDIsIHRoaXMuX19idWZmZXJMZW5ndGgsIGF1ZGlvLnNhbXBsZVJhdGUgKSxcbiAgICAgIGF1ZGlvLmNyZWF0ZUJ1ZmZlciggMiwgdGhpcy5fX2J1ZmZlckxlbmd0aCwgYXVkaW8uc2FtcGxlUmF0ZSApLFxuICAgIF0gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwb3NlIHRoaXMgV2F2ZW5lcmREZWNrLlxuICAgKi9cbiAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fX3NldEN1ZVN0YXR1cyggJ25vbmUnICk7XG4gICAgdGhpcy5fX3RyYW5zZm9ybUZlZWRiYWNrLmRpc3Bvc2UoKTtcbiAgICB0aGlzLl9fYnVmZmVyVHJhbnNmb3JtRmVlZGJhY2tzWyAwIF0uZGlzcG9zZSgpO1xuICAgIHRoaXMuX19idWZmZXJUcmFuc2Zvcm1GZWVkYmFja3NbIDEgXS5kaXNwb3NlKCk7XG4gICAgaWYgKCB0aGlzLl9fcHJvZ3JhbSApIHtcbiAgICAgIHRoaXMuX19wcm9ncmFtLnByb2dyYW0uZGlzcG9zZSggdHJ1ZSApO1xuICAgIH1cbiAgICBpZiAoIHRoaXMuX19wcm9ncmFtQ3VlICkge1xuICAgICAgdGhpcy5fX3Byb2dyYW1DdWUucHJvZ3JhbS5kaXNwb3NlKCB0cnVlICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbXBpbGUgZ2l2ZW4gc2hhZGVyIGNvZGUgYW5kIGN1ZSB0aGUgc2hhZGVyLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGNvbXBpbGUoIGNvZGU6IHN0cmluZyApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9fc2V0Q3VlU3RhdHVzKCAnY29tcGlsaW5nJyApO1xuICAgIGNvbnN0IHByb2dyYW0gPSBhd2FpdCB0aGlzLl9fZ2xDYXQubGF6eVByb2dyYW1Bc3luYyhcbiAgICAgIHNoYWRlcmNodW5rUHJlICsgY29kZSArIHNoYWRlcmNodW5rUG9zdCxcbiAgICAgIHNoYWRlckZyYWcsXG4gICAgICB7XG4gICAgICAgIHRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3M6IFsgJ291dEwnLCAnb3V0UicgXSxcbiAgICAgIH0sXG4gICAgKS5jYXRjaCggKCBlICkgPT4ge1xuICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9fcHJvY2Vzc0Vycm9yTWVzc2FnZSggZSApO1xuICAgICAgdGhpcy5fX2xhc3RFcnJvciA9IGVycm9yO1xuICAgICAgdGhpcy5fX3Byb2dyYW1DdWUgPSBudWxsO1xuICAgICAgdGhpcy5fX3NldEN1ZVN0YXR1cyggJ25vbmUnICk7XG4gICAgICB0aGlzLl9fZW1pdCggJ2Vycm9yJywgeyBlcnJvciB9ICk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoIGVycm9yID8/IHVuZGVmaW5lZCApO1xuICAgIH0gKTtcblxuICAgIGNvbnN0IHJlcXVpcmVkU2FtcGxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoIGNvbnN0IG5hbWUgb2YgdGhpcy5zYW1wbGVzLmtleXMoKSApIHtcbiAgICAgIGlmICggY29kZS5zZWFyY2goICdzYW1wbGVfJyArIG5hbWUgKSAhPT0gLTEgKSB7XG4gICAgICAgIHJlcXVpcmVkU2FtcGxlcy5hZGQoIG5hbWUgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9fcHJvZ3JhbUN1ZSA9IHtcbiAgICAgIHByb2dyYW0sXG4gICAgICBjb2RlLFxuICAgICAgcmVxdWlyZWRTYW1wbGVzXG4gICAgfTtcbiAgICB0aGlzLl9fc2V0Q3VlU3RhdHVzKCAncmVhZHknICk7XG4gICAgdGhpcy5fX2VtaXQoICdlcnJvcicsIHsgZXJyb3I6IG51bGwgfSApO1xuICAgIHRoaXMuX19sYXN0RXJyb3IgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSBjdWUgc2hhZGVyIGFmdGVyIHRoZSBiYXIgZW5kcy5cbiAgICovXG4gIHB1YmxpYyBhcHBseUN1ZSgpOiB2b2lkIHtcbiAgICBpZiAoIHRoaXMuX19jdWVTdGF0dXMgPT09ICdyZWFkeScgKSB7XG4gICAgICB0aGlzLl9fc2V0Q3VlU3RhdHVzKCAnYXBwbHlpbmcnICk7XG4gICAgICB0aGlzLl9fcHJvZ3JhbVN3YXBUaW1lID1cbiAgICAgICAgdGhpcy5iZWF0TWFuYWdlci50aW1lIC0gdGhpcy5iZWF0TWFuYWdlci5iYXIgKyB0aGlzLmJlYXRNYW5hZ2VyLmJhclNlY29uZHM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhIHVuaWZvcm0gdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgc2V0UGFyYW0oIG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlciwgZmFjdG9yID0gNTAuMCApOiB2b2lkIHtcbiAgICBjb25zdCBwYXJhbSA9IHRoaXMuX19wYXJhbXMuZ2V0KCBuYW1lICk7XG4gICAgaWYgKCBwYXJhbSApIHtcbiAgICAgIHBhcmFtLnRhcmdldCA9IHZhbHVlO1xuICAgICAgcGFyYW0uZmFjdG9yID0gZmFjdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9fcGFyYW1zLnNldCggbmFtZSwgeyBuYW1lLCB0YXJnZXQ6IHZhbHVlLCB2YWx1ZSwgZmFjdG9yIH0gKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBhIHNhbXBsZSBhbmQgc3RvcmUgYXMgYSB1bmlmb3JtIHRleHR1cmUuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgbG9hZFNhbXBsZSggbmFtZTogc3RyaW5nLCBpbnB1dEJ1ZmZlcjogQXJyYXlCdWZmZXIgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYXVkaW9CdWZmZXIgPSBhd2FpdCB0aGlzLl9fYXVkaW8uZGVjb2RlQXVkaW9EYXRhKCBpbnB1dEJ1ZmZlciApO1xuXG4gICAgY29uc3QgeyBzYW1wbGVSYXRlLCBkdXJhdGlvbiB9ID0gYXVkaW9CdWZmZXI7XG4gICAgY29uc3QgZnJhbWVzID0gYXVkaW9CdWZmZXIubGVuZ3RoO1xuICAgIGNvbnN0IHdpZHRoID0gMjA0ODtcbiAgICBjb25zdCBsZW5ndGhDZWlsZWQgPSBNYXRoLmNlaWwoIGZyYW1lcyAvIDIwNDguMCApO1xuICAgIGNvbnN0IGhlaWdodCA9IGxlbmd0aENlaWxlZDtcblxuICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBGbG9hdDMyQXJyYXkoIHdpZHRoICogaGVpZ2h0ICogNCApO1xuICAgIGNvbnN0IGNoYW5uZWxzID0gYXVkaW9CdWZmZXIubnVtYmVyT2ZDaGFubmVscztcblxuICAgIGNvbnN0IGRhdGFMID0gYXVkaW9CdWZmZXIuZ2V0Q2hhbm5lbERhdGEoIDAgKTtcbiAgICBjb25zdCBkYXRhUiA9IGF1ZGlvQnVmZmVyLmdldENoYW5uZWxEYXRhKCBjaGFubmVscyA9PT0gMSA/IDAgOiAxICk7XG5cbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBmcmFtZXM7IGkgKysgKSB7XG4gICAgICBidWZmZXJbIGkgKiA0ICsgMCBdID0gZGF0YUxbIGkgXTtcbiAgICAgIGJ1ZmZlclsgaSAqIDQgKyAxIF0gPSBkYXRhUlsgaSBdO1xuICAgIH1cblxuICAgIGNvbnN0IGdsQ2F0ID0gdGhpcy5fX2dsQ2F0O1xuICAgIGNvbnN0IHsgZ2wgfSA9IGdsQ2F0O1xuICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLl9fZ2xDYXQuY3JlYXRlVGV4dHVyZSgpITtcbiAgICB0ZXh0dXJlLnNldFRleHR1cmVGcm9tQXJyYXkoXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGJ1ZmZlcixcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxmb3JtYXQ6IGdsLlJHQkEzMkYsXG4gICAgICAgIGZvcm1hdDogZ2wuUkdCQSxcbiAgICAgICAgdHlwZTogZ2wuRkxPQVQsXG4gICAgICB9XG4gICAgKTtcbiAgICB0ZXh0dXJlLnRleHR1cmVGaWx0ZXIoIGdsLk5FQVJFU1QgKTtcblxuICAgIHRoaXMuX19zYW1wbGVzLnNldChcbiAgICAgIG5hbWUsXG4gICAgICB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHRleHR1cmUsXG4gICAgICAgIHNhbXBsZVJhdGUsXG4gICAgICAgIGR1cmF0aW9uXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmICggdGhpcy5fX3Byb2dyYW0gJiYgdGhpcy5fX3Byb2dyYW0uY29kZS5zZWFyY2goICdzYW1wbGVfJyArIG5hbWUgKSApIHtcbiAgICAgIHRoaXMuX19wcm9ncmFtLnJlcXVpcmVkU2FtcGxlcy5hZGQoIG5hbWUgKTtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMuX19wcm9ncmFtQ3VlICYmIHRoaXMuX19wcm9ncmFtQ3VlLmNvZGUuc2VhcmNoKCAnc2FtcGxlXycgKyBuYW1lICkgKSB7XG4gICAgICB0aGlzLl9fcHJvZ3JhbUN1ZS5yZXF1aXJlZFNhbXBsZXMuYWRkKCBuYW1lICk7XG4gICAgfVxuXG4gICAgdGhpcy5fX2VtaXQoICdsb2FkU2FtcGxlJywgeyBuYW1lLCBkdXJhdGlvbiwgc2FtcGxlUmF0ZSB9ICk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGEgc2FtcGxlLlxuICAgKi9cbiAgcHVibGljIGRlbGV0ZVNhbXBsZSggbmFtZTogc3RyaW5nICk6IHZvaWQge1xuICAgIGlmICggdGhpcy5fX3NhbXBsZXMuaGFzKCBuYW1lICkgKSB7XG4gICAgICB0aGlzLl9fc2FtcGxlcy5kZWxldGUoIG5hbWUgKTtcbiAgICAgIHRoaXMuX19lbWl0KCAnZGVsZXRlU2FtcGxlJywgeyBuYW1lIH0gKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgc2FtcGxlUmF0ZSwgX19idWZmZXJMZW5ndGg6IGJ1ZmZlckxlbmd0aCwgX19hdWRpbzogYXVkaW8gfSA9IHRoaXM7XG5cbiAgICBjb25zdCBnZW5UaW1lID0gYXVkaW8uY3VycmVudFRpbWU7XG4gICAgdGhpcy5iZWF0TWFuYWdlci51cGRhdGUoIGdlblRpbWUgKTtcblxuICAgIC8vIHNob3VsZCBJIHByb2Nlc3MgdGhlIG5leHQgcHJvZ3JhbT9cbiAgICBsZXQgYmVnaW5OZXh0ID0gdGhpcy5fX2N1ZVN0YXR1cyA9PT0gJ2FwcGx5aW5nJ1xuICAgICAgPyBNYXRoLmZsb29yKCAoIHRoaXMuX19wcm9ncmFtU3dhcFRpbWUgLSBnZW5UaW1lICkgKiBzYW1wbGVSYXRlIClcbiAgICAgIDogSW5maW5pdHk7XG4gICAgYmVnaW5OZXh0ID0gTWF0aC5taW4oIGJlZ2luTmV4dCwgYnVmZmVyTGVuZ3RoICk7XG5cbiAgICBpZiAoIGJlZ2luTmV4dCA8IDAgKSB7XG4gICAgICB0aGlzLl9fc2V0Q3VlU3RhdHVzKCAnbm9uZScgKTtcblxuICAgICAgY29uc3QgcHJldlByb2dyYW0gPSB0aGlzLl9fcHJvZ3JhbTtcbiAgICAgIHRoaXMuX19wcm9ncmFtID0gdGhpcy5fX3Byb2dyYW1DdWU7XG5cbiAgICAgIGlmICggcHJldlByb2dyYW0gKSB7XG4gICAgICAgIHByZXZQcm9ncmFtLnByb2dyYW0uZGlzcG9zZSggdHJ1ZSApO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3Byb2dyYW1DdWUgPSBudWxsO1xuXG4gICAgICBiZWdpbk5leHQgPSBidWZmZXJMZW5ndGg7XG4gICAgfVxuXG4gICAgY29uc3QgYnVmZmVyID0gdGhpcy5fX2J1ZmZlclBvb2wubmV4dCgpO1xuXG4gICAgaWYgKCB0aGlzLl9fcHJvZ3JhbSApIHtcbiAgICAgIHRoaXMuX19wcmVwYXJlQnVmZmVyKCB0aGlzLl9fcHJvZ3JhbSwgYnVmZmVyLCAwLCBiZWdpbk5leHQgKTtcbiAgICB9XG5cbiAgICAvLyBwcm9jZXNzIHRoZSBuZXh0IHByb2dyYW0/P1xuICAgIGlmICggYmVnaW5OZXh0IDwgYnVmZmVyTGVuZ3RoICkge1xuICAgICAgLy8gcmVuZGVyXG4gICAgICBpZiAoIHRoaXMuX19wcm9ncmFtQ3VlICkge1xuICAgICAgICB0aGlzLl9fcHJlcGFyZUJ1ZmZlciggdGhpcy5fX3Byb2dyYW1DdWUsIGJ1ZmZlciwgYmVnaW5OZXh0LCBidWZmZXJMZW5ndGggLSBiZWdpbk5leHQgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBidWZmZXJTb3VyY2UgPSBhdWRpby5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICBidWZmZXJTb3VyY2UuYnVmZmVyID0gYnVmZmVyO1xuICAgIGJ1ZmZlclNvdXJjZS5jb25uZWN0KCB0aGlzLl9fbm9kZSApO1xuXG4gICAgY29uc3QgZGVsYXkgPSBhdWRpby5jdXJyZW50VGltZSAtIGdlblRpbWU7XG4gICAgdGhpcy5fX3ByZXZCdWZmZXJTb3VyY2U/LnN0b3AoIGF1ZGlvLmN1cnJlbnRUaW1lICk7XG4gICAgYnVmZmVyU291cmNlLnN0YXJ0KCBhdWRpby5jdXJyZW50VGltZSwgZGVsYXkgKTtcblxuICAgIHRoaXMuX19wcmV2QnVmZmVyU291cmNlID0gYnVmZmVyU291cmNlO1xuXG4gICAgLy8gZW1pdCBhbiBldmVudFxuICAgIHRoaXMuX19lbWl0KCAndXBkYXRlJyApO1xuICB9XG5cbiAgcHJpdmF0ZSBfX3ByZXBhcmVCdWZmZXIoXG4gICAgcHJvZ3JhbTogV2F2ZW5lcmREZWNrUHJvZ3JhbSxcbiAgICBidWZmZXI6IEF1ZGlvQnVmZmVyLFxuICAgIGZpcnN0OiBudW1iZXIsXG4gICAgY291bnQ6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICB0aW1lLFxuICAgICAgYmVhdFNlY29uZHMsXG4gICAgICBiYXJTZWNvbmRzLFxuICAgICAgc2l4dGVlbkJhclNlY29uZHMsXG4gICAgICBiZWF0LFxuICAgICAgYmFyLFxuICAgICAgc2l4dGVlbkJhcixcbiAgICAgIGRlbHRhVGltZSxcbiAgICB9ID0gdGhpcy5iZWF0TWFuYWdlcjtcbiAgICBjb25zdCB7IHNhbXBsZVJhdGUgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBnbCB9ID0gdGhpcy5fX2dsQ2F0O1xuXG4gICAgLy8gcmVuZGVyXG4gICAgdGhpcy5wYXJhbXMuZm9yRWFjaCggKCBwYXJhbSApID0+IHtcbiAgICAgIGlmICggcGFyYW0uZmFjdG9yIDw9IDAuMCApIHtcbiAgICAgICAgcGFyYW0udmFsdWUgPSBwYXJhbS50YXJnZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbS52YWx1ZSA9IGxlcnAoIHBhcmFtLnRhcmdldCwgcGFyYW0udmFsdWUsIE1hdGguZXhwKCAtcGFyYW0uZmFjdG9yICogZGVsdGFUaW1lICkgKTtcbiAgICAgIH1cblxuICAgICAgcHJvZ3JhbS5wcm9ncmFtLnVuaWZvcm00ZihcbiAgICAgICAgJ3BhcmFtXycgKyBwYXJhbS5uYW1lLFxuICAgICAgICBwYXJhbS50YXJnZXQsXG4gICAgICAgIHBhcmFtLnZhbHVlLFxuICAgICAgICBwYXJhbS5mYWN0b3IsXG4gICAgICAgIDAuMFxuICAgICAgKTtcbiAgICB9ICk7XG5cbiAgICB0aGlzLnNhbXBsZXMuZm9yRWFjaCggKCBzYW1wbGUgKSA9PiB7XG4gICAgICBwcm9ncmFtLnByb2dyYW0udW5pZm9ybVRleHR1cmUoICdzYW1wbGVfJyArIHNhbXBsZS5uYW1lLCBzYW1wbGUudGV4dHVyZSApO1xuICAgICAgcHJvZ3JhbS5wcm9ncmFtLnVuaWZvcm00ZihcbiAgICAgICAgJ3NhbXBsZV8nICsgc2FtcGxlLm5hbWUgKyAnX21ldGEnLFxuICAgICAgICBzYW1wbGUudGV4dHVyZS53aWR0aCxcbiAgICAgICAgc2FtcGxlLnRleHR1cmUuaGVpZ2h0LFxuICAgICAgICBzYW1wbGUuc2FtcGxlUmF0ZSxcbiAgICAgICAgc2FtcGxlLmR1cmF0aW9uXG4gICAgICApO1xuICAgIH0gKTtcblxuICAgIHByb2dyYW0ucHJvZ3JhbS5hdHRyaWJ1dGUoICdvZmYnLCB0aGlzLl9fYnVmZmVyT2ZmLCAxICk7XG4gICAgcHJvZ3JhbS5wcm9ncmFtLnVuaWZvcm0xZiggJ2JwbScsIHRoaXMuYnBtICk7XG4gICAgcHJvZ3JhbS5wcm9ncmFtLnVuaWZvcm0xZiggJ19kZWx0YVNhbXBsZScsIDEuMCAvIHNhbXBsZVJhdGUgKTtcbiAgICBwcm9ncmFtLnByb2dyYW0udW5pZm9ybTRmKFxuICAgICAgJ3RpbWVMZW5ndGgnLFxuICAgICAgYmVhdFNlY29uZHMsXG4gICAgICBiYXJTZWNvbmRzLFxuICAgICAgc2l4dGVlbkJhclNlY29uZHMsXG4gICAgICAxRTE2XG4gICAgKTtcbiAgICBwcm9ncmFtLnByb2dyYW0udW5pZm9ybTRmKFxuICAgICAgJ190aW1lSGVhZCcsXG4gICAgICBiZWF0LFxuICAgICAgYmFyLFxuICAgICAgc2l4dGVlbkJhcixcbiAgICAgIHRpbWVcbiAgICApO1xuXG4gICAgdGhpcy5fX2dsQ2F0LnVzZVByb2dyYW0oIHByb2dyYW0ucHJvZ3JhbSwgKCkgPT4ge1xuICAgICAgdGhpcy5fX2dsQ2F0LmJpbmRUcmFuc2Zvcm1GZWVkYmFjayggdGhpcy5fX3RyYW5zZm9ybUZlZWRiYWNrLCAoKSA9PiB7XG4gICAgICAgIGdsLmVuYWJsZSggZ2wuUkFTVEVSSVpFUl9ESVNDQVJEICk7XG4gICAgICAgIGdsLmJlZ2luVHJhbnNmb3JtRmVlZGJhY2soIGdsLlBPSU5UUyApO1xuICAgICAgICBnbC5kcmF3QXJyYXlzKCBnbC5QT0lOVFMsIGZpcnN0LCBjb3VudCApO1xuICAgICAgICBnbC5lbmRUcmFuc2Zvcm1GZWVkYmFjaygpO1xuICAgICAgICBnbC5kaXNhYmxlKCBnbC5SQVNURVJJWkVSX0RJU0NBUkQgKTtcbiAgICAgIH0gKTtcbiAgICB9ICk7XG5cbiAgICBnbC5mbHVzaCgpO1xuXG4gICAgY29uc3Qgb3V0TCA9IGJ1ZmZlci5nZXRDaGFubmVsRGF0YSggMCApO1xuICAgIHRoaXMuX19nbENhdC5iaW5kVmVydGV4QnVmZmVyKCB0aGlzLl9fYnVmZmVyVHJhbnNmb3JtRmVlZGJhY2tzWyAwIF0sICgpID0+IHtcbiAgICAgIGdsLmdldEJ1ZmZlclN1YkRhdGEoXG4gICAgICAgIGdsLkFSUkFZX0JVRkZFUixcbiAgICAgICAgMCxcbiAgICAgICAgb3V0TCxcbiAgICAgICAgZmlyc3QsXG4gICAgICAgIGNvdW50XG4gICAgICApO1xuICAgIH0gKTtcblxuICAgIGNvbnN0IG91dFIgPSBidWZmZXIuZ2V0Q2hhbm5lbERhdGEoIDEgKTtcbiAgICB0aGlzLl9fZ2xDYXQuYmluZFZlcnRleEJ1ZmZlciggdGhpcy5fX2J1ZmZlclRyYW5zZm9ybUZlZWRiYWNrc1sgMSBdLCAoKSA9PiB7XG4gICAgICBnbC5nZXRCdWZmZXJTdWJEYXRhKFxuICAgICAgICBnbC5BUlJBWV9CVUZGRVIsXG4gICAgICAgIDAsXG4gICAgICAgIG91dFIsXG4gICAgICAgIGZpcnN0LFxuICAgICAgICBjb3VudFxuICAgICAgKTtcbiAgICB9ICk7XG4gIH1cblxuICBwcml2YXRlIF9fc2V0Q3VlU3RhdHVzKCBjdWVTdGF0dXM6ICdub25lJyB8ICdjb21waWxpbmcnIHwgJ3JlYWR5JyB8ICdhcHBseWluZycgKTogdm9pZCB7XG4gICAgdGhpcy5fX2N1ZVN0YXR1cyA9IGN1ZVN0YXR1cztcbiAgICB0aGlzLl9fZW1pdCggJ2NoYW5nZUN1ZVN0YXR1cycsIHsgY3VlU3RhdHVzIH0gKTtcbiAgfVxuXG4gIHByaXZhdGUgX19wcm9jZXNzRXJyb3JNZXNzYWdlKCBlcnJvcjogYW55ICk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IHN0cjogc3RyaW5nIHwgdW5kZWZpbmVkID0gZXJyb3I/Lm1lc3NhZ2UgPz8gZXJyb3I7XG4gICAgaWYgKCAhc3RyICkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKCAvRVJST1I6IChcXGQrKTooXFxkKykvZywgKCBtYXRjaCwgLi4uYXJncyApID0+IHtcbiAgICAgIGNvbnN0IGxpbmUgPSBwYXJzZUludCggYXJnc1sgMSBdICkgLSBzaGFkZXJjaHVua1ByZUxpbmVzICsgMTtcbiAgICAgIHJldHVybiBgRVJST1I6ICR7IGFyZ3NbIDAgXSB9OiR7IGxpbmUgfWA7XG4gICAgfSApO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2F2ZW5lcmREZWNrIGV4dGVuZHMgRXZlbnRFbWl0dGFibGU8e1xuICB1cGRhdGU6IHZvaWQ7XG4gIGNoYW5nZUN1ZVN0YXR1czogeyBjdWVTdGF0dXM6ICdub25lJyB8ICdjb21waWxpbmcnIHwgJ3JlYWR5JyB8ICdhcHBseWluZycgfTtcbiAgbG9hZFNhbXBsZTogeyBuYW1lOiBzdHJpbmc7IHNhbXBsZVJhdGU6IG51bWJlcjsgZHVyYXRpb246IG51bWJlciB9XG4gIGRlbGV0ZVNhbXBsZTogeyBuYW1lOiBzdHJpbmcgfTtcbiAgY2hhbmdlQlBNOiB7IGJwbTogbnVtYmVyIH07XG4gIGVycm9yOiB7IGVycm9yOiBzdHJpbmcgfCBudWxsIH07XG59PiB7fVxuYXBwbHlNaXhpbnMoIFdhdmVuZXJkRGVjaywgWyBFdmVudEVtaXR0YWJsZSBdICk7XG4iLCJleHBvcnQgeyBXYXZlbmVyZERlY2sgfSBmcm9tICcuL1dhdmVuZXJkRGVjayc7XG5leHBvcnQgeyBCZWF0TWFuYWdlciB9IGZyb20gJy4vQmVhdE1hbmFnZXInO1xuXG5pbXBvcnQgeyBXYXZlbmVyZERlY2sgfSBmcm9tICcuL1dhdmVuZXJkRGVjayc7XG5leHBvcnQgZGVmYXVsdCBXYXZlbmVyZERlY2s7XG4iLCJleHBvcnQgY29uc3Qgc2hhZGVyY2h1bmtQcmUgPSBgI3ZlcnNpb24gMzAwIGVzXG5cbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcblxuI2RlZmluZSBfUEkgMy4xNDE1OTI2NTM1OVxuXG51bmlmb3JtIGZsb2F0IGJwbTtcbnVuaWZvcm0gdmVjNCB0aW1lTGVuZ3RoO1xudW5pZm9ybSBmbG9hdCBzYW1wbGVSYXRlO1xudW5pZm9ybSBmbG9hdCBfZGVsdGFTYW1wbGU7XG51bmlmb3JtIHZlYzQgX3RpbWVIZWFkO1xuXG5pbiBmbG9hdCBvZmY7XG5cbm91dCBmbG9hdCBvdXRMO1xub3V0IGZsb2F0IG91dFI7XG5cbmZsb2F0IHBhcmFtRmV0Y2goIHZlYzQgcGFyYW0gKSB7XG4gIHJldHVybiBtaXgoIHBhcmFtLngsIHBhcmFtLnksIGV4cCggLXBhcmFtLnogKiBvZmYgKiBfZGVsdGFTYW1wbGUgKSApO1xufVxuXG52ZWMyIHNhbXBsZU5lYXJlc3QoIHNhbXBsZXIyRCBzLCB2ZWM0IG1ldGEsIGZsb2F0IHRpbWUgKSB7XG4gIGlmICggbWV0YS53IDwgdGltZSApIHsgcmV0dXJuIHZlYzIoIDAuMCApOyB9XG4gIGZsb2F0IHggPSB0aW1lIC8gbWV0YS54ICogbWV0YS56O1xuICB2ZWMyIHV2ID0gZnJhY3QoIHZlYzIoXG4gICAgeCxcbiAgICBmbG9vciggeCApIC8gbWV0YS55XG4gICkgKSArIDAuNSAvIG1ldGEueHk7XG4gIHJldHVybiB0ZXh0dXJlKCBzLCB1diApLnh5O1xufVxuXG4vLyBJIGhhdmUgMCUgY29uZmlkZW5jZSB0aGF0IHRoZSBhbGdvcml0aG0gaXMgcGVyZmVjdFxudmVjMiBzYW1wbGVTaW5jKCBzYW1wbGVyMkQgcywgdmVjNCBtZXRhLCBmbG9hdCB0aW1lICkge1xuICBpZiAoIG1ldGEudyA8IHRpbWUgKSB7IHJldHVybiB2ZWMyKCAwLjAgKTsgfVxuICB2ZWMyIHN1bSA9IHZlYzIoIDAuMCApO1xuICBmbG9hdCBkZWYgPSAwLjUgLSBmcmFjdCggdGltZSAqIG1ldGEueiApO1xuICBmb3IgKCBpbnQgaSA9IC01OyBpIDw9IDU7IGkgKysgKSB7XG4gICAgZmxvYXQgeCA9IGZsb29yKCB0aW1lICogbWV0YS56ICsgZmxvYXQoIGkgKSApIC8gbWV0YS54O1xuICAgIGZsb2F0IGRlZnQgPSBkZWYgKyBmbG9hdCggaSApO1xuICAgIHZlYzIgdXYgPSBmcmFjdCggdmVjMihcbiAgICAgIHgsXG4gICAgICBmbG9vciggeCApIC8gbWV0YS55XG4gICAgKSApICsgMC41IC8gbWV0YS54eTtcbiAgICBzdW0gKz0gdGV4dHVyZSggcywgdXYgKS54eSAqIG1pbiggc2luKCBkZWZ0ICogX1BJICkgLyBkZWZ0IC8gX1BJLCAxLjAgKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufVxuYDtcblxuZXhwb3J0IGNvbnN0IHNoYWRlcmNodW5rUHJlTGluZXMgPSBzaGFkZXJjaHVua1ByZS5zcGxpdCggJ1xcbicgKS5sZW5ndGg7XG5cbmV4cG9ydCBjb25zdCBzaGFkZXJjaHVua1Bvc3QgPSBgdm9pZCBtYWluKCkge1xuICB2ZWMyIG91dDIgPSBtYWluQXVkaW8oIG1vZCggX3RpbWVIZWFkICsgb2ZmICogX2RlbHRhU2FtcGxlLCB0aW1lTGVuZ3RoICkgKTtcbiAgb3V0TCA9IG91dDIueDtcbiAgb3V0UiA9IG91dDIueTtcbn1gO1xuIiwiLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vYW5keXdlci90eXBlZC1lbWl0dGVyL2Jsb2IvbWFzdGVyL2luZGV4LmQudHNcblxuZXhwb3J0IHR5cGUgRXZlbnRMaXN0ZW5lcjxUPiA9ICggZXZlbnQ6IFQgKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRFbWl0dGFibGU8VEV2ZW50cyBleHRlbmRzIHsgWyB0eXBlOiBzdHJpbmcgXTogYW55IH0+IHtcbiAgcHJvdGVjdGVkIF9fZXZlbnRMaXN0ZW5lcnM/OiBNYXA8a2V5b2YgVEV2ZW50cywgRXZlbnRMaXN0ZW5lcjxhbnk+W10+O1xuXG4gIHB1YmxpYyBvbjxUVHlwZSBleHRlbmRzIGtleW9mIFRFdmVudHMgJiBzdHJpbmc+KFxuICAgIHR5cGU6IFRUeXBlLFxuICAgIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyPFRFdmVudHNbIFRUeXBlIF0+XG4gICk6IEV2ZW50TGlzdGVuZXI8VEV2ZW50c1sgVFR5cGUgXT4ge1xuICAgIHRoaXMuX19ldmVudExpc3RlbmVycyA9IHRoaXMuX19ldmVudExpc3RlbmVycyB8fCBuZXcgTWFwKCk7XG4gICAgbGV0IGFycmF5ID0gdGhpcy5fX2V2ZW50TGlzdGVuZXJzLmdldCggdHlwZSApO1xuICAgIGlmICggIWFycmF5ICkge1xuICAgICAgYXJyYXkgPSBbXTtcbiAgICAgIHRoaXMuX19ldmVudExpc3RlbmVycy5zZXQoIHR5cGUsIGFycmF5ICk7XG4gICAgfVxuXG4gICAgYXJyYXkucHVzaCggbGlzdGVuZXIgKTtcblxuICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgfVxuXG4gIHB1YmxpYyBvZmY8VFR5cGUgZXh0ZW5kcyBrZXlvZiBURXZlbnRzICYgc3RyaW5nPihcbiAgICB0eXBlOiBUVHlwZSxcbiAgICBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcjxURXZlbnRzWyBUVHlwZSBdPlxuICApOiB2b2lkIHtcbiAgICB0aGlzLl9fZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLl9fZXZlbnRMaXN0ZW5lcnMgfHwgbmV3IE1hcCgpO1xuICAgIGxldCBhcnJheSA9IHRoaXMuX19ldmVudExpc3RlbmVycy5nZXQoIHR5cGUgKTtcbiAgICBpZiAoICFhcnJheSApIHtcbiAgICAgIGFycmF5ID0gW107XG4gICAgICB0aGlzLl9fZXZlbnRMaXN0ZW5lcnMuc2V0KCB0eXBlLCBhcnJheSApO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4ID0gYXJyYXkuaW5kZXhPZiggbGlzdGVuZXIgKTtcbiAgICBpZiAoIGluZGV4ICE9PSAtMSApIHtcbiAgICAgIGFycmF5LnNwbGljZSggaW5kZXgsIDEgKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX19lbWl0PFRUeXBlIGV4dGVuZHMga2V5b2YgVEV2ZW50cz4oXG4gICAgLi4uWyB0eXBlLCBldmVudCBdOiBURXZlbnRzWyBUVHlwZSBdIGV4dGVuZHMgdm9pZCA/IFsgVFR5cGUgXSA6IFsgVFR5cGUsIFRFdmVudHNbIFRUeXBlIF0gXVxuICApOiB2b2lkIHtcbiAgICB0aGlzLl9fZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLl9fZXZlbnRMaXN0ZW5lcnMgfHwgbmV3IE1hcCgpO1xuICAgIHRoaXMuX19ldmVudExpc3RlbmVycy5nZXQoIHR5cGUgKT8uZm9yRWFjaCggKCBsaXN0ZW5lciApID0+IGxpc3RlbmVyKCBldmVudCApICk7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBseU1peGlucyggZGVyaXZlZEN0b3I6IGFueSwgYmFzZUN0b3JzOiBhbnlbXSApOiB2b2lkIHtcbiAgYmFzZUN0b3JzLmZvckVhY2goICggYmFzZUN0b3IgKSA9PiB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoIGJhc2VDdG9yLnByb3RvdHlwZSApLmZvckVhY2goICggbmFtZSApID0+IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgZGVyaXZlZEN0b3IucHJvdG90eXBlLFxuICAgICAgICBuYW1lLFxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCBiYXNlQ3Rvci5wcm90b3R5cGUsIG5hbWUgKSFcbiAgICAgICk7XG4gICAgfSApO1xuICB9ICk7XG59XG4iLCIvKipcbiAqIGBsZXJwYCwgb3IgYG1peGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlcnAoIGE6IG51bWJlciwgYjogbnVtYmVyLCB4OiBudW1iZXIgKTogbnVtYmVyIHtcbiAgcmV0dXJuIGEgKyAoIGIgLSBhICkgKiB4O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1vZCggdmFsdWU6IG51bWJlciwgZGl2aXNvcjogbnVtYmVyICk6IG51bWJlciB7XG4gIHJldHVybiB2YWx1ZSAtIE1hdGguZmxvb3IoIHZhbHVlIC8gZGl2aXNvciApICogZGl2aXNvcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=