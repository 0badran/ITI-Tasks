class Student {
  constructor(_name, _age) {
    this.name=_name; 
    this.age=_age;
  }
}
const mixin = {
  printName: function(){
    console.log(`Name: ${this.name}`);
  },
  printAge: function( ){
    console.log(`Age: ${this.age}`);
  }
}


Object.assign(Student.prototype, mixin);
const student1 = new Student("Ahmed", 24, "MET", "MIS", "Exepte");
student1.printName();
student1.printAge();

