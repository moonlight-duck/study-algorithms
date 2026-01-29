import { readFileSync } from "fs";
const n = Number(readFileSync("/dev/stdin").toString().trim());

console.log(n + 3 * n);
