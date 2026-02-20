import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "12865";

describe("백준 12865번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `4 7
6 13
4 8
3 6
5 12`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`14`);
  });
});
