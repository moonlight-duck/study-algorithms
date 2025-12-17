import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10810";

describe("백준 10810번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5 4
1 2 3
3 4 4
1 4 1
2 2 2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1 2 1 1 0`);
  });
});
