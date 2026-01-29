import { readFileSync } from "fs";
const [x, y, w, h] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let distance: number = Number.MAX_SAFE_INTEGER;

// 상하좌우,
let nextDistance = h - y;
if (nextDistance < y) {
  distance = nextDistance;
} else {
  distance = y;
}

nextDistance = w - x;
if (nextDistance < distance) {
  distance = nextDistance;
}

if (x < distance) {
  distance = x;
}

console.log(distance);
