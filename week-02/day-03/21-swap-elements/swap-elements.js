'use strict';

// - Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// - Swap the first and the third element of `abc`

var abc = ["Arthur", "Boe", "Chloe"];

function swap(abc) {
    var result = abc.map((u, i) => {
        if (i == 0) {
            return u = abc[2];
        }
        if (i == 2) {
            return u = abc[0];
        } else { return u; }
    });
    console.log(result);
}

swap(abc);