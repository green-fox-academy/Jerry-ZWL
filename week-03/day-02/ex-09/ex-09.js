var buttonElements = [
    'Click Three TImes',
].map(function(buttonText) {
    var buttonElement;
    buttonElement = document.createElement('button');
    buttonElement.appendChild(document.createTextNode(buttonText));
    return buttonElement;
});


function appendButtons() {
    for (let i = 0; i < buttonElements.length; i++) {
        var clickTimes = 0;
        buttonElements[i].addEventListener('click', function() {
            return clickTimes += 1;
        });
        document.body.appendChild(buttonElements[i]);

        setTimeout(function() {
            textUnderButton = document.createElement('p');
            textUnderButton.textContent = `5 seconds elapsed and clicked ${clickTimes} times`;
            document.body.appendChild(textUnderButton);
        }, 5000);
    }
}

window.addEventListener('load', appendButtons);