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
    get bpm(): number;
    set bpm(value: number);
    get beatSeconds(): number;
    get barSeconds(): number;
    get sixteenBarSeconds(): number;
    private __time;
    get time(): number;
    private __beat;
    get beat(): number;
    private __bar;
    get bar(): number;
    private __sixteenBar;
    get sixteenBar(): number;
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
