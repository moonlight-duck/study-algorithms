import { readFileSync } from "fs";
const n = Number(readFileSync("/dev/stdin").toString().trim());

let num = n;
let line = 1;
while (num > line) {
  num -= line++;
}

if (line % 2 === 0) {
  console.log(num + "/" + (line - num + 1));
} else {
  console.log(line - num + 1 + "/" + num);
}
