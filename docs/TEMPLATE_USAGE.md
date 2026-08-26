# 공개 포트폴리오 템플릿 사용 가이드

이 저장소에는 화면을 확인할 수 있도록 예시 작성자의 이름, 연락처, 프로젝트, 사례 연구, PDF와 이미지가 들어 있습니다. 저장소를 클론한 것만으로 사용 준비가 끝나는 것은 아닙니다. 공개하기 전에 예시 내용을 자신의 실제 자료로 교체해야 합니다.

## 1. 내 저장소로 가져오기

GitHub에서 이 저장소를 Fork하거나, `Use this template` 버튼이 보이면 새 저장소를 만든 뒤 자신의 저장소를 클론합니다.

```bash
git clone https://github.com/YOUR_GITHUB_ID/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
npm ci
npm run dev -- --port 4173
```

`YOUR_GITHUB_ID`와 `YOUR_REPOSITORY`는 자신이 만든 저장소 정보로 바꿉니다. 브라우저에서 `http://localhost:4173`을 열면 현재 예시 포트폴리오를 확인할 수 있습니다.

## 2. 교체할 내 자료 준비하기

AI에게 수정을 요청하거나 직접 수정하기 전에 아래 내용을 메모로 준비합니다. 확인되지 않은 경력이나 수치를 채워 넣지 말고, 공개 가능한 사실만 사용하세요.

- 이름 또는 활동명
- 직무와 한 줄 소개
- 자기소개 2~4문단
- 이메일, GitHub, 블로그, LinkedIn 등 공개 링크
- 기술 스택과 각 기술을 실제로 사용한 맥락
- 프로젝트별 이름, 기간, 역할, 설명, 기여 내용, 기술 스택, 링크
- 검증 가능한 성과나 수치
- 일하는 방식 또는 개발 원칙
- 이력서 PDF와 포트폴리오 PDF
- 프로필, 프로젝트, Open Graph 공유 이미지
- 별도 사례 연구 페이지를 유지할지 삭제할지

자료가 아직 없다면 임의의 내용을 만들기보다 해당 항목을 숨기거나 `TODO`로 남기는 편이 안전합니다.

## 3. 예시 내용을 직접 교체하기

대부분의 화면 내용은 [`public/data.js`](../public/data.js)에서 바꿉니다.

- `meta`: 이름, 직무, 소개, 이메일, GitHub 주소, PDF 경로, 갱신일
- `sections`: 소개, 프로젝트, 기술 스택, 작업 방식, 연락처
- `sections` 배열의 순서: 화면과 내비게이션에 표시되는 섹션 순서

예시 작성자의 정보가 여러 파일에 들어 있으므로 다음 항목도 함께 교체합니다.

- [`app/layout.tsx`](../app/layout.tsx): 페이지 제목, 설명, 배포 주소, 공유 메타데이터
- [`app/page.tsx`](../app/page.tsx): 초기 브랜드명과 접근성 문구
- [`package.json`](../package.json): 프로젝트 패키지 이름
- [`scripts/build-pages.mjs`](../scripts/build-pages.mjs): GitHub Pages 주소, 정적 페이지 문구, 복사할 PDF 파일명
- [`scripts/generate-pdfs.mjs`](../scripts/generate-pdfs.mjs): 생성할 PDF 파일명
- [`public/omagotchi-case.js`](../public/omagotchi-case.js): 사례 연구 내용과 링크
- [`app/omagotchi`](../app/omagotchi): 사례 연구 페이지 제목과 기본 문구
- `public/m00n-resume.pdf`, `public/m00n-portfolio.pdf`: 자신의 PDF로 교체하고 파일명 참조도 함께 변경
- `public/assets/og.png`: 자신의 링크 공유 이미지로 교체
- [`README.md`](../README.md): 소개, 미리보기 이미지, 배포 주소
- [`LICENSE`](../LICENSE): 저작권자 이름

오마고치 사례 연구를 사용하지 않는다면 이름만 지우지 말고 관련 링크, `/omagotchi` 라우트, 데이터, 스크립트와 정적 빌드 로직을 함께 제거해야 합니다. 다른 프로젝트의 사례 연구로 사용할 경우에는 위 파일들의 내용과 경로를 새 프로젝트에 맞게 함께 바꿉니다.

## 4. AI에게 내용 교체 맡기기

클론한 프로젝트 폴더를 AI 코딩 도구의 작업 공간으로 연 뒤, 준비한 글과 링크를 요청 메시지에 붙여 넣습니다. 사이트에 공개할 PDF와 이미지는 `public` 폴더에 넣고 정확한 파일명을 알려주세요. 공개하면 안 되는 원본 자료나 개인정보는 저장소에 넣지 않습니다.

다음 요청문을 복사한 뒤 대괄호 부분을 자신의 정보로 바꿔 사용할 수 있습니다.

```text
이 저장소는 공개 포트폴리오 템플릿을 클론한 프로젝트야.
현재 들어 있는 m00n, kitturamiboiler, 이메일, 오마고치 프로젝트 등
예시 작성자의 개인 내용을 모두 내 실제 내용으로 교체해줘.

[내 기본 정보]
- 이름/활동명: [이름]
- 직무: [직무]
- 한 줄 소개: [소개]
- 이메일: [공개 이메일]
- GitHub: [URL]
- 기타 링크: [URL]

[내 소개]
[자기소개 내용을 붙여 넣기]

[내 프로젝트]
1. [프로젝트명]
   - 기간: [기간]
   - 역할: [역할]
   - 설명: [설명]
   - 내가 한 일: [기여 내용]
   - 기술: [기술 스택]
   - 검증 가능한 결과: [성과 또는 수치]
   - 링크: [배포/GitHub 링크]

[공개 파일]
- 이력서: public/[파일명].pdf
- 포트폴리오: public/[파일명].pdf
- 공유 이미지: public/assets/[파일명].png

[배포 정보]
- GitHub 아이디: [아이디]
- 저장소 이름: [저장소명]
- 배포 URL: [URL]

요구사항:
1. 기존 디자인과 반응형 동작은 유지하고 내용만 내 정보로 바꿔줘.
2. public/data.js뿐 아니라 하드코딩된 이름, 연락처, 메타데이터,
   PDF 파일명, 배포 URL도 저장소 전체에서 찾아 교체해줘.
3. 기존 오마고치 사례 페이지는 [삭제해줘 / 내 프로젝트 사례로 교체해줘].
4. 내가 제공하지 않은 경력, 기술, 회사명, 성과 수치는 만들지 마.
5. 정보가 부족한 곳은 임의로 채우지 말고 TODO로 남겨서 알려줘.
6. 기존 작성자의 개인정보가 남았는지 전체 검색해줘.
7. npm run build와 npm run build:pages를 실행해 검증해줘.
8. 수정한 파일과 내가 추가로 확인할 항목을 마지막에 정리해줘.
```

이력서만 준비되어 있다면 다음처럼 먼저 요청해도 됩니다.

```text
첨부한 이력서에서 공개 가능한 사실만 추출해서 이 포트폴리오의
public/data.js에 맞는 초안을 만들어줘. 모르는 내용은 추측하지 말고
질문이나 TODO로 남겨줘. 초안을 먼저 보여주고, 내가 확인한 뒤 파일을 수정해줘.
```

AI가 만든 문구도 본인이 직접 읽고 사실관계, 과장된 표현, 링크와 개인정보를 확인한 뒤 공개하세요.

## 5. 기존 작성자 내용이 남았는지 확인하기

프로젝트 루트에서 다음 명령을 실행하면 예시 작성자의 주요 이름과 주소가 남은 파일을 찾을 수 있습니다.

```bash
git grep -n -E 'm00n|kitturamiboiler|mjm3204|Omagotchi|오마고치|legend3204'
```

결과가 나오면 의도적으로 남긴 템플릿 설명인지, 교체하지 못한 개인정보인지 하나씩 확인합니다. PDF 내부의 텍스트와 링크도 별도로 열어 확인하세요.

마지막으로 화면과 정적 빌드를 검증합니다.

```bash
npm run build
npm run build:pages
```

다음 항목도 브라우저에서 직접 확인합니다.

- 모바일과 데스크톱 화면
- 이메일, GitHub, 프로젝트 링크
- 이력서와 포트폴리오 PDF 다운로드
- `/omagotchi` 사례 연구를 유지했다면 해당 페이지
- 브라우저 탭 제목과 링크 공유 이미지

## 6. 이미 클론한 저장소 최신화하기

Git 명령은 클론한 저장소 디렉터리 안에서 실행합니다.

```bash
cd YOUR_REPOSITORY
git status
git pull --ff-only origin main
```

`git pull`에는 원격 변경을 가져오는 fetch 과정이 포함됩니다. 원격 상태만 먼저 확인하고 싶다면 `git fetch origin`을 사용합니다. 로컬 수정이 있다면 pull 전에 `git status`로 확인하고 커밋하세요.

### `fatal: not a git repository` 오류

현재 위치가 클론한 저장소 밖이라는 뜻입니다. 저장소 디렉터리로 이동한 뒤 다시 실행합니다.

```bash
cd YOUR_REPOSITORY
git status
```

현재 위치는 `pwd`, 저장소 최상위 경로는 `git rev-parse --show-toplevel`로 확인할 수 있습니다.

## 7. 새 저장소 remote 연결하기

원본 저장소를 직접 클론했다면 `origin`은 원본 작성자의 저장소를 가리킵니다. 다른 사용자는 그 저장소에 push할 수 없으므로 자신의 GitHub 계정에 새 빈 저장소를 만든 뒤 remote를 바꿔야 합니다.

먼저 현재 연결을 확인합니다.

```bash
git remote -v
```

### 원본 저장소 연결도 보관하는 방법

원본 `origin`을 `upstream`이라는 이름으로 보관하고 자신의 저장소를 새 `origin`으로 등록합니다.

```bash
git remote rename origin upstream
git remote add origin https://github.com/YOUR_GITHUB_ID/YOUR_REPOSITORY.git
git remote -v
git push -u origin main
```

이후 자신의 변경은 `origin`에 push합니다. 원본 템플릿의 새 변경을 확인하고 싶을 때는 `git fetch upstream`을 사용할 수 있습니다. 이미 개인화한 코드와 원본 변경이 충돌할 수 있으므로 upstream의 변경을 바로 합치기 전에 차이를 확인하세요.

### 원본 저장소 연결이 필요 없는 방법

원본 remote를 자신의 새 저장소 주소로 바로 교체합니다. 위 방법과 아래 방법 중 하나만 선택합니다.

```bash
git remote set-url origin https://github.com/YOUR_GITHUB_ID/YOUR_REPOSITORY.git
git remote -v
git push -u origin main
```

Fork 또는 `Use this template`으로 만든 자신의 저장소를 클론했다면 `origin`이 이미 자신의 주소입니다. 이 경우 remote를 다시 설정하지 않고 `git remote -v`로 확인만 하면 됩니다.

## 8. GitHub Pages로 `github.io` 주소 만들기

GitHub Pages 주소는 저장소 종류에 따라 달라집니다.

- 일반 프로젝트 저장소: `https://YOUR_GITHUB_ID.github.io/YOUR_REPOSITORY/`
- 이름이 `YOUR_GITHUB_ID.github.io`인 사용자 사이트 저장소: `https://YOUR_GITHUB_ID.github.io/`

예를 들어 GitHub 아이디가 `octocat`, 저장소 이름이 `portfolio`라면 주소는 `https://octocat.github.io/portfolio/`입니다.

### 1. 코드 안의 배포 주소 변경

배포 전에 다음 파일을 자신의 실제 URL에 맞게 수정합니다.

- [`scripts/build-pages.mjs`](../scripts/build-pages.mjs)의 `pagesUrl`
- [`app/layout.tsx`](../app/layout.tsx)의 `metadataBase`
- [`README.md`](../README.md)의 예시 배포 주소

`pagesUrl`은 마지막 `/`까지 포함합니다.

```js
const pagesUrl = "https://YOUR_GITHUB_ID.github.io/YOUR_REPOSITORY/";
```

AI에게는 다음처럼 요청할 수 있습니다.

```text
이 프로젝트를 GitHub Pages에 배포할 거야.
GitHub 아이디는 [아이디], 저장소 이름은 [저장소명]이야.
최종 주소 형식에 맞춰 scripts/build-pages.mjs의 pagesUrl,
app/layout.tsx의 metadataBase, README의 배포 주소와 공유 메타데이터를
전부 수정해줘. npm run build:pages도 실행해서 확인해줘.
```

### 2. GitHub Pages 활성화

GitHub 저장소에서 `Settings → Pages → Build and deployment → Source`로 이동해 `GitHub Actions`를 선택합니다. 이 저장소에는 이미 [`.github/workflows/pages.yml`](../.github/workflows/pages.yml)이 있으므로 새 workflow를 만들 필요가 없습니다.

workflow는 템플릿 원본인 `kitturamiboiler/Portfolio-Template`에서는 배포 job을 건너뛰도록 설정되어 있습니다. Fork, `Use this template`, 또는 새 remote 연결을 통해 만든 다른 저장소에서는 저장소 이름이 달라지므로 정상적으로 실행됩니다.

이 저장소의 `docs` 디렉터리는 사용 설명서일 뿐이며 Pages 배포 폴더가 아닙니다. Source에서 `Deploy from a branch`의 `/docs`를 선택하지 마세요. 현재 workflow는 `npm run build:pages`로 `_site`를 만든 뒤 그 결과물을 배포합니다.

### 3. `main` 브랜치에 push

```bash
git add .
git commit -m "Customize portfolio content"
git push origin main
```

push하면 Actions의 `Deploy to Pages` workflow가 실행됩니다. GitHub 저장소의 `Actions` 탭에서 진행 상태를 확인하고, 완료 후 `Settings → Pages`에 표시되는 주소를 엽니다.

배포 전에 로컬 빌드도 확인합니다.

```bash
npm run build
npm run build:pages
```

GitHub의 공식 설명은 [GitHub Pages 게시 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)과 [GitHub Pages 사이트 종류 및 기본 주소](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)를 참고하세요.
