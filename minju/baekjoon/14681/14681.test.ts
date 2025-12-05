import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "14681";

describe("백준 14681번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `12
5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1`);
  });
  it("예제 2", async () => {
    const input = `9
-13`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`4`);
  });
});
