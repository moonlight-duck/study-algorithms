import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "18258";

describe("백준 18258번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1
2
2
0
1
2
-1
0
1
-1
0
3`);
  });
});
