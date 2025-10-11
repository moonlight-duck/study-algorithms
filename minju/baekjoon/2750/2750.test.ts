/**
 * 백준 2750 정렬 - Vitest 테스트
 */
import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "2750";

describe("백준 2750번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `5
5
2
3
4
1`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1
2
3
4
5`);
  });

  it("예제 2 - 입력값이 모두 같을 때", async () => {
    const input = `5
5
5
5
5
5`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`5`);
  });
});
