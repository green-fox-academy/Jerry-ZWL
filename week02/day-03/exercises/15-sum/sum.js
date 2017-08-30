'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
function sum(stopNum) {
    var sumlist = Array(stopNum).fill(0).map((u, i) => { return i + 1; })
        // console.log(sumlist);
    console.log(sumlist.reduce((p, c) => { return p += c; }, 0));

}

sum(100);