import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);

let data = new Set();
let cnt = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "ENTER") {
    data = new Set();
  } else {
    if (!data.has(input[i])) {
      data.add(input[i]);
      cnt++;
    }
  }
}

console.log(cnt);
