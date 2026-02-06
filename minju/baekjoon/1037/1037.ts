import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const data = input[1].split(" ").map(Number);

const min = Math.min.apply(null, data);
const max = Math.max.apply(null, data);

console.log(min * max);
