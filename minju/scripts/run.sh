#!/bin/bash

if [ $# -eq 0 ]; then
    echo "사용법:"
    echo "  1. 백준: $0 <문제번호>"
    echo "  2. 대회: $0 <폴더명> <문제명>"
    exit 1
fi

# 1. 탐색할 '대상 경로(TARGET_PATH)'와 '파일명(FILE_NAME)' 결정
if [ $# -eq 2 ]; then
    # 인자가 2개인 경우 (예: pnpm run:con 2025_KUPC A)
    # TARGET_PATH = "2025_KUPC/A"
    # FILE_NAME = "A"
    TARGET_PATH="$1/$2"
    FILE_NAME="$2"
else
    # 인자가 1개인 경우 (예: pnpm run:ba 1000)
    # TARGET_PATH = "1000"
    # FILE_NAME = "1000"
    TARGET_PATH="$1"
    FILE_NAME="$1"
fi

# 2. 대상 경로가 '폴더'인지 확인하여 최종 실행 파일 경로 설정
if [ -d "$TARGET_PATH" ]; then
    # 폴더가 존재하면 -> {경로}/{파일명}.ts
    # 예: 2025_KUPC/A/A.ts
    FILE_PATH="${TARGET_PATH}/${FILE_NAME}.ts"
else
    # 폴더가 없으면 -> {경로}.ts
    # 예: 2025_KUPC/A.ts
    FILE_PATH="${TARGET_PATH}.ts"
fi

# 3. 파일 존재 여부 최종 확인
if [ ! -f "$FILE_PATH" ]; then
    echo "❌ 오류: 파일을 찾을 수 없습니다."
    echo "   경로: $FILE_PATH"
    echo "   현재 위치: $(pwd)"
    exit 1
fi

# 4. ts-node로 실행
node --loader ts-node/esm "$FILE_PATH"