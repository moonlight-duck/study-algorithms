/**
 * 카테고리 : BFS
 * 문제 : https://www.acmicpc.net/problem/2178
 */
import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const miro: number[][] = input
  .slice(1, 1 + n)
  .map((row) => row.split("").map(Number));

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];
type Pos = [number, number];

const bfs = (
  miro: number[][],
  n: number,
  m: number,
  x: number = 0,
  y: number = 0
) => {
  const queue: Pos[] = [];
  const visited: number[][] = Array.from({ length: n }, () => Array(m).fill(0));
  let head = 0;

  // 시작점 세팅
  queue.push([x, y]);
  visited[x][y] = visited[x][y] + 1;

  while (head < queue.length) {
    const [r, c] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
      if (visited[nr][nc] > 0) continue;
      if (miro[nr][nc] === 0) continue;

      visited[nr][nc] = visited[r][c] + 1;
      queue.push([nr, nc]);
    }
  }

  return visited[n - 1][m - 1];
};

console.log(bfs(miro, n, m));
