import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("-");

const num = input.map((x) =>
  x
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b, 0),
);

let result = num[0];

for (let i = 1; i < num.length; i++) {
  result -= num[i];
}
console.log(result);
