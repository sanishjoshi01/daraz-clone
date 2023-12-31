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

    slides[slideIndex-1].style.display = "block";  
}
// SLIDER FUNCTION WITH JS -- END


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
for(let i = 0; i < listData.length; i++)
{
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
// DISPLAY LINK LISTS FROM ARRAY -- END        


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
for(let i = 0; i < imgSrc.length; i++)
{
    holder += 
    `
    <div class="content-items">
        <img src="images/products/${imgSrc[i]}" alt="" width= "100%">
        <p>${catData[i]}</p>
    </div>
    `;
}
categoryEl.innerHTML = holder;
// DISPLAY PRODUCT DATA FROM ARRAY -- END


// TIMER FUNCTION WITH JS -- START
let hourEl = document.querySelector(".hour");
let minuteEl = document.querySelector(".minute");
let secondEl = document.querySelector(".second");

function showTimer(){
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
// TIMER FUNCTION WITH JS -- END