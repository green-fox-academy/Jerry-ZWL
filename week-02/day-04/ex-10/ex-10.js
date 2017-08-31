'use strict';

var students = [
    { 'name': 'Rezso', 'age': 9.5, 'candies': 2 },
    { 'name': 'Gerzson', 'age': 10, 'candies': 1 },
    { 'name': 'Aurel', 'age': 7, 'candies': 3 },
    { 'name': 'Zsombor', 'age': 12, 'candies': 5 }
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average
function moreThan4(stu) {
    var result = stu.reduce((p, c) => {
        if (c['candies'] > 4) {
            return p.concat(c['name']);
        } else { return p; }
    }, []);
    console.log(result);
}

function average(stu) {
    var result = stu.reduce((p, c) => {
        return p += c['candies'];
    }, 0)
    console.log(result / stu.length);
}

moreThan4(students);
average(students);