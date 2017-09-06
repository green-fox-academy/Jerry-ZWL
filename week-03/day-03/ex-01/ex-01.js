//node js
//var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

var xhr = new XMLHttpRequest();

var thumbs = document.querySelector('.thumbs');
console.log('thumbs', thumbs);
var clikcTimes = new Array(16).fill(0);
var url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=e0ee6687f7954204aa7fd43c88db54cb&limit=16'
var data;



function fetch(url) {
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            data = JSON.parse(xhr.response).data;
            console.log(data);
            creatAndAnimationListener(data);

        }
    };
    xhr.open('GET', url);
    xhr.send(null);
}
window.addEventListener('load', function() {
    console.log('window start');
    fetch(url);
});

function search() {
    thumbs.innerHTML = '';
    var message = document.getElementById('message').value;
    let url = 'http://api.giphy.com/v1/gifs/search?q=' + message + '&api_key=e0ee6687f7954204aa7fd43c88db54cb&limit=16';
    console.log('searchUrl ' + url);
    fetch(url);
}






function creatAndAnimationListener(data) {

    data.map(
        (u, i) => {
            var thumbTag = document.createElement('img');
            thumbTag.setAttribute('src', u.images.downsized_still.url);
            thumbTag.setAttribute('width', 100);
            thumbTag.setAttribute('height', 100);
            thumbTag.addEventListener('click', function() {
                clikcTimes[i] += 1;
                if (clikcTimes[i] % 2 !== 0) {
                    thumbTag.src = './loading.gif';
                    setTimeout(function() {
                        thumbTag.setAttribute('src', u.images.downsized.url);
                    }, 1000);

                } else {
                    thumbTag.setAttribute('src', u.images.downsized_still.url);
                }

            });
            thumbTag.addEventListener('mouseover', function() {
                thumbTag.src = './loading.gif';
                setTimeout(function() {
                    thumbTag.setAttribute('src', u.images.downsized.url);
                }, 700);
            });
            thumbTag.addEventListener('mouseout', function() {
                if (clikcTimes[i] % 2 == 0) {
                    thumbTag.setAttribute('src', u.images.downsized_still.url);
                }
            });

            thumbs.appendChild(thumbTag);
        }
    );
}