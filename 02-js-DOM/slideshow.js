// Her har vi prøvet at lave et array, med vores billeder
const billeder = [
  "billeder/img1.png",
  "billeder/img2.png",
  "billeder/img3.png",
  "billeder/img4.png",
  "billeder/img5.png",
  "billeder/img6.png",
  "billeder/img7.png",
];

// VI siger til sætter start til at være 0, altså første billede i array, da det starter med 0 altid
let index = 0;

// ^ Her har vi bare lavede en masse konstante så vi kunne bruge dem
// Selve sectionen
const section = document.querySelector("#galleri");
console.log(section);
// selve containeren
const container = document.querySelector("#container");
//selve knappen
const videre = document.querySelector("#knap");
// ^ ------------ Konstante slut ----------------

//& Her starter functionen med klikket
videre.addEventListener("click", nextPic);

function nextPic() {
  index++;
  console.log("næste billede");
  billeder = "billeder/img" + index + ".png";
  console.log(nextPic);
}

// Her looper vi igennem alle elementerne i arrayet
billeder.forEach((element) => console.log(element));

// TODO Her prøvet vi at skabe et nyt element så vi kunne så vist vores billeder
// TODO Kan man henvise til en hel mappe med billeder? Eller skal man henvise til hvert billede?
let selveGalleriet = document.createElement("img");
selveGalleriet.src = "billeder/";
