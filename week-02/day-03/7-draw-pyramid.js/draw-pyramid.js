'use strict';

var lineCount = 20;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
function drawPrimid(lineCount) {
    var starsArr = Array(lineCount).fill(0).map((u, i) => { return i + 1; });
    // console.log(starsArr);
    var result = starsArr.reduce((p, c) => {
        p = p + ' '.repeat(lineCount - c) + '*'.repeat(c + c - 1) + '\n';
        return p;
    }, "");
    console.log(result);
}

drawPrimid(lineCount);