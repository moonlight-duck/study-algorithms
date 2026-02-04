import { readFileSync } from "fs";

const input = Number(readFileSync("/dev/stdin").toString().trim());

console.log(input * (input - 1));
