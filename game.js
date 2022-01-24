// Hier worden keys 1 t/m 8 en de E key gebind aan hun functies (hotkeys).
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
  const KeyE = 69;

  const keyPressed = event.keyCode;
  if (keyPressed === Digit1) {
    if (
      document.getElementById("spaceship").style.gridArea ===
      document.getElementById("rocket").style.gridArea
    ) {
      document.getElementById("rocket").style.gridArea = "14/1/auto/auto";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
      document.getElementById("rocket").style.gridArea = "14/1/auto/auto";
    }
    document.getElementById("spaceship").style.gridArea = "14/1/auto/auto";
  }
  if (keyPressed === Digit2) {
    if (
      document.getElementById("spaceship").style.gridArea ===
      document.getElementById("rocket").style.gridArea
    ) {
      document.getElementById("rocket").style.gridArea = "14/2/auto/auto";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
      document.getElementById("rocket").style.gridArea = "14/2/auto/auto";
    }
    document.getElementById("spaceship").style.gridArea = "14/2/auto/auto";
  }
  if (keyPressed === Digit3) {
    if (
      document.getElementById("spaceship").style.gridArea ===
      document.getElementById("rocket").style.gridArea
    ) {
      document.getElementById("rocket").style.gridArea = "14/3/auto/auto";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
      document.getElementById("rocket").style.gridArea = "14/3/auto/auto";
    }
    document.getElementById("spaceship").style.gridArea = "14/3/auto/auto";
  }
  if (keyPressed === Digit4) {
    if (
      document.getElementById("spaceship").style.gridArea ===
      document.getElementById("rocket").style.gridArea
    ) {
      document.getElementById("rocket").style.gridArea = "14/4/auto/auto";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
      document.getElementById("rocket").style.gridArea = "14/4/auto/auto";
    }
    document.getElementById("spaceship").style.gridArea = "14/4/auto/auto";
  }
  if (keyPressed === Digit5) {
    if (
      document.getElementById("spaceship").style.gridArea ===
      document.getElementById("rocket").style.gridArea
    ) {
      document.getElementById("rocket").style.gridArea = "14/5/auto/auto";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
      document.getElementById("rocket").style.gridArea = "14/5/auto/auto";
    }
    document.getElementById("spaceship").style.gridArea = "14/5/auto/auto";
  }
  if (keyPressed === Digit6) {
    if (
      document.getElementById("spaceship").style.gridArea ===
      document.getElementById("rocket").style.gridArea
    ) {
      document.getElementById("rocket").style.gridArea = "14/6/auto/auto";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
      document.getElementById("rocket").style.gridArea = "14/6/auto/auto";
    }
    document.getElementById("spaceship").style.gridArea = "14/6/auto/auto";
  }
  if (keyPressed === Digit7) {
    if (
      document.getElementById("spaceship").style.gridArea ===
      document.getElementById("rocket").style.gridArea
    ) {
      document.getElementById("rocket").style.gridArea = "14/7/auto/auto";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
      document.getElementById("rocket").style.gridArea = "14/7/auto/auto";
    }
    document.getElementById("spaceship").style.gridArea = "14/7/auto/auto";
  }
  if (keyPressed === Digit8) {
    if (
      document.getElementById("spaceship").style.gridArea ===
      document.getElementById("rocket").style.gridArea
    ) {
      document.getElementById("rocket").style.gridArea = "14/8/auto/auto";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
      document.getElementById("rocket").style.gridArea = "14/8/auto/auto";
    }
    document.getElementById("spaceship").style.gridArea = "14/8/auto/auto";
  }
  if (keyPressed === KeyE) {
    if (document.getElementById("fire").style.color === "red") {
      document.getElementById("fire").style.color = "white";
      document.getElementById("rocket").style.gridRow = "14";
      document.getElementById("rocket").style.visibility = "visible";
      document.getElementById("rocket").style.display = "block";
      up();
    }
  }
}
// Deze functies verplaatst de raket van positie elke 175 miliseconden.
function up() {
  var i = 14;
  var intervalId = setInterval(function () {
    if (i === 1) {
      clearInterval(intervalId);
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
      clearInterval(intervalId);
    }
    document.getElementById("rocket").style.gridRow = i;
    i--;
  }, 175);
}
