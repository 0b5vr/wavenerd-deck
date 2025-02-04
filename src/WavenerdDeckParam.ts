export class WavenerdDeckParam {
  public value: number;
  public y0: number;
  public y1: number;
  public y2: number;
  public y3: number;

  public constructor(value: number) {
    this.value = value;
    this.y0 = value;
    this.y1 = value;
    this.y2 = value;
    this.y3 = value;
  }

  public update(): void {
    this.y3 = this.y2;
    this.y2 = this.y1;
    this.y1 = this.y0;
    this.y0 = this.value;
  }
}
