import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const data = input[1].split(" ").map(Number);

const mod = Array.from({ length: m }, () => 0);

let sum = 0;

for (let i = 0; i < n; i++) {
  mod[(data[i] + sum) % m]++;
  sum += data[i];
}
let result = mod[0];
for (let i = 0; i < mod.length; i++) {
  const count = mod[i];
  if (count > 1) {
    result += (count * (count - 1)) / 2;
  }
}

console.log(result);
