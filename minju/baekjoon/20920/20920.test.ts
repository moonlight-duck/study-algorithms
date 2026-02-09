import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "20920";

describe("백준 20920번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `7 4
apple
ant
sand
apple
append
sand
sand`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`sand
apple
append`);
  });

  it("예제 2", async () => {
    const input = `12 5
appearance
append
attendance
swim
swift
swift
swift
mouse
wallet
mouse
ice
age`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`swift
mouse
appearance
attendance
append
wallet`);
  });
});
