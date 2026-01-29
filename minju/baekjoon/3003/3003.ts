import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const expect = [1, 1, 2, 2, 2, 8]; // 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개
const result = Array.from({ length: 6 }, () => 0);

for (let i = 0; i < input.length; i++) {
  if (input[i] !== expect[i]) {
    result[i] = expect[i] - input[i];
  }
}

console.log(result.join(" "));
