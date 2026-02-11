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
const emptyCells: [number, number][] = [];

// 초기화
for (let i = 0; i < originBoard.length; i++) {
  for (let j = 0; j < originBoard[0].length; j++) {
    if (originBoard[i][j] !== 0) {
      isUsedRow[i][originBoard[i][j]] = true;
      isUsedCol[j][originBoard[i][j]] = true;
      isUsedBox[Math.floor(i / 3) * 3 + Math.floor(j / 3)][originBoard[i][j]] =
        true;
    } else {
      emptyCells.push([i, j]);
    }
  }
}

let result = originBoard;
// 답 체크
const solve = (index: number): boolean => {
  if (index === emptyCells.length) return true;

  const [r, c] = emptyCells[index];
  const b = Math.floor(r / 3) * 3 + Math.floor(c / 3);

  for (let k = 1; k <= 9; k++) {
    if (!isUsedRow[r][k] && !isUsedCol[c][k] && !isUsedBox[b][k]) {
      result[r][c] = k;
      isUsedRow[r][k] = isUsedCol[c][k] = isUsedBox[b][k] = true;

      if (solve(index + 1)) return true;

      result[r][c] = 0;
      isUsedRow[r][k] = isUsedCol[c][k] = isUsedBox[b][k] = false;
    }
  }

  return false;
};

solve(0);
console.log(result.map((x) => x.join(" ")).join("\n"));
