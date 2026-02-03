import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2485";

describe("백준 2485번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `4
1
3
7
13`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3`);
  });
  it("예제 2", async () => {
    const input = `4
2
6
12
18`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`5`);
  });
});
