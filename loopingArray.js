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

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu) console.log(item);

for (const items of menu.entries()) {
  console.log(items);
}

console.log(...menu.entries());

for (const [item, ele] of menu.entries()) {
  console.log(`${item + 1} : ${ele}`);
}
