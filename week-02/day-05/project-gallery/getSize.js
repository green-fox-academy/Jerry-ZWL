const dirPath = './resource/images/';
const fs = require('fs');
const sizeOf = require('image-size');
var EventEmitter = require('events').EventEmitter;
filesEE = new EventEmitter();
myFiles = [];
size = {};
filesEE.on('files_ready', function() {
    console.log(myFiles);
    size = myFiles.reduce((p, c) => {
        var obj = {};
        var dimensions = sizeOf(dirPath + c);
        obj.width = dimensions.width;
        obj.height = dimensions.height;
        return p = p.concat(obj);
    }, []);
    // console.log(size);
    return size;
});

//asyncros return {}, don't know why



fs.readdir(dirPath, (err, files) => {
    if (err) throw err;
    files.filter(file => {
        return file.includes('.jpg');
    }).forEach(function(file) {
        myFiles.push(file);
    })
    filesEE.emit('files_ready');
})


// var size = imgs.reduce((p, c) => {
//     var dimensions = sizeOf(dirPath + c);
//     p.width = dimensions.width;
//     p.height = dimensions.height;
//     return p;
// }, {})

// console.log(size);