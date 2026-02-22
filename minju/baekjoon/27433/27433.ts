import { readFileSync } from "fs";
const num = Number(readFileSync("/dev/stdin").toString().trim());

let result = 1;
for (let i = num; i >= 1; i--) {
  result *= i;
}

console.log(result);
