import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2588";

describe("백준 2588번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `472
385`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2360
3776
1416
181720`);
  });
});
