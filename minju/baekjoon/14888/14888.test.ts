import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "14888";

describe("백준 14888번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `2
5 6
0 0 1 0`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`30 30`);
  });
  it("예제 2", async () => {
    const input = `3
3 4 5
1 0 1 0`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`35 17`);
  });

  it("예제 3", async () => {
    const input = `6
1 2 3 4 5 6
2 1 1 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`54 -24`);
  });
});
