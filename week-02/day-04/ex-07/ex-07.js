'use strict';

var shop_items = ["Cupcake", 2, "Brownie", false]

// Accidentally we added "2" and "false" to the array. 
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
shop_items.forEach(
    (u, i, a) => {
        if (u == "2") { a[i] = "Croissant" };
        if (u == false) { a[i] = "Ice Cream" };
    }
)
console.log(shop_items);