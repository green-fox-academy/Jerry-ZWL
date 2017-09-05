var buttonElements = [
    'Button Delay Click',
].map(function(buttonText) {
    var buttonElement;
    buttonElement = document.createElement('button');
    buttonElement.appendChild(document.createTextNode(buttonText));
    return buttonElement;
});


function appendButtons() {
    for (let i = 0; i < buttonElements.length; i++) {
        buttonElements[i].addEventListener('click', function() {
            setTimeout(function() {
                textUnderButton = document.createElement('p');
                textUnderButton.textContent = '2 seconds elapsed';
                document.body.appendChild(textUnderButton);
            }, 2000);
        });
        document.body.appendChild(buttonElements[i]);
    }
}

window.addEventListener('load', appendButtons);