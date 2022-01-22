function position() {
  document.getElementById("spaceship").style.visibility = "visible";
  document.getElementById("spaceship").style.display = "block";
  document.getElementById("spaceship").style.gridArea = "14/1/auto/auto";
  document.getElementById("rocket").style.gridArea = "14/1/auto/auto";
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
  fire();
  alienspeed();
  setInterval(checkaliendamage, 10);
  // meteor();
  // meteorspeed();
}
function fire() {
  document.getElementById("fire").style.color = "red";
}
// function meteor() {
//   document.getElementById("meteor").style.visibility = "visible";
//   document.getElementById("meteor").style.display = "block";
// }
function alienspeed() {
  if (
    document.getElementById("currentlevel").style.backgroundColor === "green"
  ) {
    alienattack1();
  } else if (
    document.getElementById("currentlevel").style.backgroundColor === "blue"
  ) {
    alienattack2();
  } else if (
    document.getElementById("currentlevel").style.backgroundColor === "yellow"
  ) {
    alienattack3();
  } else {
    document.getElementById("currentlevel").style.backgroundColor = "green";
  }
}
function alienattack1() {
  var i = 2;
  var intervalId = setInterval(function () {
    if (i === 14) {
      clearInterval(intervalId);
      alert("Game Over, you lost!");
      location.reload();
    }
    document.getElementById("alien1").style.gridRow = i;
    document.getElementById("alien2").style.gridRow = i;
    document.getElementById("alien3").style.gridRow = i;
    document.getElementById("alien4").style.gridRow = i;
    document.getElementById("alien5").style.gridRow = i;
    document.getElementById("alien6").style.gridRow = i;
    document.getElementById("alien7").style.gridRow = i;
    document.getElementById("alien8").style.gridRow = i;
    i++;
  }, 5000);
}
function alienattack2() {
  var i = 2;
  var intervalId = setInterval(function () {
    if (i === 14) {
      clearInterval(intervalId);
      alert("Game Over, you lost!");
      location.reload();
    }
    document.getElementById("alien1").style.gridRow = i;
    document.getElementById("alien2").style.gridRow = i;
    document.getElementById("alien3").style.gridRow = i;
    document.getElementById("alien4").style.gridRow = i;
    document.getElementById("alien5").style.gridRow = i;
    document.getElementById("alien6").style.gridRow = i;
    document.getElementById("alien7").style.gridRow = i;
    document.getElementById("alien8").style.gridRow = i;
    i++;
  }, 3000);
}
function alienattack3() {
  var i = 2;
  var intervalId = setInterval(function () {
    if (i === 14) {
      clearInterval(intervalId);
      alert("Game Over, you lost!");
      location.reload();
    }
    document.getElementById("alien1").style.gridRow = i;
    document.getElementById("alien2").style.gridRow = i;
    document.getElementById("alien3").style.gridRow = i;
    document.getElementById("alien4").style.gridRow = i;
    document.getElementById("alien5").style.gridRow = i;
    document.getElementById("alien6").style.gridRow = i;
    document.getElementById("alien7").style.gridRow = i;
    document.getElementById("alien8").style.gridRow = i;
    i++;
  }, 1500);
}

function checkaliendamage() {
  if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien1").style.gridArea
  ) {
    document.getElementById("rocket").style.visibility = "hidden";
    document.getElementById("rocket").style.display = "none";
    document.getElementById("alien1").style.visibility = "hidden";
    document.getElementById("alien1").style.display = "none";
    document.getElementById("rocket").style.gridArea = "14/auto/auto/auto";
    document.getElementById("rocket").style.gridArea =
      document.getElementById("spaceship").style.gridArea;
    document.getElementById("fire").style.color = "red";
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien2").style.gridArea
  ) {
    document.getElementById("rocket").style.visibility = "hidden";
    document.getElementById("rocket").style.display = "none";
    document.getElementById("alien2").style.visibility = "hidden";
    document.getElementById("alien2").style.display = "none";
    document.getElementById("rocket").style.gridArea = "14";
    document.getElementById("rocket").style.gridArea =
      document.getElementById("spaceship").style.gridArea;
    document.getElementById("fire").style.color = "red";
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien3").style.gridArea
  ) {
    document.getElementById("rocket").style.visibility = "hidden";
    document.getElementById("rocket").style.display = "none";
    document.getElementById("alien3").style.visibility = "hidden";
    document.getElementById("alien3").style.display = "none";
    document.getElementById("rocket").style.gridArea = "14";
    document.getElementById("rocket").style.gridArea =
      document.getElementById("spaceship").style.gridArea;
    document.getElementById("fire").style.color = "red";
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien4").style.gridArea
  ) {
    document.getElementById("rocket").style.visibility = "hidden";
    document.getElementById("rocket").style.display = "none";
    document.getElementById("alien4").style.visibility = "hidden";
    document.getElementById("alien4").style.display = "none";
    document.getElementById("rocket").style.gridArea = "14";
    document.getElementById("rocket").style.gridArea =
      document.getElementById("spaceship").style.gridArea;
    document.getElementById("fire").style.color = "red";
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien5").style.gridArea
  ) {
    document.getElementById("rocket").style.visibility = "hidden";
    document.getElementById("rocket").style.display = "none";
    document.getElementById("alien5").style.visibility = "hidden";
    document.getElementById("alien5").style.display = "none";
    document.getElementById("rocket").style.gridArea = "14";
    document.getElementById("rocket").style.gridArea =
      document.getElementById("spaceship").style.gridArea;
    document.getElementById("fire").style.color = "red";
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien6").style.gridArea
  ) {
    document.getElementById("rocket").style.visibility = "hidden";
    document.getElementById("rocket").style.display = "none";
    document.getElementById("alien6").style.visibility = "hidden";
    document.getElementById("alien6").style.display = "none";
    document.getElementById("rocket").style.gridArea = "14";
    document.getElementById("rocket").style.gridArea =
      document.getElementById("spaceship").style.gridArea;
    document.getElementById("fire").style.color = "red";
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien7").style.gridArea
  ) {
    document.getElementById("rocket").style.visibility = "hidden";
    document.getElementById("rocket").style.display = "none";
    document.getElementById("alien7").style.visibility = "hidden";
    document.getElementById("alien7").style.display = "none";
    document.getElementById("rocket").style.gridArea = "14";
    document.getElementById("rocket").style.gridArea =
      document.getElementById("spaceship").style.gridArea;
    document.getElementById("fire").style.color = "red";
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien8").style.gridArea
  ) {
    document.getElementById("rocket").style.visibility = "hidden";
    document.getElementById("rocket").style.display = "none";
    document.getElementById("alien8").style.visibility = "hidden";
    document.getElementById("alien8").style.display = "none";
    document.getElementById("rocket").style.gridArea = "14";
    document.getElementById("rocket").style.gridArea =
      document.getElementById("spaceship").style.gridArea;
    document.getElementById("fire").style.color = "red";
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  }
}
function load() {
  document.getElementById("fire").style.color = "white";
  document.getElementById("currentlevel").style.backgroundColor = "green";
}
function level1() {
  document.getElementById("currentlevel").style.backgroundColor = "green";
}
function level2() {
  document.getElementById("currentlevel").style.backgroundColor = "blue";
}
function level3() {
  document.getElementById("currentlevel").style.backgroundColor = "yellow";
}
function level4() {
  document.getElementById("currentlevel").style.backgroundColor = "orange";
}
function level5() {
  document.getElementById("currentlevel").style.backgroundColor = "red";
}
