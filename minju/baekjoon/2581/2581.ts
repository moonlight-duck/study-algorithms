import { readFileSync } from "fs";
const [start, end] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

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

const decimalList: number[] = [];
for (let i = start; i <= end; i++) {
  if (isDecimal(i)) {
    decimalList.push(i);
  }
}

if (decimalList.length > 0) {
  console.log(decimalList.reduce((a, b) => a + b, 0));
  console.log(decimalList[0]);
} else {
  console.log("-1");
}
