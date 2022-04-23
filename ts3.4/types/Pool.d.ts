export declare class Pool<T> {
    array: T[];
    private __index;
    readonly current: T;
    constructor(array: T[]);
    next(): T;
}
