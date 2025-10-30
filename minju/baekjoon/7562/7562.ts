/**
 * 카테고리 : 큐
 * 문제 : https://www.acmicpc.net/problem/2164
 */
import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const TC: number = Number(input[0]);

const raw = input.slice(1, 3 * TC + 1);
const T = Array.from({ length: TC }, (_, i) => raw.slice(3 * i, 3 * i + 3));

type Pos = [number, number];

const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
const dy = [-1, -2, -2, -1, 1, 2, 2, 1];

const bfs = (I: number, sx: number, sy: number, ex: number, ey: number) => {
  const queue: Pos[] = [];
  const visited: number[][] = Array.from({ length: I }, () =>
    Array.from({ length: I }, () => -1)
  );
  let head = 0;

  // 시작점 세팅
  queue.push([sx, sy]);
  visited[sx][sy] = 0;

  while (head < queue.length) {
    const [x, y] = queue[head++];

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= I || ny < 0 || ny >= I) continue; // 배열 범위 벗어나는 부분 체크
      if (visited[nx][ny] > -1) continue; // 방문한적이 있으면 패스

      visited[nx][ny] = visited[x][y] + 1;
      queue.push([nx, ny]);
    }
  }

  return visited[ex][ey];
};

for (let i = 0; i < TC; i++) {
  const I = Number(T[i][0]);
  const [sx, sy] = T[i][1].split(" ").map(Number);
  const [ex, ey] = T[i][2].split(" ").map(Number);

  console.log(bfs(I, sx, sy, ex, ey));
}
