import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);

const B = input[2].split(" ").map(Number);

let result: "YES" | "NO" = "YES";

for (let i = 0; i < N; i++) {
  if (A[i] !== B[i]) {
    result = "NO";
    break;
  }
}

if (result === "YES") {
  const A_SET = new Set(A);
  for (let i = N; i < B.length; i++) {
    if (A_SET.has(B[i])) {
      result = "YES";
    } else {
      result = "NO";
      break;
    }
  }
} else {
  // 있을 수 없음
}

console.log(result);
