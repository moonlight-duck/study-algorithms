import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2908";

describe("백준 2908번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `734 893`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`437`);
  });

  it("예제 2", async () => {
    const input = `221 231`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`132`);
  });

  it("예제 3", async () => {
    const input = `839 237`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`938`);
  });
});
