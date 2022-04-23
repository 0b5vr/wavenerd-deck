/*!
* @0b5vr/wavenerd-deck v0.5.2
* a
*
* Copyright (c) 2020-2022 0b5vr
* @0b5vr/wavenerd-deck is distributed under MIT License
* https://github.com/0b5vr/wavenerd-deck/blob/release/LICENSE
*/
var WAVENERD_DECK = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    BeatManager: () => BeatManager,
    WavenerdDeck: () => WavenerdDeck,
    default: () => src_default
  });

  // src/utils/EventEmittable.ts
  var EventEmittable = class {
    constructor() {
      __publicField(this, "__eventListeners");
    }
    on(type, listener) {
      this.__eventListeners = this.__eventListeners || /* @__PURE__ */ new Map();
      let array = this.__eventListeners.get(type);
      if (!array) {
        array = [];
        this.__eventListeners.set(type, array);
      }
      array.push(listener);
      return listener;
    }
    off(type, listener) {
      this.__eventListeners = this.__eventListeners || /* @__PURE__ */ new Map();
      let array = this.__eventListeners.get(type);
      if (!array) {
        array = [];
        this.__eventListeners.set(type, array);
      }
      const index = array.indexOf(listener);
      if (index !== -1) {
        array.splice(index, 1);
      }
    }
    __emit(...[type, event]) {
      var _a;
      this.__eventListeners = this.__eventListeners || /* @__PURE__ */ new Map();
      (_a = this.__eventListeners.get(type)) == null ? void 0 : _a.forEach((listener) => listener(event));
    }
  };

  // src/utils/applyMixins.ts
  function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
      });
    });
  }

  // src/utils/mod.ts
  function mod(value, divisor) {
    return value - Math.floor(value / divisor) * divisor;
  }

  // src/BeatManager.ts
  var BeatManager = class {
    constructor() {
      __publicField(this, "__bpm", 140);
      __publicField(this, "__time", 0);
      __publicField(this, "__beat", 0);
      __publicField(this, "__bar", 0);
      __publicField(this, "__sixteenBar", 0);
    }
    static CalcBeatSeconds(bpm) {
      return 60 / bpm;
    }
    static CalcBarSeconds(bpm) {
      return 240 / bpm;
    }
    static CalcSixteenBarSeconds(bpm) {
      return 3840 / bpm;
    }
    get bpm() {
      return this.__bpm;
    }
    set bpm(value) {
      const prevBpm = this.__bpm;
      this.__bpm = Math.max(0, value);
      this.__sixteenBar = this.__sixteenBar * prevBpm / this.__bpm;
      this.__emit("changeBPM", { bpm: this.__bpm });
    }
    get beatSeconds() {
      return BeatManager.CalcBeatSeconds(this.__bpm);
    }
    get barSeconds() {
      return BeatManager.CalcBarSeconds(this.__bpm);
    }
    get sixteenBarSeconds() {
      return BeatManager.CalcSixteenBarSeconds(this.__bpm);
    }
    get time() {
      return this.__time;
    }
    get beat() {
      return this.__beat;
    }
    get bar() {
      return this.__bar;
    }
    get sixteenBar() {
      return this.__sixteenBar;
    }
    reset() {
      this.__time = 0;
      this.__sixteenBar = 0;
    }
    update(time) {
      const beatSeconds = BeatManager.CalcBeatSeconds(this.__bpm);
      const barSeconds = BeatManager.CalcBarSeconds(this.__bpm);
      const sixteenBarSeconds = BeatManager.CalcSixteenBarSeconds(this.__bpm);
      const delta = time - this.__time;
      this.__sixteenBar = mod(this.__sixteenBar + delta, sixteenBarSeconds);
      this.__bar = mod(this.__sixteenBar, barSeconds);
      this.__beat = mod(this.__bar, beatSeconds);
      this.__time = time;
      const event = {
        time,
        bpm: this.__bpm,
        beat: this.__beat,
        bar: this.__bar,
        sixteenBar: this.__sixteenBar
      };
      this.__emit("update", event);
      return event;
    }
  };
  applyMixins(BeatManager, [EventEmittable]);

  // src/BufferReaderProcessor.worklet.js
  var BufferReaderProcessor_worklet_default = "/* eslint-disable */\n\nconst BLOCK_SIZE = 128;\nconst CHANNELS = 2;\nconst BUFFER_SIZE_PER_CHANNEL = 65536;\n\nclass BufferReaderProcessor extends AudioWorkletProcessor {\n  constructor() {\n    super();\n\n    this.blocks = 0;\n    this.buffer = new Float32Array( CHANNELS * BUFFER_SIZE_PER_CHANNEL );\n\n    this.port.onmessage = ( { data } ) => {\n      this.buffer.set( ...data );\n    };\n  }\n\n  process( inputs, outputs, parameters ) {\n    const buffer = this.buffer;\n    if ( buffer == null ) { return true; }\n\n    const head = ( BLOCK_SIZE * this.blocks ) % BUFFER_SIZE_PER_CHANNEL;\n\n    outputs[ 0 ].forEach( ( ch, iCh ) => {\n      const chHead = BUFFER_SIZE_PER_CHANNEL * iCh + head;\n      ch.set( buffer.subarray( chHead, chHead + BLOCK_SIZE ) );\n    } );\n\n    this.blocks ++;\n\n    this.port.postMessage( this.blocks );\n\n    return true;\n  }\n}\n\nregisterProcessor( 'buffer-reader-processor', BufferReaderProcessor );\n";

  // src/BufferReaderNode.ts
  var BLOCK_SIZE = 128;
  var CHANNELS = 2;
  var BUFFER_SIZE_PER_CHANNEL = 65536;
  var processorBlob = new Blob([BufferReaderProcessor_worklet_default], { type: "text/javascript" });
  var processorUrl = URL.createObjectURL(processorBlob);
  var BufferReaderNode = class extends AudioWorkletNode {
    constructor(audio) {
      super(audio, "buffer-reader-processor", {
        numberOfInputs: 0,
        numberOfOutputs: 1,
        outputChannelCount: [CHANNELS]
      });
      __publicField(this, "__readBlocks");
      this.__readBlocks = 0;
      this.port.onmessage = ({ data }) => {
        this.__readBlocks = data;
      };
    }
    get readBlocks() {
      return this.__readBlocks;
    }
    static addModule(audio) {
      return audio.audioWorklet.addModule(processorUrl);
    }
    write(channel, block, offset, buffer) {
      const totalOffset = BUFFER_SIZE_PER_CHANNEL * channel + BLOCK_SIZE * block % BUFFER_SIZE_PER_CHANNEL + offset;
      this.port.postMessage([buffer, totalOffset]);
    }
  };

  // src/shaderchunks.ts
  var shaderchunkPre = `#version 300 es

precision highp float;

#define _PI 3.14159265359

uniform float bpm;
uniform vec4 timeLength;
uniform float sampleRate;
uniform float _deltaSample;
uniform vec4 _timeHead;

in float off;

out float outL;
out float outR;

float paramFetch( vec4 param ) {
  return mix( param.x, param.y, exp( -param.z * off * _deltaSample ) );
}

vec2 sampleNearest( sampler2D s, vec4 meta, float time ) {
  if ( meta.w < time ) { return vec2( 0.0 ); }
  float x = time / meta.x * meta.z;
  vec2 uv = fract( vec2(
    x,
    floor( x ) / meta.y
  ) ) + 0.5 / meta.xy;
  return texture( s, uv ).xy;
}

// I have 0% confidence that the algorithm is perfect
vec2 sampleSinc( sampler2D s, vec4 meta, float time ) {
  if ( meta.w < time ) { return vec2( 0.0 ); }
  vec2 sum = vec2( 0.0 );
  float def = 0.5 - fract( time * meta.z );
  for ( int i = -5; i <= 5; i ++ ) {
    float x = floor( time * meta.z + float( i ) ) / meta.x;
    float deft = def + float( i );
    vec2 uv = fract( vec2(
      x,
      floor( x ) / meta.y
    ) ) + 0.5 / meta.xy;
    sum += texture( s, uv ).xy * min( sin( deft * _PI ) / deft / _PI, 1.0 );
  }
  return sum;
}
`;
  var shaderchunkPreLines = shaderchunkPre.split("\n").length;
  var shaderchunkPost = `void main() {
  vec2 out2 = mainAudio( mod( _timeHead + off * _deltaSample, timeLength ) );
  outL = out2.x;
  outR = out2.y;
}`;

  // src/utils/lazyProgram.ts
  function lazyProgram(gl, vert, frag, options = {}) {
    var _a, _b;
    const { extParallel, tfVaryings, tfBufferMode } = options;
    let vertexShader = null;
    let fragmentShader = null;
    let program = null;
    try {
      vertexShader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(vertexShader, vert);
      gl.compileShader(vertexShader);
      if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        throw new Error((_a = gl.getShaderInfoLog(vertexShader)) != null ? _a : void 0);
      }
      fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(fragmentShader, frag);
      gl.compileShader(fragmentShader);
      if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        throw new Error((_b = gl.getShaderInfoLog(fragmentShader)) != null ? _b : void 0);
      }
      program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      if (tfVaryings) {
        gl.transformFeedbackVaryings(program, tfVaryings, tfBufferMode != null ? tfBufferMode : gl.SEPARATE_ATTRIBS);
      }
      gl.linkProgram(program);
      return new Promise((resolve, reject) => {
        const update = () => {
          var _a2;
          if (!extParallel || gl.getProgramParameter(program, extParallel.COMPLETION_STATUS_KHR) === true) {
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
              gl.deleteProgram(program);
              reject(new Error((_a2 = gl.getProgramInfoLog(program)) != null ? _a2 : void 0));
            } else {
              resolve(program);
            }
            return;
          }
          setTimeout(update, 10);
        };
        update();
      });
    } catch (e) {
      gl.deleteProgram(program);
      return Promise.reject(e);
    } finally {
      gl.deleteShader(fragmentShader);
      gl.deleteShader(vertexShader);
    }
  }

  // src/Renderer.ts
  var BLOCK_SIZE2 = 128;
  var Renderer = class {
    constructor(gl, blocksPerRender) {
      __publicField(this, "gl");
      __publicField(this, "blocksPerRender");
      __publicField(this, "__extParallel");
      __publicField(this, "__offsetBuffer");
      __publicField(this, "__tfBuffers");
      __publicField(this, "__transformFeedback");
      __publicField(this, "__program");
      __publicField(this, "__programCue");
      __publicField(this, "__textures");
      __publicField(this, "__dstArrays");
      this.blocksPerRender = blocksPerRender;
      this.gl = gl;
      this.__extParallel = gl.getExtension("KHR_parallel_shader_compile");
      this.__offsetBuffer = this.__createOffsetBuffer();
      this.__tfBuffers = [
        this.__createTFBuffer(),
        this.__createTFBuffer()
      ];
      this.__transformFeedback = this.__createTransformFeedback(this.__tfBuffers);
      this.__dstArrays = [
        new Float32Array(this.framesPerRender),
        new Float32Array(this.framesPerRender)
      ];
      this.__program = null;
      this.__programCue = null;
      this.__textures = /* @__PURE__ */ new Map();
    }
    get framesPerRender() {
      return BLOCK_SIZE2 * this.blocksPerRender;
    }
    dispose() {
      const { gl } = this;
      gl.deleteBuffer(this.__offsetBuffer);
      gl.deleteBuffer(this.__tfBuffers[0]);
      gl.deleteBuffer(this.__tfBuffers[1]);
      gl.deleteTransformFeedback(this.__transformFeedback);
      gl.deleteProgram(this.__program);
      gl.deleteProgram(this.__programCue);
      this.__textures.forEach((texture) => {
        gl.deleteTexture(texture);
      });
    }
    compile(code) {
      return __async(this, null, function* () {
        const { gl } = this;
        const program = yield lazyProgram(gl, shaderchunkPre + code + shaderchunkPost, "#version 300 es\nvoid main(){discard;}", {
          extParallel: this.__extParallel,
          tfVaryings: ["outL", "outR"]
        }).catch((error) => {
          this.__programCue = null;
          gl.deleteProgram(this.__programCue);
          throw error;
        });
        if (program == null) {
          return;
        }
        this.__programCue = program;
      });
    }
    applyCue() {
      const { gl } = this;
      if (this.__programCue == null) {
        return;
      }
      const prevProgram = this.__program;
      this.__program = this.__programCue;
      if (prevProgram != null) {
        gl.deleteProgram(prevProgram);
      }
      this.__programCue = null;
    }
    uploadTexture(textureName, width, height, source) {
      const { gl } = this;
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, width, height, 0, gl.RGBA, gl.FLOAT, source);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.bindTexture(gl.TEXTURE_2D, null);
      this.__textures.set(textureName, texture);
    }
    deleteTexture(textureName) {
      const { gl } = this;
      const texture = this.__textures.get(textureName);
      if (texture == null) {
        return;
      }
      gl.deleteTexture(texture);
      this.__textures.delete(textureName);
    }
    uniform1f(name, value) {
      const { gl, __program: program } = this;
      if (program == null) {
        return;
      }
      const location = gl.getUniformLocation(program, name);
      gl.useProgram(program);
      gl.uniform1f(location, value);
      gl.useProgram(null);
    }
    uniform4f(name, ...value) {
      const { gl, __program: program } = this;
      if (program == null) {
        return;
      }
      const location = gl.getUniformLocation(program, name);
      gl.useProgram(program);
      gl.uniform4f(location, ...value);
      gl.useProgram(null);
    }
    uniformTexture(name, textureName, unit) {
      const { gl, __program: program } = this;
      if (program == null) {
        return;
      }
      const texture = this.__textures.get(textureName);
      if (texture == null) {
        return;
      }
      const location = gl.getUniformLocation(program, name);
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.useProgram(program);
      gl.uniform1i(location, unit);
      gl.useProgram(null);
    }
    render(first, count) {
      return __async(this, null, function* () {
        const { gl, __program: program } = this;
        if (program == null) {
          return this.__dstArrays;
        }
        const attribLocation = gl.getAttribLocation(program, "off");
        gl.bindBuffer(gl.ARRAY_BUFFER, this.__offsetBuffer);
        gl.enableVertexAttribArray(attribLocation);
        gl.vertexAttribPointer(attribLocation, 1, gl.FLOAT, false, 0, 0);
        gl.useProgram(program);
        gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, this.__transformFeedback);
        gl.enable(gl.RASTERIZER_DISCARD);
        gl.beginTransformFeedback(gl.POINTS);
        gl.drawArrays(gl.POINTS, first, count);
        gl.endTransformFeedback();
        gl.disable(gl.RASTERIZER_DISCARD);
        gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
        gl.useProgram(null);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.__tfBuffers[0]);
        gl.getBufferSubData(gl.ARRAY_BUFFER, 0, this.__dstArrays[0], first, count);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.__tfBuffers[1]);
        gl.getBufferSubData(gl.ARRAY_BUFFER, 0, this.__dstArrays[1], first, count);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        return this.__dstArrays;
      });
    }
    __createOffsetBuffer() {
      const { gl, framesPerRender } = this;
      const array = new Float32Array(framesPerRender).map((_, i) => i);
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      return buffer;
    }
    __createTFBuffer() {
      const { gl, framesPerRender } = this;
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, framesPerRender * Float32Array.BYTES_PER_ELEMENT, gl.DYNAMIC_COPY);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      return buffer;
    }
    __createTransformFeedback(tfBuffers) {
      const { gl } = this;
      const tf = gl.createTransformFeedback();
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, tf);
      gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, tfBuffers[0]);
      gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 1, tfBuffers[1]);
      gl.bindTransformFeedback(gl.TRANSFORM_FEEDBACK, null);
      return tf;
    }
  };

  // src/utils/lerp.ts
  function lerp(a, b, x) {
    return a + (b - a) * x;
  }

  // src/WavenerdDeck.ts
  var BLOCK_SIZE3 = 128;
  var WavenerdDeck = class {
    constructor({
      gl,
      audio,
      hostDeck,
      latencyBlocks,
      blocksPerRender,
      bpm
    }) {
      __publicField(this, "hostDeck");
      __publicField(this, "latencyBlocks");
      __publicField(this, "__cueStatus", "none");
      __publicField(this, "__blocksPerRender");
      __publicField(this, "__lastUpdatedTime");
      __publicField(this, "__renderer");
      __publicField(this, "__lastError");
      __publicField(this, "__audio");
      __publicField(this, "__node");
      __publicField(this, "__bufferReaderNode");
      __publicField(this, "__bufferWriteBlocks");
      __publicField(this, "__beatManager");
      __publicField(this, "__program");
      __publicField(this, "__programCue");
      __publicField(this, "__programSwapTime");
      __publicField(this, "__params", /* @__PURE__ */ new Map());
      __publicField(this, "__samples", /* @__PURE__ */ new Map());
      this.latencyBlocks = latencyBlocks != null ? latencyBlocks : 16;
      this.__blocksPerRender = blocksPerRender != null ? blocksPerRender : 16;
      if (hostDeck) {
        this.hostDeck = hostDeck;
      }
      this.__beatManager = new BeatManager();
      this.__beatManager.bpm = bpm != null ? bpm : 140;
      this.__beatManager.on("changeBPM", ({ bpm: bpm2 }) => {
        this.__emit("changeBPM", { bpm: bpm2 });
      });
      this.__lastUpdatedTime = 0;
      this.__renderer = new Renderer(gl, this.blocksPerRender);
      this.__program = null;
      this.__programCue = null;
      this.__programSwapTime = 0;
      this.__audio = audio;
      this.__node = audio.createGain();
      BufferReaderNode.addModule(audio).then(() => {
        this.__bufferReaderNode = new BufferReaderNode(audio);
        this.__bufferReaderNode.connect(this.__node);
      });
      this.__bufferWriteBlocks = 0;
    }
    get cueStatus() {
      return this.__cueStatus;
    }
    get blocksPerRender() {
      return this.__blocksPerRender;
    }
    get framesPerRender() {
      return BLOCK_SIZE3 * this.__blocksPerRender;
    }
    get bpm() {
      return this.beatManager.bpm;
    }
    set bpm(value) {
      this.beatManager.bpm = value;
    }
    get lastError() {
      return this.__lastError;
    }
    get audio() {
      return this.__audio;
    }
    get node() {
      return this.__node;
    }
    get sampleRate() {
      return this.__audio.sampleRate;
    }
    get beatManager() {
      var _a;
      const hostDeckBeatManager = (_a = this.hostDeck) == null ? void 0 : _a.beatManager;
      if (hostDeckBeatManager) {
        return hostDeckBeatManager;
      }
      return this.__beatManager;
    }
    get params() {
      return this.__params;
    }
    get samples() {
      if (this.hostDeck) {
        return this.hostDeck.samples;
      }
      return this.__samples;
    }
    dispose() {
      var _a;
      this.__setCueStatus("none");
      this.__renderer.dispose();
      (_a = this.__bufferReaderNode) == null ? void 0 : _a.disconnect();
    }
    compile(code) {
      return __async(this, null, function* () {
        this.__setCueStatus("compiling");
        yield this.__renderer.compile(code).catch((e) => {
          const error = this.__processErrorMessage(e);
          this.__programCue = null;
          this.__setCueStatus("none");
          this.__emit("error", { error });
          this.__lastError = error;
          throw new Error(error != null ? error : void 0);
        });
        const requiredSamples = /* @__PURE__ */ new Set();
        for (const name of this.samples.keys()) {
          if (code.search("sample_" + name) !== -1) {
            requiredSamples.add(name);
          }
        }
        this.__programCue = {
          code,
          requiredSamples
        };
        this.__setCueStatus("ready");
        this.__emit("error", { error: null });
        this.__lastError = null;
      });
    }
    applyCue() {
      if (this.__cueStatus === "ready") {
        this.__setCueStatus("applying");
        this.__programSwapTime = this.beatManager.time - this.beatManager.bar + this.beatManager.barSeconds;
      }
    }
    setParam(name, value, factor = 50) {
      const param = this.params.get(name);
      if (param) {
        param.target = value;
        param.factor = factor;
      } else {
        this.params.set(name, { name, target: value, value, factor });
      }
      this.__emit("setParam", { name, value, factor });
    }
    loadSample(name, inputBuffer) {
      return __async(this, null, function* () {
        const audioBuffer = yield this.__audio.decodeAudioData(inputBuffer);
        const { sampleRate, duration } = audioBuffer;
        const frames = audioBuffer.length;
        const width = 2048;
        const lengthCeiled = Math.ceil(frames / 2048);
        const height = lengthCeiled;
        const buffer = new Float32Array(width * height * 4);
        const channels = audioBuffer.numberOfChannels;
        const dataL = audioBuffer.getChannelData(0);
        const dataR = audioBuffer.getChannelData(channels === 1 ? 0 : 1);
        for (let i = 0; i < frames; i++) {
          buffer[i * 4 + 0] = dataL[i];
          buffer[i * 4 + 1] = dataR[i];
        }
        this.__renderer.uploadTexture(name, width, height, buffer);
        this.samples.set(name, {
          name,
          width,
          height,
          sampleRate,
          duration
        });
        if (this.__program && this.__program.code.search("sample_" + name)) {
          this.__program.requiredSamples.add(name);
        }
        if (this.__programCue && this.__programCue.code.search("sample_" + name)) {
          this.__programCue.requiredSamples.add(name);
        }
        this.__emit("loadSample", { name, duration, sampleRate });
      });
    }
    deleteSample(name) {
      if (this.samples.has(name)) {
        this.samples.delete(name);
        this.__renderer.deleteTexture(name);
        this.__emit("deleteSample", { name });
      }
    }
    update() {
      return __async(this, null, function* () {
        const bufferReaderNode = this.__bufferReaderNode;
        if (bufferReaderNode == null) {
          return;
        }
        const { readBlocks } = bufferReaderNode;
        const { sampleRate, blocksPerRender, framesPerRender } = this;
        const blockAhead = this.__bufferWriteBlocks - readBlocks;
        if (blockAhead > this.latencyBlocks) {
          return;
        }
        if (blockAhead < 0) {
          this.__bufferWriteBlocks = (Math.floor(readBlocks / blocksPerRender) + 1) * blocksPerRender;
        }
        const genTime = BLOCK_SIZE3 * this.__bufferWriteBlocks / sampleRate;
        this.beatManager.update(genTime);
        let beginNext = this.__cueStatus === "applying" ? Math.floor((this.__programSwapTime - genTime) * sampleRate) : Infinity;
        beginNext = Math.min(beginNext, framesPerRender);
        if (beginNext < 0) {
          this.__setCueStatus("none");
          this.__renderer.applyCue();
          this.__program = this.__programCue;
          this.__programCue = null;
          beginNext = framesPerRender;
        }
        if (this.__program) {
          yield this.__prepareBuffer(0, beginNext);
        }
        if (beginNext < framesPerRender && this.__programCue != null) {
          this.__setCueStatus("none");
          this.__renderer.applyCue();
          this.__program = this.__programCue;
          this.__programCue = null;
          yield this.__prepareBuffer(beginNext, framesPerRender - beginNext);
        }
        this.__bufferWriteBlocks += this.blocksPerRender;
        this.__emit("update");
      });
    }
    __prepareBuffer(first, count) {
      return __async(this, null, function* () {
        const bufferReaderNode = this.__bufferReaderNode;
        if (bufferReaderNode == null) {
          return;
        }
        const {
          time,
          beatSeconds,
          barSeconds,
          sixteenBarSeconds,
          beat,
          bar,
          sixteenBar
        } = this.beatManager;
        const { sampleRate } = this;
        const delta = time - this.__lastUpdatedTime;
        this.__lastUpdatedTime = time;
        this.params.forEach((param) => {
          if (param.factor <= 0) {
            param.value = param.target;
          } else {
            param.value = lerp(param.target, param.value, Math.exp(-param.factor * delta));
          }
          this.__renderer.uniform4f("param_" + param.name, param.target, param.value, param.factor, 0);
        });
        let textureUnit = 0;
        this.samples.forEach((sample) => {
          this.__renderer.uniformTexture("sample_" + sample.name, sample.name, textureUnit);
          textureUnit++;
          this.__renderer.uniform4f("sample_" + sample.name + "_meta", sample.width, sample.height, sample.sampleRate, sample.duration);
        });
        this.__renderer.uniform1f("bpm", this.bpm);
        this.__renderer.uniform1f("_deltaSample", 1 / sampleRate);
        this.__renderer.uniform4f("timeLength", beatSeconds, barSeconds, sixteenBarSeconds, 1e16);
        this.__renderer.uniform4f("_timeHead", beat, bar, sixteenBar, time);
        const [outL, outR] = yield this.__renderer.render(first, count);
        bufferReaderNode.write(0, this.__bufferWriteBlocks, first, outL.subarray(first, first + count));
        bufferReaderNode.write(1, this.__bufferWriteBlocks, first, outR.subarray(first, first + count));
      });
    }
    __setCueStatus(cueStatus) {
      this.__cueStatus = cueStatus;
      this.__emit("changeCueStatus", { cueStatus });
    }
    __processErrorMessage(error) {
      var _a;
      const str = (_a = error == null ? void 0 : error.message) != null ? _a : error;
      if (!str) {
        return null;
      }
      return str.replace(/ERROR: (\d+):(\d+)/g, (match, ...args) => {
        const line = parseInt(args[1]) - shaderchunkPreLines + 1;
        return `ERROR: ${args[0]}:${line}`;
      });
    }
  };
  applyMixins(WavenerdDeck, [EventEmittable]);

  // src/index.ts
  var src_default = WavenerdDeck;
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=wavenerd-deck.iife.js.map
