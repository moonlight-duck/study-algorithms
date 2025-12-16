import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2562";

describe("백준 2562번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3
29
38
12
57
74
40
85
61`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`85
8`);
  });
});
