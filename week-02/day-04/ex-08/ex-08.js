'use strict';

// Check if the array contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

var numbers = [1, 2, 3, 4, 5, 6, 8];
var check = numbers.some(
    (e, i) => {
        return e == 7;
    }
);
console.log(check);