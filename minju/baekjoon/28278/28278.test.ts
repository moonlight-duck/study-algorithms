import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "28278";

describe("백준 28278번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `9
4
1 3
1 5
3
2
5
2
2
5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1
2
5
3
3
-1
-1`);
  });
});
