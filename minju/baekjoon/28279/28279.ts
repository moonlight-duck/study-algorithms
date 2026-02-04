import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const deque = new Map();
let front = 0;
let back = 1;

const result = [];
const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  const line = input[i].trim().split(" ");
  const command = Number(line[0]);
  const num = line[1];

  switch (command) {
    case 1:
      deque.set(front, num);
      front--;
      break;
    case 2:
      deque.set(back, num);
      back++;
      break;
    case 3:
      if (deque.size > 0) {
        front++;
        result.push(deque.get(front));
        deque.delete(front);
      } else {
        result.push(-1);
      }
      break;
    case 4:
      if (deque.size > 0) {
        back--;
        result.push(deque.get(back));
        deque.delete(back);
      } else {
        result.push(-1);
      }
      break;
    case 5:
      result.push(deque.size);
      break;
    case 6:
      result.push(deque.size === 0 ? 1 : 0);
      break;
    case 7:
      result.push(deque.size > 0 ? deque.get(front + 1) : -1);
      break;
    case 8:
      result.push(deque.size > 0 ? deque.get(back - 1) : -1);
      break;
  }
}

console.log(result.join("\n"));
