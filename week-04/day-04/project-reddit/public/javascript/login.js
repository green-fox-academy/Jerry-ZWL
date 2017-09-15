'use strict';

var thePage = document.querySelector('.main');
var submit = document.querySelector('.create');


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
    var username = document.getElementById('username').value;
    console.log(username);
    localStorage.setItem('username', username);
    window.location.href = 'http://localhost:3339/static/index.html';
};