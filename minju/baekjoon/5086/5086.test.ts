import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "5086";

describe("백준 5086번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `8 16
32 4
17 5
0 0`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`factor
multiple
neither`);
  });
});
