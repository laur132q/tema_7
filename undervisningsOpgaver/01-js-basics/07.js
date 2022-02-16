
// & Det her er et ur
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss;

  document.getElementById("clock").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();


// & det her er løsningen på opgaven
let time = new Date().getHours();

//Godnat mellem 24 og 5.
if (time < 5) {
  console.log("godnat");
}

//Godmorgen mellem kl. 5 og kl 10,
else if (time < 10) {
  console.log("godmorgen");
}
//Goddag mellem kl 10 og 18,
else if (time < 18) {
  console.log("goddag");
}
//Godaften mellem 18 og 24 og
else {
  console.log("godaften");
}

