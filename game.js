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
    document.getElementById("spaceship").style.gridColumn = "1";
    document.getElementById("rocket").style.gridColumn = "1";
  }
  if (keyPressed === Digit2) {
    document.getElementById("spaceship").style.gridColumn = "2";
    document.getElementById("rocket").style.gridColumn = "2";
  }
  if (keyPressed === Digit3) {
    document.getElementById("spaceship").style.gridColumn = "3";
    document.getElementById("rocket").style.gridColumn = "3";
  }
  if (keyPressed === Digit4) {
    document.getElementById("spaceship").style.gridColumn = "4";
    document.getElementById("rocket").style.gridColumn = "4";
  }
  if (keyPressed === Digit5) {
    document.getElementById("spaceship").style.gridColumn = "5";
    document.getElementById("rocket").style.gridColumn = "5";
  }
  if (keyPressed === Digit6) {
    document.getElementById("spaceship").style.gridColumn = "6";
    document.getElementById("rocket").style.gridColumn = "6";
  }
  if (keyPressed === Digit7) {
    document.getElementById("spaceship").style.gridColumn = "7";
    document.getElementById("rocket").style.gridColumn = "7";
  }
  if (keyPressed === Digit8) {
    document.getElementById("spaceship").style.gridColumn = "8";
    document.getElementById("rocket").style.gridColumn = "8";
  }
  if (keyPressed === KeyE) {
    document.getElementById("rocket").style.gridRow = "14";
    document.getElementById("rocket").style.visibility = "visible";
    document.getElementById("rocket").style.display = "block";
    up();
  }
}
function up() {
  var i = 14;
  var intervalId = setInterval(function () {
    if (i === 1) {
      clearInterval(intervalId);
      if (
        document.getElementById("rocket").style.gridArea ===
        document.getElementById("alien1").style.gridArea
      ) {
        document.getElementById("rocket").style.visibility = "hidden";
        document.getElementById("rocket").style.display = "none";
        document.getElementById("alien1").style.visibility = "hidden";
        document.getElementById("alien1").style.display = "none";
      } else if (
        document.getElementById("rocket").style.gridArea ===
        document.getElementById("alien2").style.gridArea
      ) {
        document.getElementById("rocket").style.visibility = "hidden";
        document.getElementById("rocket").style.display = "none";
        document.getElementById("alien2").style.visibility = "hidden";
        document.getElementById("alien2").style.display = "none";
      } else if (
        document.getElementById("rocket").style.gridArea ===
        document.getElementById("alien3").style.gridArea
      ) {
        document.getElementById("rocket").style.visibility = "hidden";
        document.getElementById("rocket").style.display = "none";
        document.getElementById("alien3").style.visibility = "hidden";
        document.getElementById("alien3").style.display = "none";
      } else if (
        document.getElementById("rocket").style.gridArea ===
        document.getElementById("alien4").style.gridArea
      ) {
        document.getElementById("rocket").style.visibility = "hidden";
        document.getElementById("rocket").style.display = "none";
        document.getElementById("alien4").style.visibility = "hidden";
        document.getElementById("alien4").style.display = "none";
      } else if (
        document.getElementById("rocket").style.gridArea ===
        document.getElementById("alien5").style.gridArea
      ) {
        document.getElementById("rocket").style.visibility = "hidden";
        document.getElementById("rocket").style.display = "none";
        document.getElementById("alien5").style.visibility = "hidden";
        document.getElementById("alien5").style.display = "none";
      } else if (
        document.getElementById("rocket").style.gridArea ===
        document.getElementById("alien6").style.gridArea
      ) {
        document.getElementById("rocket").style.visibility = "hidden";
        document.getElementById("rocket").style.display = "none";
        document.getElementById("alien6").style.visibility = "hidden";
        document.getElementById("alien6").style.display = "none";
      } else if (
        document.getElementById("rocket").style.gridArea ===
        document.getElementById("alien7").style.gridArea
      ) {
        document.getElementById("rocket").style.visibility = "hidden";
        document.getElementById("rocket").style.display = "none";
        document.getElementById("alien7").style.visibility = "hidden";
        document.getElementById("alien7").style.display = "none";
      } else if (
        document.getElementById("rocket").style.gridArea ===
        document.getElementById("alien8").style.gridArea
      ) {
        document.getElementById("rocket").style.visibility = "hidden";
        document.getElementById("rocket").style.display = "none";
        document.getElementById("alien8").style.visibility = "hidden";
        document.getElementById("alien8").style.display = "none";
      }
    }
    document.getElementById("rocket").style.gridRow = i;
    i--;
  }, 175);
}
// function loop1() {
//   var i = "visible";
//   var intervalId = setInterval(function () {
//     if (
//       document.getElementById("rocket").style.gridArea ===
//         document.getElementById("alien1").style.gridArea &&
//       document.getElementById("rocket").style.gridRow === 2
//     ) {
//       document.getElementById("rocket").style.visibility = "hidden";
//       document.getElementById("rocket").style.display = "none";
//       document.getElementById("alien1").style.visibility = "hidden";
//       document.getElementById("alien1").style.display = "none";
//       alert("good");
//       clearInterval(intervalId);
//     } else if (
//       document.getElementById("rocket").style.gridArea !==
//         document.getElementById("alien1").style.gridArea &&
//       document.getElementById("rocket").style.gridRow === 2
//     ) {
//       document.getElementById("rocket").style.visibility = "hidden";
//       document.getElementById("rocket").style.display = "none";
//       alert("bad");
//       clearInterval(intervalId);
//     }
//   }, 100);
// }

// function loop1() {
//   do {
// if (
//   document.getElementById("rocket").style.gridColumn ===
//     document.getElementById("alien1").style.gridColumn &&
//   document.getElementById("alien1").style.gridRow ===
//     document.getElementById("rocket").style.gridRow
// ) {
//   document.getElementById("rocket").style.visibility = "hidden";
//   document.getElementById("rocket").style.display = "none";
//   document.getElementById("alien1").style.visibility = "hidden";
//   document.getElementById("alien1").style.display = "none";
// } else {
// }
//   } while (document.getElementById("rocket").style.visibility !== "hidden");
// }

// var i = 1;

// do {
//   document.getElementById("rocket").style.gridRow = i;
//   i++;
// } while (i < 16);
// function meteorspeed2() {
//   setInterval(function () {
//     document.getElementById("meteor").style.gridRow = "3";
//   }, 1000);
//   clearInterval();
// }
// var i = 2;

// do {
//     alert("Hello");
//     i++;
// }
// while (i < 1);

// function rocketspeed1() {
//   document.getElementById("rocket").style.gridRow = "14";
// }
// function rocketspeed2() {
//   document.getElementById("rocket").style.gridRow = "13";
// }
// function rocketspeed3() {
//   document.getElementById("rocket").style.gridRow = "12";
// }
// function rocketspeed4() {
//   document.getElementById("rocket").style.gridRow = "11";
// }
// function rocketspeed5() {
//   document.getElementById("rocket").style.gridRow = "10";
// }
// function rocketspeed6() {
//   document.getElementById("rocket").style.gridRow = "9";
// }
// function rocketspeed7() {
//   document.getElementById("rocket").style.gridRow = "8";
// }
// function rocketspeed8() {
//   document.getElementById("rocket").style.gridRow = "7";
// }
// function rocketspeed9() {
//   document.getElementById("rocket").style.gridRow = "6";
// }
// function rocketspeed10() {
//   document.getElementById("rocket").style.gridRow = "5";
// }
// function rocketspeed11() {
//   document.getElementById("rocket").style.gridRow = "4";
// }
// function rocketspeed12() {
//   document.getElementById("rocket").style.gridRow = "3";
// }
// function rocketspeed13() {
//   document.getElementById("rocket").style.gridRow = "3";
// }
// function rocketspeed14() {
//   document.getElementById("rocket").style.gridRow = "2";
// }

// function rocketspeed() {
//   const myTimeout1e = setTimeout(rocketspeed1, 1000);
//   const myTimeout2e = setTimeout(rocketspeed2, 2000);
//   const myTimeout3e = setTimeout(rocketspeed3, 3000);
//   const myTimeout4e = setTimeout(rocketspeed4, 4000);
//   const myTimeout5e = setTimeout(rocketspeed5, 5000);
//   const myTimeout6e = setTimeout(rocketspeed6, 6000);
//   const myTimeout7e = setTimeout(rocketspeed7, 7000);
//   const myTimeout8e = setTimeout(rocketspeed8, 8000);
//   const myTimeout9e = setTimeout(rocketspeed9, 9000);
//   const myTimeout10e = setTimeout(rocketspeed10, 10000);
//   const myTimeout11e = setTimeout(rocketspeed11, 11000);
//   const myTimeout12e = setTimeout(rocketspeed12, 12000);
//   const myTimeout13e = setTimeout(rocketspeed13, 13000);
//   const myTimeout14e = setTimeout(rocketspeed14, 14000);
// }
// const numbers = [45, 78, 95, 36, 47];
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }
