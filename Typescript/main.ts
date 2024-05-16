let num: number = 10;
let str: string = "Ahmed";
let uni: string | number;


// function test(...arg:any)
// {
//   return arg;
// }
// console.log(test(424,"ajhsj",true));


// // Enum
// enum enum1{
//   red,
//   green,
//   blue
// }
// console.log(enum1);
// console.log(enum1["blue"]);


// //Generics
// function generics<S, T>(value1: S, value2: T): [S, T] {
//   return [value1, value2];
// }
// console.log(generics<string, number>('hello', 42));

//Decorator
function loopArray(target: any, key: any, descriptor: any) {
  console.log(target, key, descriptor);
  descriptor.value = function printItems(arr: string[]) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`item ${i + 1} in array is ${arr[i]}`);
    }
    return arr;
  }
}

class anyClass {
  @loopArray
  printItems(array: string[]) { console.log(array); }
}


let cls = new anyClass();
let x = cls.printItems(["ahmed", "mohamed"]);
console.log(x);

// import {point2D} from "./modules/point2d";
// // import {point3D} from "./modules/point3d";

// let p2 = new point2D(0, 0);

// console.log(p2.calculateLength(5, 5));



// let p3 = new point3D(10, 40, 3);

// console.log(p3.calculateLength(12,12,12));