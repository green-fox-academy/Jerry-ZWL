'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(stopNum) {
    var sumlist = Array(stopNum).fill(0).map((u, i) => { return i + 1; })
        // console.log(sumlist);
    console.log(sumlist.reduce((p, c) => { return p *= c; }, 1));

}

factorio(6);