import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "11047";

describe("백준 11047번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`6`);
  });

  it("예제 2", async () => {
    const input = `10 4790
1
5
10
50
100
500
1000
5000
10000
50000`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`12`);
  });
});
