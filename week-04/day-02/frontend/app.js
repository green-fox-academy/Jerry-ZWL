var express = require('express');
var app = express();
var __dirname = '/Users/mastercat/sandbox/javascript/training-material/Jerry-ZWL/week-04/day-02/frontend';
var bodyParser = require('body-parser');

app.get('/', function(req, res) {
    console.log(req.query);
    res.sendFile(__dirname + '/index.html');
});

app.use("/assets", express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//var inputStr = "This is my example sentence. Just for fun."
app.post('/sith', function(req, res) {
    var inputStr = req.body.text;
    var sentencesArr = inputStr.split('.').filter(e => e.trim() != "");

    var results = sentencesArr.reduce(
        (pre, cur) => {
            curArr = cur.trim().split(' ');
            return pre = pre.concat(switchWords(curArr).join(' '));
        }, []).join(' ');
    if (inputStr == '' || inputStr == undefined) {
        res.send({
            "error": "Feed me some text you have to, padawan young you are. Hmmm."
        })
    } else {
        res.send({ "sith_text": results });
    }

    function switchWords(arr) {
        arr[0] = lowlizeFirstLetter(arr[0]);
        for (let index = 0; index < arr.length; index += 2) {
            var temp = arr[index];
            arr[index] = arr[index + 1];
            arr[index + 1] = temp;
        }
        arr = arr.filter(e => e != undefined);
        arr[0] = capitalizeFirstLetter(arr[0]);
        arr[arr.length - 1] = arr[arr.length - 1] + '.';
        arr.push('ererere.');
        return arr;
    }


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function lowlizeFirstLetter(string) {
        return string.charAt(0).toLowerCase() + string.slice(1).toLowerCase();
    }


});



app.post('/arrays', function(req, res) {
    var what = req.body.what;
    var numbers = req.body.numbers;
    if (what === "sum") {
        var sumResult = numbers.reduce(
            (pre, cur) => {
                return pre += cur;
            }, 0)
        res.send({ "result": sumResult });
    } else if (what === "multiply") {
        var mulResult = numbers.reduce(
            (pre, cur) => {
                return pre *= cur;
            }, 1)
        res.send({ "result": mulResult });

    } else if (what === "double") {
        var douResult = numbers.map(element => element * 2);
        res.send({ "result": douResult });
    }
});



app.post('/dountil/:what', function(req, res) {
    var query = req.params;
    var what = query.what;
    console.log('what', what);
    var until = req.body.until;
    console.log('until', until);
    if (what === "sum") {
        var sumResult = 0;
        for (let i = 0; i <= until; i++) {
            sumResult += i;
        }
        console.log('sum', sumResult);
        res.send({ "result": sumResult });
    } else if (what === "factor") {
        var factorResult = 1;
        for (let i = 1; i <= until; i++) {
            factorResult *= i;
        }
        console.log('fact', factorResult);
        res.send({ "result": factorResult });
    }
});

app.get('/appends/:append', function(req, res) {
    var query = req.params;
    var append = query.append;
    console.log("append", append);
    if (!isEmpty(query) && append !== undefined) {
        var resObj = {
            "appended": `${append}s`
        };
        res.send(JSON.stringify(resObj));
    } else {

        res.status(404).send('Not found');
    }
});

app.get('/doubling', function(req, res) {
    var query = req.query;
    var input = parseInt(query.input);
    console.log('input', input);
    if (!isEmpty(query)) {
        var resObj = {
            "received": input,
            "result": input * 2
        };
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify(resObj));
    } else {
        var errObj = {
            "error": "Please provide an input!"
        };
        res.send(errObj);
    }
    res.send({
        "error": "Please provide an input!"
    });
});

app.get('/greeter', function(req, res) {
    var query = req.query;
    var name = query.name;
    var title = query.title;
    console.log('name', name, 'title', title);
    if (!isEmpty(query) && name !== undefined && title !== undefined) {
        var resObj = {
            "welcome_message": `Oh, hi there ${name}, my dear ${title}!`

        };
        res.send(JSON.stringify(resObj));
    } else {
        var errObj = {
            "error": "Please provide an name!"
        };
        res.send(JSON.stringify(errObj));
    }
});

function isEmpty(map) {
    for (var key in map) {
        return false;
    }
    return true;
}


app.listen(8080);