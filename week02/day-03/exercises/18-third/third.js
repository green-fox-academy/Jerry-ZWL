'use strict';

// - Create a variable named `magicNumbers`
//   with the following content: `[1, 3, 5, 7]`
// - Print the third element of `magicNumbers`

var magicNumbers = [1, 3, 5, 7];

(function third(magicNumbers) {
    console.log(magicNumbers.reduce((p, c, i) => { if (i == 2) return p += c; return p; }, 0));
})(magicNumbers);