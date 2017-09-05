// Gather 10.000 candies!
// Clicking the ‘Create candies’ button gives you 1 candy.
// You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// 10 lollipops generate 1 candy per second.
// Use the 🍭 emoji to display the lollipops you have
// Display the candy production rate in the Candies / Second row
// If you press the "make candy rain" button, the candy generation should speed up 10x

var candies = 1000;
var lollypops = 10;
var generateTime = 1000;
var lollyGe;
var candiesCell = document.querySelector('.stats .candies');
var lollypopsCell = document.querySelector('.stats .lollypops');
var speedCell = document.querySelector('.stats .speed');

var t0 = Date.now();

var refresh = setInterval(renderTable, 100);

function renderTable(params) {
    if (lollypops > 10) {
        lollypopsToGe();
    }
    candiesCell.textContent = candies;
    lollypopsCell.textContent = '🍭 '.repeat(lollypops);
    speedCell.textContent = candies * 1000 / (Date.now() - t0);
}


// clearInterval(refresh);
// refresh = 0;

var createCandies = document.querySelector('.create-candies');
var buyLollypops = document.querySelector('.buy-lollypops');
var candyMachine = document.querySelector('.candy-machine');

createCandies.addEventListener('click', function() {
    return candies += 1;
});

buyLollypops.addEventListener('click', function() {
    if (candies - 100 >= 0) {
        lollypops += 1;
        return candies -= 100;
    }
});

candyMachine.addEventListener('click', function() {
    return generateTime /= 10;
});

function lollypopsToGe() {
    clearTimeout(lollyGe);
    lollypops -= 10;
    lollyGe = setInterval(function() {
        return candies += 1;
    }, generateTime);
};