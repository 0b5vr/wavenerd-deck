import { shaderchunkCommon } from './shaderchunks';

/**
 * The max number of beat segments in a single render, including the one at the head of the render.
 * Exceeding it requires an absurd BPM, like > 5000 BPM with 4096 frames per render.
 */
export const BEAT_SEGMENTS_PER_RENDER = 8;

/**
 * Wrap the user code of shader version 2, `vec2 mainAudio(int beatIndex, int beatFrame)`.
 */
export function wrapShaderV2(code: string): string {
  return `#version 300 es

precision highp float;

${shaderchunkCommon}

// The max number of frames in a beat, which is the max beatFrame + 1.
// Each beat is either this or one frame shorter, when the length of a beat is not an integer.
uniform int framesPerBeat;

// (beatIndex, beatFrame, relativeFrame)
// From relativeFrame on, it's the beatIndex-th beat, counting from beatFrame
uniform ivec3 _beatSegments[${BEAT_SEGMENTS_PER_RENDER}];

#line 1
${code}

void main() {
  int x = int(gl_FragCoord.x);
  ivec3 segment = _beatSegments[0];

  for (int i = 1; i < ${BEAT_SEGMENTS_PER_RENDER}; i ++) {
    if (x < _beatSegments[i].z) { break; }

    segment = _beatSegments[i];
  }

  vec2 out2 = mainAudio(segment.x, segment.y + x - segment.z);

  // remove NaN
  if (any(isnan(out2)) || any(isinf(out2))) {
    out2 = vec2(0.0);
  }

  _fragColor = vec4(out2.x, out2.y, 0.0, 1.0);
}
`;
}
