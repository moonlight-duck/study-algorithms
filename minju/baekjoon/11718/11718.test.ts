import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "11718";

describe("백준 11718번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `Hello
Baekjoon
Online Judge`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`Hello
Baekjoon
Online Judge`);
  });
});
