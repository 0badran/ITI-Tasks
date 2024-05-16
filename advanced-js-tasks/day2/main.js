function function1() {
  if (arguments.length !== 2)
    throw new Error("This function take only 2 arguments.");
  return arguments[0] + arguments[1];
}
// console.log(function1(625, 376));

function function2() {
  for (let argument of arguments)
    if (typeof argument !== "number")
      throw new ReferenceError("This function accept only digits.");
}
// console.log(function2(""));

// Anonyms func
var function3 = function () {
  return [].splice.call(arguments, 0).reverse();
};
// console.log(function3("sjdhh", 28918));

// Self Invoked func
var function4 = (function () {
  return [].splice.call(arguments, 0).reverse();
})("ahn", 253);

const myObject = {
  name:"ahmed",
  age:24,
  getSetGen: function () {
    for (let key in this) {
      if (typeof this[key] != "function")
      {
        let keyUpper = key.replace(key[0], key[0].toUpperCase());
        this["get" + keyUpper] = function (){return this.name};
        this["set" + keyUpper] = function (value){this.name = value};
      }
    }
    // console.log(this);
  },
};
myObject.getSetGen();
// console.log(myObject.getName());