import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "9063";

describe("백준 9063번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3
20 24
40 21
10 12`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`360`);
  });
  it("예제 2", async () => {
    const input = `1
15 13`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`0`);
  });
  it("예제 3", async () => {
    const input = `4
2 1
3 2
5 2
3 4`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`9`);
  });
});
