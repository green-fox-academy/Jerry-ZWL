'use strict';
var test = require('tape');
var indexJs = require('./index.js');
var getIndex = indexJs.getIndex;
var isAnagram = indexJs.isAnagram;
var romanNumeralConverter = indexJs.romanNumeralConverter;

test('getIndex', function(t) {
    var list = ['a', 'b', 'c', 'd', 'e', 'd'];
    var value = 'e';
    var nonExistedValue = 'f';
    var expected = getIndex(list, value);
    var nonExistedExpected = getIndex(list, nonExistedValue);
    t.equal(expected, 4);
    t.equal(nonExistedExpected, -1);
    t.end();
});

test('anagram', function(t) {
    var str1 = 'heart';
    var str2 = 'earth';
    var str11 = 'Tom Marvolo Riddle';
    var str22 = 'I am Lord Voldemort';
    var expected = isAnagram(str1, str2);
    var expected2 = isAnagram(str11, str22);
    t.equal(expected, true);
    t.equal(expected2, true);
    t.end();
});

test('roman converter', function(t) {
    var number = 100;
    var expectedRoman = romanNumeralConverter(number);
    t.equal(expectedRoman, "C");
    t.end();
});