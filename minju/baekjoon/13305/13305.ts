import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");

const distance = input[1].split(" ").map(Number);
const cityPrice = input[2].split(" ").map(Number);

let prevPrice = cityPrice[0];
let totalPrice = cityPrice[0] * distance[0];
for (let i = 1; i < distance.length; i++) {
  if (prevPrice * distance[i] < cityPrice[i] * distance[i]) {
    totalPrice += prevPrice * distance[i];
  } else {
    totalPrice += cityPrice[i] * distance[i];
    prevPrice = cityPrice[i];
  }
}

console.log(totalPrice);
