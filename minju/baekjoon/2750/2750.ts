/**
 * 카테고리 : 정렬(합병 정렬)
 * 문제 : https://www.acmicpc.net/problem/2750
 */

import { readFileSync } from "fs";

const lines = readFileSync("/dev/stdin").toString().trim().split("\n");

const input = lines.slice(1).map(Number);

const merge = (left: number[], right: number[]): number[] => {
  const result: number[] = [];
  let leftIndex: number = 0;
  let rightIndex: number = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else if (left[leftIndex] > right[rightIndex]) {
      result.push(right[rightIndex]);
      rightIndex++;
    } else {
      // 같은 값일때
      result.push(right[rightIndex]);
      leftIndex++;
      rightIndex++;
    }
  }

  // 남은 요소들 추가
  while (leftIndex < left.length) {
    if (result.length === 0 || result[result.length - 1] != left[leftIndex])
      result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    if (result.length === 0 || result[result.length - 1] != right[rightIndex])
      result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
};

const divide = (value: number[]): number[] => {
  if (value.length <= 1) return value;
  const middle = Math.floor(value.length / 2);

  const left = value.slice(0, middle);
  const right = value.slice(middle);

  return merge(divide(left), divide(right));
};

const mergeSort = (value: number[]): number[] => {
  return divide(value);
};

console.log(mergeSort(input).join("\n"));
