// Opgaven her var at sørger for at DOM'en er loaded, inden man kan se resten af indholdet
// Det er for at sikre sig at vores manipulationer bliver vist
// med dom'en

document.addEventListener("DOMContentLoaded", start);

// & Så her er function som indeholder alt det vi har ændet
// & som først bliver vist når siden er loaded
function start() {
  console.log("Nu er DOM'en loaed");

  // const headline1 = document.querySelector("#title1");
  // const headline2 = document.querySelector("#title2");
  // console.log(headline1);
  // console.log(headline2);

  // const section = document.querySelector("section");
  // console.log(section);

  // let article1 = document.querySelector("#article1");
  // let article2 = document.querySelector("#article2");
  // console.log(article1);
  // console.log(article2);

  // const paragraf = document.querySelectorAll("p");
  // console.log(paragraf);

  // const paragraf1 = document.querySelector("p");
  // console.log(paragraf1);

  // const paragraf2 = document.querySelector("#article2 p");
  // console.log(paragraf2);

  // headline1.textContent = " her skal der stå noget helt andet";

  // paragraf1.innerHTML = "<p> Noget nyt og anderledes </p>";

  // paragraf2.innerHTML = "<p> Noget nyt og anderledes </p>";

  // !!----------------------------------------------- HER OPGAVE 9 ----------------------------
  // Først har vi taget fat i billedt
  // Sat en eventlister på click
  // Så har vi lavet en funktion, som
  // laver et tilfældigt tal og sætter det ind i vores billede link
  // Som gør at vi får et nyt billede, hver gang vi klikker

  const kategorier = ["animals", "arch", "people", "nature", "tech"];

  function skift() {
    const nummer = Math.round(Math.random() * 4);
    image1.src = "https://placeimg.com/600/400/" + kategorier[nummer];
    image1.alt = kategorier[nummer];
    console.log(skift);
  }

  const image1 = document.querySelector(".image1");
  console.log(image1);

  image1.addEventListener("click", skift);

  // function skiftbillede() {
  //   tilfældigTAL = Math.floor(Math.random() * 10) + 1;
  //   console.log(tilfældigTAL);
  //   image1.src = "https://placeimg.com/400/300/arch?t=" + tilfældigTAL;
  //   console.log(skiftbillede);
  // }
  // ! -------------------------------------------------- Opgave 9 slut ----------------------------------------

  // TODO det her under er fra opgave 6 ----- :)
  const image2 = document.querySelector(".image2");
  console.log(image2);

  // https://placeimg.com/640/480/

  // const pic = document.querySelector("img");
  //   image1.src = "https://placeimg.com/640/480/nature";
  //   image1.alt = "dette er en alt tekst på et billede";

  image2.src = "https://placeimg.com/640/480/nature";
  image2.alt = "dette er en alt tekst på et billede";

  // & Her kommer den egentlige opgave, nemlig at tilføje et nyt element med "createElement"
  // vi definerer vores nye element, med let.
  // For at kunne se den sætter man noget text ind
  // i parentesen, kan der også står andre tags, fx h1 eller paragraf
  let newArticle = document.createElement("article");
  let overskriftNew = document.createTextNode(
    "Min overskrift til den nye artikel"
  );

  // & For at kunne sætte det ind, skal de sættes på "noget" her har vi sat den på vores section.
  section.appendChild(newArticle);
  newArticle.appendChild(overskriftNew);

  // Nu har vi gjort det samme som ved articel bare med et billede
  let newImage = document.createElement("img");
  newImage.src = "https://placeimg.com/640/480/nature";
  section.appendChild(newImage);
  // Dette billede har ikke css styling hvorfor? når den faktisk er inden i sektionen?
}

// console.log(nummer);
