import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "14215";

describe("백준 14215번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `1 2 3`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`5`);
  });

  it("예제 2", async () => {
    const input = `2 2 2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`6`);
  });

  it("예제 3", async () => {
    const input = `1 100 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3`);
  });

  it("예제 4", async () => {
    const input = `41 64 16`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`113`);
  });
});
