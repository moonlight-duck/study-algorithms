import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "4779";

describe("백준 4779번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `0
1
3
2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`-
- -
- -   - -         - -   - -
- -   - -`);
  });
});
