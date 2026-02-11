import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const data = input[1].split(" ").map(Number);
const operators = input[2].split(" ").map(Number);

let min = Infinity;
let max = -Infinity;

const solve = (index: number, total: number) => {
  if (index === n) {
    max = Math.max(max, total);
    min = Math.min(min, total);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (operators[i] > 0) {
      operators[i]--;

      let nextTotal = total;
      if (i === 0) nextTotal += data[index];
      else if (i === 1) nextTotal -= data[index];
      else if (i === 2) nextTotal *= data[index];
      else if (i === 3) {
        if (nextTotal < 0) {
          nextTotal = -Math.floor(-nextTotal / data[index]);
        } else {
          nextTotal = Math.floor(nextTotal / data[index]);
        }
      }

      solve(index + 1, nextTotal);

      operators[i]++;
    }
  }
};

solve(1, data[0]);

console.log(`${max === 0 ? 0 : max} ${min === 0 ? 0 : min}`);
