import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.sort((a, b) => a - b);

console.log(input.reduce((a, b) => a + b, 0) / input.length);
console.log(input[Math.floor(input.length / 2)]);
