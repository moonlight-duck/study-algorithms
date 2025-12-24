import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2903";

describe("백준 2903번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`9`);
  });
  it("예제 2", async () => {
    const input = `2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`25`);
  });
  it("예제 3", async () => {
    const input = `5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1089`);
  });
});
