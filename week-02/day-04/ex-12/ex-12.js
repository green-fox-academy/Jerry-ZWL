'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// The frist columns should be automatically as wide as the longest key

var ingredients = [
    { 'vodka': 1, 'needs_cooling': true },
    { 'coffee_liqueur': 0, 'needs_cooling': true },
    { 'fresh_cream': 1, 'needs_cooling': true },
    { 'captain_morgan_rum': 2, 'needs_cooling': true },
    { 'mint_leaves': 0, 'needs_cooling': false },
    { 'sugar': 100, 'needs_cooling': false },
    { 'lime juice': 10, 'needs_cooling': true },
    { 'soda': 100, 'needs_cooling': true }
]

function printTable(ingre) {
    var header = ['Ingredient', 'Needs cooling', 'In stock'];
    var tep = ingre.reduce((p, c) => {
        return p = p.concat([
            [Object.keys(c)[0], c['needs_cooling'] == true ? 'Yes' : 'No', c[Object.keys(c)[0]] !== 0 ? c[Object.keys(c)[0]] : '-']
        ]);
    }, []);
    console.log(header);
    tep.unshift(['a', 'a', 1]);
    console.log(tep);
    var width = tep.reduce((p, c) => {
        return p = p.concat(c.map((u, i) => { return u.length; })[0]);
    }, []);
    var maxWidth = Math.max(...width);
    console.log(width);
    console.log(maxWidth);
    console.log('+' + '-'.repeat(maxWidth + 2) + '+' +
        '-'.repeat(header[1].length + 2) + '+' +
        '-'.repeat(header[2].length + 2) + '+');
    console.log('| ' + header[0] + ' '.repeat(maxWidth - header[0].length) +
        ' | ' + header[1] +
        ' | ' + header[2] + ' |');
    console.log('+' + '-'.repeat(maxWidth + 2) + '+' + '-'.repeat(header[1].length + 2) + '+' + '-'.repeat(header[2].length + 2) + '+');
    tep.reduce(
        function(p, c, i) {
            console.log('| ' + c[0] + ' '.repeat(maxWidth - c[0].length) +
                ' | ' + c[1] + ' '.repeat(header[1].length - c[1].length) +
                ' | ' + c[2] + ' '.repeat(header[2].length - c[2].toString().length) + ' |');
        }
    )
    console.log('+' + '-'.repeat(maxWidth + 2) + '+' + '-'.repeat(header[1].length + 2) + '+' + '-'.repeat(header[2].length + 2) + '+');


}

printTable(ingredients);

// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+