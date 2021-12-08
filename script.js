// values
var usrInput = document.getElementById("totalprice");
var slider = document.getElementById("sliderrange");
var percentOutput = document.getElementById("displayslidervalue");
var totalOutput = document.getElementById("tipTotal");
percentOutput.innerHTML = slider.value+"%"; // Display the default slider value

slider.oninput = function() {
  percentOutput.innerHTML = this.value+"%";
}

// calc buttons
function tipCalc() {
  var total = usrInput.value * slider.value/100;
  document.getElementById("tipTotal").innerHTML = total;
}

function clearAll() {
  usrInput.value = " ";
  slider.value = 10;
  percentOutput.innerHTML = "10%";
  totalOutput.innerHTML = " ";
}