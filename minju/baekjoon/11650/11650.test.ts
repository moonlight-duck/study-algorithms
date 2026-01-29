import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "11650";

describe("백준 11650번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5
3 4
1 1
1 -1
2 2
3 3`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1 -1
1 1
2 2
3 3
3 4`);
  });
});
