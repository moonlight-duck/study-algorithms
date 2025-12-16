import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10807";

describe("백준 10807번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `11
1 4 1 2 4 2 4 2 3 4 4
2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3`);
  });

  it("예제 2", async () => {
    const input = `11
1 4 1 2 4 2 4 2 3 4 4
5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`0`);
  });
});
