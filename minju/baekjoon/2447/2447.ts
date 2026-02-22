import { readFileSync } from "fs";

const num = Number(readFileSync("/dev/stdin").toString());

const arr: string[][] = Array.from({ length: num }, () => Array(num).fill("*"));

const punchHole = (x: number, y: number, size: number) => {
  if (size === 1) return;

  const subSize = size / 3;

  // 가운데 구멍 뚫기
  for (let i = x + subSize; i < x + subSize * 2; i++) {
    for (let j = y + subSize; j < y + subSize * 2; j++) {
      arr[i][j] = " ";
    }
  }

  // 분할한거 만큼 호출
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) continue; // 이미 뚫음
      punchHole(x + i * subSize, y + j * subSize, subSize);
    }
  }
};

punchHole(0, 0, num);

console.log(arr.map((row) => row.join("")).join("\n"));
