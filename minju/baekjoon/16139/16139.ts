import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const str = input[0];
const dic = Array.from({ length: 26 }, () =>
  Array.from({ length: str.length }, () => 0),
);

const KEY = 97;

for (let i = 0; i < str.length; i++) {
  for (let j = i; j < str.length; j++) {
    dic[str[i].charCodeAt(0) - KEY][j] = dic[str[i].charCodeAt(0) - KEY][j] + 1;
  }
}

const result = [];
for (let i = 2; i < input.length; i++) {
  const [target, start, end] = input[i].split(" ");
  const charIdx = target.charCodeAt(0) - KEY;
  const s = Number(start);
  const e = Number(end);

  let count = dic[charIdx][e];
  if (s > 0) {
    count -= dic[charIdx][s - 1];
  }
  result.push(count);
}

console.log(result.join("\n"));
