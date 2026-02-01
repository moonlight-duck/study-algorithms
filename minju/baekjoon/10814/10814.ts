import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);

type itemType = [number, string];

const data: Array<itemType> = input.map((x) => {
  const temp = x.split(" ");
  return [Number(temp[0]), temp[1]];
});

data.sort((a: itemType, b: itemType): number => {
  return a[0] - b[0];
});

console.log(data.map((x) => x[0] + " " + x[1]).join("\n"));
