import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "5622";

describe("백준 5622번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `WA`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`13`);
  });

  it("예제 2", async () => {
    const input = `UNUCIC`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`36`);
  });
});
