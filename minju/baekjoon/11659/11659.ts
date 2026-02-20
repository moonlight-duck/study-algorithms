import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const data = input[1].split(" ").map(Number);

const result = [];
for (let i = 2; i < input.length; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  let sum = 0;
  for (let j = start - 1; j <= end - 1; j++) {
    sum += data[j];
  }
  result.push(sum);
}

console.log(result.join("\n"));
