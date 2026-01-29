import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

let rX = 0;
let rY = 0;

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].trim().split(" ").map(Number);

  rX ^= x;
  rY ^= y;
}

console.log(`${rX} ${rY}`);
