import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10798";

describe("백준 10798번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `ABCDE
abcde
01234
FGHIJ
fghij`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`Aa0FfBb1GgCc2HhDd3IiEe4Jj`);
  });
  it("예제 2", async () => {
    const input = `AABCDD
afzz
09121
a8EWg6
P5h3kx`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`Aa0aPAf985Bz1EhCz2W3D1gkD6x`);
  });

  it("예제 3", async () => {
    const input = `AABC
afzz
09121
a8EWg6
P5h3kx`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`Aa0aPAf985Bz1EhCz2W31gk6x`);
  });
});
