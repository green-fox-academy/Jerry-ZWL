var xhr = new XMLHttpRequest();
var previouseButton = document.querySelector('.pr');
var nextButton = document.querySelector('.ne');
var firstButton = document.querySelector('.fi');
var lastButton = document.querySelector('.la');
var display = document.querySelector('.display');

var data, header, previousUrl, nextUrl, firstUrl, lastUrl, display;
var urlsObj;
var currentUrl = "https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10";



function fetchUrl(currentUrl) {
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            header = xhr.getResponseHeader('link');
            data = JSON.parse(xhr.response);
            displayContent = data.map((u, i) => { return u.name; }).filter(function(n) { return n != ""; }).join(',');
            console.log(displayContent);
            display.textContent = displayContent;
            urlsObj = getUrlsFromHeader(header);

        }
    };
    xhr.open('GET', currentUrl);
    xhr.send(null);
}


function main() {
    fetchUrl(currentUrl);
    console.log('urlsObj', urlsObj);
    previouseButton.addEventListener('click', function() { hitPrevious(urlsObj); });
    nextButton.addEventListener('click', function() { hitNext(urlsObj); });
    firstButton.addEventListener('click', function() { hitFirst(urlsObj); });
    lastButton.addEventListener('click', function() { hitLast(urlsObj); });
}

main();


//regex \<[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\>

function getUrlsFromHeader(header) {
    var allUrls = header.split(',');
    console.log('allUrls', allUrls);
    var result = allUrls.map((u, i) => {
        var obj = {};
        var urlMatch = u.match(/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}/)[0];
        var button = u.split(';')[1].slice(6, -1);
        obj.url = urlMatch;
        obj.page = button;
        return obj;
    });
    console.log('result', result);
    return result;
}


function hitNext(objUrls) {
    var next = objUrls.filter((u) => { return u.page === 'next'; })[0].url;
    console.log('next', next);
    if (next != undefined) { fetchUrl(next); }
}

function hitPrevious(objUrls) {
    console.log('hitP', objUrls);
    var pre = objUrls.filter((u) => { return u.page === 'prev'; })[0].url;
    console.log('pre', pre);
    if (pre != undefined) { fetchUrl(pre); }
}

function hitFirst(objUrls) {
    console.log('firstObj', objUrls);
    var first = objUrls.filter((u) => { return u.page === 'first'; })[0].url;
    console.log('first', first);
    if (first != undefined) { fetchUrl(first); }
}

function hitLast(objUrls) {
    var last = objUrls.filter((u) => { return u.page === 'last'; })[0].url;
    console.log('last', last);
    if (last != undefined) { fetchUrl(last); }

}