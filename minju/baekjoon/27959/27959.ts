import { readFileSync } from "fs";
const [N, M] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (N * 100 >= M) {
  console.log("Yes");
} else {
  console.log("No");
}
