document.addEventListener("DOMContentLoaded", start);

let dyr = [
  {
    navn: "gris",
    type: "pattedyr",
    billede: "http://mabe-kea.dk/E19/pics/pig.png",
    levested: "bondegård",
  },
  {
    navn: "frø",
    type: "amfibie",
    billede: "http://mabe-kea.dk/E19/pics/frog.png",
    levested: "mose",
  },
  {
    navn: "ræv",
    type: "pattedyr",
    billede: "http://mabe-kea.dk/E19/pics/fox.png",
    levested: "skoven",
  },
  {
    navn: "sild",
    type: "fisk",
    billede: "http://mabe-kea.dk/E19/pics/sild.jpg",
    levested: "havet",
  },
  {
    navn: "krokodille",
    type: "fisk",
    billede: "http://mabe-kea.dk/E19/pics/kroko.jpg",
    levested: "sump",
  },
];

dyr.forEach(visHvertElement);
function visHvertElement(element) {
  console.log(element);
}

function start() {
  const listevisning = document.querySelector("#liste");
  const dyrtemplate = document.querySelector("template");
  dyr.forEach((dyr) => {
    const klon = dyrtemplate.cloneNode(true).content;
    klon.querySelector("h3").textContent = dyr.navn;
    klon.querySelector("img").src = dyr.billede;
    klon.querySelector("#p1").textContent = dyr.type;
    klon.querySelector("#p2").textContent = dyr.levested;
    listevisning.appendChild(klon);
  });
}
