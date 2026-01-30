import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "18870";

describe("백준 18870번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5
2 4 -10 4 -9`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2 3 0 3 1`);
  });
  it("예제 2", async () => {
    const input = `6
1000 999 1000 999 1000 999`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1 0 1 0 1 0`);
  });
});
