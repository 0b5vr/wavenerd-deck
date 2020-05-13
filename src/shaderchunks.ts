export const shaderchunkPre = `precision highp float;

#define _PI 3.14159265359

uniform float bpm;
uniform vec4 timeLength;
uniform float sampleRate;
uniform float _deltaSample;
uniform vec4 _timeHead;

float sampleNearest( sampler2D s, vec4 meta, float ch, float time ) {
  float x = time / meta.x * meta.z;
  vec2 uv = vec2(
    mod( x, 1.0 ),
    floor( x ) / meta.y + ch * 0.5
  ) + 0.5 / meta.xy;
  return texture2D( s, uv ).x;
}

float sample( sampler2D s, vec4 meta, float ch, float time ) {
  float sum = 0.0;
  float def = 0.5 - mod( time * meta.z, 1.0 );
  for ( int i = -5; i <= 5; i ++ ) {
    float x = floor( time * meta.z + float( i ) ) / meta.x;
    float deft = def + float( i );
    vec2 uv = vec2(
      mod( x, 1.0 ),
      floor( x ) / meta.y + ch * 0.5
    ) + vec2( 0.0, 0.5 ) / meta.xy;
    sum += texture2D( s, uv ).x * min( sin( deft * _PI ) / deft / _PI, 1.0 );
  }
  return sum;
}
`;

export const shaderchunkPost = `void main() {
  float ch = floor( gl_FragCoord.y );
  float off = floor( gl_FragCoord.x ) * 4.0;
  gl_FragColor = vec4(
    mainAudio( ch, mod( _timeHead + ( off ) * _deltaSample, timeLength ) ),
    mainAudio( ch, mod( _timeHead + ( off + 1.0 ) * _deltaSample, timeLength ) ),
    mainAudio( ch, mod( _timeHead + ( off + 2.0 ) * _deltaSample, timeLength ) ),
    mainAudio( ch, mod( _timeHead + ( off + 3.0 ) * _deltaSample, timeLength ) )
  );
}`;
