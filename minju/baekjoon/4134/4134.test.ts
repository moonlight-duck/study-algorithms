import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "4134";

describe("백준 4134번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3
6
20
100`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`7
23
101`);
  });
});
