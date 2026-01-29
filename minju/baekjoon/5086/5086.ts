import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const [num1, num2] = input[i].split(" ").map(Number);
  if (num1 !== 0) {
    if (num1 < num2) {
      if (num2 % num1 === 0) {
        console.log("factor");
      } else {
        console.log("neither");
      }
    } else {
      if (num1 % num2 === 0) {
        console.log("multiple");
      } else {
        console.log("neither");
      }
    }
  }
}
