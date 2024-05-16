import { initializeApp, } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFkgym_JYpyD0AFZplvmNHpnjog6UbmMs",
  authDomain: "fir-test-d1063.firebaseapp.com",
  databaseURL: "https://fir-test-d1063-default-rtdb.firebaseio.com",
  projectId: "fir-test-d1063",
  storageBucket: "fir-test-d1063.appspot.com",
  messagingSenderId: "416843732408",
  appId: "1:416843732408:web:401fa3a31f5ef466242b4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let firestore = getFirestore(app);


document.getElementById("save").addEventListener("click", savaData);
document.getElementById("show").addEventListener("click", showData);
const empInputs = document.querySelectorAll(".data-emp");
const tableBody = document.querySelector("table tbody");
async function savaData() {
  const docRef = await addDoc(collection(firestore, "course"), {
    name: empInputs[0].value,
    final: empInputs[1].value,
    hours: empInputs[2].value,
    available: empInputs[3].value
  });
}

async function find() {
  let q = query(collection(firestore, "course"), where("name", "==", "css"));
  const response = await getDocs(q);
  const data = response.docs[0].data();
  console.log(data);
}

find();
async function showData() {
  let response = await getDocs(collection(firestore, "course"));
  response.docs.forEach((doc) => {
    const data = doc.data();
    tableBody.innerHTML += `
      <tr>
        <td >${data.name}</td>
        <td>${data.final}</td>
        <td>${data.hours}</td>
        <td>${data.available}</td>
      </tr>
    `;
  });
}