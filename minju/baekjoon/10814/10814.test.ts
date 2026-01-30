import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "10814";

describe("백준 10814번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3
21 Junkyu
21 Dohyun
20 Sunyoung`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`20 Sunyoung
21 Junkyu
21 Dohyun`);
  });
});
