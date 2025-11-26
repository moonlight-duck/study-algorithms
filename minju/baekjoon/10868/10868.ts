/**
 * 카테고리 : 세그먼트 트리
 * 문제 : https://www.acmicpc.net/problem/10868
 */
import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const [N] = input[0].split(" ").map(Number);
const data: number[] = input.slice(1, N + 1).map(Number);
const tree: number[] = Array.from({ length: N * 4 }, () => Infinity);

// build
const build = (node: number, start: number, end: number) => {
  if (start === end) {
    tree[node] = data[start];
    return;
  }

  const mid = Math.floor((start + end) / 2);

  build(2 * node + 1, start, mid);
  build(2 * node + 2, mid + 1, end);

  tree[node] = Math.min(tree[2 * node + 1], tree[2 * node + 2]);
};

build(0, 0, N - 1);

const query = (
  node: number,
  start: number,
  end: number,
  l: number,
  r: number
): number => {
  // case 1: 범위를 벗어난 경우
  if (l > end || r < start) {
    return Infinity;
  }
  // case 2: 현재 노드의 구간이 쵸어 구간에 완전히 포함되는 경우
  if (l <= start && r >= end) {
    return tree[node];
  }

  // case 3: 부분적으로 겹치는 경우
  const mid = Math.floor((start + end) / 2);
  const left = query(2 * node + 1, start, mid, l, r);
  const right = query(2 * node + 2, mid + 1, end, l, r);

  return Math.min(left, right);
};

for (let i = N + 1; i < input.length; i++) {
  const [l, r] = input[i].split(" ").map(Number);
  console.log(query(0, 0, N - 1, l - 1, r - 1));
}
