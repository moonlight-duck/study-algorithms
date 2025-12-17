import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2675";

describe("백준 2675번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `2
3 ABC
5 /HTP`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`AAABBBCCC
/////HHHHHTTTTTPPPPP`);
  });
});
