import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1934";

describe("백준 1934번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3
1 45000
6 10
13 17`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`45000
30
221`);
  });
});
