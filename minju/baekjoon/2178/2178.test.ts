import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2178";

describe("백준 2178번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `4 6
101111
101010
101011
111011`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("15");
  });

  it("예제 2", async () => {
    const input = `4 6
110110
110110
111111
111101`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("9");
  });

  it("예제 3", async () => {
    const input = `2 25
1011101110111011101110111
1110111011101110111011101`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("38");
  });

  it("예제 4", async () => {
    const input = `7 7
1011111
1110001
1000001
1000001
1000001
1000001
1111111`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("13");
  });
});
