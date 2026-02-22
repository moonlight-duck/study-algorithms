import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().split("\n").map(Number);

const recursion = (data: string[]): string[] => {
  if (data.length < 3) return data;
  if (data.length === 3) return ["-", " ", "-"];

  const start = Math.floor(data.length / 3);
  const end = start + start;
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(" ");
  }
  const front = recursion(data.slice(0, start));
  const back = recursion(data.slice(end));
  //   console.log("처음", front, front.length);
  //   console.log("중간", result, result.length, start, end);
  //   console.log("끝", back, back.length);
  return [...front, ...result, ...back];
};

for (let i = 0; i < input.length - 1; i++) {
  console.log(
    recursion(
      Array.from({ length: 3 ** input[i] }).fill("-") as Array<string>,
    ).join(""),
  );
}
