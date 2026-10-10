export const shaderchunkVertex = `#version 300 es

precision highp float;

in vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

/**
 * Uniforms and helper functions shared among all shader versions.
 */
export const shaderchunkCommon = `#define _PI 3.14159265359

uniform float bpm;
uniform float sampleRate;
uniform float _framesPerRender;

out vec4 _fragColor;

float paramFetch(vec4 param) {
  float x = floor(gl_FragCoord.x) / _framesPerRender;
  vec4 v = x - vec4(1.0, 0.0, -1.0, -2.0);
  float y = dot(
    vec4(
      v.y * v.z * v.w,
      v.x * v.z * v.w,
      v.x * v.y * v.w,
      v.x * v.y * v.z
    ),
    param / vec4(6.0, -2.0, 2.0, -6.0)
  );
  return clamp(y, 0.0, 1.0);
}

float wavetableNearest( sampler2D w, vec4 meta, vec2 position ) {
  vec2 uv0 = fract( vec2(
    position.x,
    ( floor( fract( position.y ) * ( meta.y - 1.0 ) ) + 0.5 ) / meta.y
  ) );
  vec2 uv1 = uv0 + vec2( 0.0, 1.0 / meta.y );
  return mix(
    texture( w, uv0 ).x,
    texture( w, uv1 ).x,
    fract( position.y * ( meta.y - 1.0 ) )
  );
}

float wavetableSinc( sampler2D w, vec4 meta, vec2 position ) {
  float sum = 0.0;
  float def = -fract( position.x * meta.x );
  for ( int i = -5; i <= 5; i ++ ) {
    float x = floor( position.x * meta.x + float( i ) ) / meta.x;
    float deft = def + float( i );
    vec2 uv0 = fract( vec2(
      x,
      ( floor( fract( position.y ) * ( meta.y - 1.0 ) ) + 0.5 ) / meta.y
    ) );
    vec2 uv1 = uv0 + vec2( 0.0, 1.0 / meta.y );
    sum += mix(
      texture( w, uv0 ).x,
      texture( w, uv1 ).x,
      fract( position.y * ( meta.y - 1.0 ) )
    ) * min( sin( deft * _PI ) / deft / _PI, 1.0 );
  }
  return sum;
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

vec2 sampleSinc( sampler2D s, vec4 meta, float time ) {
  if ( meta.w < time ) { return vec2( 0.0 ); }
  vec2 sum = vec2( 0.0 );
  float def = -fract( time * meta.z );
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
