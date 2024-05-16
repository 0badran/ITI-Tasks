function savaData() {
  let employee = {};
  empInputs.forEach((ele) => {
    employee[ele.id] = ele.value;
  });
  clearData();
  if (id.value == String()) {
    //1
    let xhr = new XMLHttpRequest();

    //2
    xhr.open(
      "POST",
      "https://fir-test-d1063-default-rtdb.firebaseio.com/employee.json"
    );

    //3
    xhr.send(JSON.stringify(employee));
    if (tableBody.children.length) showData();
  }
  else {
    //1
    let xhr = new XMLHttpRequest();

    //2
    xhr.open(
      "PATCH",
      `https://fir-test-d1063-default-rtdb.firebaseio.com/employee/${id.value}.json`
    );

    //3
    xhr.send(JSON.stringify(employee));
    xhr.addEventListener("load", showData)
  }

}

function showData() {
  //1
  let xhr = new XMLHttpRequest();
  //2
  xhr.open(
    "GET",
    "https://fir-test-d1063-default-rtdb.firebaseio.com/employee.json"
  );
  //3
  xhr.send();
  //4
  xhr.addEventListener("load", () => {
    const data = JSON.parse(xhr.response);
    tableBody.innerHTML = String();
    for (let id in data) {
      const employee = data[id];
      tableBody.innerHTML += `
      <tr id="${id}">
        <td >${employee.fname}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><button class="btn btn-danger rounded-0" onclick='deleteEmp("${id}")'>Delete</button></td>
        <td><button class="btn btn-success rounded-0" onclick='updateEmp("${id}", ${JSON.stringify(employee)})'>Update</button></td>
        <td><button class="btn btn-info rounded-0" onclick='getEmp("${id}", ${JSON.stringify(employee)})'>Get</button></td>
      </tr>
      `;
    }
  });

}
function clearData() {
  empInputs.forEach((ele) => {
    ele.id == "select" ? (ele.value = ele[0].value) : (ele.value = String());
  });
}
function deleteEmp(id) {
  //1
  const xhr = new XMLHttpRequest();
  //2
  xhr.open(
    "DELETE",
    `https://fir-test-d1063-default-rtdb.firebaseio.com/employee/${id}.json`
  );
  //3
  xhr.send();
  //4
  xhr.addEventListener("load", () => {
    showData();
  });
}

function updateEmp(_id, data) {
  id.value = _id;
  empInputs[0].focus();
  empInputs[0].value = data.fname;
  empInputs[1].value = data.lname;
  empInputs[2].value = data.age;
  empInputs[3].value = data.salary;
  empInputs[4].value = data.select;
}
function getEmp(_id, data) {
  let employeeRow = document.getElementById(_id).children;
  employeeRow[1].innerHTML = data.lname;
  employeeRow[2].innerHTML = data.age;
  employeeRow[3].innerHTML = data.salary;
  employeeRow[4].innerHTML = data.select;
}
const empInputs = document.querySelectorAll(".data-emp");
const tableBody = document.querySelector("table tbody");
let id = document.getElementById("id");
document.getElementById("save").addEventListener("click", savaData);
document.getElementById("show").addEventListener("click", showData);
