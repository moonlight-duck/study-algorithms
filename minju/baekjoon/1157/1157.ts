import { readFileSync } from "fs";
const word = readFileSync("/dev/stdin").toString().trim();

if (word === "") {
  console.log("?");
  process.exit(0);
}

const check = new Map();

for (let i = 0; i < word.length; i++) {
  const char = word[i].toUpperCase();
  check.set(char, (check.get(char) || 0) + 1);
}

let maxValue = -Infinity;
let maxKey = "";
let isDuplicate = false;

for (const [key, value] of check) {
  if (value > maxValue) {
    maxValue = value;
    maxKey = key;
    isDuplicate = false;
  } else if (value === maxValue) {
    isDuplicate = true;
  }
}

if (isDuplicate) {
  console.log("?");
} else {
  console.log(maxKey);
}
