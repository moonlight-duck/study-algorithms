import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);

let result = n * 100;
for (let i = 1; i < n; i++) {
  const [targetX, targetY] = input[i].split(" ").map(Number);
  for (let j = i + 1; j <= n; j++) {
    const [x, y] = input[j].split(" ").map(Number);

    if (
      (targetX >= x && targetX - 10 <= x) ||
      (targetX < x && targetX + 10 >= x)
    ) {
      if (
        (targetY >= y && targetY - 10 <= y) ||
        (targetY < y && targetY + 10 >= y)
      ) {
        // 겹치는 범위이다
        const nX = Math.abs(
          Math.max(targetX, x) - Math.min(targetX + 10, x + 10)
        );
        const nY = Math.abs(
          Math.max(targetY, y) - Math.min(targetY + 10, y + 10)
        );

        result -= nX * nY === 100 ? 200 : nX * nY;
      }
    }
  }
}

console.log(result);
