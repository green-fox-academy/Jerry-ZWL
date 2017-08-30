'use strict';

var lineCount = 8;


// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

function drawDiagonal(lineCount) {
    var starsArr = Array(lineCount).fill(lineCount);
    console.log(starsArr);
    var result = starsArr.reduce((p, c, index) => {
        if (index == 0 || index == lineCount - 1) {
            p += '%'.repeat(c) + '\n';
            return p;
        } else {
            p = p + '%' + ' '.repeat(index - 1) + '%' + ' '.repeat(c - 3 - index + 1) + '%' + '\n';
            return p;
        }

    }, "");
    console.log(result);
}

drawDiagonal(lineCount);