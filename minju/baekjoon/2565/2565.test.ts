import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2565";

describe("백준 2565번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `8
1 8
3 9
2 2
4 1
6 4
10 10
9 7
7 6`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3`);
  });
});
