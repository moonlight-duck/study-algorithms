import { readFileSync } from "fs";
const [n, m] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const getPrimes = (max: number): boolean[] => {
  const isPrimes: boolean[] = new Array(max + 1).fill(true);
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

const primes = getPrimes(m);
const result = [];
for (let i = n; i < primes.length; i++) {
  if (primes[i] === true) {
    result.push(i);
  }
}

console.log(result.join("\n"));
