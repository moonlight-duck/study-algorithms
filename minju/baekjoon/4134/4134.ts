import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const isPrime = (num: number): boolean => {
  if (num === 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const result = [];

for (let i = 1; i < input.length; i++) {
  let target = input[i];
  while (true) {
    if (isPrime(target)) {
      result.push(target);
      break;
    }
    target++;
  }
}

console.log(result.join("\n"));
