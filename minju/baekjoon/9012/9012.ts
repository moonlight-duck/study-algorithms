import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const result = [];

for (let i = 1; i < input.length; i++) {
  const data = input[i].split("");
  const stack = [];
  let res = true;

  for (let j = 0; j < data.length; j++) {
    if (data[j] === "(") {
      stack.push("(");
    } else {
      if (stack.pop() === undefined) {
        res = false;
        break;
      }
    }
  }

  result.push(stack.length === 0 && res ? "YES" : "NO");
}

console.log(result.join("\n"));
