import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim();
const B = BigInt(input);

// 루프 없이 바로 계산
const result = B * 2n;

console.log(result.toString());
