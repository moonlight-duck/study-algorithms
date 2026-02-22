import { readFileSync } from "fs";
const input = readFileSync("/dev/stdin").toString().trim().split("\n");
const [a, b] = input[0].split(" ").map(Number);
const [c, d] = input[1].split(" ").map(Number);

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
const lcm = (b / gcd(b, d)) * d;

const molecule = (a * lcm) / b + (c * lcm) / d;
const finalGCD = gcd(molecule, lcm);

console.log(molecule / finalGCD, lcm / finalGCD);
