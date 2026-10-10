import { WavenerdClock } from './WavenerdClock';
import { mod } from './utils/mod';

export interface WavenerdClockV1CompatResult {
  /**
   * Seconds since the beginning of the current beat.
   */
  beat: number;

  /**
   * Seconds since the beginning of the current bar, assuming 4 beats per bar.
   */
  bar: number;

  /**
   * Seconds since the beginning of the current 16 bars, assuming 4 beats per bar.
   */
  sixteenBar: number;

  /**
   * The length of a beat, in seconds.
   */
  beatSeconds: number;

  /**
   * The length of a bar, in seconds, assuming 4 beats per bar.
   */
  barSeconds: number;

  /**
   * The length of 16 bars, in seconds, assuming 4 beats per bar.
   */
  sixteenBarSeconds: number;
}

/**
 * Derive the time values of shader version 1 from the given clock.
 * They are the `time` and the `timeLength` that `mainAudio(vec4 time)` receives.
 */
export function wavenerdClockV1Compat(clock: WavenerdClock, time: number): WavenerdClockV1CompatResult {
  const { beatSeconds } = clock;
  const beatPosition = clock.timeToBeat(time);

  return {
    beat: mod(beatPosition, 1.0) * beatSeconds,
    bar: mod(beatPosition, 4.0) * beatSeconds,
    sixteenBar: mod(beatPosition, 64.0) * beatSeconds,
    beatSeconds,
    barSeconds: beatSeconds * 4.0,
    sixteenBarSeconds: beatSeconds * 64.0,
  };
}
