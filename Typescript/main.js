var num = 10;
var str = "Ahmed";
var uni;
function test() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return arg;
}
console.log(test(424, "ajhsj", true));
// Enum
var enum1;
(function (enum1) {
    enum1[enum1["red"] = 0] = "red";
    enum1[enum1["green"] = 1] = "green";
    enum1[enum1["blue"] = 2] = "blue";
})(enum1 || (enum1 = {}));
console.log(enum1);
console.log(enum1["blue"]);
//Generics
function generics(value1, value2) {
    return [value1, value2];
}
console.log(generics('hello', 42));
//Decorator
// function loopArray(target: any, key: any, descriptor: any) {
//   console.log(target,key,descriptor);
//   descriptor.value = function printItems(arr: string[]) {
//     for (let i = 0; i < arr.length; i++) {
//       console.log(`item ${i + 1} in array is ${arr[i]}`);
//     }
//     return arr;
//   }
// }
// class anyClass {
//   @loopArray
//   printItems(array: string[]) { console.log(array); }
// }
// let cls = new anyClass();
// let x = cls.printItems(["ahmed", "mohamed"]);
// console.log(x);
import { point2D } from "./modules/point2d.js";
// import {point3D} from "./modules/point3d";
var p2 = new point2D(0, 0);
console.log(p2.calculateLength(5, 5));
// let p3 = new point3D(10, 40, 3);
// console.log(p3.calculateLength(12,12,12));
