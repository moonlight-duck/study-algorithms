import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2720";

describe("백준 2720번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3
  124
  25
  194`;
    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`4 2 0 4
1 0 0 0
7 1 1 4`);
  });
});
