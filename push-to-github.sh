#!/bin/bash

# GitHub 저장소 URL 설정 (필요시 수정하세요)
REPO_URL="https://github.com/hwjs1/gongryong-pay.git"

# 원격 저장소 제거 및 재설정
git remote remove origin 2>/dev/null
git remote add origin $REPO_URL

# 강제 push (기존 내용 덮어쓰기)
git push -f origin main

echo "GitHub에 성공적으로 배포되었습니다!"
echo "GitHub Actions가 자동으로 GitHub Pages에 배포를 시작합니다."
echo "몇 분 후 https://hwjs1.github.io/gongryong-pay/ 에서 확인하실 수 있습니다."
