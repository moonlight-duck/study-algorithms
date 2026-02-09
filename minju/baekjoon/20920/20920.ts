import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const [, m] = input[0].split(" ").map(Number);
const wordMap = new Map<string, number>();

for (let i = 1; i < input.length; i++) {
  const word = input[i];
  if (word.length >= m) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }
}

const arr = Array.from(wordMap.keys());

arr.sort((a, b) => {
  const wordACnt = wordMap.get(a)!;
  const wordBCnt = wordMap.get(b)!;

  if (wordACnt !== wordBCnt) {
    return wordBCnt - wordACnt;
  }

  if (a.length !== b.length) {
    return b.length - a.length;
  }

  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(arr.join("\n"));
