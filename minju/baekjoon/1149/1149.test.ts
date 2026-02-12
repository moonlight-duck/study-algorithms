import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1149";

describe("백준 1149번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3
  26 40 83
  49 60 57
  13 89 99`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`96`);
  });
  it("예제 2", async () => {
    const input = `3
  1 100 100
  100 1 100
  100 100 1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3`);
  });
  it("예제 3", async () => {
    const input = `3
  1 100 100
  100 100 100
  1 100 100`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`102`);
  });
  it("예제 4", async () => {
    const input = `6
  30 19 5
  64 77 64
  15 19 97
  4 71 57
  90 86 84
  93 32 91`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`208`);
  });
  it("예제 5", async () => {
    const input = `8
71 39 44
32 83 55
51 37 63
89 29 100
83 58 11
65 13 15
47 25 29
60 66 19`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`253`);
  });
});
