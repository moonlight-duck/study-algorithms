import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "7785";

describe("백준 7785번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `4
Baha enter
Askar enter
Baha leave
Artem enter`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`Askar
Artem`);
  });
});
