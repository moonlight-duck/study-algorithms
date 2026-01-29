import { readFileSync } from "fs";
const [N, K] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const find = (N: number, K: number) => {
  let cnt = 0;
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      ++cnt;
    }

    if (cnt === K) {
      return i;
    }
  }
  return 0;
};

console.log(find(N, K));
