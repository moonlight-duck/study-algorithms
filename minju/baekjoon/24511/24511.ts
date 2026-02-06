import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);
const limit = Number(input[3]);
const c = input[4].split(" ").map(Number);

const queue = [];

for (let i = n - 1; i >= 0; i--) {
  if (a[i] === 0) {
    // 큐라면
    queue.push(b[i]);
  }
}

for (let i = 0; i < c.length; i++) {
  queue.push(c[i]);
}

console.log(queue.slice(0, limit).join(" "));
