import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "7562";

describe("백준 7562번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3
8
0 0
7 0
100
0 0
30 50
10
1 1
1 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`5
28
0`);
  });
});
