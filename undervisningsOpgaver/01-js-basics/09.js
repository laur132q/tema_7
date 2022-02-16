let timer = "3";
const fly = "109";
let c02 = timer * fly;
let resultat;
// `ved ${timer} timers flyrejse har du udledt ${c02} kg CO2`;

console.log(resultat);

if (c02 < 100) {
  console.log("Tæt på Thunberg");
} else if (c02 >= 100 && c02 < 200) {
  console.log("Ja, ja, du behøver ikke at melde dig ud af Å!");
} else if (c02 >= 200 && c02 < 600) {
  console.log("Det er godt for turismen i Nordeuropa");
} else if (c02 > 600) {
  console.log("Nå ja vi kan jo altid kolonisere en anden planet");
}

// & Det her er anden måde den kunne være løst på

let timer = 3;

let co2UdledtIKgVedFlyrejse = timer * 109;
let klimaSynderKommentar;

if (co2UdledtIKgVedFlyrejse < 100) {
  klimaSynderKommentar = "Tæt på Thunberg.";
} else if (co2UdledtIKgVedFlyrejse < 200) {
  klimaSynderKommentar = "Ja ja, du behøver ikke at melde dig ud af Å!";
} else if (co2UdledtIKgVedFlyrejse < 600) {
  klimaSynderKommentar = "Det er godt for turismen i nordeuropa.";
} else {
  klimaSynderKommentar = "Nå ja vi kan jo altid kolonisere en anden planet ...";
}
console.log(
  `Du har fløjet ${timer} timer og udledt ${co2UdledtIKgVedFlyrejse} kg CO2. ${klimaSynderKommentar}`
);
