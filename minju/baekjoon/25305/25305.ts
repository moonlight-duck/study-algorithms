import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const k = Number(input[0].split(" ")[1]);

const data = input[1].split(" ").map(Number);
data.sort((a, b) => b - a);

console.log(data[k - 1]);
