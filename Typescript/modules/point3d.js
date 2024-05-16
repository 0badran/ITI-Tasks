var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { point2D } from "./point2d";
var point3D = /** @class */ (function (_super) {
    __extends(point3D, _super);
    function point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.x = x;
        _this.y = y;
        _this.z = z;
        return _this;
    }
    point3D.prototype.calculateLength = function (pointx, pointy, pointz) {
        var d = (Math.pow((this.x - pointx), 2)) + (Math.pow((this.y - pointy), 2)) + (Math.pow((this.z - pointz), 2));
        return Math.sqrt(d);
    };
    return point3D;
}(point2D));
export { point3D };
