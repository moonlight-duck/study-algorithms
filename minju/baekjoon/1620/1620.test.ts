import { describe, it, expect } from "vitest";

import { runBaekjoonTest } from "../../testHelper.js";

const FILE_NAME = "1620";

describe("백준 1620번 - 공식 테스트 케이스", async () => {
  it("예제 1", async () => {
    const input = `26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna`;

    const result = await runBaekjoonTest(input, FILE_NAME);
    expect(result).toBe(`Pikachu
26
Venusaur
16
14`);
  });
});
