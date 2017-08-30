'use strict';
// - Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

var r = [54, 23, 66, 12];

(function printer(r) {
    console.log(r.reduce((p, c, i) => { if (i == 2 || i == 1) return p += c; return p; }, 0));
})(r);