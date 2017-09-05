'use strict';

var fruits = [
    'melon',
    'apple',
    'strawberry',
    'blueberry',
    'pear',
    'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.x

var a = fruits.map(
    (u, i) => {
        var charList = u.split('');
        return charList.reduce((p, c) => { if (c === 'e') { return p += 1; } return p }, 0);
    }
)

console.log(a);