import { readFileSync } from "fs";
const [a, b, c] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b && b !== c) {
  // c만 다른경우
  console.log(1000 + a * 100);
} else if (a == c && c !== b) {
  // b만 다른경우
  console.log(1000 + a * 100);
} else if (b === c && b !== c) {
  // a만 다른경우
  console.log(1000 + b * 100);
} else {
  console.log(Math.max(a, b, c) * 100);
}
