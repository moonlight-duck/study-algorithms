import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "11653";

describe("백준 11653번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `72`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2
2
2
3
3`);
  });

  it("예제 2", async () => {
    const input = `3`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3`);
  });

  it("예제 3", async () => {
    const input = `6`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2
3`);
  });
  it("예제 4", async () => {
    const input = `2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2`);
  });

  it("예제 5", async () => {
    const input = `9991`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`97
103`);
  });
});
