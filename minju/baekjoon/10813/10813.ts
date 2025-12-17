import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const data = input.slice(1);

const baskets = Array.from({ length: n + 1 }, (_, i) => i);

for (let i = 0; i < m; i++) {
  const [a, b] = data[i].split(" ").map(Number);
  [baskets[a], baskets[b]] = [baskets[b], baskets[a]];
}

console.log(baskets.slice(1).join(" "));
