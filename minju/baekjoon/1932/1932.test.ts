import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1932";

describe("백준 1932번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("30");
  });
});
