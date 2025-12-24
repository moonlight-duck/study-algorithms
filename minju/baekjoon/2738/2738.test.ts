import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2738";

describe("백준 2738번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`4 4 4
6 6 6
5 6 100`);
  });
});
