import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const result = [];

for (let j = 1; j < input.length; j++) {
  const [n, m] = input[j].split(" ").map(Number);

  let top = BigInt(1);
  let bottom = BigInt(1);
  for (let i = 0; i < n; i++) {
    top *= BigInt(m - i);
    bottom *= BigInt(i + 1);
  }
  result.push(top / bottom);
}

console.log(result.join("\n"));
