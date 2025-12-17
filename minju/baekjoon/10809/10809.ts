import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim();

const result = new Map();

// 초기화
for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
  result.set(String.fromCharCode(i), -1);
}

for (let i = 0; i < input.length; i++) {
  if (result.get(input[i]) === -1) result.set(input[i], i);
}

console.log(Array.from(result.values()).join(" "));
