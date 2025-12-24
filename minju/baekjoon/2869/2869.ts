import { readFileSync } from "fs";
const [a, b, v] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.ceil((v - b) / (a - b)));
