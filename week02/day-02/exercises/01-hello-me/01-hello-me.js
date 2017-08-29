'use strict';

// Modify this program to greet you instead of the World!
// How to pop up window, and you can input your name before console log
//
console.log('Hello, Jerry!');

function greeting() {
    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    console.log('Hello, ' + ' ' + first + ' ' + last);
}