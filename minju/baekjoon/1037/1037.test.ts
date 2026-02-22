import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1037";

describe("백준 1037번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `2
4 2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`8`);
  });
  it("예제 2", async () => {
    const input = `1
2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`4`);
  });
  it("예제 3", async () => {
    const input = `6
3 4 2 12 6 8`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`24`);
  });
  it("예제 4", async () => {
    const input = `14
14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`185192`);
  });
});
