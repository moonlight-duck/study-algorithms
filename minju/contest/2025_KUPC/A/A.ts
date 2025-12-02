import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const [dx, dy] = input[0].split(" ").map(Number);
const N = Number(input[1]);
const result = Array.from({ length: N }, () => 0);

for (let i = 2; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  if (dx != x && dy != y) {
    result[i - 2] = 1;
  }
}

console.log(result.join("\n"));
