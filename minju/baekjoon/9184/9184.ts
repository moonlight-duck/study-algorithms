import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

// 백준에서 제공한 코드
const memo: number[][][] = Array.from({ length: 21 }, () =>
  Array.from({ length: 21 }, () => Array(21).fill(0)),
);

const w = (a: number, b: number, c: number): number => {
  // 0 이하일 때는 즉시 1 반환 (재귀 호출 X)
  if (a <= 0 || b <= 0 || c <= 0) return 1;

  // 20을 넘어가면 w(20, 20, 20)으로 변환
  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

  // 이미 계산된 값이 있다면 바로 반환
  if (memo[a][b][c] !== 0) return memo[a][b][c];

  // 조건에 맞춰 계산하고 결과를 memo 배열에 저장
  if (a < b && b < c) {
    memo[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  } else {
    memo[a][b][c] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
  }

  return memo[a][b][c];
};

const result: string[] = [];
for (let i = 0; i < input.length - 1; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  result.push(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
}

console.log(result.join("\n"));
