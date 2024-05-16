class Person {

  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  static whoAmi() {
    console.log("I am a Person");
  }
  show() {
    console.log(`Name: ${this.name} Age: ${this.age}`);
  }
}
Person.whoAmi();

const person1 = new Person("Hema", 15);
person1.show();


