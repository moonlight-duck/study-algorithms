import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "7576";

describe("백준 7576번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `6 4
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`8`);
  });

  it("예제 2", async () => {
    const input = `6 4
0 -1 0 0 0 0
-1 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`-1`);
  });

  it("예제 3", async () => {
    const input = `6 4
1 -1 0 0 0 0
0 -1 0 0 0 0
0 0 0 0 -1 0
0 0 0 0 -1 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`6`);
  });

  it("예제 4", async () => {
    const input = `5 5
-1 1 0 0 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 -1 -1 -1 0
0 0 0 0 0`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`14`);
  });

  it("예제 5", async () => {
    const input = `2 2
1 -1
-1 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`0`);
  });
});
