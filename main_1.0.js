var thicknessInput = document.getElementById("thickness");
var km_m = document.getElementById("lenght");
var area = document.getElementById("area");
var volume = document.getElementById("volume");
var barrelon = document.getElementById("barrel");
var v = document.getElementById("velocity");
var Lpm = document.getElementById("flowRateLPM");
var Cmm = document.getElementById("flowRateCMM");
var Cmh = document.getElementById("flowRateCMH");
var time = document.getElementById("time");
const combos = document.getElementsByClassName("combo");
const combosFr = document.getElementsByClassName("form-control");
var backButton = document.getElementById("backBtn");

lastInput = null;

for (let i = 0; i < combos.length; i++) {
  let input = combos[i];

  input.addEventListener("input", function (event) {
    let value = parseFloat(
      event.target.value
    ); /* converts a string to a floating-point number.
    If a number cannot be parsed from the argument, it returns NaN-in english: type letters and won't be accepted */

    switch (event.target.name) {
      case "thickness":
        area.value = (
          3.1416 *
          ((x * 0.0254 - value * 2 * 0.001) / 2) ** 2
        ).toFixed(5);
        volume.value = (area.value * (km_m.value * 1000)).toFixed(3);
        barrelon.value = (volume.value * 6.28981).toFixed(3);

        break;

      case "lenght":
        volume.value = (area.value * (value * 1000)).toFixed(3);
        barrelon.value = (volume.value * 6.28981).toFixed(3);
        break;
    }
  });
}

if (v === null) {
  v = 0;
}



/*Code to switch velocity when any of 3 combos flowrate are changed*/

for (let i = 0; i < combosFr.length; i++) {
  let input = combosFr[i];

  document.addEventListener("input", function (event) {
    let value = parseFloat(
      event.target.value
    ); /* converts a string to a floating-point number.
    If a number cannot be parsed from the argument, it returns NaN -in english: type letters and won't be accepted*/

    switch (event.target.id) {
      case "flowRateCMH":
        v.value = (Cmh.value / area.value / 3600).toFixed(3);
        Cmm.value = (Cmh.value / 60).toFixed(3);
        Lpm.value = ((Cmh.value * 1000) / 60).toFixed(3);
        time.value = (volume.value / Cmh.value).toFixed(2);
        // document.getElementById("runTime").value=Cmh.value/area.value;
        document.getElementById("dropbtn").disabled = true;

        break;

      case "flowRateCMM":
        v.value = (Cmm.value / area.value / 60).toFixed(3);
        Cmh.value = (Cmm.value * 60).toFixed(3);
        Lpm.value = (Cmm.value * 1000).toFixed(3);
        time.value = (volume.value / Cmm.value / 60).toFixed(2);
        document.getElementById("dropbtn").disabled = true;
        break;

      case "flowRateLPM":
        v.value = (Lpm.value / (60 * 1000) / area.value).toFixed(3);
        Cmm.value = (Lpm.value / 1000).toFixed(3);
        Cmh.value = ((Lpm.value * 60) / 1000).toFixed(3);
        time.value = (volume.value / ((Lpm.value * 60) / 1000)).toFixed(2);
        document.getElementById("dropbtn").disabled = true;
        break;
    }
  });
}

function changeFunction(selectValue) {
  x = selectValue.value;

  area.value = (
    Math.PI *
    ((x * 0.0254 - thicknessInput.value * 2 * 0.001) / 2) ** 2
  ).toFixed(5);
  volume.value = (area.value * (km_m.value * 1000)).toFixed(3);
  barrelon.value = (volume.value * 6.28981).toFixed(3);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function backMainMenu() {
  window.location = "../index.html";
  reset();
}

// function backMainMenu() {
//    action="/index.html">
//       reset();
// }

function reset() {
  document.getElementById("velocity").value = "";
  thicknessInput.disabled = false;
  Cmh.value = "";
  Cmm.value = "";
  Lpm.value = "";
  time.value = "";
  window.location.reload();
}

function setFlowRate() {
  //Thickness combo will be disabled
  thicknessInput.disabled = true;

  fr = v.value * area.value;
  document.getElementById("dropbtn").disabled = true;

  var frLpm = fr * 1000 * 60;
  var frCmm = fr * 60;
  var frCmh = fr * 60 * 60;

  Lpm.value = frLpm.toFixed(2);
  Cmm.value = frCmm.toFixed(2);
  Cmh.value = frCmh.toFixed(2);
}


