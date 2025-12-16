import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const DIREACT = 4;

const [n, m] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ").map(Number);
const room: number[][] = input
  .slice(2, 2 + n)
  .map((x) => x.split(" ").map(Number));

const dx: number[] = [-1, 0, 1, 0]; // 북, 동 남, 서
const dy: number[] = [0, 1, 0, -1];

let cnt: number = 0;

while (c < m && c >= 0 && r < n && r >= 0) {
  // 유효한 직사각형 범위

  // 1. 현재 칸이 아직 청소되지 않은 경우, 현재 칸을 청소한다.
  if (room[r][c] === 0) {
    room[r][c] = 2;
    ++cnt;
  }

  let isAllClean = true;
  for (let i = 3; i >= 0; i--) {
    const nd = (d + i) % DIREACT;
    const nx = r + dx[nd];
    const ny = c + dy[nd];

    if (nx >= n || nx < 0 || ny >= m || ny < 0) continue;

    if (room[nx][ny] === 0) {
      r = nx;
      c = ny;
      d = nd;
      isAllClean = false;
      break;
    }
  }

  if (isAllClean) {
    r = r - dx[d];
    c = c - dy[d];
  }

  if (room[r][c] === 1) {
    // 벽이야
    break;
  }
}

console.log(cnt);
