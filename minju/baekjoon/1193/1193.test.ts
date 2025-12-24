import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1193";

describe("백준 1193번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1/1`);
  });

  it("예제 2", async () => {
    const input = `2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1/2`);
  });
  it("예제 3", async () => {
    const input = `3`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2/1`);
  });
  it("예제 4", async () => {
    const input = `4`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3/1`);
  });
  it("예제 5", async () => {
    const input = `5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2/2`);
  });
  it("예제 6", async () => {
    const input = `6`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1/3`);
  });
  it("예제 7", async () => {
    const input = `7`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1/4`);
  });
});
