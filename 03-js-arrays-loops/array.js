const playliste = [
  "Two of us",
  "Dig a pony",
  "Across the Universe",
  "I me Mine",
  "Dig it",
  "Let it be",
  "Maggie Mae",
  "I've got a feeling",
  "One After 909",
  "The Long and Winding Road",
  "For you Blue",
  "Get Back",
];

// Vi manipulerer med html'en med innerHTML og kan derfor lave en liste inde fra javascript
// element er alle sangene fra overstående playliste
playliste.forEach(
  (element) => (display.innerHTML += "<li>" + element + "</li>")
);
