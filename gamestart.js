function position() {
  document.getElementById("spaceship").style.visibility = "visible";
  document.getElementById("spaceship").style.display = "block";
  document.getElementById("spaceship").style.gridColumn = "1";
  document.getElementById("rocket").style.gridColumn = "1";
}
function alienposition() {
  document.getElementById("alien1").style.visibility = "visible";
  document.getElementById("alien1").style.display = "block";
  document.getElementById("alien2").style.visibility = "visible";
  document.getElementById("alien2").style.display = "block";
  document.getElementById("alien3").style.visibility = "visible";
  document.getElementById("alien3").style.display = "block";
  document.getElementById("alien4").style.visibility = "visible";
  document.getElementById("alien4").style.display = "block";
  document.getElementById("alien5").style.visibility = "visible";
  document.getElementById("alien5").style.display = "block";
  document.getElementById("alien6").style.visibility = "visible";
  document.getElementById("alien6").style.display = "block";
  document.getElementById("alien7").style.visibility = "visible";
  document.getElementById("alien7").style.display = "block";
  document.getElementById("alien8").style.visibility = "visible";
  document.getElementById("alien8").style.display = "block";
  document.getElementById("alien1").style.gridArea = "2/1/auto/auto";
  document.getElementById("alien2").style.gridArea = "2/2/auto/auto";
  document.getElementById("alien3").style.gridArea = "2/3/auto/auto";
  document.getElementById("alien4").style.gridArea = "2/4/auto/auto";
  document.getElementById("alien5").style.gridArea = "2/5/auto/auto";
  document.getElementById("alien6").style.gridArea = "2/6/auto/auto";
  document.getElementById("alien7").style.gridArea = "2/7/auto/auto";
  document.getElementById("alien8").style.gridArea = "2/8/auto/auto";
}

function start() {
  alert("Game started, goodluck!");

  position();
  alienposition();
  meteor();
  // meteorspeed();
}
function meteor() {
  document.getElementById("meteor").style.visibility = "visible";
  document.getElementById("meteor").style.display = "block";
}
