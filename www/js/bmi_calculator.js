function BMICalculator(){
}

BMICalculator.prototype.bmi = function(obj){
  var weight = obj.weight;
  var height = obj.height;
  var toggle = obj.toggle;
  var divisor = 100;
  var multiplier = 1;
  if ( weight > 0 && height > 0 ) {
    if (toggle === 'true') {
      divisor = 1;
      multiplier = 703;
    }
    var finalBmi = (weight * multiplier) / Math.pow((height / divisor),2);
    obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }
};

function setBMIMessage (obj) {
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "Underweight";
  }
  if (obj.bmiValue >= 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal";
  }
  if (obj.bmiValue >= 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight";
  }
  if (obj.bmiValue >= 30) {
    obj.bmiMessage = "Obese";
  }
}
