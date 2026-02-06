import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const dancers = new Set(["ChongChong"]);

for (let i = 1; i < input.length; i++) {
  const [p1, p2] = input[i].split(" ");

  if (dancers.has(p1) || dancers.has(p2)) {
    dancers.add(p1);
    dancers.add(p2);
  }
}

console.log(dancers.size);
