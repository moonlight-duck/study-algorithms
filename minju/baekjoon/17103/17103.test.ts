import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "17103";

describe("백준 17103번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5
6
8
10
12
100`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1
1
2
1
6`);
  });
});
