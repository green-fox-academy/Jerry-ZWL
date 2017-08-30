'use strict';

// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)
(function printer(...params) {
    console.log(params.reduce((p, c) => { return p += c + ' '; }, ''));
})('jery', 1, undefined);