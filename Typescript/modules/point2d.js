var point2D = /** @class */ (function () {
    function point2D(x, y) {
        this.x = x;
        this.y = y;
    }
    point2D.prototype.calculateLength = function (pointx, pointy) {
        var d = (Math.pow((this.x - pointx), 2)) + (Math.pow((this.y - pointy), 2));
        return Math.sqrt(d);
    };
    return point2D;
}());
export { point2D };
