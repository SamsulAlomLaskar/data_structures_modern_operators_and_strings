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
const [players1, players2] = game.players;
console.log(players1, "PLAyers1");
console.log(players2, "Players2");

//? Task 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, "GK", fieldPlayers, "REST Players");

//? Task 3
const allPlayers = [...players1, ...players2];
// const allPlayers = game.players;
console.log(allPlayers, "All Players");

//? Task 4
const finalPlayers = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(finalPlayers);

//? Task 5
// const { team1, x: draw, team2 } = { ...game.odds };
const {
  odds: { team1, team2, x: draw },
} = game;

console.log(team1, "T1");
console.log(team2, "T2");
console.log(draw, "Draw");

//? Task 6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
  //   let scored = game.scored;
  //   let goal = 0;
  //   for (let i = 0; i < players.length; i++) {
  //     for (let j = 0; j < scored.length; j++) {
  //       if (players[i] === scored[j]) goal++;
  //     }
  //     goal = 0;
  //   }
};
printGoals(...players1);
printGoals(...game.scored);
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

//? Task 7
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
