import { readFileSync } from "fs";
const n = Number(readFileSync("/dev/stdin").toString().trim());

console.log("long ".repeat(Math.ceil(n / 4)) + "int");
