var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('yo dwags, now listening to port 3000');

var express = require('express');
var app = express();

app.listen(2999);

// //app.get('router', fn)
// app.post('route', fn)
// app.delete('route',fn)

// app.get('/', function(req, res) {
//     res.send('this is the homepage');
// });

app.get('/profile/:id', function(req, res) {
    console.log(req.query);
});
app.listen(3000);
// <%= obj.valur %>

app.use('/assets', function(req, res, next) {
    next();
});
app.use('/assets', express.static('assets'));

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: })