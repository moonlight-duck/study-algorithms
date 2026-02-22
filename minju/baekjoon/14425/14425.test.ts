import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "14425";

describe("백준 14425번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5 11
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
baekjoon
codeplus
codeminus
startlink
starlink
sundaycoding
codingsh
codinghs
sondaycoding
startrink
icerink`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`4`);
  });
});
