function getIndex(list, value) {
    var indexValue;
    list.forEach(function(e, i) {
        if (e === value) {
            indexValue = i;
        }
    }, this);
    return indexValue == undefined ? -1 : indexValue;
}

function isAnagram(str1, str2) {
    if (str1 === str2) { return true };
    var newArr = [];
    var arr1 = str1.toUpperCase().split("").filter(function(n) { return n != undefined && n != ' '; });
    var arr2 = str2.toUpperCase().split("").filter(function(n) { return n != undefined && n != ' '; });
    console.log(arr1);
    console.log(arr2);
    if (arr1.length === arr2.length) {
        arr2.forEach(function(e) {
            newArr.push(getIndex(arr1, e));
        });
        console.log('newArr', newArr);
        for (var i = 0; i < newArr.length; i++) {
            if (newArr[i] === -1) {
                return false;
            } else {
                return true;
            }
        }
    } else {
        return false;
    }
}

function romanNumeralConverter(num) {
    const romans = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let roman = '';
    for (let key in romans) {
        const times = Math.trunc(num / romans[key]);
        roman += key.repeat(times);
        num -= romans[key] * times;
    }
    return roman;
}

module.exports = { getIndex: getIndex, isAnagram: isAnagram, romanNumeralConverter: romanNumeralConverter };