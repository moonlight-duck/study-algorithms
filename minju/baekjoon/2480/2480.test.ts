import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2480";

describe("백준 2480번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3 3 6`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1300`);
  });
  it("예제 2", async () => {
    const input = `2 2 2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`12000`);
  });
  it("예제 3", async () => {
    const input = `6 2 5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`600`);
  });
  it("예제 4", async () => {
    const input = `6 1 6`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1600`);
  });
  it("예제 5", async () => {
    const input = `1 6 6`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1600`);
  });
});
