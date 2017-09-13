'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/epam';



MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    var col = db.collection('students');
    col.findOneAndUpdate({ "name": "John Doe" }, { $set: { "github": "johndoe" } }, {
            returnOriginal: false,
            upsert: true
        },
        function(err, r) {
            if (err) { console.log(err); }
            console.log("updated");
        }
    );
    col.findOneAndUpdate({}, { $set: { "age": "" } }, {
            returnOriginal: false,
            upsert: true
        },
        function(err, r) {
            if (err) { console.log(err); }
            console.log("updated age");
        }
    );



    db.close();
});