export declare class Pool<T> {
    array: T[];
    private __index;
    get current(): T;
    constructor(array: T[]);
    next(): T;
}
