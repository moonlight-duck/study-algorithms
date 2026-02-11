import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "14889";

describe("백준 14889번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `4
0 1 2 3
4 0 5 6
7 1 0 2
3 4 5 0`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`0`);
  });
  it("예제 2", async () => {
    const input = `6
0 1 2 3 4 5
1 0 2 3 4 5
1 2 0 3 4 5
1 2 3 0 4 5
1 2 3 4 0 5
1 2 3 4 5 0`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2`);
  });

  it("예제 3", async () => {
    const input = `8
0 5 4 5 4 5 4 5
4 0 5 1 2 3 4 5
9 8 0 1 2 3 1 2
9 9 9 0 9 9 9 9
1 1 1 1 0 1 1 1
8 7 6 5 4 0 3 2
9 1 9 1 9 1 0 9
6 5 4 3 2 1 9 0`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1`);
  });
});
