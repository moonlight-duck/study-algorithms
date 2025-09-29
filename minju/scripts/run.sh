#!/bin/bash

# 백준 문제 실행 스크립트
# 사용법: ./scripts/run.sh 1406
# 또는: pnpm ts-node 1406

if [ $# -eq 0 ]; then
    echo "사용법: $0 <문제번호>"
    echo "예시: $0 1406"
    exit 1
fi

PROBLEM_NUMBER=$1


# 폴더가 존재하는지 확인
if [ -d "$PROBLEM_NUMBER" ]; then
    # 폴더가 있으면 폴더 안의 파일 실행
    FILE_PATH="${PROBLEM_NUMBER}/${PROBLEM_NUMBER}.ts"
else
    # 폴더가 없으면 직접 파일 실행
    FILE_PATH="${PROBLEM_NUMBER}.ts"
fi

# 파일이 존재하는지 확인
if [ ! -f "$FILE_PATH" ]; then
    echo "오류: 파일을 찾을 수 없습니다: $FILE_PATH"
    exit 1
fi

# ts-node로 실행
node --loader ts-node/esm "$FILE_PATH"
