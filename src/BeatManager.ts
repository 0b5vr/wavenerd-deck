import { EventEmittable } from './utils/EventEmittable';
import { applyMixins } from './utils/applyMixins';

export interface BeatManagerUpdateEvent {
  time: number;
  bpm: number;
  beatPosition: number;
}

export class BeatManager {
  public static CalcBeatSeconds(bpm: number): number {
    return 60.0 / bpm;
  }

  private __bpm = 140.0;
  public get bpm(): number {
    return this.__bpm;
  }

  public set bpm(value: number) {
    // re-anchor the beat clock so the beat position is preserved across BPM changes
    this.__anchorBeat = this.beatPosition;
    this.__anchorTime = this.__time;

    this.__bpm = Math.max(0.0, value);
    this.__emit('changeBPM', { bpm: this.__bpm });
  }

  public get beatSeconds(): number {
    return BeatManager.CalcBeatSeconds(this.__bpm);
  }

  private __time = 0.0;
  public get time(): number {
    return this.__time;
  }

  /**
   * The time at the last BPM change or reset, paired with {@link __anchorBeat}.
   *
   * The beat position is derived from the anchor every time instead of being accumulated,
   * so it does not drift and beat boundaries are deterministic.
   */
  private __anchorTime = 0.0;

  /**
   * The beat position at the last BPM change or reset, paired with {@link __anchorTime}.
   *
   * The beat position is derived from the anchor every time instead of being accumulated,
   * so it does not drift and beat boundaries are deterministic.
   */
  private __anchorBeat = 0.0;

  /**
   * The current position in beats since the last reset.
   */
  public get beatPosition(): number {
    return this.timeToBeat(this.__time);
  }

  public reset(): void {
    this.__time = 0.0;
    this.__anchorTime = 0.0;
    this.__anchorBeat = 0.0;
  }

  /**
   * Return the time when the given beat position comes, assuming the BPM does not change.
   * The result for the same beat position is deterministic until the BPM changes or reset.
   */
  public beatToTime(beatPosition: number): number {
    return this.__anchorTime + (beatPosition - this.__anchorBeat) * 60.0 / this.__bpm;
  }

  /**
   * Return the beat position at the given time, assuming the BPM does not change.
   * Inverse of {@link beatToTime}.
   */
  public timeToBeat(time: number): number {
    return this.__anchorBeat + (time - this.__anchorTime) * this.__bpm / 60.0;
  }

  public update(time: number): BeatManagerUpdateEvent {
    this.__time = time;

    const event = {
      time,
      bpm: this.__bpm,
      beatPosition: this.beatPosition,
    };

    this.__emit('update', event);

    return event;
  }
}

export interface BeatManager extends EventEmittable<{
  update: BeatManagerUpdateEvent;
  changeBPM: { bpm: number };
}> {}
applyMixins(BeatManager, [EventEmittable]);
