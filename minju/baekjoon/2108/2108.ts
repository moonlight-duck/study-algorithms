import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const n = input[0];
const data = input.slice(1);
data.sort((a, b) => a - b);

const avg = Math.round(data.reduce((a, b) => a + b, 0) / n);

console.log(avg === 0 ? 0 : avg);
console.log(data[Math.floor(n / 2)]);
const mode = data.reduce(
  (acc, curr) => {
    acc.counts[curr] = (acc.counts[curr] || 0) + 1;
    return acc;
  },
  { counts: {} as Record<number, number> },
).counts;

let maxCnt = 0;
let result = [];
for (const [key, value] of Object.entries(mode)) {
  if (value > maxCnt) {
    result = [];
    result.push(Number(key));
    maxCnt = Number(value);
  } else if (value === maxCnt) {
    result.push(Number(key));
  }
}

result.sort((a, b) => a - b);

console.log(result.length > 1 ? result[1] : result[0]);
console.log(data[data.length - 1] - data[0]);
