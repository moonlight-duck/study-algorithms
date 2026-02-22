import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const getPrimes = (max: number): boolean[] => {
  const isPrimes = new Array(max + 1).fill(true);
  isPrimes[0] = isPrimes[1] = false;

  for (let i = 2; i <= Math.sqrt(max); i++) {
    if (isPrimes[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrimes[j] = false;
      }
    }
  }

  return isPrimes;
};

const primes = getPrimes(Math.max.apply(null, input.slice(1)));

const result = [];
for (let i = 1; i < input.length; i++) {
  const n = input[i];
  let cnt = 0;
  for (let j = 2; j <= n / 2; j++) {
    if (primes[j] && primes[n - j]) {
      ++cnt;
    }
  }
  result.push(cnt);
}

console.log(result.join("\n"));
