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
