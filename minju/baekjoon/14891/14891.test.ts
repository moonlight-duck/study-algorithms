import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "14891";

describe("백준 14891번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `10101111
01111101
11001110
00000010
2
3 -1
1 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`7`);
  });

  it("예제 2", async () => {
    const input = `11111111
11111111
11111111
11111111
3
1 1
2 1
3 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`15`);
  });
  it("예제 3", async () => {
    const input = `10001011
10000011
01011011
00111101
5
1 1
2 1
3 1
4 1
1 -1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`6`);
  });
  it("예제 4", async () => {
    const input = `10010011
01010011
11100011
01010101
8
1 1
2 1
3 1
4 1
1 -1
2 -1
3 -1
4 -1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`5`);
  });
});
