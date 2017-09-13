'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var fs = require('fs');
var url = 'mongodb://localhost:27017/epam';
var json = require('./student.json');


MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    console.log('Connection established to ' + url);
    db.collection('students').insert(json, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });

});