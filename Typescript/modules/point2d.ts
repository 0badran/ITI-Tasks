export class point2D {
  constructor(public x: number, public y: number) { }
  calculateLength(pointx:number, pointy:number) {
    let d= ((this.x - pointx)**2) + ((this.y - pointy)**2);
    return Math.sqrt(d);
  }
}