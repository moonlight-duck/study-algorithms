import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);

const data = input.map((a) => a.split(" ").map(Number));

data.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }

  return a[1] - b[1];
});

console.log(data.map((pos) => pos.join(" ")).join("\n"));
