import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "11729";

describe("백준 11729번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`7
1 3
1 2
3 2
1 3
2 1
2 3
1 3`);
  });
});
