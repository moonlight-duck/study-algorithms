import { readFileSync } from "fs";
const n = Number(readFileSync("/dev/stdin").toString().trim());

let count = 0;

// 1. 체크사항 : 행(r), 열(c), 대각선(우상향, 우하향)
const isUsedCol = new Array(n).fill(false);
const isUsedDiagonalUp = new Array(2 * n - 1).fill(false); // 우상향
const isUsedDiagonalDown = new Array(2 * n - 1).fill(false); // 우하향

const solve = (row: number) => {
  // 종료조건
  if (row === n) {
    count++;
    return;
  }

  for (let col = 0; col < n; col++) {
    if (
      !isUsedCol[col] &&
      !isUsedDiagonalUp[row + col] &&
      !isUsedDiagonalDown[row - col + n - 1]
    ) {
      // 퀸을 놓음 (방문 표시)
      isUsedCol[col] = true;
      isUsedDiagonalUp[row + col] = true;
      isUsedDiagonalDown[row - col + n - 1] = true;

      solve(row + 1);

      // 표시 해제
      isUsedCol[col] = false;
      isUsedDiagonalUp[row + col] = false;
      isUsedDiagonalDown[row - col + n - 1] = false;
    }
  }
};

solve(0);
console.log(count);
