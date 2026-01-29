import { readFileSync } from "fs";
const n = Number(readFileSync("/dev/stdin").toString().trim());

let round = 0;
for (let i = n; i >= 1; i--) {
  if (i === n) {
    // 마지막 줄
    round += i; //밑바닥
    round += 2; // 양쪽 끝
    round += 1; // 위에
  } else if (i === 1) {
    // 맨 위면
    round += 3;
  } else {
    //중간
    round += 3;
  }
}

console.log(round);
