import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const scoreTable = new Map([
  ["A+", 4.5],
  ["A0", 4.0],
  ["B+", 3.5],
  ["B0", 3.0],
  ["C+", 2.5],
  ["C0", 2.0],
  ["D+", 1.5],
  ["D0", 1.0],
  ["F", 0.0],
]);

let totalCredit = 0;
let totalGrade = 0;
for (let i = 0; i < input.length; i++) {
  const [, credit, grade] = input[i].split(" "); // 과목명, 학점, 성적
  if (grade !== "P") {
    totalCredit += Number(credit);
    totalGrade += Number(credit) * (scoreTable.get(grade) || 0);
  }
}

console.log(totalGrade / totalCredit);
