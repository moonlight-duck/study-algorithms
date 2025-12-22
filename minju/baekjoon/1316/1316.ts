import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
let cnt = 0;

for (let i = 1; i <= n; i++) {
  const word = input[i];
  const check = new Set();
  let isGroupWord = true;
  let prevChar = word[0];
  check.add(word[0]);

  for (let j = 1; j < word.length; j++) {
    if (prevChar !== word[j]) {
      if (check.has(word[j])) {
        isGroupWord = false;
        break;
      } else {
        check.add(word[j]);
        prevChar = word[j];
      }
    }
  }

  if (isGroupWord) {
    cnt += 1;
  }
}

console.log(cnt);
