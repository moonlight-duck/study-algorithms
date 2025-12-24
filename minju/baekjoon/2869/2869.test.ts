import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2869";

describe("백준 2869번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = "2 1 5";

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("4");
  });

  it("예제 2", async () => {
    const input = `5 1 6`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("2");
  });

  it("예제 3", async () => {
    const input = "100 99 1000000000";

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("999999901");
  });
});
