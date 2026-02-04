import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const data = input[1].split(" ").map(Number);
const stack: number[] = [];

let i = 0;
let target = 1;
while (true) {
  if (data[i] === target) {
    i++;
    target++;
    continue;
  }
  if (stack[stack.length - 1] === target) {
    stack.pop();
    target++;
    continue;
  }

  if (i >= data.length) break;
  stack.push(data[i]);
  i++;
}

console.log(stack.length === 0 ? "Nice" : "Sad");
