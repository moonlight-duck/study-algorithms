import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2501";

describe("백준 2501번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `6 3`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3`);
  });
  it("예제 2", async () => {
    const input = `25 4`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`0`);
  });
  it("예제 3", async () => {
    const input = `2735 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1`);
  });
});
