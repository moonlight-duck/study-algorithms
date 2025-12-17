import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "5597";

describe("백준 5597번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3
1
4
5
7
9
6
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2
8`);
  });

  it("예제 2", async () => {
    const input = `9
30
6
12
10
20
21
11
7
5
28
4
18
29
17
19
27
13
16
26
14
23
22
15
3
1
24
25`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2
8`);
  });
});
