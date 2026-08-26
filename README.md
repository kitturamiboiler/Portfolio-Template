# m00n — Frontend Developer Portfolio

프론트엔드 개발자 `m00n`의 포트폴리오입니다. 오마고치 프로젝트의 프론트엔드 의사결정과 작업 방식, 공개 프로젝트를 보여줍니다.

![m00n — Frontend Developer](./public/assets/og.png)

배포 주소: `https://kitturamiboiler.github.io/frontend-portfolio/`

## 특징

- React/Vinext 기반의 배포 가능한 단일 페이지 구성
- `public/data.js` 한 파일에서 문구, 기술, 프로젝트, 링크 관리
- 라이트/다크 테마, 반응형 레이아웃, 키보드 탐색, 모션 감소 설정 지원
- 인쇄 및 PDF 저장에 맞춘 별도 레이아웃
- 전체 포트폴리오 PDF와 2페이지 이력서 PDF 다운로드
- Open Graph 공유 이미지와 메타데이터 포함

## 수정하기

이름, 소개, 기술, 프로젝트, 연락처는 `public/data.js`에서 바꿉니다. 섹션 순서는 `sections` 배열의 순서를 그대로 따릅니다.

화면 구조는 `app/page.tsx`와 `public/assets/app.js`, 시각 디자인은 `app/globals.css`, 공유용 정보는 `app/layout.tsx`에서 관리합니다.

## 로컬에서 보기

```bash
npm install
npm run dev -- --port 4173
```

브라우저에서 `http://localhost:4173`을 엽니다.

## 배포

프로덕션 출력은 `npm run build`로 생성합니다. 이 프로젝트는 OpenAI Sites의 배포 메타데이터와 Cloudflare Worker 호환 출력을 포함합니다.

GitHub Pages용 정적 출력은 `npm run build:pages`로 `_site`에 생성됩니다. `main` 브랜치에 푸시하면 GitHub Actions가 자동으로 배포합니다.
