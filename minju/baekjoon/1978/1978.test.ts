import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1978";

describe("백준 1978번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `4
1 3 5 7`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3`);
  });
  it("예제 2", async () => {
    const input = `5
1 3 5 7 11`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`4`);
  });
});
