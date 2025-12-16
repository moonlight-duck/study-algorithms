import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const data = input.slice(1);

for (let item of data) {
  const [a, b] = item.split(" ").map(Number);
  console.log(a + b);
}
