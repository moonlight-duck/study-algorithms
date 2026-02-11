import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "9184";

describe("백준 9184번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `1 1 1
2 2 2
10 4 6
50 50 50
-1 7 18
-1 -1 -1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`w(1, 1, 1) = 2
w(2, 2, 2) = 4
w(10, 4, 6) = 523
w(50, 50, 50) = 1048576
w(-1, 7, 18) = 1`);
  });
});
