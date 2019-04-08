
var settings = prompt ("Which calculator setting would you like? \r\nPlease select from and input: \r\n\(a) Advanced \r\n\(b) Basic \r\n(c) Body Mass Indicator").toLowerCase();
// seletion of which calucator function to use
if (settings == "a" || settings == "b" || settings =="c"){
  alert("Excellent selection")
}
else {
  alert("That is an invalid selection, please reload the page")
}

//advanced calculations
if (settings == "a") {

  var advancedOperation = prompt ("What operation would you like to perform, powers (1) or square root (2)");

  if (advancedOperation == 1){
    var advancedPower = parseInt(prompt ("Enter base number"));
    var advancedBase = parseInt(prompt ("Enter exponent"));
    var powerOutput = advancedPower ** advancedBase;
    alert(powerOutput)
    }
    else if (advancedOperation == 2){
      var radicand = parseInt(prompt ("Enter radicand"));
      var index = parseInt(prompt ("Enter index"));
      var rootOutput = radicand ** (1/index);
      alert(rootOutput)
    }
    else {
      alert ("incorrect selection please try again")
      advancedOperation();
    }
  }

//basic calculations
else if (settings == "b") {

  var basicInput1 = parseInt(prompt ("Enter you first number"));
  var basicOperation = prompt ("Please enter the operation you would like to perform (+ - / *)");
  var basicInput2 = parseInt(prompt ("Enter you second number"));

  if (basicOperation == "+"){
    var output = basicInput1 + basicInput2;
    alert ("Your answer is " + output)
  }
  else if (basicOperation == "-") {
    var output = basicInput1 - basicInput2;
    alert ("Your answer is " + output)
  }
  else if (basicOperation == "/") {
    var output = basicInput1 / basicInput2;
    alert ("Your answer is " + output)
  }
  else if (basicOperation == "*") {
    var output = basicInput1 * basicInput2;
    alert ("Your answer is " + output)
  }
}

//BMI calucator
else if (settings == "c") {
// variable to select imerial or metric units
  var imperialMetric = (prompt ("Please select metric or imperial units for your height and weight: \r\n(M) Metric units\r\n(I) Imperial units"));

//Calculations of BMI for imerial units
  if (imperialMetric.toLowerCase() == 'i') {
    var iHeight = parseFloat(prompt ("Please enter your height in inches"));
    var iWeight = parseFloat(prompt ("Please enter your weight in pounds"));
    var iBMIOutput = (iWeight/(iHeight * iHeight))*703;
    var scaledBMI = iBMIOutput.toFixed(2);
  }

//calculations of bmi with metric units
  else if (imperialMetric.toLowerCase() == 'm') {
    var height = parseFloat(prompt ("Please enter your height in meters"));
    var weight = parseFloat(prompt ("Please enter your weight in kg"));
    var bmiOutput = weight/(height * height);
    var scaledBMI = bmiOutput.toFixed(2);
  }


//filters bmiOutput by weight catagory, and outputs results to user
  if (bmiOutput > 30) {
    alert ("You're BMI is " + scaledBMI + " which means you are morbidly obese");
  }
  else if (bmiOutput > 25) {
    alert ("You're BMI is " + scaledBMI + " which means you are overweight");
  }
  else if (bmiOutput > 18) {
    alert ("You're BMI is " + scaledBMI + " which means you are healthy weight");
  }
  else {
    alert ("You're BMI is " + scaledBMI + " which means you are underweight")

  }
}
