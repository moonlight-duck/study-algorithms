import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "11659";

describe("백준 11659번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5 3
5 4 3 2 1
1 3
2 4
5 5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`12
9
1`);
  });
});
