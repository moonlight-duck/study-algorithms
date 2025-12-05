import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2525";

describe("백준 2525번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `14 30
20`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`14 50`);
  });
  it("예제 2", async () => {
    const input = `17 40
80`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`19 0`);
  });
  it("예제 3", async () => {
    const input = `23 48
25`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`0 13`);
  });
});
