const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
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
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },

  //* ES6 Enhanced Object Literals

  openingHours,
  orderDelivery({
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
  orderPasta(ingr1, ingr2, ingr3) {
    console.log(
      `Here is your delicious pasta with ${ingr1} ${ingr2} and ${ingr3}`
    );
  },
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

//? Property Names
const properties = Object.keys(openingHours);
console.log(properties, "Properties");

let openMsg = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openMsg += `${day}, `;
  console.log(openMsg);
}

//? Property Values
const val = Object.values(openingHours);
console.log(val, "Values");

// Entire Object

const ent = Object.entries(openingHours);

console.log(ent, "ENT");

for (const [item, { open, close }] of ent) {
  console.log(`On ${item} we open at ${open} and close at ${close}`);
}
