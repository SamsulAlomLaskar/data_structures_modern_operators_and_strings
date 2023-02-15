//? Spread operator

const arr = [1, 3, 4];
const newAry = [6, 8, 7, ...arr];
console.log(newAry);
console.log(...newAry);

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
  orderPasta: function (ingr1, ingr2, ingr3) {
    console.log(
      `Here is your delicious pasta with ${ingr1} ${ingr2} and ${ingr3}`
    );
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Spread operator takes all the elements from the array & it also doesn't create new variables & as a consequence we can only use it places where we would otherwise values separated by commas

//? Shallow copy & merge two array together

const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu, "All the menu");

//! Spread op works on all iterables

//? Iterables are arrays, strings, maps sets but not the objects

const str = "Samsul";
const letter = [...str, " ", "J"];

console.log(letter, "Letter");
console.log(...str, "STR");
//* console.log(`${...str}`, "STR"); NOt possibles

//? multiple values separated by commas are only expected only when we pass it into a function or when we built a new array

const ingridents = ["Mushroom", "Cheese", "Aspargus"];

restaurant.orderPasta(...ingridents);

//? Objects

const newResturant = { founuded: "2023", ...restaurant, founder: "Samsul" };

console.log(newResturant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Sams's Resturant";
console.log(restaurantCopy.name);
console.log(restaurant.name);

//* The Spread, because on the right side of the Assignment operator (=) however we can use it in LHS of the = to get  destructuring

//! Rest Operator
//* Rest because on the LEFT side of (=)
//? Rest operator (patterb) collects the elemenst that are unused in the destructuring assignments

//* Destructuring

const ary = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 6, 8];
console.log(a, b, "AB");
console.log(others, "OOO");

const [pizza, , risotto, ...otherItems] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherItems);

//. Obects

const { sat, ...weekdays } = { ...restaurant.openingHours };
console.log(weekdays);

//* Functions

// REST parameters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return console.log(sum);
};

add(2, 5);
add(2, 5, 8, 4, 5, 9);
add(6, 5, 7, 9, 5, 7, 0, 5, 3, 4, 32);

const x = [3, 6, 9, 3, 9, 3, 45];
add(...x);

restaurant.orderPizza("Mushrooms", "Onions", "Olives", "Spinach", "Cheese");
restaurant.orderPizza("Garlic");
