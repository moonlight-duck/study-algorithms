import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "9012";

describe("백준 9012번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`NO
NO
YES
NO
YES
NO`);
  });
  it("예제 2", async () => {
    const input = `3
((
))
())(()`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`NO
NO
NO`);
  });
});
