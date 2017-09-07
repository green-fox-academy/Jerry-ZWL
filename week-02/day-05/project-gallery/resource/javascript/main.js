// node.js can list the file names as a list 
var imagesList = Array(8).fill(0).map((u, i) => { return u = i; })
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
    title: 'young performer',
    description: 'In 1928, he published the first of dozens of acclaimed violin transcriptions. Many, including his arrangements of selections from Gershwin’s “Porgy and Bess,” are now part of the standard repertoire. Using the pseudonym Jim Hoyl, he even wrote a pop song that became a hit in 1946.'
}, {
    width: 1024,
    height: 853,
    title: 'the giant\'s shoulder',
    description: 'Heifetz was "regarded as the greatest violin virtuoso since Paganini," wrote Lois Timnick of the Los Angeles Times.[17] "He set all standards for 20th-century violin playing...everything about him conspired to create a sense of awe," wrote music critic Harold Schonberg of the New York Times.[18] "The goals he set still remain, and for violinists today it\'s rather depressing that they may never really be attained again," wrote violinist Itzhak Perlman.'
}, {
    width: 1273,
    height: 944,
    title: 'play with light',
    description: 'Heifetz’s public debut in Berlin took place four days later at the large hall of the Hochschule für Musik. A sold out audience packed the 1,600 seat hall. Fernow wrote to Auer that the recital was “a sensational success” and that “the public was wild with enthusiasm.”'
}, {
    width: 1280,
    height: 720,
    title: 'whole heart',
    description: 'That recital stands as one of the most sensational debuts in musical history. The reviews in the many daily newspapers that then existed in New York were so rapturous in their praise that Heifetz’s manager simply reprinted them in their entirety in multi-page ads in the leading music magazines.'
}, {
    width: 1920,
    height: 1080,
    title: 'later life',
    description: 'In his later years, Heifetz became a dedicated teacher and a champion of causes he believed in. He led efforts to establish “911” as an emergency phone number, and crusaded for clean air. He and his students at the University of Southern California protested smog by wearing gas masks, and in 1967 he converted his Renault passenger car into an electric vehicle.'
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
        var newImgTagContainer = document.createElement('div');
        newImgTagContainer.classList.add('thumbContainer');
        var newImgTag = document.createElement('img');
        newImgTag.setAttribute('src', "resource/images/" + i + ".jpg");
        newImgTag.classList.add('thumb');
        newATag.appendChild(newImgTagContainer);
        newImgTagContainer.appendChild(newImgTag);
    }
)



//click a tag event
var allAtag = document.querySelectorAll('a');
var imageWidth, imageHeight;
let allAtayToArray = Array.from(allAtag);
var allThumbTag = document.querySelectorAll('.thumbContainer');
let allThumbTagArray = Array.from(allThumbTag);
console.log(allThumbTagArray);
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

                allThumbTagArray[i].setAttribute('discription', descriptionData[i].description);
            });
        var descrpi = document.querySelector('.description' + i);

        u.onmouseover = function() {
            u.setAttribute('bubbletooltip', descriptionData[i].title);
            // descrpi.textContent = descriptionData[i].description;
        }
        u.onmouseout = function() {
            u.style.border = '';
            u.removeAttribute('bubbletooltip');
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