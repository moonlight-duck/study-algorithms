import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "26069";

describe("백준 26069번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `12
bnb2011 chansol
chansol chogahui05
chogahui05 jthis
jthis ChongChong
jthis jyheo98
jyheo98 lms0806
lms0806 pichulia
pichulia pjshwa
pjshwa r4pidstart
r4pidstart swoon
swoon tony9402
tony9402 bnb2011`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`10`);
  });
});
