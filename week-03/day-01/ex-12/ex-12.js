function Rocket(rocket, startFuel, launches) {
    this.rocket = rocket;
    this.startFuel = startFuel != undefined ? startFuel : 0;
    this.launches = launches != undefined ? launches : 0;
    this.launch = function() {
        if (this.rocket === "falcon1") {
            if (this.startFuel >= 1) {
                this.startFuel -= 1;
                this.launches += 1;
            }
        } else if (this.rocket === 'falcon9') {
            if (this.startFuel >= 9) {
                this.startFuel -= 9;
                this.launches += 1;
            }
        }
    };

    this.refill = function() {
        if (this.rocket === "falcon1") {
            var amount = this.startFuel < 5 ? 5 - this.startFuel : 0;
            this.startFuel = 5;
            return amount;

        } else if (this.rocket === 'falcon9') {
            var amount = this.startFuel < 20 ? 20 - this.startFuel : 0;
            this.startFuel = 20;
            return amount;
        }
    };

    this.getStats = function() {
        return `name: ${this.rocket}, fuel: ${this.startFuel}, launches: ${this.launches}`;
    };

}


function SpaceX(storedFuel) {
    this.storedFuel = storedFuel;
    this.rockets = [];
    this.addRocket = function(rocket) {
        return this.rockets = this.rockets.concat(rocket);
    };
    this.refillAll = function() {
        return this.storedFuel -= this.rockets.reduce(
            (p, c) => {
                return p += c.refill();
            }, 0);
    };
    this.launchAll = function() {
        // console.log(this.rockets);
        return this.rockets.forEach(
            u => u.launch())
    };


    this.buyFuel = function(amount) {
        return this.storedFuel += amount;
    };

    this.launches = function() {
        // console.log(this.rockets);
        return this.rockets.reduce((p, c) => { return p += c.launches; }, 0);
    };
    this.getStats = function() {
        return `rockets: ${this.rockets.length}, fuel: ${this.storedFuel}, launches: ${this.launches()}`;
    };

}







var falcon1 = new Rocket('falcon1')
var returned_falcon9 = new Rocket('falcon9', 11, 1);

falcon1.refill(); // 5 
falcon1.launch();


console.log(falcon1.getStats()); // name: falcon1, fuel: 4, launches: 1
console.log(returned_falcon9.getStats()) // name: falcon9, fuel: 11, launches: 1

var space_x = new SpaceX(100)
var falcon1 = new Rocket('falcon1', 0, 0)
var falcon9 = new Rocket('falcon9', 0, 0)
var returned_falcon9 = new Rocket('falcon9', 11, 1)
console.log(returned_falcon9.getStats()) // name: falcon9, fuel: 11, launches: 1

space_x.addRocket(falcon1)
space_x.addRocket(falcon9)
space_x.addRocket(returned_falcon9)

console.log(space_x.getStats()) // rockets: 3, fuel: 100, launches: 1
space_x.refillAll()
console.log(space_x.getStats()) // rockets: 3, fuel: 66, launches: 1
space_x.launchAll()
console.log(space_x.getStats()) // rockets: 3, fuel: 66, launches: 4
space_x.buyFuel(50);
console.log(space_x.getStats()) // rockets: 3, fuel: 116, launches: 4