import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "9095";

describe("백준 9095번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3
4
7
10`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`7
44
274`);
  });
});
