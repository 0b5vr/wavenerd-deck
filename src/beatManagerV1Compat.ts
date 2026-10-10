import { BeatManager } from './BeatManager';
import { mod } from './utils/mod';

export interface BeatManagerV1CompatResult {
  /**
   * Seconds since the last reset.
   */
  time: number;

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
 * Derive the time values of shader version 1 from the given beat manager.
 * They are the `time` and the `timeLength` that `mainAudio(vec4 time)` receives.
 */
export function beatManagerV1Compat(beatManager: BeatManager): BeatManagerV1CompatResult {
  const { time, beatPosition, beatSeconds } = beatManager;

  return {
    time,
    beat: mod(beatPosition, 1.0) * beatSeconds,
    bar: mod(beatPosition, 4.0) * beatSeconds,
    sixteenBar: mod(beatPosition, 64.0) * beatSeconds,
    beatSeconds,
    barSeconds: beatSeconds * 4.0,
    sixteenBarSeconds: beatSeconds * 64.0,
  };
}
