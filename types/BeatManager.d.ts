import { EventEmittable } from './utils/EventEmittable';
export interface BeatManagerUpdateEvent {
    time: number;
    deltaTime: number;
    bpm: number;
    beat: number;
    bar: number;
    sixteenBar: number;
}
export declare class BeatManager {
    __bpm: number;
    get bpm(): number;
    set bpm(value: number);
    private __time;
    private __beat;
    private __bar;
    private __sixteenBar;
    static CalcBeatSeconds(bpm: number): number;
    static CalcBarSeconds(bpm: number): number;
    static CalcSixteenBarSeconds(bpm: number): number;
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
