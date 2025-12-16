import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "3052";

describe("백준 3052번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `1
2
3
4
5
6
7
8
9
10`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`10`);
  });

  it("예제 2", async () => {
    const input = `42
84
252
420
840
126
42
84
420
126`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1`);
  });

  it("예제 3", async () => {
    const input = `39
40
41
42
43
44
82
83
84
85`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`6`);
  });
});
