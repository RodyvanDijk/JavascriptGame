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
    document.getElementById("spaceship").style.gridColumnStart = "1";
    document.getElementById("spaceship").style.gridColumnEnd = "1";
  }
  if (keyPressed === Digit2) {
    document.getElementById("spaceship").style.gridColumnStart = "2";
    document.getElementById("spaceship").style.gridColumnEnd = "2";
  }
  if (keyPressed === Digit3) {
    document.getElementById("spaceship").style.gridColumnStart = "3";
    document.getElementById("spaceship").style.gridColumnEnd = "3";
  }
  if (keyPressed === Digit4) {
    document.getElementById("spaceship").style.gridColumnStart = "4";
    document.getElementById("spaceship").style.gridColumnEnd = "4";
  }
  if (keyPressed === Digit5) {
    document.getElementById("spaceship").style.gridColumnStart = "5";
    document.getElementById("spaceship").style.gridColumnEnd = "5";
  }
  if (keyPressed === Digit6) {
    document.getElementById("spaceship").style.gridColumnStart = "6";
    document.getElementById("spaceship").style.gridColumnEnd = "6";
  }
  if (keyPressed === Digit7) {
    document.getElementById("spaceship").style.gridColumnStart = "7";
    document.getElementById("spaceship").style.gridColumnEnd = "7";
  }
  if (keyPressed === Digit8) {
    document.getElementById("spaceship").style.gridColumnStart = "8";
    document.getElementById("spaceship").style.gridColumnEnd = "8";
  }
}
