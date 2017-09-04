// node.js can list the file names as a list 
var imagesList = Array(7).fill(0).map((u, i) => { return u = i; })
var descriptionData = [{
    width: 800,
    height: 500,
    title: 'title',
    description: 'It is a song from beatles! I read the news today, oh boy About a lucky man who made the grade And though the news was rather sad Well I just had to laugh!'
}, {
    width: 1000,
    height: 795,
    title: 'woke up',
    description: 'tired!'
}, {
    width: 736,
    height: 1053,
    title: 'clean face',
    description: 'hygine matter!'
}, {
    width: 1024,
    height: 800,
    title: 'breakfast',
    description: 'big!'
}, {
    width: 1024,
    height: 853,
    title: 'working hours',
    description: 'sit tight!'
}, {
    width: 1273,
    height: 944,
    title: 'focus',
    description: 'neck angle!'
}, {
    width: 1280,
    height: 720,
    title: 'nap after lunch',
    description: 'So comfortable!'
}, {
    width: 1920,
    height: 1080,
    title: 'good night',
    description: 'tomorrow is another day!'
}]

var classthumbnail = document.querySelector('div.thumbnail');

//creat the thumbnails by inported data.
imagesList.map(
    (u, i) => {
        var newATag = document.createElement('a');
        newATag.setAttribute('target', '_self');
        newATag.setAttribute('href', '#' + i);
        newATag.setAttribute('id', 1);
        classthumbnail.appendChild(newATag);
        var newImgTag = document.createElement('img');
        newImgTag.setAttribute('src', "resource/images/" + i + ".jpg");
        newImgTag.classList.add('thumb');
        newATag.appendChild(newImgTag);
        var newSpanTagDes = document.createElement('span');
        newSpanTagDes.classList.add('description' + i);
        newATag.appendChild(newSpanTagDes);
        var newSpanTagPop = document.createElement('span');
        newSpanTagPop.classList.add('pop' + i);
        newATag.appendChild(newSpanTagPop);
    }
)



//click a tag event
var allAtag = document.querySelectorAll('a');
var imageWidth, imageHeight;
let allAtayToArray = Array.from(allAtag);
allAtayToArray.map(
    (u, i) => {
        u.addEventListener('click',
            function() {
                image.setAttribute('src', "resource/images/" + i + ".jpg");
                image.setAttribute('id', i);
                imageWidth = descriptionData[i].width;
                imageHeight = descriptionData[i].height;
                console.log('width', imageWidth, 'height', imageHeight)
                image.setAttribute('height', imageHeight);
                image.setAttribute('width', imageWidth);
            })
        var popi = document.querySelector('.pop' + i);
        var descrpi = document.querySelector('.description' + i);

        u.onmouseover = function() {
            u.style.padding = '2px 2px 4px 2px';
            popi.textContent = descriptionData[i].title;
            descrpi.textContent = descriptionData[i].description;
        }
        u.onmouseout = function() {
            u.style.border = '';
            popi.textContent = '';
            descrpi.textContent = '';
        }
    }
)
var image = document.querySelector('.images img');

console.log('image', image);


//arrow first or last images
var leftButton = document.querySelector('button.left');
var rightButton = document.querySelector('button.right');

rightButton.addEventListener('click',
    function() {
        image.setAttribute('src', "resource/images/" + (imagesList.length - 1) + ".jpg");
        image.setAttribute('id', (imagesList.length - 1));
    })

leftButton.addEventListener('click',
    function() {
        image.setAttribute('src', "resource/images/" + 0 + ".jpg");
        image.setAttribute('id', 0);
    })