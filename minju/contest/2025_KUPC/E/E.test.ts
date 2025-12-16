import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../../testHelper.js";

const FILE_NAME = "2025_KUPC/E";

describe("2025_KUPC E번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `6 2
2
1 6`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`YES`);
  });

  it("예제 2", async () => {
    const input = `6 2
4
1 4 5 6`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`NO`);
  });

  it("예제 3", async () => {
    const input = `9 3
4
2 3 4 9`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`YES`);
  });

  it("예제 4", async () => {
    const input = `7 6
1
1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`NO`);
  });

  it("예제 5", async () => {
    const input = `5 2
2
2 4`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`NO`);
  });
});
