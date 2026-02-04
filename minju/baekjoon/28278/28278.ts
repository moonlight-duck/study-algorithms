import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const stack = [];
const result = [];

for (let i = 1; i < input.length; i++) {
  const [command, num] = input[i].split(" ").map(Number);

  switch (command) {
    case 1:
      stack.push(num);
      break;
    case 2:
      result.push(stack.pop() || -1);
      break;
    case 3:
      result.push(stack.length);
      break;
    case 4:
      result.push(stack.length === 0 ? 1 : 0);
      break;
    case 5:
      result.push(stack[stack.length - 1] || -1);
      break;
  }
}

console.log(result.join("\n"));
