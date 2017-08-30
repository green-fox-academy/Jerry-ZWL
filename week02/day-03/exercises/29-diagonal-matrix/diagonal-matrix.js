'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

function matrix(rc) {
    var matrix = [];
    var row = Array(rc).fill(0);
    var container;
    for (var i = 0; i < rc; i++) {
        for (var j = 0; j < rc; j++) {
            container = row.slice(0);
            container[rc - 1 - i] = 1;

        }
        matrix.push(container);
    }

    console.log(matrix);
}
matrix(4);