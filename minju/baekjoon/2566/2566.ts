import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const data = Array.from({ length: input.length }, (_, index) =>
  input[index].split(" ").map(Number)
);

let max = data[0][0];
let r = 1;
let c = 1;
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    if (max < data[i][j]) {
      max = data[i][j];
      r = i + 1;
      c = j + 1;
    }
  }
}

console.log(max);
console.log(r, c);
