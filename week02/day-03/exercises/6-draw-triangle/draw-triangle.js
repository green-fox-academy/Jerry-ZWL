'use strict';

var lineCount = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
function drawTriangle(lineCount) {
    var starsArr = Array(lineCount).fill(0).map((u, i) => { return i + 1; });
    // console.log(starsArr);
    var result = starsArr.reduce((p, c) => {
        p = p + '*'.repeat(c) + '\n';
        return p;
    }, "");
    console.log(result);
}

drawTriangle(lineCount);