import { readFileSync } from "fs";
const [a, b] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

console.log((a / gcd(a, b)) * b);
