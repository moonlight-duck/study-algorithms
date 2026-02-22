import { readFileSync } from "fs";

const input = Number(readFileSync("/dev/stdin").toString().trim());

let cnt1 = 0;
let cnt2 = 0;

// 백준에서 제공한 코드
const fib = (n: number): number => {
  if (n === 1 || n === 2) {
    cnt1++;
    return 1; // 코드1
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

const fibonacci = (n: number): number => {
  const f: number[] = [];
  f[1] = f[2] = 1;

  for (let i = 3; i <= n; i++) {
    cnt2++;
    f[i] = f[i - 1] + f[i - 2]; // 코드2
  }

  return f[n];
};

fib(input);
fibonacci(input);
console.log(cnt1, cnt2);
