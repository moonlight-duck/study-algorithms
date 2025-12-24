import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const data: string[][] = Array.from({ length: input.length }, (_, index) =>
  input[index].split("")
);

let result = "";
const maxLength = Math.max(...input.map((x) => x.length));

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < data.length; j++) {
    result += data[j][i] || "";
  }
}

console.log(result);
