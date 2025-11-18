/**
 * 카테고리 : 슬라이딩 윈도우
 * 문제 : https://www.acmicpc.net/problem/2042
 */
import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, K] = input[0].split(" ").map(Number);
const numArr = input.slice(1, N + 1).map(Number);
const commandArr = input
  .slice(N + 1, N + M + K + 1)
  .map((item) => item.split(" ").map(Number));

for (let i = 0; i < commandArr.length; i++) {
  const [a, b, c] = commandArr[i];
  if (a === 1) {
    numArr[b - 1] = c;
  } else if (a === 2) {
    const rNumArr = numArr.slice(b - 1, c);
    const sum: number = rNumArr.reduce((a, b) => a + b, 0);

    console.log(sum);
  }
}
