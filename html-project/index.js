const xhr = new XMLHttpRequest();
xhr.open("GET", "./data.json");
xhr.send();
xhr.addEventListener("load", function () {
  const data = JSON.parse(xhr.response);
  let setContent = document.getElementById("content");
  // Sort sections for show all categories 
  const allCategories = [
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
  ];
  for (let category of allCategories)
  {
    setContent.innerHTML += `<h1 class="display-1 d-i text-muted text-center" id="${category}" style="margin: 100px 0;">${category.toUpperCase()}</h1>`
    data.forEach((ele) => {
      if(category == ele.category)
      {
        setContent.innerHTML += `
        <div class="col-lg-3 col-md-6 mt-3 text-center" >
        <div class="hoverit">
        <img src="${ele.image}" class="img-thumbnail border-0" style="height: 300px; width:400px"/>
        <a href="#" class="click-cart "><span class="text-card">Add Cart <i class="bi bi-cart-plus-fill ms-2"></i></span></a>
        </div>
        <button onclick="cureentCategory(${ele.id});" class="btn btn-outline-dark rounded-0">Buy</button>
        <p class="font-monospace">${ele.title} <span class="text-secondary fs-3" >${ele.price}$</span></p>
        </div>
        `;
      }
    });
  }
  const allItems = document.querySelectorAll(".click-cart");
  for (let item of allItems) {
    item.addEventListener("click", function () {
      let myArray = [];
      myArray.push({ image: item.parentNode.children[0].src, price: item.parentNode.parentNode.children[2].children[0].innerHTML})
      let myCarts = JSON.stringify(myArray);
      sessionStorage.setItem('carts', myCarts);
      let carts = JSON.parse(sessionStorage.carts);
      (sessionStorage.incrementCart) ? (sessionStorage.incrementCart = Number(sessionStorage.incrementCart) + 1) : (sessionStorage.incrementCart = 1);
      document.getElementById("count-cart").innerHTML = sessionStorage.incrementCart;
      for (let cart of carts)
      {
        document.querySelector(".modal-body").innerHTML += `
        <div class="mb-4">
          <img src="${cart.image}" class="img-thumbnail w-25" alt="Cinque Terre">
          <span class="text-uppercase">It's ready now <span class="ms-5">${cart.price}<span></span>
        </div>
        `;
      }
    });
  }
});

window.addEventListener("load", function (){
  this.sessionStorage.removeItem("carts");
  this.sessionStorage.removeItem("incrementCart");
})

function cureentCategory(id)
{
  location.href = "./showCategory.html?id="+id;
}