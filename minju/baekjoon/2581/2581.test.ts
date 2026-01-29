import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2581";

describe("백준 2581번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `60
100`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`620
61`);
  });
  it("예제 2", async () => {
    const input = `64
65`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`-1`);
  });
});
