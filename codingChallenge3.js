const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Lewandowski",
      "Goretzka",
      "Coman",
      "Muller",
      "Gharby",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gharby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2030",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, "⚽ Goal"],
  [36, "🔁 Substitution"],
  [47, "⚽ Goal"],
  [61, "🔁 Substitution"],
  [64, "♦ Yellow Card"],
  [69, "🔴 Red Card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ Goal"],
  [80, "⚽ Goal"],
  [92, "♦ Yellow Card"],
]);

//? Task 1

const events = [...new Set(gameEvents.values())];
console.log(events);

//? Task 2
// console.log(gameEvents.get(64));
console.log(gameEvents.delete(64));
console.log(gameEvents.size);
console.log(gameEvents);

//? Task 3
// for (const mins of gameEvents) {
// console.log(`An event happened, on average, every ${gameEvents.size} minutes`);
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
// }
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//? Task 4
for (const [min, event] of gameEvents) {
  if (min <= 45) {
    console.log(`[First Half] ${min} ${event}`);
  }
}
