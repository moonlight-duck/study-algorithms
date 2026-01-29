import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10101";

describe("백준 10101번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `60
70
50`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`Scalene`);
  });
});
