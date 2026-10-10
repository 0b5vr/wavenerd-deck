/**
 * `Math.ceil`, but values within `tolerance` of an integer are snapped to that integer.
 *
 * e.g. `ceilWithTolerance(3.00000001, 1E-4) === 3`
 *
 * Intended for use with beat boundaries.
 * When the BPM is 125 and the sample rate is 48000, a beat is exactly 23040 frames long,
 * but the boundary of the beat 37 is computed as `852480.0000000001` since `60 / 125` is not exact in binary.
 * `Math.ceil` makes it `852481` and beat lengths jitter among 23039, 23040 and 23041 frames,
 * while this function keeps every beat exactly 23040 frames long.
 */
export function ceilWithTolerance(x: number, tolerance: number): number {
  const rounded = Math.round(x);
  return Math.abs(x - rounded) < tolerance ? rounded : Math.ceil(x);
}
