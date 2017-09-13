'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/epam';
var json = require('./student.json');


MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    db.collection('students').find().toArray(function(err, docs) {
        console.log(JSON.stringify(docs));
    });

    db.collection('students').find({}, { "github": true, "_id": false }).toArray(function(err, docs) {
        console.log(JSON.stringify(docs));
    });

    db.collection('students').find({ "name": { "$ne": { "name": "Jerry Liu" } } }, { "name": true, "_id": false }).toArray(function(err, docs) {
        console.log(JSON.stringify(docs));
    });
    db.collection('students').find({}, { "gender": true, "_id": false, "name": true, }).toArray(function(err, docs) {
        console.log(JSON.stringify(docs));
    });

    db.close();
});