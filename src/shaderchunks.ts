export const shaderchunkPre = `#version 300 es

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

export const shaderchunkPreLines = shaderchunkPre.split( '\n' ).length;

export const shaderchunkPost = `void main() {
  vec2 out2 = mainAudio( mod( _timeHead + off * _deltaSample, timeLength ) );
  outL = out2.x;
  outR = out2.y;
}`;
