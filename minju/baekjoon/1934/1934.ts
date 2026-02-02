import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

const result = [];

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  result.push((a / gcd(a, b)) * b);
}

console.log(result.join("\n"));
