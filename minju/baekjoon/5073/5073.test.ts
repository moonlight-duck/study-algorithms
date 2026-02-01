import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "5073";

describe("백준 5073번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `7 7 7
6 5 4
3 2 5
6 2 6
0 0 0`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`Equilateral
Scalene
Invalid
Isosceles`);
  });
});
