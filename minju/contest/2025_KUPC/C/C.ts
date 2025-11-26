import { readFileSync } from "fs";
const input: number[] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let max = input.reduce((a, b) => Math.max(a, b));

for (let i = 0; i < input.length; i++) {
  if (max === input[i] && i < input.length - 1) {
    max += 1;
    break;
  }
}

console.log(max);
