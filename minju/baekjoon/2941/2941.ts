import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim();
const check = ["c=", "c-", "dz=", "s=", "z=", "d-", "lj", "nj"];

let result: string = input;
for (let i = 0; i < check.length; i++) {
  result = result.replaceAll(check[i], "*");
}

console.log(result.split("").length);
