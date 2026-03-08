import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1541";

describe("백준 1541번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `55-50+40`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("-35");
  });

  it("예제 2", async () => {
    const input = `10+20+30+40`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("100");
  });
  it("예제 3", async () => {
    const input = `00009-00009`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("0");
  });
});
