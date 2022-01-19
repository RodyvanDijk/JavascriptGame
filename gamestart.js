function position() {
  document.getElementById("spaceship").style.visibility = "visible";
  document.getElementById("spaceship").style.display = "block";
  document.getElementById("spaceship").style.gridColumnStart = "20";
  document.getElementById("spaceship").style.gridColumnEnd = "24";
}

function start() {
  alert("Game started, goodluck!");

  position();
}
