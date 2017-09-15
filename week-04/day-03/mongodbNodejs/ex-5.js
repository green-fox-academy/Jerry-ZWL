var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/epam';

app.get('/students', function(req, res) {
    var query = req.query;
    var gender = query.gender;
    var fields = query.fields;
    var filedsMap;
    if (fields !== undefined) {
        filedsMap = fields.reduce(
            (previous, current) => {
                previous[current] = true;
                return previous;
            }, { "_id": false });
    } else {
        filedsMap = fields;
    }

    console.log('query', query);
    console.log('fields', filedsMap);
    console.log('gender', gender);
    if (!isEmpty(filedsMap) && gender !== undefined) {
        var queryTerms = [{ "gender": gender }, filedsMap];
        dbQuery(queryTerms, res);
        console.log('?files[]=&gender=');
    } else if (!isEmpty(filedsMap) && gender == undefined) {
        var queryTerms = [{}, filedsMap];
        dbQuery(queryTerms, res);
        console.log('?files[]=');
    } else if (isEmpty(filedsMap) && gender !== undefined) {
        var queryTerms = [{ "gender": gender }, { "gender": true, "_id": false, "name": true, "github": true }];
        dbQuery(queryTerms, res);
        console.log('?gender=');

    } else {
        var queryTerms = [{}, { "gender": true, "_id": false, "name": true, "github": true }];
        dbQuery(queryTerms, res);
    }
});

app.get('/students/:github', function(req, res) {
    var query = req.params;
    var github = query.github;
    var fields = req.query.fields;
    console.log('fields', fields);
    var filedsMap;
    if (fields !== undefined) {
        filedsMap = fields.reduce(
            (previous, current) => {
                previous[current] = true;
                return previous;
            }, { "_id": false });
    } else {
        filedsMap = fields;
    }

    console.log('query', query);
    console.log('fields', filedsMap);
    console.log('github', github);
    if (!isEmpty(filedsMap) && github !== undefined) {
        var queryTerms = [{ "github": github }, filedsMap];
        dbQuery(queryTerms, res);
        console.log('/:github?fileds=');
    } else if (!isEmpty(filedsMap) && github == undefined) {
        console.log('github undeifine fileds defined');
    } else if (isEmpty(filedsMap) && github !== undefined) {
        var queryTerms = [{ "github": github }, { "gender": true, "_id": false, "name": true, "github": true }];
        dbQuery(queryTerms, res);
        console.log('/github');

    } else {
        console.log('github undefine fileds undefine');
    }
});



function dbQuery(queryTerms, res) {
    MongoClient.connect(url, function(err, db) {
        db.collection('students').find(queryTerms[0], queryTerms[1]).toArray(function(err, docs) {
            var result = { "students": docs };
            console.log("result", JSON.stringify(result));
            res.send(JSON.stringify(result));
        });
        db.close();
    });
}

function isEmpty(map) {
    for (var key in map) {
        return false;
    }
    return true;
}



app.listen(8080);