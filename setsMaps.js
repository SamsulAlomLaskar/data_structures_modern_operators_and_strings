//? Set is a collection of unique values

//* ====================SET==============================
const setOrder = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(setOrder.size);
console.log(setOrder.has("Pizza"));
console.log(setOrder.has("Bread"));
setOrder.add("Bread");
console.log(setOrder.delete("Pizza"));
// console.log(setOrder.clear());
console.log(setOrder);
console.log(typeof setOrder);

//* Sets elements are unique & the order of the elements are irrelevent

console.log(new Set("Samsul"));

for (const iterator of setOrder) console.log(iterator);

const staff = ["Waiter", "Chef", "Manager", "Waiter", "Chef", "Manager"];
const uniqueStaff = [...new Set(staff)];

console.log(uniqueStaff);
console.log(new Set("Samsul").size);

//* ====================MAP==============================
//? Map is a data structure that we can use to map values to keys
// Data is stored in key value pairs in map (any type(data type) of key)

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

// set method of Map returns the updated map allows us to change the set method like below
rest
  .set("Categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "we are closed");
console.log(rest.get("open"));
console.log(rest.get("name"));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("Categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
const arr = [1, 2];
rest.set(arr, "Test");

// rest.set(document.querySelector("h1"));
console.log(rest);

rest.get(arr);

const openingHours = {
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
};
const question = new Map([
  ["question", "What is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try Again"],
]);
console.log(question);

//? Ease way to convert from objects to map

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// const answer = Number(prompt('Your answer))
const answer = 3;

console.log(question.get(question.get("correct") === answer));
for (const [key, value] of question) {
  // console.log();
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

//? Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log(question.keys());
console.log(question.values());

//? When to choose which Data Structure
//* Four built in DS in JS
// Other Built in > WeakMap & WeakSet
// Non built in > Stacks, Queues, Linked, List, Trees, HashTable
//! Simple List? => Array or Sets
//! Key Value Pairs? => Objects or Maps
