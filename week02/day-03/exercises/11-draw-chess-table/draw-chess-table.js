// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//

function drawChessTable(lineCount) {
    function crossFill(n) {
        return Array(n).fill(0).map((u, i) => { return i; }).reduce((p, c, i) => {
            if (i % 2 == 0) {
                p += '%';
                return p;
            } else {
                p += ' ';
                return p;
            }
        }, "");
    }
    var starsArr = Array(lineCount).fill(lineCount);
    console.log(starsArr);
    var result = starsArr.reduce((p, c, index) => {
        if (index % 2 == 0) {
            p += crossFill(c) + ' ' + '\n';
            return p;
        } else {
            p += ' ' + crossFill(c) + '\n';
            return p;
        }

    }, "");
    console.log(result);
}

drawChessTable(10);