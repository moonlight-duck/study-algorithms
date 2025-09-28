/**
 * 백준 문제 테스트 헬퍼 함수
 */
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

/**
 * 백준 문제를 실행하고 결과를 반환하는 함수
 * @param input 백준 형식의 입력 데이터 (줄바꿈으로 구분된 문자열)
 * @param scriptPath 실행할 스크립트 경로 (예: "1406/1406.ts")
 * @returns 실행 결과 (마지막 줄)
 */
export async function runBaekjoonTest(
  input: string,
  scriptPath: string
): Promise<string> {
  try {
    // 백준 입력 데이터를 stdin으로 전달하여 스크립트 실행
    const command = `cd /Users/takminjoo/study/study-algorithms/minju && echo "${input}" | pnpm run ts-node ${scriptPath}`;

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
