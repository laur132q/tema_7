// Det ger er forskellige måder at tage fat i ting på i DOM'en.

// & Det her er de andre måder:
// Vælg et element udfra:
// ID: document.querySelector("#idNavn")
// Class: document.querySelector(".classNavn")
// Element: document.querySelector("nav .menupunkt a")
// pseudo-selectors:document.querySelector("article:first-child")
// document.querySelector("article:nth-child(2)")

const headliners = document.querySelectorAll("h1:nth-child(1)");
console.log(headliners);

// den referer til det første barn i hver sektion, i parentesen styår hvilket barn der henvises til.
// Dvs at hvis der er 2 h1'er i en sektion tager den kun den første. i det her tilfælde.

let article1 = document.querySelector("#article1");
let article2 = document.querySelector("#article2");
console.log(article1);
console.log(article2);

const paragraf = document.querySelectorAll("p");
console.log(paragraf);

const images = document.querySelectorAll(".images");
console.log(images);
