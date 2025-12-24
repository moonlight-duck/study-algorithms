import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2745";

describe("백준 2745번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `ZZZZZ 36`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`60466175`);
  });
});
