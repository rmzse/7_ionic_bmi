function Person(attr){
  this.weight = attr.weight;
  this.height = attr.height;
  this.toggle = attr.toggle;

  Person.prototype.calculate_bmi = function () {
    calculate = new BMICalculator();
    calculate.bmi(this);
  };
}
