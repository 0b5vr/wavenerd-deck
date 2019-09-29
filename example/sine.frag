precision highp float;

#define PI 3.14159265359
#define TAU 6.28318530718

uniform float sampleRate;
uniform float _deltaSample;
uniform vec4 _timeHead;
uniform vec4 _timeMod;

float mainAudio( float ch, vec4 time ) {
  return sin( PI * 2000.0 * time.x ) * exp( -5.0 * time.x );
}

void main() {
  float ch = floor( gl_FragCoord.y );
  float off = floor( gl_FragCoord.x ) * 4.0;
  gl_FragColor = vec4(
    mainAudio( ch, mod( _timeHead + ( off ) * _deltaSample, _timeMod ) ),
    mainAudio( ch, mod( _timeHead + ( off + 1.0 ) * _deltaSample, _timeMod ) ),
    mainAudio( ch, mod( _timeHead + ( off + 2.0 ) * _deltaSample, _timeMod ) ),
    mainAudio( ch, mod( _timeHead + ( off + 3.0 ) * _deltaSample, _timeMod ) )
  );
}
