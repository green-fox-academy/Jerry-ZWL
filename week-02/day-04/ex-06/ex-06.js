'use strict';
// Add "e" to every string in far

var far = ["appl", "fiddl", "Bruce Le", "hom"];
far.forEach((u, i, a) => { a[i] += 'e'; });
console.log(far);