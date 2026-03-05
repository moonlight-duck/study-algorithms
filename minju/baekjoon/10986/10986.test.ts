import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10986";

describe("백준 10986번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5 3
1 2 3 1 2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`7`);
  });
});
