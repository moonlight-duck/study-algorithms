import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2739";

describe("백준 2739번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18`);
  });
});
