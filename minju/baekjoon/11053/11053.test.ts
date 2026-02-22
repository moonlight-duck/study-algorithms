import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "11053";

describe("백준 11053번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `6
10 20 10 30 20 50`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`4`);
  });
});
