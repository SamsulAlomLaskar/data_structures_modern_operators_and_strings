//? Short Circuting -- (OR) || If the first operator is a truthy value it will immediately return the first value, it will not evaluate the second value

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

console.log("=========OR================");

restaurant.numGuests = 20;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 15;
console.log(guests2);

//! Use ANY data type, return ANY data type,
console.log(3 || "Sams", "NUM");
console.log("" || "Sams", "STR");
console.log(true || 0, "TRU");
console.log(undefined || null, "NULL");

console.log(undefined || 0 || "" || "Hello" || 23);

console.log("=========AND================");

//? AND operator short-circuits when the first value is falsy & then immediately returns that falsy value without even evaluating the second operand

console.log(0 && "Sams");
console.log(7 && "Sams");
console.log("" && "Sams");

console.log("Helloo" && 44 && null && "Samsul", "General");

if (restaurant.orderPizza) {
  restaurant.orderPizza("Cheese", "Olive");
}

restaurant.orderPasta && restaurant.orderPizza("Mushroom", "Paneer");

//! Nullish Coalescing operator

//? Nullish values are null & undefined (!0 & !"")

// restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

// const guests2 = restaurant.numGuests || 15;
// console.log(guests2);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//! Logical Assignment Operator
const rest1 = {
  name: "Capri",
  numGuest: 15,
};
const rest2 = {
  name: "La Pizza",
  prop: "Samsul",
};

// rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest = rest1.numGuest || 10;

//? Supports in browser
//  rest1.numGuest ||= 10
//  rest2.numGuest ||= 10

//* Logical Nullish coalescing operator

//? Supports in browser
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

rest1.prop = rest1.prop && "<Anonymous>";
rest2.prop = rest2.prop && "<Anonymous>";

//? Supports in browser
// rest1.prop &&= "<Anonymous>";
// rest2.prop &&= "<Anonymous>";

console.log(rest1, "11");
console.log(rest2, "22");
