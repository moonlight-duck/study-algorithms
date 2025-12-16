import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10871";

describe("백준 10871번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `10 5
1 10 4 9 2 3 8 5 7 6`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1 4 2 3`);
  });
});
