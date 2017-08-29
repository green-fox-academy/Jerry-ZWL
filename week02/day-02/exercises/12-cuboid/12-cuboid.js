'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

function cuboid(l, w, h) {
    function getValue(val) {
        return parseFloat(val);
    }
    l = getValue(l);
    w = getValue(w);
    h = getValue(h);
    var surface = l * w * 2 + l * h * 2 + w * h * 2;
    var volume = l * w * h;
    console.log(`
            Surface Area: ${surface}
            Volume:       ${volume}
    `);
}