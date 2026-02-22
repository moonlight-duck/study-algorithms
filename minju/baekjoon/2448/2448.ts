import { readFileSync } from "fs";

const num = Number(readFileSync("/dev/stdin").toString().trim());

let arr: string[][] = Array.from({ length: num }, (_, i) => {
  return Array.from({ length: num * 2 - 1 }, (_, j) => {
    if (j >= num - i - 1 && j <= num + i - 1) return "*";
    else return " ";
  });
});

const punchHole = (r: number, c: number, size: number) => {
  if (size === 3) {
    arr[r + 1][c + 2] = " ";
    return;
  }

  const half = size / 2;

  for (let i = 0; i < half; i++) {
    // 시작: 가운데 - 1
    // 끝: 가운데 + 1
    const startJ = c + size - 1 - (half - 1 - i);
    const endJ = c + size - 1 + (half - 1 - i);

    for (let j = startJ; j <= endJ; j++) {
      arr[r + half + i][j] = " ";
    }
  }

  punchHole(r, c + half, half);
  punchHole(r + half, c, half);
  punchHole(r + half, c + size, half);
};

punchHole(0, 0, num);
console.log(arr.map((x) => x.join("")).join("\n"));
