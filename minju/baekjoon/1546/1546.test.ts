import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1546";

describe("백준 1546번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3
40 80 60`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("75.0");
  });
  it("예제 2", async () => {
    const input = `3
10 20 30`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("66.666667");
  });
  it("예제 3", async () => {
    const input = `4
1 100 100 100`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("75.25");
  });

  it("예제 4", async () => {
    const input = `5
1 2 4 8 16`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("38.75");
  });

  it("예제 5", async () => {
    const input = `2
3 10`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("65.0");
  });
  it("예제 6", async () => {
    const input = `4
10 20 0 100`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("32.5");
  });
  it("예제 7", async () => {
    const input = `1
50`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("100");
  });
  it("예제 8", async () => {
    const input = `9
10 20 30 40 50 60 70 80 90`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe("55.55555555555556");
  });
});
