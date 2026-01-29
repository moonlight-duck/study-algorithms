import { readFileSync } from "fs";

let [a, b, c] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (a === b && b === c) {
  console.log(a + b + c);
} else {
  const max = Math.max(a, b, c);
  if (max === a) {
    if (a >= b + c) a = b + c - 1;
  } else if (max === b) {
    if (b >= a + c) b = a + c - 1;
  } else {
    if (c >= a + b) c = a + b - 1;
  }
  console.log(a + b + c);
}
