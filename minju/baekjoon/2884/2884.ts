import { readFileSync } from "fs";

let [h, m] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (m >= 45) {
  m = m - 45;
} else {
  if (h === 0) {
    h = 23;
  } else {
    h = h - 1;
  }
  m = 60 + (m - 45);
}

console.log(h, m);
