import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const xList: number[] = [];
const yList: number[] = [];

for (let i = 1; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  xList.push(x);
  yList.push(y);
}

const r = Math.max(...xList) - Math.min(...xList);
const c = Math.max(...yList) - Math.min(...yList);

console.log(r * c);
