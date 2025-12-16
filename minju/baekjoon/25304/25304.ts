import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const x = Number(input[0]); // 총 금액
const data = input.slice(2);

let total = 0;
for (let item of data) {
  const [a, b] = item.split(" ").map(Number);
  total += a * b;
}

if (total === x) {
  console.log("Yes");
} else {
  console.log("No");
}
