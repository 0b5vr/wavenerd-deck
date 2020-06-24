import { EventEmittable } from './utils/EventEmittable';
import { applyMixins } from './utils/applyMixins';
import { mod } from './utils/mod';

export interface BeatManagerUpdateEvent {
  time: number;
  deltaTime: number;
  bpm: number;
  beat: number;
  bar: number;
  sixteenBar: number;
}

export class BeatManager {
  public __bpm: number = 140.0;
  public get bpm(): number {
    return this.__bpm;
  }
  public set bpm( value: number ) {
    const prevBpm = this.__bpm;
    this.__bpm = Math.max( 0.0, value );
    this.__sixteenBar = this.__sixteenBar * prevBpm / this.__bpm;
    this.__emit( 'changeBPM', { bpm: this.__bpm } );
  }

  private __time = 0.0;
  private __sixteenBar = 0.0;

  public static CalcBeatSeconds( bpm: number ): number {
    return 60.0 / bpm;
  }

  public static CalcBarSeconds( bpm: number ): number {
    // return this.beatLength * 4.0;
    return 240.0 / bpm;
  }

  public static CalcSixteenBarSeconds( bpm: number ): number {
    // return this.barLength * 16.0;
    return 3840.0 / bpm;
  }

  public reset(): void {
    this.__time = 0.0;
    this.__sixteenBar = 0.0;
  }

  public update( time: number ): BeatManagerUpdateEvent {
    const beatSeconds = BeatManager.CalcBeatSeconds( this.__bpm );
    const barSeconds = BeatManager.CalcBarSeconds( this.__bpm );
    const sixteenBarSeconds = BeatManager.CalcSixteenBarSeconds( this.__bpm );

    const deltaTime = time - this.__time;

    this.__sixteenBar = mod( this.__sixteenBar + deltaTime, sixteenBarSeconds );

    const sixteenBar = this.__sixteenBar;
    const bar = mod( sixteenBar, barSeconds );
    const beat = mod( bar, beatSeconds );

    this.__time = time;

    const event = {
      time,
      deltaTime,
      bpm: this.__bpm,
      beat,
      bar,
      sixteenBar
    };

    this.__emit( 'update', event );

    return event;
  }
}

export interface BeatManager extends EventEmittable<{
  update: BeatManagerUpdateEvent;
  changeBPM: { bpm: number };
}> {}
applyMixins( BeatManager, [ EventEmittable ] );