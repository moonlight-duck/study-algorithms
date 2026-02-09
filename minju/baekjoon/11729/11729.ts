import { readFileSync } from "fs";

const n = Number(readFileSync("/dev/stdin").toString().trim());

const count = Math.pow(2, n) - 1;
let result: string[] = [];

/**
 * 하노이 탑 재귀 함수
 * @param n 원판의 개수
 * @param from 출발지 기둥
 * @param to 목적지 기둥
 * @param other 보조 기둥
 */
const hanoi = (n: number, from: number, to: number, other: number) => {
  if (n === 0) return;

  // n-1개를 보조 기둥으로 옮기기
  hanoi(n - 1, from, other, to);

  // 가장 큰 원반 목적지로 이동
  result.push(`${from} ${to}`);

  // 보조에 있던거 n-1 만큼 다시 to로 이동
  hanoi(n - 1, other, to, from);
};

hanoi(n, 1, 3, 2);

console.log(count);
console.log(result.join("\n"));
