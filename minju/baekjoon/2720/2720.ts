import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 1; i < input.length; i++) {
  let cash = Number(input[i]);

  const quarter = Math.floor(cash / 25);
  cash = cash % 25;
  const dime = Math.floor(cash / 10);
  cash = cash % 10;
  const nickel = Math.floor(cash / 5);
  cash = cash % 5;
  const penny = Math.floor(cash / 1);

  console.log(quarter, dime, nickel, penny);
}
