const students = new Set(["ahmed", "mohamed", "ali", "mona", "nada", "salma"]);
students.add("mona");
console.log(...students);
for (const name of students) {
  console.log(name);
}