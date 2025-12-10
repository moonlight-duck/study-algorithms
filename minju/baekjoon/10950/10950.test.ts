import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10950";

describe("백준 10950번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5
1 1
2 3
3 4
9 8
5 2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2
5
7
17
7`);
  });
});
