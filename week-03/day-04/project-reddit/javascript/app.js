'use strict';

//urls
var baseUrl = 'https://time-radish.glitch.me';
var getUrl = '/posts';
var postUrl = '/posts';
var putUpUrl = function() { return `/posts/${id}/upvote` };
var putDownUrl = function() { return `/posts/${id}/downvote`; }

var deleteUrl = function() { return `/posts/${id}`; }

var data, id, upScore, downScore;
var postsLength = 0;


//tags
var container = document.querySelector('.container');
var submit = document.querySelector('.submit');
var thePage = document.querySelector('.thePage');
var creat = document.querySelector('.create');

console.log(thePage);



//event Listeners
function main() {
    init();
    // redirectToSubmitPage();

}
main();

function init() {
    addEventListener('load', function() {
        messageRequester(baseUrl + getUrl, 'GET', initPage);
    })
    addEventListener('click', redirectToSubmitPage());
};


function redirectToSubmitPage() {
    creat.addEventListener('click', function() {
        var temp = window.location.pathname.split('/');
        var thePagePathName = temp.slice(0, (temp.length - 1)).join('/') + '/addPost.html';
        window.location.pathname = thePagePathName;
    })
}




//functions
function messageRequester(url, method, doFuntion, option, setHeader) {
    console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (doFuntion !== undefined) {
                    doFuntion(xhr);
                }
            } else {
                console.log('error', xhr.statusText);
            }
        }
    };
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    if (setHeader !== undefined) {
        setHeader();
    }
    xhr.send(option);
}



function initPage(xhr) {
    data = JSON.parse(xhr.response);
    console.log(data.posts[0].score);
    var postsList = data.posts;
    if (postsLength < postsList.length) {

        postsList.map((u, i) => {
            render(u, i);
        });
        postsLength = postsList.length;
    }
}




function creatTags(tagType, parentTag, className) {
    let tagNmae = document.createElement(tagType);
    if (className !== undefined) { tagNmae.className = className; }
    parentTag.appendChild(tagNmae);
    return tagNmae;
}

function render(dataObject, index) {
    var liTag = creatTags('li', container);
    var orderContainer = creatTags('div', liTag, 'orderContainer');
    var order = creatTags('span', orderContainer, 'order');
    var arrows = creatTags('div', liTag, 'arrows');
    var up = creatTags('button', arrows, 'up');
    var score = creatTags('span', arrows, 'score');
    var down = creatTags('button', arrows, 'down');
    var info = creatTags('div', liTag, 'info');
    var title = creatTags('p', info, 'title');
    var timeStamp = creatTags('p', info, 'timeStamp');
    var modify = creatTags('span', info, 'modify');
    var remove = creatTags('span', info, 'remove');
    order.textContent = (index + 1);
    score.textContent = dataObject.score;
    title.textContent = dataObject.title;
    up.setAttribute('useId', dataObject.id);
    down.setAttribute('useId', dataObject.id);
    var minusToNow = millisecToMinuTillNow(dataObject.timestamp);
    var owner = dataObject.owner == null ? 'anonymous' : dataObject.owner;
    timeStamp.textContent = `submitted ${minusToNow} munites ago by ${owner}`;
    modify.textContent = 'modify ';
    remove.textContent = 'remove';
    remove.setAttribute('useId', dataObject.id);
    modify.setAttribute('useId', dataObject.id);
    //add listener to up and down

    up.addEventListener('click', upCallback(up, score, down));
    down.addEventListener('click', downCallback(down, score, up));

    remove.addEventListener('click', deletetCallback(remove, liTag));
    modify.addEventListener('click', modifyCallback(modify));
}

function millisecToMinuTillNow(timeStamp) {
    var interval = Date.now() - (timeStamp * 1000);
    return Math.floor(interval / (1000 * 60));
}

var modifyCallback = function(modify) {
    return function() {
        id = modify.getAttribute('useId');
        console.log('modifyId', id);
        var temp = window.location.pathname.split('/');
        console.log('url', temp.slice(0, (temp.length - 1)).join('/') + '/modify.html')
            // var thePagePathName = temp.slice(0, (temp.length - 1)).join('/') + '/modify.html' + '&useId=' + id;
            // window.location.pathname = thePagePathName;

        window.location = 'modify.html?id=' + id;
    };
};




var deletetCallback = function(remove, liTag) {
    return function() {
        id = remove.getAttribute('useId');
        var url = baseUrl + deleteUrl();
        console.log('url', url);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.response);
                    console.log('logResponse', data);
                    liTag.remove();
                } else {
                    console.log('error', xhr.statusText);
                }
            }
        };
        xhr.open('DELETE', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(null);
    }
}




var upCallback = function(up, score, down) {
    return function() {
        id = up.getAttribute('useId');
        var url = baseUrl + putUpUrl();
        console.log('url', url);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.response);
                    console.log('logResponse', data);
                    score.textContent = data.score;
                    up.classList.add("upVoted");
                    down.classList.remove('downVoted');
                } else {
                    console.log('error', xhr.statusText);
                }
            }
        };
        xhr.open('PUT', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(null);
    };
};


var downCallback = function(down, score, up) {
    return function() {
        id = down.getAttribute('useId');
        var url = baseUrl + putDownUrl();
        console.log('url', url);

        console.log(url);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.response);
                    console.log('logResponse', data);
                    score.textContent = data.score;
                    down.classList.add("downVoted");
                    up.classList.remove('upVoted');

                } else {
                    console.log('error', xhr.statusText);
                }
            }
        };
        xhr.open('PUT', url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(null);

    };

};

function logResponse() {
    var data = JSON.parse(xhr.response);
    console.log('logResponse', data);
}