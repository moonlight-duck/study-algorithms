/**
 * 카테고리 : BFS
 * 문제 : https://www.acmicpc.net/problem/1697
 */

import { readFileSync } from "fs";

const [N, K] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const bfs = (N: number, K: number) => {
  if (N === K) return 0;

  const queue: number[] = [];
  const vistied: number[] = Array.from({ length: 100001 }, () => -1);
  let head = 0;

  // 시작점 세팅
  queue.push(N);
  vistied[N] = 0;

  // queue가 없을때 까지
  while (head < queue.length) {
    const p = queue[head++];

    const np = [p + 1, p - 1, p * 2];

    for (let i = 0; i < np.length; i++) {
      if (np[i] < 0 || np[i] > 100001) continue;
      if (vistied[np[i]] > -1) continue;

      vistied[np[i]] = vistied[p] + 1;
      queue.push(np[i]);
    }
  }

  return vistied[K];
};

console.log(bfs(N, K));
