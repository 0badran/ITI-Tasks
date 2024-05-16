const xhr = new XMLHttpRequest();
xhr.open("GET", "./data.json");
xhr.addEventListener("load", function () {
  let id = Number(location.href.split("=")[1])-1;
  const data = JSON.parse(xhr.response);
  const category = data[id];
  console.log(category);
  document.getElementById("title").innerHTML = category.category;
  document.getElementById("content2").innerHTML = `
  <div class="d-flex flex-row">
    <div class="">
      <img src="${category.image}" style="width:200px; height:200px">
    </div>
    <div class="ms-5 font-monospace">
      <h2>${category.title}</h2>
      <p class="text-muted fs-1">$${category.price}</p>
      <p>${category.description}</p>
      <p calss="fw-bolder fs-3">Color:</p>
      <button class="btn btn-outline-dark active">red</button>
      <button class="btn btn-outline-dark">gray</button>
      <button class="btn btn-outline-dark">blue</button>
      <button class="btn btn-outline-dark">black</button>
      <p class="fs-3 my-5 fw-bolder">Category: <span class="fs-5">${category.category}</span></p>
      <button class="btn btn-outline-dark w-50 rounded-0">Add to Card</button>      
    </div>
  </div>
  `;
})
xhr.send();
document.getElementById("count-cart").innerHTML = (sessionStorage.incrementCart==undefined)?"0":sessionStorage.incrementCart;