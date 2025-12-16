import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../../testHelper.js";

const FILE_NAME = "2025_KUPC/C";

describe("2025_KUPC C번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `4 5 1 2 2 4 2 3 1 5 3 2 2 4 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`6`);
  });

  it("예제 2", async () => {
    const input = `3 2 1 4 4 4 2 3 1 3 2 2 4 1 5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`5`);
  });

  it("예제 3", async () => {
    const input = `5 5 5 5 5 5 5 5 5 5 5 5 5 5 5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`6`);
  });

  it("예제 4", async () => {
    const input = `100 5 5 5 5 5 5 5 5 5 5 5 5 5 5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`101`);
  });
});
