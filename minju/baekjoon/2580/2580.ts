import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const originBoard: number[][] = input.map((x) => x.split(" ").map(Number));

const isUsedCol = Array.from({ length: 9 }, () =>
  Array.from({ length: 10 }, () => false),
);
const isUsedRow = Array.from({ length: 9 }, () =>
  Array.from({ length: 10 }, () => false),
);
const isUsedBox = Array.from({ length: 9 }, () =>
  Array.from({ length: 10 }, () => false),
);

// 초기화
for (let i = 0; i < originBoard.length; i++) {
  for (let j = 0; j < originBoard[0].length; j++) {
    if (originBoard[i][j] !== 0) {
      isUsedCol[i][originBoard[i][j]] = true;
      isUsedRow[j][originBoard[i][j]] = true;

      isUsedBox[Math.floor(i / 3) * 3 + Math.floor(j / 3)][originBoard[i][j]] =
        true;
    }
  }
}

let result = originBoard;
// 답 체크
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    for (let k = 1; k <= 9; k++) {
      if (result[i][j] !== 0) break;
      if (result[i][j] === 0) {
        if (
          !isUsedCol[i][k] &&
          !isUsedRow[j][k] &&
          !isUsedBox[Math.floor(i / 3) * 3 + Math.floor(j / 3)][k]
        ) {
          result[i][j] = k;
          isUsedCol[i][k] = true;
          isUsedRow[j][k] = true;
          isUsedBox[Math.floor(i / 3) * 3 + Math.floor(j / 3)][k] = true;
          break;
        }
      }
    }
  }
}

console.log(result.map((x) => x.join(" ")).join("\n"));
