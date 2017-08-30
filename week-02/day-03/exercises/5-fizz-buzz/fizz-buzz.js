'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

(function fizzbuzz() {
    var numbers = Array(100).fill(0).map((u, i) => { return i + 1; });
    var result = numbers.reduce(function(pre, cur) {
        if (cur % 3 == 0) {
            pre += "Fizz";
            return pre;
        } else if (cur % 5 == 0) {
            pre += "Buzz";
            return pre;
        } else if (cur % 5 == 0 && cur % 3 == 0) {
            pre += "FizzBuzz";
            return pre;
        } else {
            pre += cur;
            return pre;
        }
    }, '');
    console.log(result);
})()