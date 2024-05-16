import { point2D } from "./point2d";
export class point3D extends point2D {
  constructor(public x: number, public y: number, public z: number) { super(x, y); }
  calculateLength(pointx: number, pointy: number, pointz?: number) {
    let d = ((this.x - pointx) ** 2) + ((this.y - pointy) ** 2) + ((this.z - pointz) ** 2);
    return Math.sqrt(d);
  }
}