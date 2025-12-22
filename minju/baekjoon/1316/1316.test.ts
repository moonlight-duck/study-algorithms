import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1316";

describe("백준 1316번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `3
happy
new
year`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`3`);
  });
  it("예제 2", async () => {
    const input = `4
aba
abab
abcabc
a`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1`);
  });
  it("예제 3", async () => {
    const input = `5
ab
aa
aca
ba
bb`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`4`);
  });
  it("예제 4", async () => {
    const input = `2
yzyzy
zyzyz`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`0`);
  });
  it("예제 5", async () => {
    const input = `1
z`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`1`);
  });
  it("예제 6", async () => {
    const input = `9
aaa
aaazbz
babb
aazz
azbz
aabbaa
abacc
aba
zzaz`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`2`);
  });
});
