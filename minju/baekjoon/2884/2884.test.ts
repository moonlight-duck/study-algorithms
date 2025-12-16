import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2884";

describe("백준 2884번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `10 10`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`9 25`);
  });
  it("예제 2", async () => {
    const input = `0 30`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`23 45`);
  });
  it("예제 3", async () => {
    const input = `23 40`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`22 55`);
  });
});
