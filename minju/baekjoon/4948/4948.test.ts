import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "4948";

describe("백준 4948번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `1
10
13
100
1000
10000
100000
0`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1
4
3
21
135
1033
8392`);
  });
});
