import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const data = input.slice(1);

const result = Array.from({ length: n + 1 }, () => 0);

for (let index = 0; index < m; index++) {
  const [i, j, k] = data[index].split(" ").map(Number);
  for (let range = i; range <= j; range++) {
    result[range] = k;
  }
}

console.log(result.slice(1).join(" "));
