import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "3003";

describe("백준 3003번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `0 1 2 2 2 7`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1 0 0 0 0 1`);
  });

  it("예제 2", async () => {
    const input = `2 1 2 1 2 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`-1 0 0 1 0 7`);
  });
});
