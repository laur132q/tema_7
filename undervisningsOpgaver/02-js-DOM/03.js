// I Denne opgave har vi ændret indholdet i DOM'en, ved at benytte java script
// Eksemplet med biograf jobbet, du skal hele tiden udskifte indholdet, uden at ændre i Hmtl'en

const headline1 = document.querySelector("#title1");
const headline2 = document.querySelector("#title2");
console.log(headline1);
console.log(headline2);

let article1 = document.querySelector("#article1");
let article2 = document.querySelector("#article2");
console.log(article1);
console.log(article2);

// const paragraf = document.querySelectorAll("p");
// console.log(paragraf);

const paragraf1 = document.querySelector("p");
console.log(paragraf1);

const paragraf2 = document.querySelector("#article2 p");
console.log(paragraf2);

// Med text.content skriver du kun text
headline1.textContent = " her skal der stå noget helt andet";

// Med inner.html kan du skrive andre klasser og attributer ind
paragraf1.innerHTML = "<p> Noget nyt og anderledes </p>";

paragraf2.innerHTML = "<p> Noget nyt og anderledes </p>";

const image1 = document.querySelector(".image1");
console.log(image1);

const image2 = document.querySelector(".image2");
console.log(image2);

image1.src = "https://placeimg.com/640/480/nature";
image1.alt = "dette er en alt tekst på et billede";

image2.src = "https://placeimg.com/640/480/nature";
image2.alt = "dette er en alt tekst på et billede";
