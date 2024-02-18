const gameEvents = new Map([
  [17, "goal"],
  [36, "substitution"],
  [47, "goal"],
  [61, "substitution"],
  [64, "yellow card"],
  [69, "red card"],
  [70, "sustutiopn"],
  [72, "sustutiopn"],
  [76, "goal"],
  [80, "goal"],
  [92, "yellow card"],
]);
const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(`An event happened,on average,every
${gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened,on average,every
${time / gameEvents.size} minutes`);
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half}HALF]${min}:${event}`);
}
