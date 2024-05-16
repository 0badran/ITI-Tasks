let student = new Map([
  [
    "ahmed",
    {
      Grades: [
        { Coursename: "JavaScript", Grade: "Excellent" },
        { Coursename: "Jquery", Grade: "Good" },
        { Coursename: "CSS", Grade: "V.Good" },
      ],
    },
  ],
  [
    "ali",
    {
      Grades: [
        { Coursename: "JavaScript", Grade: "Excellent" },
        { Coursename: "Jquery", Grade: "Good" },
        { Coursename: "CSS", Grade: "V.Good" },
      ],
    },
  ],
]);



let showCourses = document.createElement("div");
let mainSelect = document.getElementById("main-select");
mainSelect.after(showCourses);
for (const key of student) {
  mainSelect.innerHTML += `<option class="names">${key[0]}</option>`;
  // console.log();
  //  = student.get(key);
  // console.log(studentCourse);
  // for (let course in studentCourse)
  // {
  //   console.log(course);
    
  // }
  
}

mainSelect.addEventListener("change", function (){
  const studentCourse = student.get(this.value).Grades;
  for(let course of studentCourse)
  {
    showCourses.innerHTML += `<p>Course name: ${course.Coursename} Course Grade: ${course.Grade}</p>`
  }
});

