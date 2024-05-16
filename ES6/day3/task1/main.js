async function getData() {
  let response = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

const data = getData();
const mainSelect = document.getElementById("main-select");
let button = document.getElementById("btn");
let disDetails = document.getElementById("show-details");

data.then((USERS) => {
  for (let user of USERS) {
    mainSelect.innerHTML += `<option>${user.id}. ${user.name}</option>`;
  }
  mainSelect.addEventListener("change", function () {
    button.removeAttribute("disabled");
    button.addEventListener("click", () => {
      let ID = Number(this.value.split(".")[0]) - 1;
      let user = USERS[ID];
      disDetails.innerHTML = `
        <p>Name: ${user.name}</p>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>City: ${user.address.city}</p>
        <p>Street: ${user.address.street}</p>
      `;
    });
  });
});

