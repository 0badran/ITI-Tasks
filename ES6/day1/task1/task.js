let greet = (name, greeting) =>{
  if(!(greeting))
    greeting = "Hello";
  return `${greeting} ${name}`;
};

let _name = prompt("Enter your name.");
let _greting = prompt("Tybe yor greeting value");
console.log(greet(_name, _greting));