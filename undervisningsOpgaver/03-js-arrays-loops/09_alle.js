document.addEventListener("DOMContentLoaded", start);

// & Så her er function som indeholder alt det vi har ændet
// & som først bliver vist når siden er loaded

// Først tager vi fat i alle p'er
// Så looper vi igennem dem med "foreach"
// For hver p, så skal der sættes en eventlistner på, sådan at når man klikker
// så skal den starte en ny funktion som sætter klassen typo på
// Som gør at teksten bliver blå når man klikker
function start() {
  console.log("Nu er DOM'en loaed");

  //& Her har vi valgt alle p'er og alle h3'er fra html'en og sagt at hvis man klikker på dem så skal der ske nogle ting
  //& Når man klikker på p skal typo ske (vi add'er typo) og med h3 er det typo2.

  const allep = document.querySelectorAll("p");
  allep.forEach((p) =>
    p.addEventListener("click", () => {
      p.classList.add("typo");
    })
  );

  const alleh = document.querySelectorAll("h3");
  alleh.forEach((h3) =>
    h3.addEventListener("click", () => {
      h3.classList.add("typo2");
    })
  );

  //   TODO Her kan man så trykke på reset knappen også resetter den.
  // TODO For alle p'er den looper igennem skal den lave en ny funktion (=>) som så fjener klasse Typo.
  const knap = document.querySelector("button");
  knap.addEventListener("click", reset);

  function reset() {
    allep.forEach((p) => p.classList.remove("typo"));
    alleh.forEach((h3) => h3.classList.remove("typo2"));
  }
}
function visBesked(message) {
  let first = "Info: ";
  return `${first} ${message}`;
}
let besked = "Kamilla underviser i morgen";
console.log(visBesked(besked));
