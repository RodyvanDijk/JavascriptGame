function position() {
  document.getElementById("spaceship").style.visibility = "visible";
  document.getElementById("spaceship").style.display = "block";
  document.getElementById("spaceship").style.gridColumnStart = "4";
  document.getElementById("spaceship").style.gridColumnEnd = "4";
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
  document.getElementById("alien1").style.gridColumn = "1/1";
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

// function meteorspeed1() {
//   document.getElementById(x).style.gridRow = "2";
// }
// function meteorspeed2() {
//   document.getElementById(x).style.gridRow = "3";
// }
// function meteorspeed3() {
//   document.getElementById(x).style.gridRow = "4";
// }
// function meteorspeed4() {
//   document.getElementById(x).style.gridRow = "5";
// }
// function meteorspeed5() {
//   document.getElementById(x).style.gridRow = "6";
// }
// function meteorspeed6() {
//   document.getElementById(x).style.gridRow = "7";
// }
// function meteorspeed7() {
//   document.getElementById(x).style.gridRow = "8";
// }
// function meteorspeed8() {
//   document.getElementById(x).style.gridRow = "9";
// }
// function meteorspeed9() {
//   document.getElementById(x).style.gridRow = "10";
// }
// function meteorspeed10() {
//   document.getElementById(x).style.gridRow = "11";
// }
// function meteorspeed11() {
//   document.getElementById(x).style.gridRow = "12";
// }
// function meteorspeed12() {
//   document.getElementById(x).style.gridRow = "13";
// }
// function meteorspeed13() {
//   document.getElementById(x).style.gridRow = "14";
// }
// function meteorspeed14() {
//   document.getElementById(x).style.gridRow = "15";
// }

// function meteorspeed() {
//   const myTimeout1 = setTimeout(meteorspeed1, 1000);
//   const myTimeout2 = setTimeout(meteorspeed2, 2000);
//   const myTimeout3 = setTimeout(meteorspeed3, 3000);
//   const myTimeout4 = setTimeout(meteorspeed4, 4000);
//   const myTimeout5 = setTimeout(meteorspeed5, 5000);
//   const myTimeout6 = setTimeout(meteorspeed6, 6000);
//   const myTimeout7 = setTimeout(meteorspeed7, 7000);
//   const myTimeout8 = setTimeout(meteorspeed8, 8000);
//   const myTimeout9 = setTimeout(meteorspeed9, 9000);
//   const myTimeout10 = setTimeout(meteorspeed10, 10000);
//   const myTimeout11 = setTimeout(meteorspeed11, 11000);
//   const myTimeout12 = setTimeout(meteorspeed12, 12000);
//   const myTimeout13 = setTimeout(meteorspeed13, 13000);
//   const myTimeout14 = setTimeout(meteorspeed14, 14000);
// }
// function meteorspeed2() {
//   setInterval(function () {
//     document.getElementById("meteor").style.gridRow = "3";
//   }, 1000);
//   clearInterval();
// }
