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
  document.getElementById("alien2").style.gridColumn = "2/2";
  document.getElementById("alien3").style.gridColumn = "3/3";
  document.getElementById("alien4").style.gridColumn = "4/4";
  document.getElementById("alien5").style.gridColumn = "5/5";
  document.getElementById("alien6").style.gridColumn = "6/6";
  document.getElementById("alien7").style.gridColumn = "7/7";
  document.getElementById("alien8").style.gridColumn = "8/8";
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
