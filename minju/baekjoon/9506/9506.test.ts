import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "9506";

describe("백준 9506번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `6
12
28
-1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`6 = 1 + 2 + 3
12 is NOT perfect.
28 = 1 + 2 + 4 + 7 + 14`);
  });
});
