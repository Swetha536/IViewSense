const game = {
  team1: "Bayer",
  team2: "Dortum",
  players: [
    ["never", "pavad", "martine", "Albert", "coma"],
    ["burki", "Schulz", "Akan", "hakimi", "Witsel"],
  ],
  score: "4.0",
  scored: ["Lewandow", "Gnary", "Lewandow", "Hummels"],
  date: "nov 7th 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
for (const [i, player] of game.scored.entries())
  console.log(`goal${i + 1}:${player}`);
const odds = object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
for (const [team, odd] of object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`odd of ${teamStr}${odd}`);
}
