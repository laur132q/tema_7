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


let greeting;
function tid() {
    console.log("tid");
    if (time = 5, 0, 0 && time <= 10, 0, 0); {
        greeting = "God morgen";
    } else if (time = 10, 0, 0 && time < 18, 0, 0) {
        greeting = "Goddag"; 
    } else if (time = 18, 0, 0 && time < 24, 0, 0) {
         greeting = "Godaften"; 
    } else (time = 24, 0, 0 && time 5, 0, 0) {
        greeting = "Godnat"; 
    }
}
