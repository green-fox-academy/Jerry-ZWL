var numberOfPeople = 0;
var floor = 1;

var up = document.querySelector('.up');
var down = document.querySelector('.down');
var addPeople = document.querySelector('.addPeople');
var removePeople = document.querySelector('.removePeople');


console.log('up', up, 'down', down, 'addPeople', addPeople, 'remove', removePeople)

up.addEventListener('click', function() {
    change(floor, 'up');
    return floor += 1;
});

down.addEventListener('click', function() {
    change(floor, 'down');
    return floor - 1 > 0 ? floor -= 1 : 1;

});

addPeople.addEventListener('click', function() {
    return numberOfPeople += 1;
});

removePeople.addEventListener('click', function() {
    return numberOfPeople - 1 >= 0 ? numberOfPeople -= 1 : 0;
})



function change(floor, direction) {
    var str = '.F' + floor;
    console.log(str);
    var pastfloor = document.querySelector(str);
    pastfloor.className = 'F' + floor;
    pastfloor.textContent = '';
    if (direction == "up") { floor += 1; } else if (direction == 'down') { floor -= 1; };
    var str = '.F' + floor;
    console.log(str);
    var presentfloor = document.querySelector(str);
    console.log(presentfloor);
    presentfloor.className += ' present';
    presentfloor.textContent = numberOfPeople;

}