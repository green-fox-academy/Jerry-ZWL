// Discover the API documentation
// Fetch the messages when the page load
// Be able to send messages
// Fetch the new messages every 5 seconds if its necessary
// Add error handling



//fetch the message when the page load
var xhr = new XMLHttpRequest();
var baseUrl = 'https://wakeful-vision.glitch.me';
var getMessageUrl = '/api/messages';
var getLatestUrl = '/api/latest';
var postMessagesUrl = '/api/messages';
var tableTag = document.querySelector('.table');
var messageListLength = 0;
window.addEventListener('load', function() {
    messageRequester(baseUrl + getMessageUrl, 'GET');

});
clearInterval(timeInterver);
var timeInterver = setInterval(function() {
    messageRequester(baseUrl + getMessageUrl, 'GET');
}, 5000);

function messageRequester(url, method, option) {
    console.log(url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                data = JSON.parse(xhr.response);
                console.log(data);
                if (messageListLength < data.messages.length) {

                    displayMessages(data);
                    messageListLength = data.messages.length;
                }
            } else {
                console.log('error', xhr.statusText);
            }
        }
    };
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(option);
}

function displayMessages(data) {
    var messageArray = data.messages.slice(messageListLength);
    messageArray.map(
        (u, i) => {
            var tr = document.createElement('tr');
            var thId = document.createElement('th');
            var thName = document.createElement('th');
            var thMessage = document.createElement('th');
            console.log(u.id, u.name, u.message);
            thId.textContent = u.id;
            thName.textContent = u.name;
            thMessage.textContent = u.message;
            tr.appendChild(thId);
            tr.appendChild(thName);
            tr.appendChild(thMessage);
            tableTag.appendChild(tr);
        }
    );
}

function submitMessage() {
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    console.log(name, message);
    var messageObj = {
        "name": name,
        "message": message,
    };
    console.log(messageObj);
    messageRequester(baseUrl + postMessagesUrl, 'POST', JSON.stringify(messageObj));
}