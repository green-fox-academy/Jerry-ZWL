'use strict';

var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
(function remainingSeconds() {
    var leftH = 24 - currentHours - 1;
    var leftM = 60 - currentMinutes - 1;
    var leftS = 60 - currentSeconds;
    console.log('remainingSeconds: ' + (leftH * 60 * 60 + leftM * 60 + leftS));
})();