import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const [n] = input[0].split(" ").map(Number);
const nameToId = new Map(); // 이름으로 순서 찾기
const idToName: string[] = [""]; // 번호로 이름 찾기

for (let i = 1; i <= n; i++) {
  nameToId.set(input[i], i);
  idToName.push(input[i]);
}

const result: string[] = [];

for (let i = n + 1; i < input.length; i++) {
  if (!isNaN(Number(input[i]))) {
    result.push(idToName[Number(input[i])]);
  } else {
    result.push(nameToId.get(input[i]));
  }
}

console.log(result.join("\n"));
