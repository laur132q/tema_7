document.addEventListener("DOMContentLoaded", start);

function start() {
  let dyr = {
    navn: "gris",
    type: "pattedyr",
    billede: "http://mabe-kea.dk/E19/pics/pig.png",
    levested: "bondegård",
  };
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
