import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2563";

describe("백준 2563번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3
3 7
15 7
5 2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`260`);
  });
  it("예제 1", async () => {
    const input = `2
1 1
1 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`0`);
  });

  it("예제 1", async () => {
    const input = `2
3 1
1 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`30`);
  });
});
