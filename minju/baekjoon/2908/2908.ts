import { readFileSync } from "fs";
const [a, b] = readFileSync("/dev/stdin").toString().trim().split(" ");

const rA: number = Number(a.split("").reverse().join(""));
const rB: number = Number(b.split("").reverse().join(""));

if (rA > rB) {
  console.log(rA);
} else {
  console.log(rB);
}
