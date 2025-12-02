import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../../testHelper.js";

const FILE_NAME = `2025_KUPC/A`;

describe("KUPC A번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `4 3
4
1 3
2 1
-1 2
4 -3`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`0
1
1
0`);
  });
});
