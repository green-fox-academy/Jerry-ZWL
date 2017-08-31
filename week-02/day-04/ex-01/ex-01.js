'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk\n";

function todoTextMutable() {
    var addedNeeded = [' - Download games\n', '\u0020\u0020\u0020\u0020 - Diablo']
    todoText = addedNeeded.reduce((p, c) => {
        p += c;
        return p;
    }, todoText);
}
todoTextMutable();
console.log(todoText);