import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const result = [];

for (let j = 1; j < input.length; j++) {
  const [m, n] = input[j].split(" ").map(Number);

  let top = 1;
  let bottom = 1;
  for (let i = 0; i < n; i++) {
    top *= m - i;
    bottom *= i + 1;
  }
  result.push(top / bottom);
}

console.log(result.join("\n"));
