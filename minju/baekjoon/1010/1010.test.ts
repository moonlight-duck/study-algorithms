import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1010";

describe("백준 1010번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3
2 2
1 5
13 29`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1
5
67863915`);
  });
});
