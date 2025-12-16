import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "11726";

describe("백준 11726번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2`);
  });

  it("예제 2", async () => {
    const input = `9`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`55`);
  });

  it("예제 3 (추가)", async () => {
    const input = `3`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3`);
  });
});
