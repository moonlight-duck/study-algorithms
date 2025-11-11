import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2579";

describe("백준 2579번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `6
  10
  20
  15
  25
  10
  20`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("75");
  });

  it("예제 2 - 추가", async () => {
    const input = `1
10`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("10");
  });

  it("예제 3 - 추가", async () => {
    const input = `2
  10
  20`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("30");
  });

  it("예제 4 - 추가", async () => {
    const input = `3
  10
  20
  30`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("50");
  });
});
