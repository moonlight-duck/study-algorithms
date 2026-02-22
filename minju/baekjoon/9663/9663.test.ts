import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "9663";

describe("백준 9663번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `8`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`92`);
  });
});
