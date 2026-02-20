import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const str = input[0];
const dic = Array.from({ length: 26 }, () =>
  Array.from({ length: str.length }, () => 0),
);

const KEY = 97;

for (let i = 0; i < str.length; i++) {
  dic[str[i].charCodeAt(0) - KEY][i] = 1;
}
const result = [];
for (let i = 2; i < input.length; i++) {
  const [target, start, end] = input[i].split(" ");
  let sum = 0;
  for (let j = Number(start); j <= Number(end); j++) {
    sum += dic[target.charCodeAt(0) - KEY][j];
  }

  result.push(sum);
}

console.log(result.join("\n"));
