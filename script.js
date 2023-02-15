"use strict";

// Data needed for a later exercise

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },
  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    add = "Banglore",
    time = "20:50",
  }) {
    console.log(
      `Order Recieved! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${add} at ${time}`,
      "OBJ"
    );
  },
};

//*================Object Destructuring=======================

restaurant.orderDelivery({
  time: "22.30",
  add: "Blr, 68",
  mainIndex: 2,
  startIndex: 2,
});
restaurant.orderDelivery({
  mainIndex: 2,
  startIndex: 2,
});

const { name, openingHours, categories } = restaurant;

//! Changing the key names of the obj elements
const { name: restName, openingHours: hours, categories: tags } = restaurant;

//! Setting Default values in obj

const { menu = [], starterMenu: starters = [] } = restaurant;

//! Mutating variables using destructuring

let m = 111;
let n = 999;

const obj = { m: 23, n: 93, l: 42 };
({ m, n } = obj);
console.log(m, n);

//* Nested objects
const { frid } = restaurant.openingHours;
const {
  fri: { open: op, close: cl },
} = openingHours;
// const {
//   fri: { open, close },
// } = openingHours;
console.log(op, cl, "FRI");
// console.log(fri, frid, "FRI");

console.log(name, openingHours, categories, "Namae");
console.log(restName, hours, tags, "Na222222");

console.log(menu, starters, "SSSSS");

//*================Array Destructuring=======================

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [fst, snd] = restaurant.categories;
console.log(fst, snd);

//Switch the postions in normal scenario
/* 
let temp = fst;
fst = snd;
snd = temp;
console.log(fst, snd, "Normal");
 */

//! Switching the postions using destructuring
[fst, snd] = [snd, fst];
console.log(fst, snd, "Destructuring");

//! function return an array & then immediately destruct the result in different variables

// console.log(restaurant.order(2, 0));
const [starterCourse, mainCourse] = restaurant.order(2, 0);

console.log(starterCourse, mainCourse, "HH");

//* Nested array destructuring

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//! Setting Default values

// const [p, q, r] = [8, 9];
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r, "PQR");
