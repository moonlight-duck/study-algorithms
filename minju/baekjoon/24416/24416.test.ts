import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "24416";

describe("백준 24416번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`5 3`);
  });

  it("예제 2", async () => {
    const input = `30`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`832040 28`);
  });
});
