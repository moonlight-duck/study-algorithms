import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const [, k] = input[0].split(" ").map(Number);

let temp = k;
let result = 0;
for (let i = input.length - 1; i >= 1; i--) {
  const price = Number(input[i]);
  if (temp - price >= 0 && temp % price >= 0) {
    const cnt = Math.floor(temp / price);
    result += cnt;
    temp -= price * cnt;
  }
}
console.log(result);
