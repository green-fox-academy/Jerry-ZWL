'use strict';

var thePage = document.querySelector('.main');
var submit = document.querySelector('.create');
var url = document.getElementById('url').value;
var id;
console.log(thePage);
var xhr = new XMLHttpRequest();

function redirectToThePage() {
    thePage.addEventListener('click', function() {
        var temp = window.location.pathname.split('/');
        var thePagePathName = temp.slice(0, (temp.length - 1)).join('/') + '/index.html';
        window.location.pathname = thePagePathName;
    })
}

function redirectToSumit() {
    submit.addEventListener('click', function() {
        var temp = window.location.pathname.split('/');
        var thePagePathName = temp.slice(0, (temp.length - 1)).join('/') + '/addPost.html';
        window.location.pathname = thePagePathName;
    })
}

window.addEventListener('load', function() {
    console.log('hello');
    redirectToThePage();
    redirectToSumit();
});

function login() {
    url = document.getElementById('url').value;
    console.log(url);
    // url !== undefined ? url = url : url = '';
    // console.log('url', url);
    // var postObj = {
    //     "href": url
    // };
    // var option = JSON.stringify(postObj);
    console.log('hello');
};