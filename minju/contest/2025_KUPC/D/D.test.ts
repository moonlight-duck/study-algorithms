import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../../testHelper.js";

const FILE_NAME = "2025_KUPC/D";

describe("2025_KUPC D번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `2
1 2
1 2 2 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`YES`);
  });

  it("예제 2", async () => {
    const input = `3
1 2 1
1 2 1 2 3 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`NO`);
  });

  it("예제 3", async () => {
    const input = `3
1 3 2
1 3 3 3 1 2`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`NO`);
  });
});
