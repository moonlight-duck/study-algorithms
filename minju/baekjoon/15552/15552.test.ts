import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "15552";

describe("백준 15552번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5
1 1
12 34
5 500
40 60
1000 1000`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2
46
505
100
2000`);
  });
});
