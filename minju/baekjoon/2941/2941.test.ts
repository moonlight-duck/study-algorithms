import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2941";

describe("백준 2941번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `ljes=njak`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`6`);
  });

  it("예제 2", async () => {
    const input = `ddz=z=`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3`);
  });

  it("예제 3", async () => {
    const input = `nljj`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3`);
  });
  it("예제 4", async () => {
    const input = `c=c=`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2`);
  });
  it("예제 5", async () => {
    const input = `dz=ak`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3`);
  });
});
