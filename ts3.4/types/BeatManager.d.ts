import { EventEmittable } from './utils/EventEmittable';
export interface BeatManagerUpdateEvent {
    time: number;
    bpm: number;
    beat: number;
    bar: number;
    sixteenBar: number;
}
export declare class BeatManager {
    static CalcBeatSeconds(bpm: number): number;
    static CalcBarSeconds(bpm: number): number;
    static CalcSixteenBarSeconds(bpm: number): number;
    private __bpm;
    bpm: number;
    readonly beatSeconds: number;
    readonly barSeconds: number;
    readonly sixteenBarSeconds: number;
    private __time;
    readonly time: number;
    private __beat;
    readonly beat: number;
    private __bar;
    readonly bar: number;
    private __sixteenBar;
    readonly sixteenBar: number;
    reset(): void;
    update(time: number): BeatManagerUpdateEvent;
}
export interface BeatManager extends EventEmittable<{
    update: BeatManagerUpdateEvent;
    changeBPM: {
        bpm: number;
    };
}> {
}
