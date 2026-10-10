#pragma wavenerd_shader_version 2

#define BPM bpm
#define B2T (60.0 / BPM)
#define AMEN_BPM 170.0
#define BEATS_PER_BAR 4

#define saturate(i) clamp(i, 0.0, 1.0)
#define clip(i) clamp(i, -1.0, 1.0)
#define linearstep(a,b,x) saturate(((x) - (a)) / ((b) - (a)))
#define lofi(i,m) (floor((i) / (m)) * (m))
#define tri(p) (1.0 - 4.0 * abs(fract(p) - 0.5))
#define PI 3.14159265359
#define TAU 6.28318530718

uniform vec4 param_knob;
uniform sampler2D wavetable_mtalk;
uniform vec4 wavetable_mtalk_meta;
uniform sampler2D sample_amen;
uniform vec4 sample_amen_meta;
uniform sampler2D sample_909oh;
uniform vec4 sample_909oh_meta;
uniform sampler2D sample_crash;
uniform vec4 sample_crash_meta;
uniform sampler2D image_fbm;

float kick( float t ) {
  if (t < 0.0) { return 0.0; }

  float attack = 4.0;
  float lorate = 0.06;

  return clip(10.0 * exp(-4.0 * t) * sin(TAU * lofi(
    52.0 * t - attack * (exp(-40.0 * t) + exp(-200.0 * t)),
    lorate
  )));
}

vec2 rimshot(float t) {
  if (t < 0.0) { return vec2(0.0); }

  float attack = exp(-t * 1000.0) * 0.2;
  vec2 wave = (
    tri(t * 450.0 * vec2(1.005, 0.995) - attack) +
    tri(t * 1800.0 * vec2(0.995, 1.005) - attack)
  );
  return clip(4.0 * wave * exp(-t * 400.0));
}

vec2 mainAudio(int beatIndex, int beatFrame) {
  vec2 dest = vec2(0.0);

  float knob = paramFetch(param_knob);

  float tBeat = float(beatFrame) / sampleRate; // seconds since the beginning of the beat
  float tBar = float(beatIndex % BEATS_PER_BAR) * B2T + tBeat; // seconds since the beginning of the bar
  float tSixteenBar = float(beatIndex % (16 * BEATS_PER_BAR)) * B2T + tBeat; // seconds since the beginning of the 16 bars

  float tKick = tBeat;
  float sidechain = smoothstep(0.0, B2T, tKick);
  float aKick = kick(tKick);
  dest += 0.3 * aKick;

  float tHihat = mod(tBeat - 0.5 * B2T, B2T);
  vec2 aHihat = sampleSinc(sample_909oh, sample_909oh_meta, tHihat);
  dest += 0.3 * aHihat;

  float tCrash = tSixteenBar;
  vec2 aCrash = sampleSinc(sample_crash, sample_crash_meta, tCrash);
  dest += 0.3 * aCrash;

  vec2 aRim = sidechain * rimshot(mod(tBeat, 15.0 / BPM));
  dest += 0.2 * aRim;

  float amenTime = tBar / AMEN_BPM * BPM;
  amenTime += 0.01 * knob * sin(exp(knob * 10.0) * tBar);
  vec2 aAmen = clip(8.0 * sampleSinc(sample_amen, sample_amen_meta, amenTime));
  dest += 0.2 * aAmen;

  vec2 wtPosition = vec2(33.0 * tBar, tBar / (float(BEATS_PER_BAR) * B2T));
  vec2 wtWave = vec2(wavetableSinc(wavetable_mtalk, wavetable_mtalk_meta, wtPosition));
  dest += 0.4 * sidechain * wtWave;

  return dest;
}
