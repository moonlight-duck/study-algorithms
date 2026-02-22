import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin").toString().trim().split(/\s+/);

const n = Number(input[0]);
const targetCount = n / 2;

const team1C: number[] = [];

const synergy: number[][] = [];
for (let i = 0; i < n; i++) {
  const row = [];
  for (let j = 0; j < n; j++) {
    row.push(Number(input[1 + i * n + j]));
  }
  synergy.push(row);
}

let minDiff = Infinity;

const getSynergyGap = (team1: number[]) => {
  const team2: number[] = [];
  for (let i = 0; i < n; i++) {
    if (!team1.includes(i)) {
      team2.push(i);
    }
  }

  let team1Score = 0;
  let team2Score = 0;

  for (let i = 0; i < targetCount; i++) {
    for (let j = 0; j < targetCount; j++) {
      team1Score += synergy[team1[i]][team1[j]];
      team2Score += synergy[team2[i]][team2[j]];
    }
  }

  const currentDiff = Math.abs(team1Score - team2Score);

  if (currentDiff < minDiff) {
    minDiff = currentDiff;
  }

  if (minDiff === 0) {
    console.log(0);
    process.exit(0);
  }
};

const solve = (index: number, count: number) => {
  if (count === targetCount) {
    getSynergyGap([...team1C]);
    return;
  }

  for (let i = index; i < n; i++) {
    team1C.push(i);
    solve(i + 1, count + 1);
    team1C.pop();
  }
};

solve(0, 0);
console.log(minDiff);
