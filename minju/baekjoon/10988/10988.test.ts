import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10988";

describe("백준 10988번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `level`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1`);
  });

  it("예제 2", async () => {
    const input = `baekjoon`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`0`);
  });

  it("예제 3", async () => {
    const input = `a`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1`);
  });
});
