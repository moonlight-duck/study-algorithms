import { readFileSync } from "fs";
const str = readFileSync("/dev/stdin").toString().trim();

let result = 1;
for (let i = 0; i < str.length; i++) {
  if (str[i] !== str[str.length - (i + 1)]) {
    result = 0;
    break;
  } else {
    result = 1;
  }
}

console.log(result);
