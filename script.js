// SLIDER FUNCTION WITH JS -- START
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("image-container");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

// DISPLAY LINK LISTS FROM ARRAY -- START
let ulEl = document.querySelector("#ul-el");
const listData =
    [
        "Women's Fashion", "Health &#38; Beauty", "Men's Fashion",
        "Watches &#38; Accessories", "Electronic Devices", "TV &#38; Home Applianceset", "Electronic Accessories", "Groceries &#38; Pets", "Babies &#38; Toys", "Home &#38; Lifestyle", "Sports &#38; Outdoor", "Motors, Tools &#38; DIY"
    ];
const iconData =
    [
        "fa-solid fa-person-dress", "fa-solid fa-notes-medical", "fa-solid fa-shirt",
        "fa-regular fa-clock", "fa-solid fa-laptop", "fa-solid fa-tv",
        "fa-solid fa-plug", "fa-solid fa-cart-shopping", "fa-solid fa-baby",
        "fa-solid fa-couch", "fa-solid fa-volleyball", "fa-solid fa-screwdriver-wrench"

    ];
let para = "";
for (let i = 0; i < listData.length; i++) {
    para +=
        `
        <li>
            <a class="iborder" href="#">
                <div class="border">
                    <i class="${iconData[i]} icon-card"></i>
                </div>
                    <p class="link-category">${listData[i]}</p>
            </a>
        </li>
    `;
}
ulEl.innerHTML = para;


// DISPLAY PRODUCT DATA FROM ARRAY -- START
let categoryEl = document.querySelector(".category-content");

const imgSrc =
    [
        "product1.png", "product2.png", "product3.png", "product4.png", "product5.png",
        "product6.png", "product7.png", "product8.png", "product9.png", "product10.png"
    ];
const catData =
    [
        "Mart", "Beauty", "Home &#38; Decor", "Proudly Nepali", "Men's Fashion", "Electronic",
        "Sale is live", "Women's Fashion", "Hobbies", "Everyday Low Price"
    ]

let holder = "";
for (let i = 0; i < imgSrc.length; i++) {
    holder +=
        `
    <div class="content-items">
        <img src="images/products/${imgSrc[i]}" alt="" width= "100%">
        <p>${catData[i]}</p>
    </div>
    `;
}
categoryEl.innerHTML = holder;


// TIMER FUNCTION WITH JS -- START
let hourEl = document.querySelector(".hour");
let minuteEl = document.querySelector(".minute");
let secondEl = document.querySelector(".second");

function showTimer() {
    const date = new Date();
    const hours = 24 - date.getHours();
    const minutes = 60 - date.getMinutes();
    const seconds = 60 - date.getSeconds();

    let hrlength = hours.toString().length;
    let minlength = minutes.toString().length;
    let seclength = seconds.toString().length;

    hourEl.textContent = hrlength == 1 ? "0" + hours : hours;
    minuteEl.textContent = minlength == 1 ? "0" + minutes : minutes;
    secondEl.textContent = seclength == 1 ? "0" + seconds : seconds;
}
setInterval(showTimer, 0);


// FLASH SALE -- START product-section-one
let productsEl = document.querySelector(".product-section-one");

const productImage =
    [
        "prod1.jpg", "prod2.jpg", "prod3.jpg", "prod4.jpg", "prod5.jpg", "prod6.jpg"
    ];
const productTitle =
    [
        "Bike Riding Gloves Anti-Skid Touchscreen Windproof And Water Repellent Fleece Lined Gloves",
        "TWS L21 The Best Budget Wireless Earbuds",
        "Atomic Habits By James Clear - Self Development Books | Atomic Habits English Edition | Self Help Books |",
        "11 In 1 Stainless Steel Swiss Folding Knife Tactical Knife Army Knives Pocket Hunting Outdoor Camping",
        "M10 Wireless TWS Earbuds Version 5.1 | Digital Display | 15 Hours Play Time | 2 Hours Charging Time",
        "badgePure Jamun Honey 300 gm"

    ];
const productPrice =
    [
        "Rs. 345", "Rs. 897", "Rs. 185", "Rs. 325", "Rs. 895", "Rs. 650"
    ];
const productDiscount =
    [
        "Rs. 699 ", "Rs. 1,999", "Rs. 800", "Rs. 500", "Rs. 2,000", ""
    ];
const productDiscountPer =
    [
        "-50%", "-55%", "-77%", "-35%", "-55%", ""
    ];


let productHolder = "";
for (let i = 0; i < productTitle.length; i++) {
    productHolder +=
        `
        <a href="#" class="card-container">
            <div class="card-img">
                <img src="images/prod/${productImage[i]}" alt="${productImage[i]}">
            </div>
            <div class="card-info">
                <div class="title">
                    ${productTitle[i]}
                </div>
                <div class="price">
                    ${productPrice[i]}
                </div>
                <div class="discount">
                    <p>${productDiscount[i]} </p>
                    <span id="discount-text">${productDiscountPer[i]}</span>
                </div>
            </div>
        </a>
    `;
}
productsEl.innerHTML = productHolder;


// DARAZ MALL -- START product-section-one
const vendorEl = document.querySelector("#shop-section-el");

const shopProductImg =
    [
        "prod1.jpg", "prod2.jpg", "prod3.jpg", "prod4.jpg", "prod5.jpg", "prod6.jpg"
    ];
const shopImg =
    [
        "sell1.png", "sell2.png", "sell3.jpeg", "sell4.png", "sell5.jpeg", "sell6.png"
    ];
const shopName =
    [
        "Chicco", "Bagmati Plastics", "Pulchowki Books", "Fancyra", "Viopatch", "Naturo Earth"
    ];
const shopSlogan = [
    "Chicco", "Bagmati Plastics", "Pulchowki Books", "Feel the joy", "Muscle pain relief patch", "Natural Products"
]

let shopHolder = "";
for (let i = 0; i < shopProductImg.length; i++) {
    shopHolder +=
        `
        <a href="#" class="card-container-two">
            <div id="shop-img">
                <div id="shadow"></div>
                <img src="images/shop/${shopProductImg[i]}" alt="">
            </div>

            <div id="shop-details">
                <img src="images/shop/${shopImg[i]}" alt="">
                <div id="shop-name">
                    ${shopName[i]}
                </div>
                <div id="shop-slogan">
                    ${shopSlogan[i]}
                </div>
            </div>
        </a>
    `;
}
vendorEl.innerHTML = shopHolder;

// CATEGORY MALL -- START product-section-one
const catEl = document.querySelector("#cat-section-el");
