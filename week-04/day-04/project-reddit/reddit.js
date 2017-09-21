var bodyParser = require('body-parser');
var express = require('express');
var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectId;
var json = require('./stored.json');
var path = require('path');
var MongoClient = require('mongodb').MongoClient,
    format = require('util').format,
    assert = require('assert');
var url = 'mongodb://localhost:27017/reddit';
var reload = require('reload');
var collection = 'posts';
var app = express();
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var __dirname = '/Users/mastercat/sandbox/javascript/training-material/Jerry-ZWL/week-04/day-04/project-reddit';
app.use('/static', express.static(path.join(__dirname, 'public')));
MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    console.log('Connection established to ' + url);
    console.log("Current database", db.databaseName);
    db.close();
});

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     db.collectionNames(function(err, collections) {
//         console.log(collections);
//     });
//     db.close();
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     db.collection('posts').insert(json, function(err, res) {
//         if (err) throw err;
//         console.log("stored.json inserted");
//     });
//     db.close();
// });





app.get('/hello', function(req, res) {
    res.send('hello world');
});

app.get('/posts', function(req, res) {
    var queryTerms = [{}, {
        "id": true, //why this has to been true otherwise no data return
        "_id": true,
        "title": true,
        "href": true,
        "timestamp": true,
        "score": true,
        "owner": true,
        "vote": true
    }];

    function getPostsJson(doc) {
        return { "posts": doc };
    }
    dbQuery(queryTerms, res, collection, getPostsJson);
});



function dbQuery(queryTerms, res, collectionName, josnFormat) {
    MongoClient.connect(url, function(err, db) {
        db.collection('posts').find(queryTerms[0], queryTerms[1]).
        sort({ 'score': -1 }).
        toArray(function(err, docs) {
            var result = josnFormat(docs);
            console.log("result", JSON.stringify(result));
            res.send(JSON.stringify(result));
        });
        db.close();
    });
}

function dbQueryForCache(queryTerms, collectionName, josnFormat, cacheFun) {
    MongoClient.connect(url, function(err, db) {
        db.collection('posts').find(queryTerms[0], queryTerms[1]).
        sort({ 'score': -1 }).
        toArray(function(err, docs) {
            var result = josnFormat(docs);
            console.log("result", JSON.stringify(result));
            cacheFun(result);
        });
        db.close();
    });
}


app.post('/posts', function(req, res) {
    var bodyJson = req.body;
    console.log('bodyJson', req.body);
    console.log('headers', req.headers);
    var headers = req.headers;
    var username = headers.username;
    console.log('username', username);
    if (username === undefined) { username = 'anonymous' };
    console.log('username', username);
    var templeteJson = {
        "title": "Crockford",
        "href": "http://9gag.com",
        "timestamp": Date.now(),
        "score": 0,
        "owner": "anonymous",
        "vote": 0
    };
    var resultJson = Object.assign({}, templeteJson, bodyJson, { "owner": username });
    console.log('resultJson', resultJson);
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        // Insert a single document
        db.collection('posts').insertOne(resultJson, function(err, r) {
            assert.equal(null, err);
            assert.equal(1, r.insertedCount);
        });
        res.send(resultJson);
        db.close();
    });
});

app.put('/posts/:id/upvote', function(req, res) {
    var _id = req.params.id;
    var o_Id = new ObjectId(_id);
    console.log(_id);
    var headers = req.headers;
    console.log('headers', headers);
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        // Insert a single document
        db.collection('posts').updateOne({ "_id": o_Id }, {
                $inc: { "score": 1 },
                $set: { "timestamp": Date.now(), "vote": 1 }
            },
            function(err, r) {
                assert.equal(null, err);
                assert.equal(1, r.matchedCount);
                assert.equal(1, r.modifiedCount);
            });
        var queryTerms = [{ "_id": o_Id }, {
            "id": true, //why this has to been true otherwise no data return
            "_id": true,
            "title": true,
            "href": true,
            "timestamp": true,
            "score": true,
            "owner": true,
            "vote": true
        }];

        function putUpvoteJson(doc) {
            return doc[0];
        }
        dbQuery(queryTerms, res, collection, putUpvoteJson);
        db.close();
    });

});

app.put('/posts/:id/downvote', function(req, res) {
    var _id = req.params.id;
    var o_Id = new ObjectId(_id);
    console.log(_id);
    var headers = req.headers;
    console.log('headers', headers);
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        // Insert a single document
        db.collection('posts').updateOne({ "_id": o_Id }, {
                $inc: { "score": -1 },
                $set: { "timestamp": Date.now(), "vote": -1 }
            },
            function(err, r) {
                assert.equal(null, err);
                assert.equal(1, r.matchedCount);
                assert.equal(1, r.modifiedCount);
            });
        var queryTerms = [{ "_id": o_Id }, {
            "id": true, //why this has to been true otherwise no data return
            "_id": true,
            "title": true,
            "href": true,
            "timestamp": true,
            "score": true,
            "owner": true,
            "vote": true
        }];

        function putUpvoteJson(doc) {
            return doc[0];
        }
        dbQuery(queryTerms, res, collection, putUpvoteJson);
        db.close();
    });

});


app.delete('/posts/:id', function(req, res) {
    var _id = req.params.id;
    var o_Id = new ObjectId(_id);
    console.log(_id);
    var headers = req.headers;
    var username = headers.username;
    var queryTerms = [{ "_id": o_Id }, {
        "id": true, //why this has to been true otherwise no data return
        "_id": true,
        "title": true,
        "href": true,
        "timestamp": true,
        "score": true,
        "owner": true,
        "vote": true
    }];

    function deleteJson(doc) {
        return doc[0];
    }
    var cacheObj = {};

    dbQueryForCache(queryTerms, collection, deleteJson, function(result) {
        cacheObj = result;
    });
    console.log('cacheObj1', cacheObj);
    var usernameCheck;
    MongoClient.connect(url, function(err, db) {
        db.collection('posts').find(queryTerms[0], queryTerms[1]).toArray(function(err, docs) {
            console.log("checkedUsername", JSON.stringify(docs));
            console.log('userName', username, 'owner', docs[0].owner);
            if (username !== undefined) {
                if (docs[0].owner == username || docs[0].owner == "anonymous" || docs[0].owner == null) {
                    usernameCheck = true;
                    console.log(1, usernameCheck);
                } else {
                    usernameCheck = false;
                    console.log(2, usernameCheck);
                }
            } else {
                if (docs[0].owner == "anonymous" || docs[0].owner == null) {
                    usernameCheck = true;
                    console.log(3, usernameCheck);
                } else {
                    usernameCheck = false;
                    console.log(4, usernameCheck);
                }
            }
            if (usernameCheck) {
                console.log('delete');
                db.collection('posts').deleteOne({ "_id": o_Id },
                    function(err, r) {
                        assert.equal(null, err);
                        assert.equal(1, r.deletedCount);
                        console.log('cacheObj2', cacheObj);
                        res.send(JSON.stringify(cacheObj));
                    });
                console.log('delete');
            }
            db.close();
        });
    });
});


app.put('/posts/:id', function(req, res) {
    var _id = req.params.id;
    var o_Id = new ObjectId(_id);
    var bodyJson = req.body;
    console.log('bodyJson', bodyJson);
    console.log(_id);
    var headers = req.headers;
    var username = headers.username;
    var queryTerms = [{ "_id": o_Id }, {
        "id": true, //why this has to been true otherwise no data return
        "_id": true,
        "title": true,
        "href": true,
        "timestamp": true,
        "score": true,
        "owner": true,
        "vote": true
    }];

    function modifyJson(doc) {
        return doc[0];
    }
    var cacheObj = {};

    dbQueryForCache(queryTerms, collection, modifyJson, function(result) {
        cacheObj = result;
    });
    var usernameCheck;
    MongoClient.connect(url, function(err, db) {
        db.collection('posts').find(queryTerms[0], queryTerms[1]).toArray(function(err, docs) {
            console.log("checkedUsername", JSON.stringify(docs));
            console.log('userName', username, 'owner', docs[0].owner);
            if (username !== undefined) {
                if (docs[0].owner == username || docs[0].owner == "anonymous" || docs[0].owner == null) {
                    usernameCheck = true;
                    console.log(1, usernameCheck);
                } else {
                    usernameCheck = false;
                    console.log(2, usernameCheck);
                }
            } else {
                if (docs[0].owner == "anonymous" || docs[0].owner == null) {
                    usernameCheck = true;
                    console.log(3, usernameCheck);
                } else {
                    usernameCheck = false;
                    console.log(4, usernameCheck);
                }
            }
            if (usernameCheck) {
                console.log('modify');
                db.collection('posts').updateOne({ "_id": o_Id }, {
                        $set: {
                            "timestamp": Date.now(),
                            "owner": username,
                            'href': bodyJson.href,
                            'title': bodyJson.title
                        }
                    },
                    function(err, r) {
                        assert.equal(null, err);
                        assert.equal(1, r.matchedCount);
                        assert.equal(1, r.modifiedCount);
                        res.send(JSON.stringify(cacheObj));
                    });
            }
            db.close();
        });
    });
});

app.listen(3339);