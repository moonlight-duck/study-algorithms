import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "25305";

describe("백준 25305번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5 2
100 76 85 93 98`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`98`);
  });
});
