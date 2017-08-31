'use strict';
// Reverse the string!

var reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"

function reverseString(str) {
    var strArr = str.split(' ');
    return strArr.map((u, i) => {
        return u.split('').reverse().join('');
    }).reverse().join(' ');


}
console.log(reverseString(reversed));