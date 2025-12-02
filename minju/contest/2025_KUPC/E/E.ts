import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const S = input[2].split(" ").map(Number);

const day: number[] = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= S.length; i++) {
  day[S[i - 1]] = 1; // 꿈을 기억하는 날 표시
}

let result: "YES" | "NO" = "YES";
let cnt = 0;

const S_SET = new Set(S);

for (let i = N; i >= 1; i--) {}

console.log(result);
