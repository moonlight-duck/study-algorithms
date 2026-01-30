import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);

const data: string[] = [...new Set(input)];

data.sort((a: string, b: string): number => {
  return a.length - b.length || a.localeCompare(b);
});

console.log(data.join("\n"));
