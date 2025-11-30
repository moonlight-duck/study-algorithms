import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const DIREACT = 4;

const [n, m] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ").map(Number);
const room: number[][] = input
  .slice(2, 2 + n)
  .map((x) => x.split(" ").map(Number));

const dx: number[] = [0, 1, 0, -1]; // 북, 동 남, 서
const dy: number[] = [-1, 0, 1, 0];

let cnt: number = 0;

while (c < m && c >= 0 && r < n && r >= 0) {
  // 유효한 직사각형 범위

  // 1. 현재 칸이 아직 청소되지 않은 경우, 현재 칸을 청소한다.
  if (room[r][c] === 0) {
    console.log("청소했음", r, c);
    room[r][c] = 2;
    ++cnt;
  }

  let isAllClean = true;
  console.log("초기화");
  for (let i = 3; i >= 0; i--) {
    const nd = (d + i) % DIREACT;
    const nx = r + dx[nd];
    const ny = c + dy[nd];

    if (nx >= m || nx < 0 || ny >= n || ny < 0) continue;

    console.log("방향 확인중", nd);

    if (room[nx][ny] === 0) {
      console.log("청소 안되어 있는 방 발견", nx, ny);
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

    console.log("4칸 모두 청소 되어 있음, 후진함", c, r);
  }

  if (room[r][c] === 1) {
    // 벽이야
    break;
  }
}

console.log(cnt);
