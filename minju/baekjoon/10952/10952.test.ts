import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10952";

describe("백준 10952번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `1 1
2 3
3 4
9 8
5 2
0 0`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2
5
7
17
7`);
  });
});
