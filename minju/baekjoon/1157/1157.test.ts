import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1157";

describe("백준 1157번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `Mississipi`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`?`);
  });
  it("예제 2", async () => {
    const input = `zZa`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`Z`);
  });
  it("예제 3", async () => {
    const input = `z`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`Z`);
  });
  it("예제 4", async () => {
    const input = `baaa`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`A`);
  });
});
