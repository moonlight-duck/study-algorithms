/**
 * 카테고리 : DP
 * 문제 : https://www.acmicpc.net/problem/2579
 */
import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const n: number = Number(input[0]); // 계단의 개수

const stepList = [0].concat(input.slice(1).map(Number)); // 계단점수

// dp[i][1]: i번째 계단을 연속 1칸으로 밟아 도달한 최대 점수
// dp[i][2]: i번째 계단을 연속 2칸으로 밟아 도달한 최대 점수 (i-1도 밟음)
const dp: number[][] = Array.from({ length: n + 1 }, () => [0, 0, 0]);

if (n === 1) {
  console.log(stepList[1]);
} else {
  dp[1][1] = stepList[1];
  dp[1][2] = 0; // 연속 2칸 개념 없음
  dp[2][1] = stepList[2]; // 0->2
  dp[2][2] = stepList[1] + stepList[2]; // 0->1->2

  for (let i = 3; i <= n; i++) {
    // 한 계단 건너(i-2)에서 오는 경우: 연속 1칸
    dp[i][1] = Math.max(dp[i - 2][1], dp[i - 2][2]) + stepList[i];
    // 바로 이전(i-1)에서 오는 경우: 연속 2칸이 되므로 이전은 반드시 연속 1칸이어야 함
    dp[i][2] = dp[i - 1][1] + stepList[i];
  }

  console.log(Math.max(dp[n][1], dp[n][2]));
}
