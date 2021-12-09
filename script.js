// values
var usrInput = document.getElementById("totalprice");
var slider = document.getElementById("sliderrange");
var percentOutput = document.getElementById("displayslidervalue");
var totalOutput = document.getElementById("tipTotal");

 // Display the default slider value
//function onload() {
//  percentOutput.innerHTML = this.value+"%";
//}

/*slider.onload = function1() {
  percentOutput.innerHTML = this.value+"%";
}*/



/*percentOutput = function() {
  percentOutput.innerHTML = "22"//slider.value+"%";
}*/

// currency formatter
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

// calc buttons
function tipCalc() {
  var total = usrInput.value * slider.value/100;
  var roundedTotal = 
  document.getElementById("tipTotal").innerHTML = formatter.format(total);
}

function clearAll() {
  usrInput.value = " ";
  slider.value = 10;
  percentOutput.innerHTML = "10%";
  totalOutput.innerHTML = " ";
}