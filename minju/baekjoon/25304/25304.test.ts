import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "25304";

describe("백준 25304번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `260000
4
20000 5
30000 2
10000 6
5000 8`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`Yes`);
  });
  it("예제 2", async () => {
    const input = `250000
4
20000 5
30000 2
10000 6
5000 8`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`No`);
  });
});
