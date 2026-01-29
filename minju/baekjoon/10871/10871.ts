import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const [, x] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number);

console.log(a.filter((item) => item < x).join(" "));
