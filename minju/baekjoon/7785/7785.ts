import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const check: Set<string> = new Set();

for (let i = 1; i < input.length; i++) {
  const [name, state] = input[i].trim().split(" ");
  if (state === "enter") {
    check.add(name);
  } else {
    check.delete(name);
  }
}

const result = Array.from(check);

result.sort().reverse();

console.log(result.join("\n"));
