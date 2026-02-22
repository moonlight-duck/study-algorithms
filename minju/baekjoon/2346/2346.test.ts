import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2346";

describe("백준 2346번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5
3 2 1 -3 -1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("1 4 5 3 2");
  });
});
