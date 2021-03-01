/**
 * `lerp`, or `mix`
 */
export function lerp( a: number, b: number, x: number ): number {
  return a + ( b - a ) * x;
}
