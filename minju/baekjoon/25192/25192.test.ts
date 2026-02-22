import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "25192";

describe("백준 25192번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `9
ENTER
pjshwa
chansol
chogahui05
lms0806
pichulia
r4pidstart
swoon
tony9402`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`8`);
  });
  it("예제 2", async () => {
    const input = `7
ENTER
pjshwa
chansol
chogahui05
ENTER
pjshwa
chansol`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`5`);
  });
  it("예제 3", async () => {
    const input = `3
ENTER
lms0806
lms0806`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1`);
  });
});
