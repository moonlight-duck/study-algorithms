import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const [n] = input[0].split(" ").map(Number);
const nData = new Set(input.slice(1, n + 1));
const result: string[] = [];

for (let i = n + 1; i < input.length; i++) {
  if (nData.has(input[i])) {
    result.push(input[i]);
  }
}

console.log(result.length);
console.log(result.sort().join("\n"));
