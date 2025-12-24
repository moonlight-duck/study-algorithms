import { readFileSync } from "fs";
const n = Number(readFileSync("/dev/stdin").toString().trim());

const squreCnt = 4 ** n; // 직사각형 개수
const rowCnt = Math.sqrt(squreCnt);
console.log((rowCnt + 1) * (rowCnt + 1));
