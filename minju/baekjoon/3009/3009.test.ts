import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "3009";

describe("백준 3009번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5 5
5 7
7 5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`7 7`);
  });

  it("예제 2", async () => {
    const input = `30 20
10 10
10 20`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`30 10`);
  });
});
