'use strict';

var massInKg = 81.2;
var heightInM = 1.78;

// Print the body mass index (BMI) based on these values
//BMI = weight (kg) ÷ height2 (m2)

var BMI = massInKg / (Math.pow(heightInM, 2));
console.log('The BMI is ' + BMI.toFixed(2));