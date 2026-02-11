import { readFileSync } from "fs";
const [n, m] = readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visited = Array.from({ length: n + 1 }, () => false);
const output: number[] = [];
let result = "";

const dfs = (count: number) => {
  if (count === m) {
    result += output.join(" ") + "\n";
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      output.push(i);

      dfs(count + 1);

      output.pop();
      visited[i] = false;
    }
  }
};

dfs(0);

console.log(result.trim());
