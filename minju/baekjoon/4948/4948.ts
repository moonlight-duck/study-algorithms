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

const primes = getPrimes(Math.max.apply(null, input) * 2);

const result = [];
for (let i = 0; i < input.length - 1; i++) {
  result.push(
    primes.filter(
      (item, index) =>
        index > input[i] && index <= input[i] * 2 && item === true
    ).length
  );
}

console.log(result.join("\n"));
