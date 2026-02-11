import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "15650";

describe("백준 15650번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1
2
3`);
  });
  it("예제 2", async () => {
    const input = `4 2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1 2
1 3
1 4
2 3
2 4
3 4`);
  });

  it("예제 3", async () => {
    const input = `4 4`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1 2 3 4`);
  });
});
