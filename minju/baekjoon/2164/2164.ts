/**
 * 카테고리 : 큐
 * 문제 : https://www.acmicpc.net/problem/2164
 */
import { readFileSync } from "fs";

const N: number = Number(readFileSync("/dev/stdin").toString().trim());
const data: Array<number> = Array.from({ length: N }, (_, i) => i + 1);

while (data.length > 1) {
  data.shift();

  if (data.length > 0) {
    const front = data.shift()!; // 맨 위 카드 꺼내기
    data.push(front); // 맨 뒤로 이동
  }
}

console.log(data[0]);
