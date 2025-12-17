import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  const [numStr, str] = input[i].split(" ");
  const num = Number(numStr);
  let result = "";
  for (let j = 0; j < str.length; j++) {
    result += str[j].repeat(num);
  }
  console.log(result);
}
