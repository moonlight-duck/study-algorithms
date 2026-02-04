import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "4949";

describe("백준 4949번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`yes
yes
no
no
no
yes
yes`);
  });
});
