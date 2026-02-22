import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim();

const result = new Set();

for (let i = 1; i <= input.length; i++) {
  let start = 0;
  while (start + i <= input.length) {
    result.add(input.slice(start, start + i));

    start++;
  }
}

console.log(result.size);
