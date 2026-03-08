import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const data: number[][] = input.slice(1).map((x) => x.split(" ").map(Number));

data.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }

  return a[1] - b[1];
});

let currentEnd = data[0][1];
let cnt = 1;
for (let i = 1; i < n; i++) {
  const start = data[i][0];
  const end = data[i][1];
  if (currentEnd <= start) {
    currentEnd = end;
    cnt++;
  }
}

console.log(cnt);
