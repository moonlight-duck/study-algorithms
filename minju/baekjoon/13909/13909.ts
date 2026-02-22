import { readFileSync } from "fs";
const input = Number(readFileSync("/dev/stdin").toString().trim());

let cnt = 0;
for (let i = 1; i <= Math.sqrt(input); i++) {
  cnt++;
}

console.log(cnt);
