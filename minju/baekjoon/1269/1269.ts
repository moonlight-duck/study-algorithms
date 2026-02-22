import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const setA = new Set(input[1].split(" ").map(Number));
const setB = new Set(input[2].split(" ").map(Number));

let cnt = 0;
setA.forEach((value) => {
  if (!setB.has(value)) cnt++;
});

setB.forEach((value) => {
  if (!setA.has(value)) cnt++;
});

console.log(cnt);
