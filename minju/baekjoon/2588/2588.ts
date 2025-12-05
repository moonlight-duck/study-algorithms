import { readFileSync } from "fs";
const [a, b] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let exp = 1;
const result: number[] = [];
let total = 0;

while (b / exp > 1) {
  const value = a * ((b % (exp * 10)) - (b % exp));
  result.push(value);
  console.log(value / exp);
  total += value;
  exp *= 10;
}

console.log(total);
