/**
 * 카테고리 : 정렬(삽입 정렬)
 * 문제 : https://www.acmicpc.net/problem/2750
 */

import { readFileSync } from "fs";

const lines = readFileSync("/dev/stdin").toString().trim().split("\n");

const input = lines.slice(1).map(Number);

for (let i = 0; i < input.length; i++) {
  const current = input[i];
  let j = i - 1;
  while (j >= 0 && input[j] > current) {
    input[j + 1] = input[j];
    j--;
  }
  input[j + 1] = current;
}

console.log(input);
