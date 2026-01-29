import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const data = input[1].split(" ").map(Number);

const isDecimal = (target: number) => {
  if (target >= 2) {
    for (let j = 2; j < target; j++) {
      if (target % j === 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

let total = 0;

for (let i = 0; i < data.length; i++) {
  if (isDecimal(data[i])) {
    ++total;
  }
}

console.log(total);
