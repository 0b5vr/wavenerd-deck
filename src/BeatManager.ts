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
    this.__bpm = value;
    this.__emit( 'changeBPM', { bpm: value } );
  }

  private __time = 0.0;
  private __beat = 0.0;
  private __bar = 0.0;
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
    this.__beat = 0.0;
    this.__bar = 0.0;
    this.__sixteenBar = 0.0;
  }

  public update( time: number ): BeatManagerUpdateEvent {
    const beatSeconds = BeatManager.CalcBeatSeconds( this.__bpm );
    const barSeconds = BeatManager.CalcBarSeconds( this.__bpm );
    const sixteenBarSeconds = BeatManager.CalcSixteenBarSeconds( this.__bpm );

    const deltaTime = time - this.__time;

    this.__beat = mod( this.__beat + deltaTime / beatSeconds, 1.0 );
    this.__bar = mod( this.__bar + deltaTime / barSeconds, 1.0 );
    this.__sixteenBar = mod( this.__sixteenBar + deltaTime / sixteenBarSeconds, 1.0 );

    this.__time = time;

    const event = {
      time,
      deltaTime,
      bpm: this.__bpm,
      beat: this.__beat,
      bar: this.__bar,
      sixteenBar: this.__sixteenBar
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
