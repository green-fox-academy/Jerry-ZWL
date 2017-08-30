'use strict';

var lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
function drawDiamond(lineCount) {
    var middleP, fullStatsArr;
    var starsArr = Array(lineCount).fill(0).map((u, i) => { return i + 1; });
    if (lineCount % 2 == 0) {
        middleP = lineCount / 2;
        fullStatsArr = starsArr.slice(0, middleP).concat(starsArr.slice(0, middleP).reverse());
    } else {
        middleP = Math.round(lineCount / 2);
        fullStatsArr = starsArr.slice(0, middleP).concat(starsArr.slice(0, middleP - 1).reverse());
    }
    // console.log(starsArr);
    var result = fullStatsArr.reduce((p, c) => {
        p = p + ' '.repeat(lineCount - c) + '*'.repeat(c + c - 1) + '\n';
        return p;
    }, "");
    console.log(result);
}

drawDiamond(lineCount);
drawDiamond(lineCount + 1);