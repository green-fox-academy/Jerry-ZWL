'use strict';

// Create a constructor called PirateHorde, that takes an array of pirates as a parameter:
// It should have an "addPirate" method that adds a pirate object to it's list
// It should have a "getSumGold" method that returns the sum of all pirates gold
// It should have a "getLongestName" method that returns the name of the pirate that has the longest
// It should have a "getTheWoodenLegNames" method that retuns the names of the pirates that has wooden leg

function PirateHorde(pirates) {
    this.pirates = pirates;
    this.addPirate = function(na, go, has) {
        return this.pirates = this.pirates.concat({
                name: na,
                gold: go,
                hasWoodenLeg: has
            }

        );
    };
    this.getSumGold = function() {
        return this.pirates.reduce(
            (p, c) => {
                return p += c.gold;
            }, 0);
    };

    this.getLongestName = function() {
        return this.pirates.reduce(
            (p, c) => {
                return c.name.length > p.name.length ? c : p;
            }
        ).name;
    };

    this.getTheWoodenLegNames = function() {
        return this.pirates.reduce(
            (p, c) => {
                if (c.hasWoodenLeg) { return p = p.concat(c.name) };
                return p;
            }, []);
    }
}




var pirates = [
    { name: 'Jack', gold: 4, hasWoodenLeg: true },
    { name: 'Bob', gold: 0, hasWoodenLeg: false },
    { name: 'Olaf', gold: 3, hasWoodenLeg: true },
    { name: 'Steve', gold: 2, hasWoodenLeg: true },
    { name: 'Ian', gold: 10, hasWoodenLeg: false },
];

var pirateHorde = new PirateHorde(pirates);

pirateHorde.addPirate('Greg', 6, true);
console.log(pirateHorde.getSumGold()); // 25
console.log(pirateHorde.getLongestName()); // 'Steve'
console.log(pirateHorde.getTheWoodenLegNames()); // ['Jack', 'Olaf', 'Steve', 'Greg']