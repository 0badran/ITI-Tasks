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

class Student extends Person {
  constructor(_name, _age, _university, _faculty, _grad) {
    super(_name, _age);
    this.university = _university;
    this.faculty = _faculty;
    this.grad = _grad;
  }
  static whoAmi() {
    console.log("I am a Student");
  }
  show() {
    console.log(`${this.name} is a student in faculty of ${this.faculty} in university ${this.university} and his final grad is ${this.grad}`);
  }
}

Student.whoAmi();

const student1 = new Student("Ahmed", 24, "MET", "MIS", "Exepte");
student1.show();

