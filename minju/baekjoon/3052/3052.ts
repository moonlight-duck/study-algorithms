import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const module = Array.from({ length: 42 }, () => 0);

for (let i = 0; i < input.length; i++) {
  module[input[i] % 42] = 1;
}

console.log(module.filter((x) => x > 0).length);
