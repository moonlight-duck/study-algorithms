import { readFileSync } from "fs";
const input = Number(readFileSync("/dev/stdin").toString().trim());

const window = new Array(input + 1).fill(true);
window[0] = false;

for (let i = 2; i <= input; i++) {
  for (let j = i; j <= input; j += i) {
    window[j] = !window[j];
  }
}

console.log(window.filter((item) => item).length);
