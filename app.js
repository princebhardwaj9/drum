var keyData = [
  "BASS",
  "Psycore-dark",
  "Jazz1",
  "african-pe-hi",
  "UK",
  "static-warble",
  "SNARE",
  "rs7000",
  "Throw",
  "tek-beep-up",
  "Moombah-Vocal-3",
  "classic-hh-Acu_Snr"
];

var recorded = [];

function randomData() {
  recorded.splice(0, keyData.length);
  for (var i = 0; i < keyData.length; i++) {
    recorded.push(keyData[Math.floor(Math.random() * keyData.length)]);
  }
  console.log(recorded);
  sysPlay(recorded);
}

function sysPlay() {
  var count = 0;
  for (var i = 0; i < recorded.length; i++) {
    (function(i) {
      setTimeout(function() {
        let audio1 = new Audio(`sounds/${recorded[i]}.wav`);
        audio1.play();
        count++;
        console.log(count);
      }, 1000 * i);
    })(i);
  }
  if (count == 12) {
    console.log("SOUNDS");
  }
}

function myFunction() {
  alert("Now Your Turn");
}

const startButton = document.getElementById("start");
startButton.addEventListener("click", randomData);
document.getElementById("start").addEventListener("ended", myFunction);

var userPress = [];

// PLAY FUNCTION
function play(e) {
  let key = document.querySelector(`[data-key="${e.keyCode}"]`),
    fileName = key.childNodes[3].innerText,
    audio = new Audio(`sounds/${fileName}.wav`);

  var counter = 0;
  while (counter < 12) {
    if (!key) return;
    key.classList.add("active");
    audio.play();
    userPress.push(fileName);
    counter++;
  }
  isPro(userPress, recorded);
}

// CHECK FUNCTION
let score = 0;

function isPro(userPress, recorded) {
  var temp = false;
  for (var i = o; i < userPress.length; i++) {
    if (userPress[i] == recorded[i]) {
      temp = true;
    } else {
      alert("Sorry start again need more practice");
    }
  }
  if (temp) {
    return score + 10;
  }
}

function removeActive(e) {
  let key = document.querySelector(`[data-key="${e.keyCode}"]`);
  key && key.classList.remove("active");
}

document.addEventListener("keydown", play);
document.addEventListener("keyup", removeActive);
