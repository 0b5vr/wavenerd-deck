import { EventEmittable } from './utils/EventEmittable';
import { applyMixins } from './utils/applyMixins';
import { mod } from './utils/mod';

export class BeatManager {
  public __bpm: number = 140.0;
  public get bpm(): number {
    return this.__bpm;
  }
  public set bpm( value: number ) {
    this.__bpm = value;
    this.__emit( 'changeBPM', { bpm: value } );
  }

  private __lastTime = 0.0;

  private __beat = 0.0;
  public get beat(): number {
    return this.__beat;
  }

  private __bar = 0.0;
  public get bar(): number {
    return this.__bar;
  }

  private __sixteenBar = 0.0;
  public get sixteenBar(): number {
    return this.__sixteenBar;
  }

  public get beatSeconds(): number {
    return 60.0 / this.__bpm;
  }

  public get barSeconds(): number {
    // return this.beatLength * 4.0;
    return 240.0 / this.__bpm;
  }

  public get sixteenBarSeconds(): number {
    // return this.barLength * 16.0;
    return 3840.0 / this.__bpm;
  }

  public reset(): void {
    this.__lastTime = 0.0;
    this.__beat = 0.0;
    this.__bar = 0.0;
    this.__sixteenBar = 0.0;
  }

  public update( time: number ): void {
    const { beatSeconds, barSeconds, sixteenBarSeconds } = this;

    const deltaTime = time - this.__lastTime;

    this.__beat = mod( this.__beat + deltaTime / beatSeconds, 1.0 );
    this.__bar = mod( this.__bar + deltaTime / barSeconds, 1.0 );
    this.__sixteenBar = mod( this.__sixteenBar + deltaTime / sixteenBarSeconds, 1.0 );

    this.__lastTime = time;

    this.__emit( 'update', {
      time,
      deltaTime,
      beat: this.__beat,
      bar: this.__bar,
      sixteenBar: this.__sixteenBar
    } );
  }
}

export interface BeatManager extends EventEmittable<{
  update: {
    time: number;
    deltaTime: number;
    beat: number;
    bar: number;
    sixteenBar: number
  };
  changeBPM: { bpm: number };
}> {}
applyMixins( BeatManager, [ EventEmittable ] );
