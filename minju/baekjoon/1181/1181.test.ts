import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1181";

describe("백준 1181번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`i
im
it
no
but
more
wait
wont
yours
cannot
hesitate`);
  });
});
