/**
 * 카테고리 : 세그먼트 트리
 * 문제 : https://www.acmicpc.net/problem/2042
 */
import { readFileSync } from "fs";

import SegmentTree from "./SegmentTree.js";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

// N, M, K (배열 크기, 변경 횟수, 구간 합 횟수)
const [N, M, K] = input[0].split(" ").map(Number);

// 1. 초기 배열 데이터 (BigInt로 파싱)
const initialData: bigint[] = [];
for (let i = 1; i <= N; i++) {
  initialData.push(BigInt(input[i]));
}

// 2. 세그먼트 트리 초기화
const segTree = new SegmentTree(initialData);

// 3. 변경 및 구간 합 질의 처리
const results: string[] = [];
const totalQueries = M + K;

for (let i = N + 1; i < N + 1 + totalQueries; i++) {
  if (i >= input.length) break; // 입력 줄 끝 도달 방지

  const queryParts = input[i].split(" ").map((item) => BigInt(item));
  const a = Number(queryParts[0]); // 명령어 타입 (1 또는 2)
  const b = Number(queryParts[1]); // 인덱스 (1-based)
  const c = queryParts[2]; // 새로운 값 또는 구간 끝 인덱스 (BigInt)

  if (a === 1) {
    // 1. 변경 (update)
    // b는 1-based 인덱스. 0-based 인덱스 (b-1)와 새로운 값 c를 전달
    segTree.update(b - 1, c);
  } else if (a === 2) {
    // 2. 구간 합 (query)
    const l = b - 1; // 구간 시작 인덱스 (0-based)
    const r = Number(c) - 1; // 구간 끝 인덱스 (0-based)

    const sum = segTree.query(l, r);
    results.push(sum.toString());
  }
}

console.log(results.join("\n"));
