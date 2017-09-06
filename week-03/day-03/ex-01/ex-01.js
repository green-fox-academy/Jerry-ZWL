//node js
//var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

var xhr = new XMLHttpRequest();
var imgTag = document.querySelector('.displayArea');
var thumbs = document.querySelector('.thumbs');
var clikcTimes = new Array(16).fill(0);

var data;
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        data = JSON.parse(xhr.response).data;
        console.log(data);
        creatAndAnimationListener(data);

    }
};
xhr.open('GET', 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=e0ee6687f7954204aa7fd43c88db54cb&limit=16')
xhr.send(null);




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
                    thumbTag.setAttribute('src', u.images.downsized.url);
                } else {
                    thumbTag.setAttribute('src', u.images.downsized_still.url);
                }

            });
            thumbTag.addEventListener('mouseover', function() {
                thumbTag.setAttribute('src', u.images.downsized.url);
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