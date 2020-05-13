#define saturate(i) clamp(i, 0.,1.)
#define clip(i) clamp(i, -1.,1.)
#define linearstep(a,b,x) saturate(((x)-(a))/((b)-(a)))
#define lofi(i,m) (floor((i)/(m))*(m))
#define tri(p) (1.-4.*abs(fract(p)-0.5))
#define PI 3.14159265359
#define TAU 6.28318530718

uniform sampler2D sampleAmen;
uniform vec4 sampleAmen_meta;
uniform sampler2D sample909kick;
uniform vec4 sample909kick_meta;
uniform sampler2D sampleNoise;
uniform vec4 sampleNoise_meta;

float kick( float t ) {
  if ( t < 0.0 ) { return 0.0; }

  float attack = 4.0;
  float lorate = 0.01;

  return exp( -10.0 * t ) * sin( TAU * lofi(
    50.0 * t - attack * ( exp( -40.0 * t ) + exp( -200.0 * t ) ),
    lorate
  ) );
}

float snare909( float ch, float t ) {
  if ( t < 0.0 ) { return 0.0; }

  return clip(
    sampleNearest( sampleAmen, sampleAmen_meta, ch, t ) * 2.0 +
    sin( t * 1400.0 * ( 1.0 + ch * 0.005 ) - exp( -t * 80.0 ) * 30.0 )
  ) * exp( -t * 10.0 );
}

float rimshot( float ch, float t ) {
  if ( t < 0.0 ) { return 0.0; }

  float attack = exp( -t * 1000.0 ) * 0.2;
  float wave = (
    tri( t * 450.0 * ( 1.005 - 0.01 * ch ) - attack ) +
    tri( t * 1800.0 * ( 0.995 + 0.01 * ch ) - attack )
  );
  return clip( 4.0 * wave * exp( -t * 400.0 ) );
}

float mainAudio( float ch, vec4 time ) {
  float sidechain = smoothstep( 0.0, 60.0 / bpm, time.x );
  float aKick = 0.5 * clip( 50.0 * kick( time.x ) );
  float aSnare = 0.3 * sidechain * snare909( ch, mod( time.x + 30.0 / bpm, 60.0 / bpm ) );
  float aRim = 0.3 * sidechain * rimshot( ch, mod( time.x, 15.0 / bpm ) );

  float amenPattern = mod( floor(
    129.0 * sampleNearest( sampleNoise, sampleNoise_meta, 0.0, fract( lofi( time.w * bpm / 60.0, 0.5 ) / 1.7 ) )
  ), 24.0 );
  float amenTime = mod( time.y * bpm / 60.0, 0.5 ) * 60.0 / 138.0 + amenPattern / 138.0 * 30.0;
  float aAmen = 0.2 * clip( 10.0 * sample( sampleAmen, sampleAmen_meta, ch, amenTime ) );
  return aKick + aAmen + aRim + aSnare;
  // return sin( PI * 2000.0 * time.x ) * exp( -5.0 * time.x );
}
