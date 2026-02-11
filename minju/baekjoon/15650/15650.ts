import { readFileSync } from "fs";
const [n, m] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const output: number[] = [];
const result: string[] = [];

const dfs = (start: number, count: number) => {
  if (count === m) {
    result.push(output.join(" "));
    return;
  }

  for (let i = start; i <= n; i++) {
    output.push(i);

    dfs(i + 1, count + 1);

    output.pop();
  }
};

dfs(1, 0);

console.log(result.join("\n"));
