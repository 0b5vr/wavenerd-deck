export const shaderchunkPre = `precision highp float;

#define _PI 3.14159265359

uniform float bpm;
uniform vec4 timeLength;
uniform float sampleRate;
uniform float _deltaSample;
uniform float _deltaChunk;
uniform vec4 _timeHead;

vec2 sampleNearest( sampler2D s, vec4 meta, float time ) {
  if ( meta.w < time ) { return vec2( 0.0 ); }
  float x = time / meta.x * meta.z;
  vec2 uv = fract( vec2(
    x,
    floor( x ) / meta.y
  ) ) + 0.5 / meta.xy;
  return texture2D( s, uv ).xy;
}

// I have 0% confidence that the algorithm is perfect
vec2 sample( sampler2D s, vec4 meta, float time ) {
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
    sum += texture2D( s, uv ).xy * min( sin( deft * _PI ) / deft / _PI, 1.0 );
  }
  return sum;
}
`;

export const shaderchunkPreLines = shaderchunkPre.split( '\n' ).length;

export const shaderchunkPost = `void main() {
  float off = floor( gl_FragCoord.x ) * 2.0;
  vec4 head = _timeHead + _deltaChunk * floor( gl_FragCoord.y );
  gl_FragColor = vec4(
    mainAudio( mod( head + ( off ) * _deltaSample, timeLength ) ),
    mainAudio( mod( head + ( off + 1.0 ) * _deltaSample, timeLength ) )
  );
}`;
