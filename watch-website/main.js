const bx1 = document.getElementsByClassName("bx")[0];
const left = document.getElementById("left");
const right = document.getElementById("right");
const scrollWatch = document.getElementsByClassName("scroll_watch");
const mainWatch = document.getElementsByClassName("main_watch")[0];
const img = document.getElementsByClassName("img")[0];
const svg = document.getElementById("svg");
const spanNumber = document.querySelector(".span_number");

// SCROLL ARROW
right.addEventListener("click", () => {
  console.log("hello");
  bx1.scrollLeft += 100;
});
left.addEventListener("click", () => {
  console.log("hello");
  bx1.scrollLeft -= 100;
});

const h6 = document.getElementsByTagName("h6")[0];

// NEW BACKGROUND IMAGES ONCLICK
scrollWatch[0].addEventListener("click", () => {
  mainWatch.src = "img/watch-3-removebg-preview.png";
  svg.innerHTML = '<text y="90%">Gen 5</text>';
  h6.innerText = "$350.00";
  spanNumber.innerHTML = 1;
  setTimeout(() => {
    img.style.bottom = "-100px";
  }, 500);
  setTimeout(() => {
    img.style.bottom = "-230px";
  }, 1000);
  setTimeout(() => {
    img.src = "/img/watch-on-hand.jpg";
  }, 1900);
  setTimeout(() => {
    img.style.bottom = "0px";
  }, 2300);
});
scrollWatch[1].addEventListener("click", () => {
  mainWatch.src = "/img/burberry-removebg-preview.png";
  svg.innerHTML = '<text y="90%">Gen 6</text>';
  h6.innerHTML = "$744.00";
  spanNumber.innerHTML = 2;
  setTimeout(() => {
    img.style.bottom = "-100px";
  }, 500);
  setTimeout(() => {
    img.style.bottom = "-230px";
  }, 1000);
  setTimeout(() => {
    img.src = "/img/watch-on-hand.jpg";
  }, 1900);
  setTimeout(() => {
    img.style.bottom = "0px";
  }, 2300);
});
scrollWatch[2].addEventListener("click", () => {
  mainWatch.src = "/img/emporio-removebg-preview.png";
  svg.innerHTML = '<text y="90%">Gen 7</text>';
  h6.innerText = "$634.00";
  spanNumber.innerHTML = 3;
  setTimeout(() => {
    img.style.bottom = "-100px";
  }, 500);
  setTimeout(() => {
    img.style.bottom = "-230px";
  }, 1000);
  setTimeout(() => {
    img.src = "/img/watch-on-hand-2.jpeg";
  }, 1900);
  setTimeout(() => {
    img.style.bottom = "0px";
  }, 2300);
});

const cart = document.getElementById("cart");
const addToCart = document.getElementsByClassName("add_to_cart")[0];
a = 0;

cart.innerText = a;

addToCart.addEventListener("click", () => {
  a += 1;
  cart.innerText = a;
});
console.log("hi");
