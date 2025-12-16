import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const data = input[1].split(" ").map(Number);

console.log(Math.min.apply(null, data), Math.max.apply(null, data));
