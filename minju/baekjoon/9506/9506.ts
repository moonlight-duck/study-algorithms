import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length; i++) {
  const target = input[i];
  const measure: number[] = [];
  if (target > 0) {
    for (let j = 1; j <= target / 2; j++) {
      if (target % j === 0) {
        measure.push(j);
      }
    }

    // 결과 출력
    const total = measure.reduce((a, b) => a + b, 0);
    if (total === target) {
      console.log(`${target} = ${measure.join(" + ")}`);
    } else {
      console.log(`${target} is NOT perfect.`);
    }
  }
}
