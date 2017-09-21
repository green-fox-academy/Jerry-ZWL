 import _ from 'lodash';
require('../style/scss/style.scss');

  function component() {
    var element = document.createElement('div');

   // Lodash, currently included via a script, is required for this line to work
   // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack','from webpackx'], ' ');
    element.classList.add('hello');
    return element;
  }

  function repeatFunc(func, times) {
      func();
      --times && repeatFunc(func, times);
  }

  function ex2 (){
    var asideElement = document.createElement('aside');
    var ulElement = document.createElement('ul');
    asideElement.appendChild(ulElement);
    Array.from(Array(3), () => 0).map(
        (value, index) =>
        {
         var a = document.createElement('li');
         ulElement.appendChild(a);
         a.innerHTML = _.join(['this', 'is', "list", index ], ' ');
         return a;
        });
    return asideElement;             
  }

  function ex4() {
      var imgElement = document.createElement('img');
      imgElement.src="//logo.clearbit.com/spotify.com";
      imgElement.classList.add('spotify');
      return imgElement;
  }

function ex6() {
    var pushButton = document.createElement('button');
    var mainButton = document.createElement('button');
    pushButton.classList.add('push-button');
    mainButton.classList.add('main-button');
    pushButton.innerHTML = _.join(['button', '1' ], ' ');
    mainButton.innerHTML = _.join(['button', '2' ], ' ');
    document.body.appendChild(pushButton);
    document.body.appendChild(mainButton);
}


function ex7() {
    console.log('sd');
    var page = document.createElement('div');
    page.classList.add('page');
    page.innerHTML = _.join(['page', 'div' ], ' ');
    var container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = _.join(['container', 'div' ], ' ');
    page.appendChild(container);
    return page;
   
}


  document.body.appendChild(component());
  document.body.appendChild(ex2());
  document.body.appendChild(ex4());
  ex6();
  document.body.appendChild(ex7());