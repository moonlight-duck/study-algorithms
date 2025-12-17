import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10818";

describe("백준 10818번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5
20 10 35 30 7`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`7 35`);
  });
});
