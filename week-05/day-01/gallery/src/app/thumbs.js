var React = require('react');
const path = require('path');
const fs = require('fs');
const sizeOf = require('image-size');

function getFileInfoFromFolder(route) {
    const files = fs.readdirSync(route, 'utf8');
    const response = [];
    for (let file of files){
        const extension = path.extname(file);
        const fileSize = sizeOf(path.join(__dirname,'images/') + file);
        var width = fileSize.width;
        var height =  fileSize.height;
        response.push({name:file, size: [width, height]});
    }
    return response;
}

console.log(getFileInfoFromFolder(path.join(__dirname,'images')));

