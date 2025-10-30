/**
 * 카테고리 : BFS
 * 문제 : https://www.acmicpc.net/problem/7576
 */
import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const tomato = input.slice(1).map((row) => row.split(" ").map(Number));

// 정수 1은 익은 토마토, 정수 0은 익지 않은 토마토, 정수 -1은 토마토가 들어있지 않은 칸을 나타낸다

type Pos = [number, number];
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const bfs = (M: number, N: number, tomato: number[][]) => {
  const queue: Pos[] = [];
  const visited: number[][] = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => -1)
  );
  let head = 0;

  // 시작점 찾기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tomato[i][j] === 1) {
        queue.push([i, j]);
        visited[i][j] = 0;
      }
    }
  }

  while (head < queue.length) {
    const [x, y] = queue[head++];
    let allNot = true;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (tomato[nx][ny] === -1) continue;

      allNot = false;
      if (visited[nx][ny] > -1) continue;
      if (tomato[nx][ny] === 1) continue;

      visited[nx][ny] = visited[x][y] + 1;
      queue.push([nx, ny]);
    }
    if (allNot) return -1;
  }

  // 방문 배열 확인
  let result = -1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visited[i][j] === -1 && tomato[i][j] === 0) {
        return -1;
      }
      if (visited[i][j] > result) {
        result = visited[i][j];
      }
    }
  }

  return result;
};

console.log(bfs(M, N, tomato));
