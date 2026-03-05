import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2559";

describe("백준 2559번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `10 2
3 -2 -4 -9 0 3 7 13 8 -3`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`21`);
  });
  it("예제 2", async () => {
    const input = `10 5
3 -2 -4 -9 0 3 7 13 8 -3`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`31`);
  });
});
