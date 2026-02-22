import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const queue = [];
let index = 0;

const result = [];

for (let i = 1; i < input.length; i++) {
  const [command, num] = input[i].split(" ");

  switch (command) {
    case "push":
      queue.push(num);
      break;
    case "pop":
      {
        const item = queue[index];

        if (item !== undefined) {
          result.push(item);
          index++;
        } else {
          result.push(-1);
        }
      }
      break;
    case "size":
      result.push(queue.length - index);
      break;
    case "empty":
      result.push(queue.length - index === 0 ? 1 : 0);
      break;
    case "front":
      result.push(index < queue.length ? queue[index] : -1);
      break;
    case "back":
      result.push(index < queue.length ? queue[queue.length - 1] : -1);
      break;
  }
}
console.log(result.join("\n"));
