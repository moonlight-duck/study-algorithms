import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const n = new Set(input[1].split(" ").map(Number));
const m = input[3].split(" ").map(Number);

const result = m.map((item) => (n.has(item) ? "1" : "0"));

console.log(result.join(" "));
