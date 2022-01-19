export function moveRight() {
  document.getElementById("spaceship").style.gridcolumnstart = 30;
  document.getElementById("spaceship").style.gridcolumnend = 34;
}
export function position() {
    document.getElementById("spaceship").style.visibility = "visible";
    document.getElementById("spaceship").style.display = "block";
    document.getElementById("spaceship").style.gridColumnStart = "20";
    document.getElementById("spaceship").style.gridColumnEnd = "24";
  }
  