import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2042";

describe("백준 2042번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5 2 2
1
2
3
4
5
1 3 6
2 2 5
1 5 2
2 3 5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`17
12`);
  });
});
