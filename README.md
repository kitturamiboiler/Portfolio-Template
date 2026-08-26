# m00n — Frontend Developer Portfolio

프론트엔드 개발자 `m00n`의 포트폴리오입니다. 오마고치 프로젝트의 프론트엔드 의사결정과 작업 방식, 공개 프로젝트를 보여줍니다.

![m00n — Frontend Developer](./public/assets/og.png)

[예시 배포 주소](https://kitturamiboiler.github.io/frontend-portfolio/)

## 특징

- 콘텐츠를 쉽게 교체할 수 있는 반응형 단일 페이지 구성
- `public/data.js` 한 파일에서 문구, 기술, 프로젝트, 링크 관리
- 라이트/다크 테마, 반응형 레이아웃, 키보드 탐색, 모션 감소 설정 지원
- 인쇄 및 PDF 저장에 맞춘 별도 레이아웃
- 전체 포트폴리오 PDF와 2페이지 이력서 PDF 다운로드
- Open Graph 공유 이미지와 메타데이터 포함

## 템플릿으로 시작하기

GitHub 저장소의 `Code` 버튼에서 clone URL을 복사한 뒤 원하는 작업 폴더에서 실행합니다.

```bash
git clone COPIED_REPOSITORY_URL
cd CLONED_REPOSITORY_DIRECTORY
npm ci
npm run dev -- --port 4173
```

브라우저에서 `http://localhost:4173`을 엽니다.

원본 저장소를 직접 클론한 뒤 자신의 새 GitHub 저장소로 올릴 경우에는 빈 저장소를 만든 다음 remote를 연결합니다.

```bash
git remote rename origin upstream
git remote add origin https://github.com/YOUR_GITHUB_ID/YOUR_REPOSITORY.git
git remote -v
git push -u origin main
```

`YOUR_GITHUB_ID`와 `YOUR_REPOSITORY`는 자신의 값으로 바꿉니다. Fork 또는 `Use this template`으로 만든 자신의 저장소를 클론했다면 `origin`이 이미 자신의 저장소이므로 remote를 다시 설정하지 않습니다.

현재 포함된 이름, 연락처, 프로젝트, 사례 연구, PDF와 이미지는 예시입니다. 배포 전에 자신의 실제 자료로 교체해야 합니다. 전체 교체 목록과 AI에 전달할 요청문은 [포트폴리오 템플릿 사용 가이드](./docs/TEMPLATE_USAGE.md)를 참고하세요.

## 수정하기

이름, 소개, 기술, 프로젝트, 연락처는 `public/data.js`에서 바꿉니다. 섹션 순서는 `sections` 배열의 순서를 그대로 따릅니다.

화면 구조는 `app/page.tsx`와 `public/assets/app.js`, 시각 디자인은 `app/globals.css`, 공유용 정보는 `app/layout.tsx`에서 관리합니다.

## 로컬에서 보기

```bash
npm ci
npm run dev -- --port 4173
```

브라우저에서 `http://localhost:4173`을 엽니다.

## 배포

프로덕션 출력은 `npm run build`로 생성합니다. 이 프로젝트는 OpenAI Sites의 배포 메타데이터와 Cloudflare Worker 호환 출력을 포함합니다.

GitHub Pages용 정적 출력은 `npm run build:pages`로 `_site`에 생성됩니다. 새 저장소에서 다음 값을 자신의 주소로 먼저 바꿉니다.

- `scripts/build-pages.mjs`의 `pagesUrl`
- `app/layout.tsx`의 `metadataBase`
- 이 README의 예시 배포 주소

GitHub 저장소의 `Settings → Pages → Build and deployment → Source`에서 `GitHub Actions`를 선택합니다. 그다음 `main` 브랜치에 푸시하면 포함된 [Pages workflow](./.github/workflows/pages.yml)가 자동으로 빌드하고 배포합니다. 템플릿 원본인 `kitturamiboiler/Portfolio-Template`에서는 불필요한 배포를 막기 위해 이 job을 건너뛰고, 다른 사용자가 만든 저장소에서만 실행됩니다.

일반 저장소의 주소는 `https://YOUR_GITHUB_ID.github.io/YOUR_REPOSITORY/` 형식입니다. 저장소 이름 자체가 `YOUR_GITHUB_ID.github.io`라면 주소는 `https://YOUR_GITHUB_ID.github.io/`가 됩니다. remote 교체와 Pages 배포의 자세한 절차는 [사용 가이드의 새 저장소 및 GitHub Pages 항목](./docs/TEMPLATE_USAGE.md#7-새-저장소-remote-연결하기)을 참고하세요.
