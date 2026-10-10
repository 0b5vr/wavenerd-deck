import { shaderchunkCommon } from './shaderchunks';

/**
 * Wrap the user code of shader version 1, `vec2 mainAudio(vec4 time)`.
 */
export function wrapShaderV1(code: string): string {
  return `#version 300 es

precision highp float;

${shaderchunkCommon}

uniform vec4 timeLength;
uniform float _deltaSample;
uniform vec4 _timeHead;

#line 1
${code}

void main() {
  vec2 out2 = mainAudio(mod(_timeHead + floor(gl_FragCoord.x) * _deltaSample, timeLength));

  // remove NaN
  if (any(isnan(out2)) || any(isinf(out2))) {
    out2 = vec2(0.0);
  }

  _fragColor = vec4(out2.x, out2.y, 0.0, 1.0);
}
`;
}
