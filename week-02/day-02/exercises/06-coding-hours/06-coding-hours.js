'use strict';
(function() {
    var dailyHours = 6;
    var weeks = 17;
    (function() {
        console.log('Hours spent in coding in a semester: ')
        console.log(17 * 5 * 6);
    })();
    (function() {
        console.log('Percentage of the coding hours in the semester: ')
        console.log(Math.floor(6 * 5 * 100 / 52) + '\%');
    })();
})();
// An attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52