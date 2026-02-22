import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1735";

describe("백준 1735번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `2 7
3 5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`31 35`);
  });
});
