import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const data = input.slice(1);

for (let [index, item] of data.entries()) {
  const [a, b] = item.split(" ").map(Number);
  console.log(`Case #${index + 1}: ${a + b}`);
}
