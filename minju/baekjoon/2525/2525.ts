import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
let [sH, sM] = input[0].split(" ").map(Number); // 시작 시, 분
const afterM = Number(input[1]); // 몇분 후인지

if (sM + afterM < 60) {
  sM += afterM;
} else {
  const diffH = Math.floor((sM + afterM) / 60);
  // 60분을 넘어가면
  if (sH + diffH >= 24) {
    sH = (sH + diffH) % 24;
  } else {
    sH += diffH;
  }
  sM = (sM + afterM - 60) % 60;
}
console.log(sH, sM);
