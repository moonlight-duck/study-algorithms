import { readFileSync } from "fs";

const [m, n] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let top = 1;
let bottom = 1;
for (let i = 0; i < n; i++) {
  top *= m - i;
  bottom *= i + 1;
}

console.log(top / bottom);
