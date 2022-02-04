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
  dyr.forEach((dyr) => {
    listevisning.innerHTML += `<p>${dyr.navn}, ${dyr.type} fra ${dyr.levested}</p>`;
  });

  // Til når vi skal vise billede
  //   ${dyr.billede}

  // altid husk at referer til let's navn ("dyr") også  hvad der skal udskrives
  console.log(
    `dyr: ${dyr.navn} / type: ${dyr.type} / levestede: ${dyr.levested}`
  );

  //   Her har vi lavet en samlet beskrivelse, vi bruger både tekst som skal skrives udenfor dollartegnet
  const fuldBeskrivelse = `dyr: ${dyr.navn}/ type: ${dyr.type}/ levedsted: ${dyr.levested}`;

  //   Vi har defineret en destination ved at tage fat i et tomt html tag.
  const destination = document.querySelector("#dyrBeskrivelse");
  destination.querySelector("p").textContent = fuldBeskrivelse;

  destination.querySelector("img").src = dyr.billede;
}
