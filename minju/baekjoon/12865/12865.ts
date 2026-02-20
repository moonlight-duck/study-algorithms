import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);
const data: number[][] = [];

for (let i = 1; i < input.length; i++) {
  const [w, v] = input[i].split(" ").map(Number);
  data.push([w, v]);
}

let i = 0;
let max = 0;
while (i < n) {
  let w = 0;
  let v = 0;
  for (let j = i; j < n; j++) {
    if (data[j][0] + w <= k) {
      w += data[j][0];
      v += data[j][1];
    }
  }

  if (max < v) {
    max = v;
  }
  i++;
}

console.log(max);
