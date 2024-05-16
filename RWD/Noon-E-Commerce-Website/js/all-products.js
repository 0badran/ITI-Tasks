function displayProducts(products, arrOfAds, htmlElement) {
  var html = document.getElementById(htmlElement);
  var countProduts = document.getElementById("count-products");
  countProduts.textContent = `All products: ${products.length}`;
  let indexAds = Number();
  for (var i = 0; i < products.length; i++) {
    if ((i % 8) == 0) {
      indexAds += 1;
      indexAds = (indexAds == arrOfAds.length) ? 0 : indexAds;
      html.innerHTML += `<img src="./assets/all-products/${arrOfAds[indexAds]}" class="col-12">`
    }
    html.innerHTML += `
      <div class="nav-rec-cards m-3">
        <div class="card-img">
          <img src="./assets/all-products/${products[i]}">
        </div>
        <div class="card-info">
          <div class="card-text">
            Apple iPhone 14 Pro Max 256GB Deep
          </div>
          <div class="card-price ">
            <span style="font-size: 10px; margin-right: 5px;">AED </span><span
              style="font-size: 18px; font-weight: 700;">43990.00</span>
          </div>
          <div class="card-off">
            <span style="text-decoration: line-through solid black; font-size: 10px; margin-right: 5px; ">5099</span>
            <span style="font-weight: 700; color:green;"> 13% off</span>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center mt-lg-5">
            <div class="card-express">
              <img src="assets/express.svg" alt="">
            </div>
            <div class="card-ratting">
              4.5 <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

function displayItems(items) {
  var html = document.getElementById("checkbox-side");
  for (var i = 0; i < items.length; i++) {
    html.innerHTML += `
    <div>
    <p class="d-inline-flex gap-1">
      <a class="text-decoration-none text-dark" data-bs-toggle="collapse" href="#collapse${i}" role="button"
        aria-expanded="false" aria-controls="collapseExample">
        <i class="fa-regular fa-square-plus"></i>&MediumSpace;&MediumSpace;${items[i]}
      </a>
    </p>
    <div class="collapse" id="collapse${i}">
      <div class="card card-body">
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the
        user activates the relevant trigger.
      </div>
    </div>
  </div>
    `;
  }
}

let myProducts = ["bag-1.avif", "bag-2.avif", "bag-3.avif", "bag-4.avif", "bag-5.avif", "deal-5.jpg", "deal-6.jpg", "deal-8.jpg", "deal-7.jpg", "c-deal-1.avif", "c-deal-3.avif", "c-deal-4.avif", "toy-1.avif", "toy-2.avif"
  , "toy-3.avif", "toy-4.avif", "toy-5.avif", "toy-6.avif", "c-deal-5.avif", "c-edeal-2.avif", "deal-5.jpg", "deal-6.jpg"
  , "deal-7.jpg", "deal-8.jpg", "k-1.png", "k-2.png", "k-3.png", "k-4.png", "k-5.png", "k-6.png", "k-7.png", "m-1.png", "m-2.png", "m-3.png", "m-4.png", "m-5.png", "m-6.png", "m-7.png", "tr-2.avif"
  , "tr-3.avif", "tr-4.avif", "toy-4.avif", "tr-5.avif", "w-1.png", "w-2.png", "w-3.png", "w-4.png", "w-5.png", "w-6.png", "w-7.png"
];
let myAds = ["c-2-1.png", "c-2-2.gif", "c-2-3.png", "carousel-1.png", "carousel-2.png", "carousel-3.jpg", "carousel-4.png", "carousel-5.png", "carousel-6.png", "carousel-8.png", "cover-3.png", "cover-4.jpg", "cover-5.gif", "cover-6.png", "cover-7.jpeg"]
const items = [
  "Electronics",
  "Mobiles",
  "Grocery",
  "Beauty & Health",
  "Fashion",
  "Home & Kitchen",
  "Sports & Fitness",
  "Baby",
  "Sports & Fitness",
  "Products",
  "Automotive",
  "Books",
  "Stationery",
  "Music"
];


displayProducts(myProducts, myAds, "products-side");
displayItems(items);