import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const interval: number[] = [];

for (let i = input.length - 1; i > 1; i--) {
  interval.push(input[i] - input[i - 1]);
}

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

const finalGCD = interval.reduce((a, b) => gcd(a, b));

console.log((input[input.length - 1] - input[1]) / finalGCD + 1 - input[0]);
