# wavenerd-deck

[![npm](https://img.shields.io/npm/v/@0b5vr/wavenerd-deck?logo=npm&style=flat-square)](https://www.npmjs.com/package/@0b5vr/wavenerd-deck)

The GLSL live-coding deck engine for [Wavenerd](https://github.com/0b5vr/wavenerd).

wavenerd-deck can compile GLSL fragment shaders and play the rendered result as audio in realtime.
It uses WebGL on OffscreenCanvas/Worker, and Web Audio API.

Mainly indended for use in Wavenerd but can be used as a standalone library. Don't expect a super polished API or thorough support though.

## Install

```sh
npm install @0b5vr/wavenerd-deck
```

## Usage

```js
import { WavenerdClock, WavenerdDeck, WavenerdTextureStore } from '@0b5vr/wavenerd-deck';

const audio = new AudioContext();

// Create a clock, which holds the tempo and the transport
const clock = new WavenerdClock({ audio, bpm: 140 });

// Create a texture store, which holds the samples, wavetables and images
const textures = new WavenerdTextureStore({ audio });
await textures.loadSample('amen', arrayBuffer); // available as `sample_amen` in shaders

// Create a deck, connect it to the audio destination
const deck = new WavenerdDeck({ audio, clock, textures });
deck.node.connect(audio.destination);

// Compile a GLSL fragment shader and apply it
await deck.compile(glslCode);
deck.applyCue(); // apply at the next bar boundary
deck.applyCueImmediately(); // apply immediately

// Transport
clock.play();
clock.pause();
clock.rewind();
clock.bpm = 170;

// Update loop (call every frame)
async function update() {
  await deck.update();
  setTimeout(update);
}
update();
```

See [example/index.html](example/index.html) for a more complete example.

## License

[MIT](./LICENSE)
