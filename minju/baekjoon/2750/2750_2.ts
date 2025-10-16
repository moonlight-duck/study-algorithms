/**
 * 카테고리 : 정렬(퀵 정렬)
 * 문제 : https://www.acmicpc.net/problem/2750
 */

import { readFileSync } from "fs";

const lines = readFileSync("/dev/stdin").toString().trim().split("\n");

const input = lines.slice(1).map(Number);

const quickSort = (data: number[]): number[] => {
  // 재귀 탈출 조건
  if (data.length <= 1) {
    return data;
  }
  // 피봇
  const pivot = data[data.length - 1];

  // 피봇 작은쪽(왼쪽), 큰쪽(오른쪽) 저장장소
  const left = [];
  const right = [];

  // 피봇을 기준으로 작은쪽과 큰쪽으로 분리
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] < pivot) {
      left.push(data[i]);
    } else {
      right.push(data[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(input));
