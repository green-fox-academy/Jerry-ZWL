'use strict';

var lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
function drawSquare(lineCount) {
    var starsArr = Array(lineCount).fill(lineCount);
    // console.log(starsArr);
    var result = starsArr.reduce((p, c, index) => {
        if (index == 0 || index == lineCount - 1) {
            p += '%'.repeat(c) + '\n';
            return p;
        } else {
            p = p + '%' + ' '.repeat(c - 2) + '%' + '\n';
            return p;
        }

    }, "");
    console.log(result);
}

drawSquare(lineCount);