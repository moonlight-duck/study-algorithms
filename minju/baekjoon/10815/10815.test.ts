import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10815";

describe("백준 10815번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1 0 0 1 1 0 0 1`);
  });
});
