import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const result = [];

for (let i = 0; i < input.length - 1; i++) {
  const data = input[i].split("");
  const stack = [];
  let res = true;
  for (let j = 0; j < data.length; j++) {
    if (data[j] === "(" || data[j] === "[") {
      stack.push(data[j]);
    } else if (data[j] === ")") {
      if (stack.pop() !== "(") {
        res = false;
        break;
      }
    } else if (data[j] === "]") {
      if (stack.pop() !== "[") {
        res = false;
        break;
      }
    }
  }

  result.push(stack.length === 0 && res ? "yes" : "no");
}

console.log(result.join("\n"));
