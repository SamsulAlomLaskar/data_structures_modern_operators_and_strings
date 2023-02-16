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

//? Task 1

for (let [count, player] of game.scored.entries()) {
  console.log(`Goal: ${count + 1}: ${player}`);
}

//? Task 2

// let odds = Object.entries(game.odds);
let odds = Object.values(game.odds);
// let sum = 0;
let avg = 0;
for (const odd of odds) {
  //   console.log(odd, "OODDD");
  avg += odd;
  //   sum += val;
  //   avg = sum / odds.length;
}
avg /= odds.length;
// console.log(sum, "SUM", avg, "AVG");
console.log("SUM", avg, "AVG");

//? Task 3

for (const [id, ele] of Object.entries(game.odds)) {
  //   console.log(game[id]);
  const teamStr = id === "x" ? "draw" : `victory ${game[id]}`;
  console.log(`Odd of ${teamStr} : ${ele}`);
}

//? Bonus
let scorers = {};
for (let player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
