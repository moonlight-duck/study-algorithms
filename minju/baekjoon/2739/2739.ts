import { readFileSync } from "fs";
const n = Number(readFileSync("/dev/stdin").toString().trim());

for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
