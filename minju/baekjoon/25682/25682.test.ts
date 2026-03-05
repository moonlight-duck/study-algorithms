import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "25682";

describe("백준 25682번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `4 4 3
BBBB
BBBB
BBBW
BBWB`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2`);
  });
  //   it("예제 2", async () => {
  //     const input = `8 8 8
  // WBWBWBWB
  // BWBWBWBW
  // WBWBWBWB
  // BWBBBWBW
  // WBWBWBWB
  // BWBWBWBW
  // WBWBWBWB
  // BWBWBWBW`;

  //     const result = await runBaekjoonTest(input, FILE_NAME);
  //     expect(result).toBe(`1`);
  //   });
  //   it("예제 3", async () => {
  //     const input = `10 13 10
  // BBBBBBBBWBWBW
  // BBBBBBBBBWBWB
  // BBBBBBBBWBWBW
  // BBBBBBBBBWBWB
  // BBBBBBBBWBWBW
  // BBBBBBBBBWBWB
  // BBBBBBBBWBWBW
  // BBBBBBBBBWBWB
  // WWWWWWWWWWBWB
  // WWWWWWWWWWBWB`;

  //     const result = await runBaekjoonTest(input, FILE_NAME);
  //     expect(result).toBe(`30`);
  //   });
  //   it("예제 4", async () => {
  //     const input = `9 23 9
  // BBBBBBBBBBBBBBBBBBBBBBB
  // BBBBBBBBBBBBBBBBBBBBBBB
  // BBBBBBBBBBBBBBBBBBBBBBB
  // BBBBBBBBBBBBBBBBBBBBBBB
  // BBBBBBBBBBBBBBBBBBBBBBB
  // BBBBBBBBBBBBBBBBBBBBBBB
  // BBBBBBBBBBBBBBBBBBBBBBB
  // BBBBBBBBBBBBBBBBBBBBBBB
  // BBBBBBBBBBBBBBBWWWWWWWW`;

  //     const result = await runBaekjoonTest(input, FILE_NAME);
  //     expect(result).toBe(`40`);
  //   });
});
