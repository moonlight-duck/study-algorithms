/**
 * 실제 정답과 출력값의 절대오차 또는 상대오차가 10-2 이하이면 정답이다.
 **/
import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const data = input[1].split(" ").map(Number);

const score: number[] = Array.from({ length: n }, () => 0);

const max = Math.max(...data);

for (let i = 0; i < n; i++) {
  score[i] = (data[i] / max) * 100;
}

console.log(score.reduce((a, b) => a + b, 0) / n);
