import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const checkX = new Map();
const checkY = new Map();

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  if (checkX.has(x)) {
    checkX.set(x, checkX.get(x) + 1);
  } else {
    checkX.set(x, 1);
  }

  if (checkY.has(y)) {
    checkY.set(y, checkY.get(y) + 1);
  } else {
    checkY.set(y, 1);
  }
}

const rX = [...checkX].find(([, val]) => val === 1)?.[0];
const rY = [...checkY].find(([, val]) => val === 1)?.[0];

console.log(`${rX} ${rY}`);
