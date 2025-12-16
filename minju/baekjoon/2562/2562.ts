import { readFileSync } from "fs";

const data = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const max: number = Math.max.apply(null, data);
console.log(max);
console.log(data.findIndex((x) => x === max) + 1);
