import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2156";

describe("백준 2156번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `6
6
10
13
9
8
1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`33`);
  });
});
