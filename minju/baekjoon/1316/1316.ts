import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
let check: string[] = [];
let cnt = 0;

const isPush = (value: string): boolean => {
  const lastChar = check[check.length - 1];
  if (lastChar) {
    if (value === lastChar) {
      return true;
    } else {
      if (check.indexOf(value) >= 0) {
        return false;
      } else {
        check.push(value);
        return true;
      }
    }
  } else {
    check.push(value);
    return true;
  }
};

for (let i = 1; i <= n; i++) {
  const word = input[i];
  let isCheck = true;
  check = [];
  for (let j = 0; j < word.length; j++) {
    const result = isPush(word[j]);
    if (!result) {
      isCheck = false;
      break;
    }
  }

  if (isCheck && word != "") {
    cnt += 1;
  }
}

console.log(cnt);
