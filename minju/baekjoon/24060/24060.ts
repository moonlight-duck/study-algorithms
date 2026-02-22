import { readFileSync } from "fs";

const input = readFileSync(0).toString().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

let count = 0;
let targetValue = -1;

function mergeSort(array: number[], p: number, r: number) {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    mergeSort(array, p, q); // 왼쪽 분할
    mergeSort(array, q + 1, r); // 오른쪽 분할
    merge(array, p, q, r); // 병합
  }
}

function merge(array: number[], p: number, q: number, r: number) {
  let i = p;
  let j = q + 1;
  let t = 0;
  const tmp: number[] = [];

  while (i <= q && j <= r) {
    if (array[i] <= array[j]) tmp[t++] = array[i++];
    else tmp[t++] = array[j++];
  }

  while (i <= q) tmp[t++] = array[i++];
  while (j <= r) tmp[t++] = array[j++];

  i = p;
  t = 0;
  while (i <= r) {
    count++;
    if (count === K) {
      targetValue = tmp[t]; // K번째 저장되는 값을 기록
    }
    array[i++] = tmp[t++];
  }
}

mergeSort(A, 0, N - 1);
console.log(targetValue);
