import { readFileSync } from "fs";
const n = Number(readFileSync("/dev/stdin").toString().trim());

for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}
