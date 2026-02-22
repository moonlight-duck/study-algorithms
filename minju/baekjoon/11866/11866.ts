import { readFileSync } from "fs";

const [n, k] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = Array.from({ length: n }).fill(true);

const result = [];
let i = 0;
while (result.length < arr.length) {
  let cnt = 0;
  while (true) {
    if (arr[i]) {
      cnt++;
    }
    if (cnt >= k) break;
    i = (i + 1) % arr.length;
  }
  result.push(i + 1);
  arr[i] = false;
}

console.log(`<${result.join(", ")}>`);
