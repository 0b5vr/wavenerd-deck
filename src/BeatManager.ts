export class BeatManager {
  public bpm: number = 140.0;

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
    return 60.0 / this.bpm;
  }

  public get barSeconds(): number {
    // return this.beatLength * 4.0;
    return 240.0 / this.bpm;
  }

  public get sixteenBarSeconds(): number {
    // return this.barLength * 16.0;
    return 3840.0 / this.bpm;
  }

  public update( deltaTime: number ): void {
    const { beatSeconds, barSeconds, sixteenBarSeconds } = this;

    this.__beat = ( this.__beat + deltaTime / beatSeconds ) % 1.0;
    this.__bar = ( this.__bar + deltaTime / barSeconds ) % 1.0;
    this.__sixteenBar = ( this.__sixteenBar + deltaTime / sixteenBarSeconds ) % 1.0;
  }
}
