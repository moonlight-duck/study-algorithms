import { readFileSync } from "fs";
const [n, m] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const output: number[] = [];
const result: string[] = [];

const dfs = (count: number) => {
  if (count === m) {
    result.push(output.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    output.push(i);

    dfs(count + 1);

    output.pop();
  }
};

dfs(0);

console.log(result.join("\n"));
