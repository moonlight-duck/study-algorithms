import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1269";

describe("백준 1269번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3 5
1 2 4
2 3 4 5 6`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`4`);
  });
});
