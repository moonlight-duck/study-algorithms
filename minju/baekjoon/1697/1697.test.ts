import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1697";

describe("백준 1697번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = "5 17";

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("4");
  });
});
