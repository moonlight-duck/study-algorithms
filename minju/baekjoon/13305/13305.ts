import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const distance = input[1].split(" ").map(BigInt);
const cityPrice = input[2].split(" ").map(BigInt);

let prevPrice = cityPrice[0];
let totalPrice = 0n;

for (let i = 0; i < distance.length; i++) {
  if (cityPrice[i] < prevPrice) {
    prevPrice = cityPrice[i];
  }

  totalPrice += prevPrice * distance[i];
}

console.log(totalPrice.toString());
