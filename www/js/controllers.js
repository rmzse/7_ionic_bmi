angular.module('starter.controllers', [])

.controller('AboutController', function(){

})

.controller('BmiController', function($scope) {
  $scope.data = {};

  $scope.data.toggle = false;

  $scope.$on("$ionicView.loaded", function(){ // onLoad of the view, initiate the placeholder values
    $scope.setMeasurementUnit();
  });

  $scope.updateToggleValues = function (){ // on switch toggle, replace measurement units
    $scope.setMeasurementUnit();
    if ( ( $scope.data.weight !== undefined ) || ( $scope.data.height !== undefined ) || ( $scope.data.heightft !== undefined ) || ( $scope.data.heightin !== undefined ) ) { // re-calculate the bmi when toggle is switched unless it's a view init
      $scope.calculateBMI();
    }
  };

  $scope.setMeasurementUnit = function (){
    switch ($scope.data.toggle) {
      case false:
        $scope.units = {
          weight: "kg",
          height: "cm"
        };
        break;
      case true:
        $scope.units = {
          weight: "lbs",
          heightft: "feet",
          heightin: "inches"
        };
    }

    $scope.placeholder = {
      weight: "Weight in " + $scope.units.weight,
      height: "Weight in " + $scope.units.height,
      heightft: "Height in " + $scope.units.heightft,
      heightin: "Height in " + $scope.units.heightin
    };
  };

  $scope.calculateBMI = function() {
    if $scope.data.toggle === true {
      $scope.data.height = $scope.data.heightft * 12 + $scope.data.heightin
    }
    var person = new Person({
      toggle: $scope.data.toggle,
      weight: $scope.data.weight,
      height: $scope.data.height
    });
    person.calculate_bmi();
    $scope.person = person;
  };
});
