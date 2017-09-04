'use strict'

var test = require('tape');
var countLetterInString = require('./ex-06.js');

test('test count Letters In String', function(t) {
    var expected = countLetterInString("jerry", 'r');
    var actual = 2;
    t.equal(expected, actual);
    t.end();
});