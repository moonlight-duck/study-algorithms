import { readFileSync } from "fs";

const n = Number(readFileSync("/dev/stdin").toString().trim());
let result = 0;

for (let i = 1; i <= n; i++) {
  result += i;
}

console.log(result);
