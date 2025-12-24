import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2292";

describe("백준 2292번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `13`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("3");
  });
  it("예제 2", async () => {
    const input = `37`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("4");
  });
});
