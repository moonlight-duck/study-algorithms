import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10868";

describe("백준 10868번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `10 4
75
30
100
38
50
51
52
20
81
5
1 10
3 5
6 9
8 10`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`5
38
20
5`);
  });
});
