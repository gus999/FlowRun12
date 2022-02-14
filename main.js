var thicknessInput = document.getElementById("thickness");
var km_m = document.getElementById("lenght");
var area=document.getElementById("area");

const combos = document.getElementsByClassName("combo");

for (let i = 0; i < combos.length; i++) {
  let input = combos[i];

  input.addEventListener("input", function (event) {
    let value = parseFloat(event.target.value); /* converts a string to a floating-point number.
    If a number cannot be parsed from the argument, it returns NaN */

    switch (event.target.name) {

      case "thickness":
        document.getElementById("area").value =(3.1416 * ((x * 0.0254 - value * 2 * 0.001) / 2) ** 2).toFixed(5);
        document.getElementById("volume").value= (area.value* (km_m.value * 1000)).toFixed(3);
          
        break;

      case "lenght":
        document.getElementById("volume").value = (area.value * (value * 1000)).toFixed(3);
        break;
    }
  });
}

function changeFunction(selectValue) {
  x = selectValue.value;

  document.getElementById("area").value =
    (3.1416 * ((x * 0.0254 - thicknessInput.value * 2 * 0.001) / 2) ** 2).toFixed(5);
  document.getElementById("volume").value = (area.value * (km_m.value * 1000)).toFixed(3);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  // console.log(value)
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
