import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input[1].split(" ").map(Number);
const dictionary = new Map();

for (let i = 0; i < n.length; i++) {
  if (dictionary.has(n[i])) {
    dictionary.set(n[i], dictionary.get(n[i]) + 1);
  } else {
    dictionary.set(n[i], 1);
  }
}

const m = input[3].split(" ").map(Number);

console.log(m.map((item) => dictionary.get(item) ?? "0").join(" "));
