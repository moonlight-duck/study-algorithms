import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "9252";

describe("백준 9252번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `ACAYKP
CAPCAK`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`4
ACAK`);
  });
});
