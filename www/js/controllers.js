angular.module('starter.controllers', [])

  .controller('AboutController', function(){

  })

  .controller('BmiController', function($scope) {
    $scope.data = {};

    $scope.data.toggle = true;


    $scope.$on("$ionicView.loaded", function(){ // onLoad of the view, initiate the placeholder values
      $scope.setMeasurementUnit();
    });

    $scope.updateToggleValues = function (){ // on switch toggle, replace measurement units
      $scope.setMeasurementUnit();
      if ( ( ( $scope.data.weight !== undefined ) && ( $scope.data.height !== undefined ) ) || ( ( $scope.data.heightft !== undefined ) && ( $scope.data.heightin !== undefined ) ) ) { // re-calculate the bmi when toggle is switched unless it's a view init
        $scope.convert();
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
          $scope.presunits = {
            weight: "kg",
            height: "cm"
          };
          break;
        case true:
          $scope.units = {
            weightlb: "lbs",
            heightft: "feet",
            heightin: "inches"
          };
          $scope.presunits = {
            weight: "lbs",
            height: "inches"
          };
      }

      $scope.placeholder = {
        weight: "Weight in " + $scope.units.weight,
        height: "Height in " + $scope.units.height,
        weightlb: "Weight in " + $scope.units.weightlb,
        heightft: "Height in " + $scope.units.heightft,
        heightin: "Height in " + $scope.units.heightin
      };
    };

    $scope.convert = function () {
      if ($scope.data.weight == undefined) {
        $scope.data.weight = parseInt($scope.data.weightlb * 0.45359237);
      }

      // if ( ( ( $scope.data.weight == undefined ) && ( $scope.data.height == undefined ) ) {
      //   $scope.data.weight = parseInt($scope.data.weightlb * 0.45359237);
      //   $scope.data.height = parseInt( ($scope.data.heightft * 12 + $scope.data.heightin) * 2.54 );
      // }

      // if ( ( ( $scope.data.weight !== undefined ) && ( $scope.data.height !== undefined ) ) {
      //   $scope.data.weight = parseInt($scope.data.weightlb * 0.45359237);
      //   $scope.data.height = parseInt( ($scope.data.heightft * 12 + $scope.data.heightin) * 2.54 );
      // }
      // else if ( ( $scope.data.weightlb !== undefined ) && ( $scope.data.heightft !== undefined ) && ( $scope.data.heightin !== undefined ) ) {
      //   $scope.data.weightlb = parseInt($scope.data.weight / 0.45359237);
      //   $scope.data.heightft = parseInt(parseInt(data.height / 2.54) / 12);   // get 5.5ft if 66inches and 5 with parseInt
      //   $scope.data.heightin = parseInt(parseInt(data.height / 2.54) % 12);   // and then 6 inches with mod 12 and parseInt
      // }
    };

    $scope.calculateBMI = function() {
      if ( $scope.data.toggle === true ) {
        $scope.data.weight = $scope.data.weightlb;
        $scope.data.height = $scope.data.heightft * 12 + $scope.data.heightin;
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
