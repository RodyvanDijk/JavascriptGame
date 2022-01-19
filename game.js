// import { outsideGrid } from "./playfield.js";
import { moveRight, position } from "./spaceship.js";

// function startGame() {
//   myCharacter = new spaceship(100, 100, 10, 120);
// }
// startGame();

// window.addEventListener("keydown", (event) => {});
function move() {
  moveRight();
}

document.addEventListener("keydown", change_direction);
function change_direction(event) {
  const Digit1 = 49;
  const Digit2 = 50;
  const Digit3 = 51;
  const Digit4 = 52;
  const Digit5 = 53;
  const Digit6 = 54;
  const Digit7 = 55;
  const Digit8 = 56;

  const keyPressed = event.keyCode;
  if (keyPressed === Digit1) {
    document.getElementById("spaceship").style.gridColumnStart = "2";
    document.getElementById("spaceship").style.gridColumnEnd = "6";
  }
  if (keyPressed === Digit2) {
    document.getElementById("spaceship").style.gridColumnStart = "7";
    document.getElementById("spaceship").style.gridColumnEnd = "11";
  }
  if (keyPressed === Digit3) {
    document.getElementById("spaceship").style.gridColumnStart = "12";
    document.getElementById("spaceship").style.gridColumnEnd = "16";
  }
  if (keyPressed === Digit4) {
    document.getElementById("spaceship").style.gridColumnStart = "17";
    document.getElementById("spaceship").style.gridColumnEnd = "21";
  }
  if (keyPressed === Digit5) {
    document.getElementById("spaceship").style.gridColumnStart = "22";
    document.getElementById("spaceship").style.gridColumnEnd = "26";
  }
  if (keyPressed === Digit6) {
    document.getElementById("spaceship").style.gridColumnStart = "27";
    document.getElementById("spaceship").style.gridColumnEnd = "31";
  }
  if (keyPressed === Digit7) {
    document.getElementById("spaceship").style.gridColumnStart = "32";
    document.getElementById("spaceship").style.gridColumnEnd = "36";
  }
  if (keyPressed === Digit8) {
    document.getElementById("spaceship").style.gridColumnStart = "37";
    document.getElementById("spaceship").style.gridColumnEnd = "41";
  }
}

// hotkeys("q,w,e,r", function (event, handler) {
//   switch (handler.key) {
//     case "q":
//       document.getElementById("info").innerHTML = "you pressed q!";
//       break;
//     case "w":
//       document.getElementById("info").innerHTML = "you pressed w!";
//       break;
//     case "e":
//       document.getElementById("info").innerHTML = "you pressed e!";
//       break;
//     case "r":
//       document.getElementById("info").innerHTML = "you pressed r!";
//       break;
//   }
// });
