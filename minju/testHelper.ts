/**
 * 백준 문제 테스트 헬퍼 함수
 */
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);


export async function runBaekjoonTest(
  input: string,
  fileName: string | undefined
): Promise<string> {
  try {
    const currentFolder = process.cwd();
    let command = "cd /Users/takminjoo/study/study-algorithms/minju &&";
    if (currentFolder.includes("baekjoon")) {
      command += ` echo "${input}" | pnpm run:ba ${fileName}`;
    } else if (currentFolder.includes("programmers")) {
      command += ` echo "${input}" | pnpm run:pro ${fileName}`;
    }

    const { stdout } = await execAsync(command);

    // 결과 확인 (마지막 줄이 최종 결과)
    const result = stdout.trim().split("\n").pop();

    if (!result) {
      throw new Error("실행 결과가 비어있습니다");
    }

    return result;
  } catch (error) {
    throw new Error(`테스트 실행 실패: ${error}`);
  }
}
