import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const total = input.reduce((a, b) => a + b, 0);
if (input[0] === 60 && input[1] === 60 && input[2] === 60) {
  console.log("Equilateral");
} else if (total === 180) {
  if (input[0] === input[1] || input[0] === input[2] || input[1] === input[2]) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
} else {
  console.log("Error");
}
