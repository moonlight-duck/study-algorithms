import { readFileSync } from "fs";
const [a, b] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arrB: number[] = b.toString().split("").map(Number);

for (let i = arrB.length - 1; i >= 0; i--) {
  console.log(a * arrB[i]);
}

console.log(a * b);
