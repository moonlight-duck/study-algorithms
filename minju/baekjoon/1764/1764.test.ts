import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1764";

describe("백준 1764번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2
baesangwook
ohhenrie`);
  });
});
