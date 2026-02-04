import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "11866";

describe("백준 11866번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `7 3`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`<3, 6, 2, 7, 5, 1, 4>`);
  });
});
