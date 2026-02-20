import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "16139";

describe("백준 16139번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `seungjaehwang
4
a 0 5
a 0 6
a 6 10
a 7 10`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`0
1
2
1`);
  });
});
