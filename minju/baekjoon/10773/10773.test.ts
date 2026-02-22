import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10773";

describe("백준 10773번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `4
3
0
4
0`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`0`);
  });
  it("예제 2", async () => {
    const input = `10
1
3
5
4
0
0
7
0
0
6`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`7`);
  });
});
