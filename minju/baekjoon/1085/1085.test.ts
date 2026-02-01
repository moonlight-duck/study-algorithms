import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1085";

describe("백준 1085번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `6 2 10 3`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1`);
  });
  it("예제 2", async () => {
    const input = `1 1 5 5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1`);
  });
  it("예제 3", async () => {
    const input = `653 375 1000 1000`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`347`);
  });
  it("예제 4", async () => {
    const input = `161 181 762 375
`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`161`);
  });
});
