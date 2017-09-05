// node.js can list the file names as a list 
var imagesList = Array(7).fill(0).map((u, i) => { return u = i; })
var descriptionData = [{
    width: 800,
    height: 500,
    title: 'Jascha Heifetz',
    description: 'GOAT - greatest violinist of all time.'
}, {
    width: 1000,
    height: 795,
    title: 'unparalleled skills',
    description: 'More than a century after his public debut, the name Jascha Heifetz continues to evoke awe and excitement among fellow musicians. In a performing career that spanned 65 years, he established an unparalleled standard of violin playing to which violinists around the world still aspire.'
}, {
    width: 736,
    height: 1053,
    title: 'early life',
    description: 'At five years old, he started lessons with Leopold Auer. He was a child prodigy, making his public debut at seven, in Kovno (now Kaunas, Lithuania) playing the Violin Concerto in E minor by Felix Mendelssohn. In 1910 he entered the Saint Petersburg Conservatory to study under Leopold Auer'
}, {
    width: 1024,
    height: 800,
    title: 'what',
    description: 'In 1928, he published the first of dozens of acclaimed violin transcriptions. Many, including his arrangements of selections from Gershwin’s “Porgy and Bess,” are now part of the standard repertoire. Using the pseudonym Jim Hoyl, he even wrote a pop song that became a hit in 1946.'
}, {
    width: 1024,
    height: 853,
    title: 'the giant\'s shoulder',
    description: 'Heifetz was "regarded as the greatest violin virtuoso since Paganini," wrote Lois Timnick of the Los Angeles Times.[17] "He set all standards for 20th-century violin playing...everything about him conspired to create a sense of awe," wrote music critic Harold Schonberg of the New York Times.[18] "The goals he set still remain, and for violinists today it\'s rather depressing that they may never really be attained again," wrote violinist Itzhak Perlman.'
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
        var newSpanTagPop = document.createElement('span');
        newSpanTagPop.classList.add('pop' + i);
        newATag.appendChild(newSpanTagPop);
        var newImgTag = document.createElement('img');
        newImgTag.setAttribute('src', "resource/images/" + i + ".jpg");
        newImgTag.classList.add('thumb');
        newATag.appendChild(newImgTag);
        var newSpanTagDes = document.createElement('span');
        newSpanTagDes.classList.add('description' + i);
        newATag.appendChild(newSpanTagDes);

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
            // descrpi.textContent = descriptionData[i].description;
        }
        u.onmouseout = function() {
            u.style.border = '';
            popi.textContent = '';
            // descrpi.textContent = '';
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