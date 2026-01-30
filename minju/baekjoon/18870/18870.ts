import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const data: number[] = input[1].split(" ").map(Number);
const compression: number[] = Array.from(new Set(data)); // 중복을 제거한 데이터 세팅
compression.sort((a, b) => a - b); // 오름차순 정렬

const rankMap = new Map();
compression.forEach((x, i) => rankMap.set(x, i));

const result = data.map((x) => rankMap.get(x)).join(" ");

console.log(result);
