function Animal() {
    this.hunger = 50;
    this.thirst = 50;
    this.eat = function() {
        this.hunger -= 1;
    };
    this.drink = function() {
        this.thirst -= 1;
    };
    this.play = function() {
        this.hunger += 1;
        this.thirst += 1;
    };
}
//https://stackoverflow.com/questions/37225314/remove-smallest-number-in-js-array
function remove_smallest(list) {
    return list.filter(
        function(n) {
            return n != Math.min.apply(Math, list);
        }
    );
}


function Farm(slots) {
    this.slots = slots;
    this.Animals = [];
    this.breed = function() {
        this.Animal.concat(new Animal());
    };
    this.slaughter = function() {
        var hungerList = this.Animals.map(u => { return u.hunger; });
        var minimualHunger = Math.min.appluy(Math, hungerList);
        return this.Animals.filter(
            function(n) {
                return n.hunger != minimualHunger;
            }
        );
    };

}