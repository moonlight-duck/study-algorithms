import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1912";

describe("백준 1912번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `10
10 -4 3 1 5 6 -35 12 21 -1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("33");
  });

  it("예제 2", async () => {
    const input = `10
2 1 -4 3 4 -4 6 5 -5 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("14");
  });

  it("예제 3", async () => {
    const input = `5
-1 -2 -3 -4 -5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("-1");
  });
});
