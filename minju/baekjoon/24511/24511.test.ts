import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "24511";

describe("백준 24511번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `4
0 1 1 0
1 2 3 4
3
2 4 7`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`4 1 2`);
  });

  it("예제 2", async () => {
    const input = `5
1 1 1 1 1
1 2 3 4 5
3
1 3 5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1 3 5`);
  });
});
