import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const isTriangle = (a: number, b: number, c: number) => {
  const max = Math.max(a, b, c);
  if (max === a) {
    if (a < b + c) return true;
    else return false;
  } else if (max === b) {
    if (b < a + c) return true;
    else return false;
  } else {
    if (c < a + b) return true;
    else return false;
  }
};

for (let i = 0; i < input.length - 1; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);

  if (a === b && b === c) {
    console.log("Equilateral");
  } else if (isTriangle(a, b, c)) {
    if (a === b || a === c || b === c) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  } else {
    console.log("Invalid");
  }
}
