// Hiermee wordt de raket geplaatst op de goeie plek en visible gemaakt.
function position() {
  document.getElementById("spaceship").style.visibility = "visible";
  document.getElementById("spaceship").style.display = "block";
  document.getElementById("spaceship").style.gridArea = "14/1/auto/auto";
  document.getElementById("rocket").style.gridArea = "14/1/auto/auto";
}
// Hiermee worden de aliens van level 1, 2 en 3 geplaatst op de goeie plek en visible gemaakt.
function alienposition1() {
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
// Hiermee worden de aliens van level 4 en 5 op de goeie plek geplaatst en visible gemaakt
function alienposition2() {
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
  document.getElementById("secondalien1").style.visibility = "visible";
  document.getElementById("secondalien1").style.display = "block";
  document.getElementById("secondalien2").style.visibility = "visible";
  document.getElementById("secondalien2").style.display = "block";
  document.getElementById("secondalien3").style.visibility = "visible";
  document.getElementById("secondalien3").style.display = "block";
  document.getElementById("secondalien4").style.visibility = "visible";
  document.getElementById("secondalien4").style.display = "block";
  document.getElementById("secondalien5").style.visibility = "visible";
  document.getElementById("secondalien5").style.display = "block";
  document.getElementById("secondalien6").style.visibility = "visible";
  document.getElementById("secondalien6").style.display = "block";
  document.getElementById("secondalien7").style.visibility = "visible";
  document.getElementById("secondalien7").style.display = "block";
  document.getElementById("secondalien8").style.visibility = "visible";
  document.getElementById("secondalien8").style.display = "block";
  document.getElementById("secondalien1").style.gridArea = "3/1/auto/auto";
  document.getElementById("secondalien2").style.gridArea = "3/2/auto/auto";
  document.getElementById("secondalien3").style.gridArea = "3/3/auto/auto";
  document.getElementById("secondalien4").style.gridArea = "3/4/auto/auto";
  document.getElementById("secondalien5").style.gridArea = "3/5/auto/auto";
  document.getElementById("secondalien6").style.gridArea = "3/6/auto/auto";
  document.getElementById("secondalien7").style.gridArea = "3/7/auto/auto";
  document.getElementById("secondalien8").style.gridArea = "3/8/auto/auto";
}
// Deze functie geeft aan welke levels welke posities gebruiken.
function alienposition() {
  if (
    document.getElementById("currentlevel").style.backgroundColor === "green"
  ) {
    alienposition1();
  } else if (
    document.getElementById("currentlevel").style.backgroundColor === "blue"
  ) {
    alienposition1();
  } else if (
    document.getElementById("currentlevel").style.backgroundColor === "yellow"
  ) {
    alienposition1();
  } else if (
    document.getElementById("currentlevel").style.backgroundColor === "orange"
  ) {
    alienposition2();
  } else if (
    document.getElementById("currentlevel").style.backgroundColor === "red"
  ) {
    alienposition2();
  }
}
// Dit zorgt dat als de game gestart wordt dat alle functies gedaan worden.
function start() {
  alert("Game started, goodluck!");

  position();
  alienposition();
  fire();
  alienspeed();
  checkdamage();
}
// Deze functie zorgt ervoor dat elk level de goeie damage/hitboxes gebruikt.
function checkdamage() {
  if (
    document.getElementById("currentlevel").style.backgroundColor === "green"
  ) {
    setInterval(checkaliendamage, 10);
  } else if (
    document.getElementById("currentlevel").style.backgroundColor === "blue"
  ) {
    setInterval(checkaliendamage, 10);
  } else if (
    document.getElementById("currentlevel").style.backgroundColor === "yellow"
  ) {
    setInterval(checkaliendamage, 10);
  } else if (
    document.getElementById("currentlevel").style.backgroundColor === "orange"
  ) {
    setInterval(checkaliendamage2, 10);
  } else if (
    document.getElementById("currentlevel").style.backgroundColor === "red"
  ) {
    setInterval(checkaliendamage2, 10);
  }
}
// Deze functie zorgt ervoor dat de button rood wordt wat ervoor zorgt dat er geschoten kan worden.
function fire() {
  document.getElementById("fire").style.color = "red";
}
// Deze functie geeft aan welk level, welke snelheid voor de aliens moet gebruiken.
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
  } else if (
    document.getElementById("currentlevel").style.backgroundColor === "orange"
  ) {
    alienattack4();
  } else if (
    document.getElementById("currentlevel").style.backgroundColor === "red"
  ) {
    alienattack5();
  }
}
// Dit is de eerst snelheid voor de aliens van level 1.
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
// Dit is de snelheid voor de aliens van level 2.
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
// Dit is de snelheid voor de aliens van level 3.
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
// Dit is de snelheid voor de aliens van level 4 de eerste rij.
function alienattack4half1() {
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
  }, 6000);
}
// Dit is de snelheid voor de aliens van level 4 de tweede rij.
function alienattack4half2() {
  var i = 3;
  var intervalId = setInterval(function () {
    if (i === 15) {
      clearInterval(intervalId);
      alert("Game Over, you lost!");
      location.reload();
    }
    document.getElementById("secondalien1").style.gridRow = i;
    document.getElementById("secondalien2").style.gridRow = i;
    document.getElementById("secondalien3").style.gridRow = i;
    document.getElementById("secondalien4").style.gridRow = i;
    document.getElementById("secondalien5").style.gridRow = i;
    document.getElementById("secondalien6").style.gridRow = i;
    document.getElementById("secondalien7").style.gridRow = i;
    document.getElementById("secondalien8").style.gridRow = i;
    i++;
  }, 6000);
}
// Deze voegt de rijen van level 4 samen in 1 functie.
function alienattack4() {
  alienattack4half1();
  alienattack4half2();
}
// Dit is de snelheid voor de aliens van level 5 de eerste rij.
function alienattack5half1() {
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
  }, 4500);
}
// Dit is de snelheid voor de aliens van level 5 de tweede rij.
function alienattack5half2() {
  var i = 3;
  var intervalId = setInterval(function () {
    if (i === 15) {
      clearInterval(intervalId);
      alert("Game Over, you lost!");
      location.reload();
    }
    document.getElementById("secondalien1").style.gridRow = i;
    document.getElementById("secondalien2").style.gridRow = i;
    document.getElementById("secondalien3").style.gridRow = i;
    document.getElementById("secondalien4").style.gridRow = i;
    document.getElementById("secondalien5").style.gridRow = i;
    document.getElementById("secondalien6").style.gridRow = i;
    document.getElementById("secondalien7").style.gridRow = i;
    document.getElementById("secondalien8").style.gridRow = i;
    i++;
  }, 4500);
}
// Deze functie voegt de rijen van level 5 samen in 1 functie.
function alienattack5() {
  alienattack5half1();
  alienattack5half2();
}
// Deze functie checked of er contact/collisions zijn tussen de raket en aliens voor level 1, 2 en 3.
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
// Deze functie checked of er contact/collisions zijn tussen de raket en aliens voor level 4 en 5.
function checkaliendamage2() {
  if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien1").style.gridArea
  ) {
    if (document.getElementById("rocket").style.visibility === "visible") {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("alien1").style.visibility = "hidden";
      document.getElementById("alien1").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14/auto/auto/auto";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien2").style.gridArea
  ) {
    if (document.getElementById("rocket").style.visibility === "visible") {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("alien2").style.visibility = "hidden";
      document.getElementById("alien2").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14/auto/auto/auto";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien3").style.gridArea
  ) {
    if (document.getElementById("rocket").style.visibility === "visible") {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("alien3").style.visibility = "hidden";
      document.getElementById("alien3").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14/auto/auto/auto";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien4").style.gridArea
  ) {
    if (document.getElementById("rocket").style.visibility === "visible") {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("alien4").style.visibility = "hidden";
      document.getElementById("alien4").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14/auto/auto/auto";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien5").style.gridArea
  ) {
    if (document.getElementById("rocket").style.visibility === "visible") {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("alien5").style.visibility = "hidden";
      document.getElementById("alien5").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14/auto/auto/auto";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien6").style.gridArea
  ) {
    if (document.getElementById("rocket").style.visibility === "visible") {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("alien6").style.visibility = "hidden";
      document.getElementById("alien6").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14/auto/auto/auto";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien7").style.gridArea
  ) {
    if (document.getElementById("rocket").style.visibility === "visible") {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("alien7").style.visibility = "hidden";
      document.getElementById("alien7").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14/auto/auto/auto";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("alien8").style.gridArea
  ) {
    if (document.getElementById("rocket").style.visibility === "visible") {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("alien8").style.visibility = "hidden";
      document.getElementById("alien8").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14/auto/auto/auto";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("rocket").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("secondalien1").style.gridArea
  ) {
    if (
      document.getElementById("secondalien1").style.visibility === "visible"
    ) {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("secondalien1").style.visibility = "hidden";
      document.getElementById("secondalien1").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("secondalien1").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("secondalien2").style.gridArea
  ) {
    if (
      document.getElementById("secondalien2").style.visibility === "visible"
    ) {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("secondalien2").style.visibility = "hidden";
      document.getElementById("secondalien2").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("secondalien2").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("secondalien3").style.gridArea
  ) {
    if (
      document.getElementById("secondalien3").style.visibility === "visible"
    ) {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("secondalien3").style.visibility = "hidden";
      document.getElementById("secondalien3").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("secondalien3").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("secondalien4").style.gridArea
  ) {
    if (
      document.getElementById("secondalien4").style.visibility === "visible"
    ) {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("secondalien4").style.visibility = "hidden";
      document.getElementById("secondalien4").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("secondalien4").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("secondalien5").style.gridArea
  ) {
    if (
      document.getElementById("secondalien5").style.visibility === "visible"
    ) {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("secondalien5").style.visibility = "hidden";
      document.getElementById("secondalien5").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("secondalien5").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("secondalien6").style.gridArea
  ) {
    if (
      document.getElementById("secondalien6").style.visibility === "visible"
    ) {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("secondalien6").style.visibility = "hidden";
      document.getElementById("secondalien6").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("secondalien6").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("secondalien7").style.gridArea
  ) {
    if (
      document.getElementById("secondalien7").style.visibility === "visible"
    ) {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("secondalien7").style.visibility = "hidden";
      document.getElementById("secondalien7").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("secondalien7").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  } else if (
    document.getElementById("rocket").style.gridArea ===
    document.getElementById("secondalien8").style.gridArea
  ) {
    if (
      document.getElementById("secondalien8").style.visibility === "visible"
    ) {
      document.getElementById("rocket").style.visibility = "hidden";
      document.getElementById("rocket").style.display = "none";
      document.getElementById("secondalien8").style.visibility = "hidden";
      document.getElementById("secondalien8").style.display = "none";
      document.getElementById("rocket").style.gridArea = "14";
      document.getElementById("rocket").style.gridArea =
        document.getElementById("spaceship").style.gridArea;
      document.getElementById("fire").style.color = "red";
    } else if (
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
    }
    if (
      document.getElementById("alien1").style.visibility === "hidden" &&
      document.getElementById("alien2").style.visibility === "hidden" &&
      document.getElementById("alien3").style.visibility === "hidden" &&
      document.getElementById("alien4").style.visibility === "hidden" &&
      document.getElementById("alien5").style.visibility === "hidden" &&
      document.getElementById("alien6").style.visibility === "hidden" &&
      document.getElementById("alien7").style.visibility === "hidden" &&
      document.getElementById("alien8").style.visibility === "hidden" &&
      document.getElementById("secondalien1").style.visibility === "hidden" &&
      document.getElementById("secondalien2").style.visibility === "hidden" &&
      document.getElementById("secondalien3").style.visibility === "hidden" &&
      document.getElementById("secondalien4").style.visibility === "hidden" &&
      document.getElementById("secondalien5").style.visibility === "hidden" &&
      document.getElementById("secondalien6").style.visibility === "hidden" &&
      document.getElementById("secondalien7").style.visibility === "hidden" &&
      document.getElementById("secondalien8").style.visibility === "hidden"
    ) {
      alert("YOU WON!");
      document.getElementById("fire").style.color = "white";
      location.reload();
    }
  }
}
// Deze functie zorgt er voor dat aan het begin van de pagina laden dat de fire button wit is en de "currentlevel" background color groen is.
function load() {
  document.getElementById("fire").style.color = "white";
  document.getElementById("currentlevel").style.backgroundColor = "green";
}
// Deze functies veranderen de achtergrond kleur van de "current level".
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
