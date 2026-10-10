import { Observable } from './utils/Observable';

interface WavenerdClockChangeBPMEvent {
  bpm: number;
}

/**
 * A clock that manages the tempo and transport of WavenerdDeck.
 *
 * Decks sharing a clock play in sync.
 */
export class WavenerdClock {
  /**
   * Its binded `AudioContext`.
   */
  public readonly audio: AudioContext;

  /**
   * The BPM of the clock.
   */
  private __bpm: number;

  /**
   * The BPM of the clock.
   */
  public get bpm(): number {
    return this.__bpm;
  }

  /**
   * The BPM of the clock.
   */
  public set bpm(value: number) {
    const { time } = this;
    this.__anchorBeat = this.timeToBeat(time);
    this.__anchorTime = time;

    this.__bpm = Math.max(0.0, value);
    this.onChangeBPM.notify({ bpm: this.__bpm });
  }

  /**
   * The length of a beat in seconds.
   */
  public get beatSeconds(): number {
    return 60.0 / this.__bpm;
  }

  /**
   * The clock time at the last BPM change or rewind, paired with {@link __anchorBeat}.
   */
  private __anchorTime = 0.0;

  /**
   * The beat position at the last BPM change or rewind, paired with {@link __anchorTime}.
   */
  private __anchorBeat = 0.0;

  /**
   * Convert a beat to the corresponding clock time.
   */
  public beatToTime(beatPosition: number): number {
    return this.__anchorTime + (beatPosition - this.__anchorBeat) * 60.0 / this.__bpm;
  }

  /**
   * Convert a clock time to the corresponding beat position.
   */
  public timeToBeat(time: number): number {
    return this.__anchorBeat + (time - this.__anchorTime) * this.__bpm / 60.0;
  }

  /**
   * Whether the clock is currently playing.
   */
  private __isPlaying = false;

  /**
   * Whether the clock is currently playing.
   */
  public get isPlaying(): boolean {
    return this.__isPlaying;
  }

  /**
   * The offset of clock frames from audio frames: `clockFrame = audioFrame - offset`.
   *
   * `null` right after play or rewind, until {@link getOrInitClockFrameOffset} is called.
   */
  private __clockFrameOffset: number | null = null;

  /**
   * The clock frame to resume from.
   *
   * Will be updated on {@link pause} and {@link rewind}.
   */
  private __pausedFrame = 0;

  /**
   * The current clock time.
   */
  public get time(): number {
    // When the clock is not playing or the offset is not initialized, return the paused time
    if (!this.__isPlaying || this.__clockFrameOffset == null) {
      return this.__pausedFrame / this.audio.sampleRate;
    }

    return (this.__currentAudioFrame - this.__clockFrameOffset) / this.audio.sampleRate;
  }

  /**
   * Notified when the clock is played via {@link play}.
   */
  public readonly onPlay = new Observable();

  /**
   * Notified when the clock is paused via {@link pause}.
   */
  public readonly onPause = new Observable();

  /**
   * Notified when the clock is rewound via {@link rewind}.
   */
  public readonly onRewind = new Observable();

  /**
   * Notified when the BPM is changed.
   */
  public readonly onChangeBPM = new Observable<WavenerdClockChangeBPMEvent>();

  public constructor({ audio, bpm }: { audio: AudioContext; bpm?: number }) {
    this.audio = audio;
    this.__bpm = Math.max(0.0, bpm ?? 140.0);
  }

  /**
   * Play the clock.
   */
  public play(): void {
    if (this.__isPlaying) { return; }

    this.__isPlaying = true;
    this.__clockFrameOffset = null;

    this.onPlay.notify();
  }

  /**
   * Pause the clock.
   */
  public pause(): void {
    if (!this.__isPlaying) { return; }

    if (this.__clockFrameOffset != null) {
      this.__pausedFrame = this.__currentAudioFrame - this.__clockFrameOffset;
    }

    this.__isPlaying = false;

    this.onPause.notify();
  }

  /**
   * Rewind the clock to the beginning.
   */
  public rewind(): void {
    this.__clockFrameOffset = null;
    this.__pausedFrame = 0;

    this.__anchorTime = 0.0;
    this.__anchorBeat = 0.0;

    this.onRewind.notify();
  }

  /**
   * Return the offset of clock frames from audio frames: `clockFrame = audioFrame - offset`.
   *
   * The offset is not initialized right after play or rewind.
   * In that case, it's initialized so that `initAudioFrame` becomes the frame to start or resume from.
   * Otherwise `initAudioFrame` is ignored.
   *
   * Decks call this with the head of their render right before rendering,
   * so the play or rewind takes effect from there.
   */
  public getOrInitClockFrameOffset(initAudioFrame: number): number {
    if (this.__clockFrameOffset == null) {
      this.__clockFrameOffset = initAudioFrame - this.__pausedFrame;
    }

    return this.__clockFrameOffset;
  }

  /**
   * The current audio frame based on `audio.currentTime`.
   */
  private get __currentAudioFrame(): number {
    return Math.floor(this.audio.currentTime * this.audio.sampleRate);
  }
}
