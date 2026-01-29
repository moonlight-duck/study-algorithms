import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const check = Array.from({ length: 31 }, (_, i) => i);

for (let i = 0; i < input.length; i++) {
  if (input[i] > 30) throw new Error("범위 밖입니다.");
  check[input[i]] = -1;
}

console.log(check.filter((x) => x > 0).join("\n"));
