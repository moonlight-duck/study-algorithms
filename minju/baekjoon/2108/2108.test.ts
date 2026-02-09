import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2108";

describe("백준 2108번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5
1
3
8
-2
2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2
2
1
10`);
  });

  it("예제 2", async () => {
    const input = `1
4000`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`4000
4000
4000
0`);
  });

  it("예제 3", async () => {
    const input = `5
-1
-2
-3
-1
-2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`-2
-2
-1
2`);
  });

  it("예제 4", async () => {
    const input = `3
0
0
-1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`0
0
0
1`);
  });
});
