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
  "BEAT",
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
// document.getElementById("start").addEventListener("ended", myFunction);

// CHECK FUNCTION
let score = 0;

function isPro(userPress, recorded) {
  var temp = false;
  for (var i = 0; i < userPress.length; i++) {
    if (userPress[i] == recorded[i]) {
      temp = true;
    } 
  }
  if (temp) {
    score = score + 10;
    alert("PRo...!! your SCORE: " + score);
  }else {
      alert("Sorry start again need more practice");
    }
}

// PLAY FUNCTION

var userPress = [];
var counter = 0;
function play(e) {
  let key = document.querySelector(`[data-key="${e.keyCode}"]`),
    fileName = key.childNodes[3].innerText,
    audio = new Audio(`sounds/${fileName}.wav`);
  if (!key) return;
  key.classList.add("active");
  audio.play();
  userPress.push(fileName);
  counter++;
  console.log(counter);
  console.log(userPress);
  if (counter == 12) {
    isPro(userPress, recorded);
  }
}

function removeActive(e) {
  let key = document.querySelector(`[data-key="${e.keyCode}"]`);
  key && key.classList.remove("active");
}

document.addEventListener("keydown", play);
document.addEventListener("keyup", removeActive);
