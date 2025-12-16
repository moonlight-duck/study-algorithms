import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

const list = input[1].split(" ").map(Number);
const v = Number(input[2]);

const dic: Map<number, number> = new Map<number, number>();

for (let i = 0; i < n; i++) {
  const cnt = dic.get(list[i]) ?? 0;
  dic.set(list[i], cnt + 1);
}

console.log(dic.get(v) ?? 0);
