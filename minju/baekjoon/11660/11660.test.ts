import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "11660";

describe("백준 11660번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `4 3
1 2 3 4
2 3 4 5
3 4 5 6
4 5 6 7
2 2 3 4
3 4 3 4
1 1 4 4`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`27
6
64`);
  });
  it("예제 2", async () => {
    const input = `2 4
1 2
3 4
1 1 1 1
1 2 1 2
2 1 2 1
2 2 2 2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1
2
3
4`);
  });
});
