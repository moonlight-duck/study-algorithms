import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10816";

describe("백준 10816번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3 0 0 1 2 0 0 2`);
  });
});
