// const headliners = document.querySelectorAll("h1:nth-child(1)");
// console.log(headliners);

const headline1 = document.querySelector("#title1");
const headline2 = document.querySelector("#title2");
console.log(headline1);
console.log(headline2);

let article1 = document.querySelector("#article1");
let article2 = document.querySelector("#article2");
console.log(article1);
console.log(article2);

const paragraf = document.querySelectorAll("p");
console.log(paragraf);

const paragraf1 = document.querySelector("p");
console.log(paragraf1);

const paragraf2 = document.querySelector("#article2 p");
console.log(paragraf2);

headline1.textContent = " her skal der stå noget helt andet";

paragraf1.innerHTML = "<p> Noget nyt og anderledes </p>";

paragraf2.innerHTML = "<p> Noget nyt og anderledes </p>";

const images = document.querySelectorAll(".images");
console.log(images);
