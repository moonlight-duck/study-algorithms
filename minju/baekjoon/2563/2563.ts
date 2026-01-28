import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);

const area = Array.from({ length: 100 }, () => Array(100).fill(0));

// 체크
for (let i = 1; i <= n; i++) {
  const [sX, sY] = input[i].split(" ").map(Number);
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      area[sX + j][sY + k] = 1;
    }
  }
}

// 넓이 확인
let total = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (area[i][j] === 1) {
      total += 1;
    }
  }
}

console.log(total);
