/*
 * Omagotchi case-study content template
 *
 * 이 파일만 수정하면 상세 페이지의 제목, GitHub 이슈, Notion 문서,
 * 기술 의사결정, 코드 설명이 함께 바뀝니다.
 * 확인되지 않은 이슈 번호와 링크는 빈 문자열로 두세요.
 */
window.OMAGOTCHI_CASE = {
  meta: {
    title: "Omagotchi",
    eyebrow: "CASE STUDY / WORKING TEMPLATE",
    period: "2026.07 — 2026.09.16",
    team: "10-WEEK TEAM PROJECT · 8 PEOPLE",
    role: "게임 시스템 기획 · UI/UX · 아트 · 프론트엔드 전체 · 백엔드 6개 도메인",
    summary: "기획 문서와 GitHub 이슈, 구현 코드를 문제–판단–결과의 흐름으로 연결해 보여주는 오마고치 상세 작업 기록입니다.",
    backUrl: "../#work",
    githubUrl: "https://github.com/kitturamiboiler",
    updated: "AUG 2026",
    accent: "#c9ff3f",
    metrics: [
      { value: "37", label: "THYMELEAF PAGES" },
      { value: "22 / 80", label: "STORYBOOK FILES / STATES" },
      { value: "141", label: "CHARACTER ASSETS" },
      { value: "320–1440", label: "RESPONSIVE RANGE" }
    ]
  },

  sections: [
    {
      id: "overview",
      nav: "Overview",
      number: "01",
      eyebrow: "EVIDENCE MAP",
      title: "흩어진 작업 기록을 하나의 판단 흐름으로 읽히게 합니다.",
      intro: "각 사례는 문서의 요구사항, 발견한 문제, 구현 선택, 검증 결과가 끊기지 않도록 같은 구조로 기록합니다.",
      type: "overview",
      flow: [
        { step: "01", label: "NOTION", text: "기획 배경·규칙·예외 상황" },
        { step: "02", label: "GITHUB", text: "논의·재현 조건·작업 단위" },
        { step: "03", label: "CODE", text: "선택한 구조와 구현 경계" },
        { step: "04", label: "RESULT", text: "화면 변화·검증·배운 점" }
      ],
      scope: [
        "서비스의 게임 시스템과 사용자 흐름을 화면 단위로 구체화",
        "37개 Thymeleaf 화면과 React 19 Island의 경계 설계",
        "공통 컴포넌트·컬러 토큰·Storybook 상태 정의",
        "HttpOnly 세션과 내부 API 사이를 잇는 BFF 연동",
        "캐릭터 상태·팔레트·반응형 화면까지 사용자 경험 통합"
      ]
    },
    {
      id: "issues",
      nav: "GitHub Issues",
      number: "02",
      eyebrow: "PROBLEM → DECISION → RESULT",
      title: "GitHub 이슈는 작업 목록이 아니라 판단의 근거로 보여줍니다.",
      intro: "아래 세 카드는 작성 형식의 예시입니다. 실제 이슈 URL과 결과 수치를 확인한 뒤 sourceUrl과 result를 교체하면 됩니다.",
      type: "issues",
      items: [
        {
          issue: "ISSUE / URL TO ADD",
          status: "LINK PENDING",
          title: "태블릿·가로 모드에서 Home 레이아웃이 어긋나는 문제",
          sourceLabel: "GitHub issue 연결 예정",
          sourceUrl: "",
          problem: "모바일 전용 Home과 데스크톱 Home을 분리했지만 중간 폭과 가로 모드에서 두 레이아웃의 책임이 겹쳤습니다.",
          evidence: ["재현 기기·viewport", "문제가 보이는 화면 캡처", "기존 라우팅과 CSS 조건"],
          decision: "화면을 더 나누는 대신 레이아웃 모델을 원인으로 보고 /home 단일 진입점과 fluid stage로 전환했습니다.",
          implementation: "Thymeleaf가 라우트와 초기 계약을 유지하고, 상호작용이 많은 Home 영역만 React Island로 마운트했습니다.",
          result: "중복 화면과 viewport redirect를 제거했습니다. 실제 QA 범위와 수정 전후 비교 이미지를 추가하세요."
        },
        {
          issue: "ISSUE / URL TO ADD",
          status: "LINK PENDING",
          title: "서버 없이 로딩·빈 화면·오류 상태를 검증하기 어려운 문제",
          sourceLabel: "GitHub issue 연결 예정",
          sourceUrl: "",
          problem: "정상 데이터 외의 상태는 실제 API 조건을 만들기 어려워 화면 검증이 늦어지고 분기가 컴포넌트 곳곳에 흩어졌습니다.",
          evidence: ["누락되기 쉬운 UI 상태", "API 응답별 화면 차이", "팀 리뷰에서 발견된 예외"],
          decision: "API 응답보다 먼저 화면이 가질 수 있는 상태 모델을 한정하고 Storybook에서 같은 모델을 사용했습니다.",
          implementation: "loading, empty, error, ready를 명시적인 ViewState로 만들고 80개 Storybook 상태에 연결했습니다.",
          result: "서버 준비 전에도 경계 화면을 검토할 수 있게 됐습니다. 발견한 결함 수나 리뷰 시간을 추가하세요."
        },
        {
          issue: "ISSUE / URL TO ADD",
          status: "LINK PENDING",
          title: "브라우저 UI가 인증 변환과 도메인 오류를 함께 떠안는 문제",
          sourceLabel: "GitHub issue 연결 예정",
          sourceUrl: "",
          problem: "여러 도메인의 API 계약과 인증 방식이 UI에 그대로 노출되면 화면 컴포넌트가 보안과 통신 세부사항에 종속됩니다.",
          evidence: ["도메인별 응답 차이", "세션·Bearer 변환 경계", "사용자에게 보여줄 오류 상태"],
          decision: "HttpOnly 세션은 브라우저에 유지하고 Bearer 토큰 변환과 응답 정규화는 BFF 경계에서 담당하게 했습니다.",
          implementation: "BFF가 8개 도메인의 응답을 화면 상태로 매핑하고 UI는 인증 세부사항 대신 ViewState만 다루도록 분리했습니다.",
          result: "화면 로직과 보안 책임의 경계가 분명해졌습니다. 실제 연동 전후 변경 파일이나 오류 처리 사례를 연결하세요."
        }
      ]
    },
    {
      id: "notion",
      nav: "Notion",
      number: "03",
      eyebrow: "PLANNING → INTERFACE",
      title: "Notion 문서는 화면을 만든 이유와 규칙을 증명합니다.",
      intro: "문서 제목만 나열하지 않고, 무엇을 정했고 그 결정이 어떤 UI와 상태로 이어졌는지를 요약합니다. 링크는 Notion 연결 후 추가합니다.",
      type: "notion",
      documents: [
        {
          title: "시뮬레이션 정리",
          owner: "문잼",
          status: "NOTION LINK PENDING",
          url: "",
          summary: "게임 시스템을 실제 사용자 행동과 시간 흐름으로 검증한 기록을 넣는 자리입니다.",
          prompts: ["어떤 가정을 검증했는가", "시뮬레이션에서 발견한 예외", "화면 상태나 수치에 반영된 변화"]
        },
        {
          title: "게이미피케이션",
          owner: "문잼",
          status: "NOTION LINK PENDING",
          url: "",
          summary: "출결과 학습 시간이 레벨·퀘스트·캐릭터 성장으로 변환되는 규칙을 설명하는 자리입니다.",
          prompts: ["핵심 보상 루프", "레벨·퀘스트 계산 규칙", "사용자에게 피드백하는 UI"]
        },
        {
          title: "사용자",
          owner: "문잼",
          status: "NOTION LINK PENDING",
          url: "",
          summary: "사용자 정보와 상태가 여러 도메인 화면에서 어떤 기준으로 표현되는지 정리하는 자리입니다.",
          prompts: ["사용자 상태와 권한", "정상·빈 화면·오류 조건", "프론트엔드 데이터 모델"]
        },
        {
          title: "교육 기수",
          owner: "문잼",
          status: "NOTION LINK PENDING",
          url: "",
          summary: "기수와 교육 공간의 운영 규칙이 탐색 구조와 컴포넌트에 반영된 과정을 넣는 자리입니다.",
          prompts: ["기수 생성·종료 규칙", "화면 간 이동 흐름", "재사용한 컴포넌트와 상태"]
        },
        {
          title: "커뮤니티",
          owner: "미정",
          status: "NOTION LINK PENDING",
          url: "",
          summary: "게시글과 상호작용 요구사항을 화면 구조와 예외 상태로 바꾼 과정을 넣는 자리입니다.",
          prompts: ["핵심 사용자 행동", "게시글·댓글 상태", "접근성과 피드백 방식"]
        }
      ]
    },
    {
      id: "decisions",
      nav: "Decisions",
      number: "04",
      eyebrow: "FRONTEND DECISIONS",
      title: "무엇을 썼는지보다 왜 그렇게 나눴는지를 설명합니다.",
      type: "decisions",
      items: [
        {
          label: "RESPONSIVE ARCHITECTURE",
          title: "두 벌의 Home 대신 하나의 fluid stage",
          before: "모바일·데스크톱 화면 분리와 viewport redirect",
          after: "/home 단일 진입점과 폭에 반응하는 하나의 레이아웃",
          reason: "중간 폭에서 생기는 불일치가 스타일 문제가 아니라 레이아웃 모델의 중복에서 왔다고 판단했습니다."
        },
        {
          label: "COMPONENT BOUNDARY",
          title: "공통 UI와 Home 전용 UI를 2계층으로 분리",
          before: "공통 컴포넌트가 특정 화면의 data-* 계약을 함께 앎",
          after: "순수 표현 컴포넌트와 Home 어댑터 컴포넌트 분리",
          reason: "재사용 레이어가 특정 페이지의 DOM 계약과 비즈니스 로직에 오염되지 않게 했습니다."
        },
        {
          label: "STATE VERIFICATION",
          title: "오류와 빈 상태를 서버보다 먼저 확정",
          before: "API가 준비되어야만 예외 화면을 확인",
          after: "명시적 ViewState와 Storybook 상태 조합",
          reason: "정상 화면보다 놓치기 쉬운 경계 상태를 구현 초기에 팀이 함께 검토할 수 있게 했습니다."
        },
        {
          label: "DESIGN SYSTEM",
          title: "프레임워크 전체보다 필요한 기능만 선택",
          before: "새 CSS 프레임워크 도입 검토",
          after: "기존 CSS + 토큰 + 접근성·모션 도구의 제한적 채택",
          reason: "기존 픽셀 아트 톤과 전역 CSS를 지키면서 꼭 필요한 접근성 동작만 보강했습니다."
        }
      ]
    },
    {
      id: "code",
      nav: "Code",
      number: "05",
      eyebrow: "CODE NOTES / REPRESENTATIVE",
      title: "코드는 전문보다 설계 의도가 보이는 경계를 골라 설명합니다.",
      intro: "공개 가능한 범위에서 실제 코드로 교체하고, 비공개 구현은 아래처럼 축약된 구조와 책임을 설명합니다.",
      type: "code",
      notes: [
        {
          title: "Thymeleaf 안에 React Island를 어떻게 연결했나",
          text: "서버가 소유한 라우트와 세션 계약은 유지하고, 상호작용이 많은 Home 영역만 독립적으로 마운트했습니다.",
          code: "const root = document.querySelector('[data-home-island]');\n\nif (root) {\n  createRoot(root).render(\n    <HomeIsland userId={root.dataset.userId} />\n  );\n}",
          caption: "실제 구현을 설명하기 위해 축약한 구조 예시입니다."
        },
        {
          title: "로딩·빈 화면·오류를 하나의 상태 모델로 다루기",
          text: "API 응답을 JSX 조건문에 흩뿌리지 않고 화면이 가질 수 있는 상태를 먼저 한정했습니다.",
          code: "type ViewState<T> =\n  | { status: 'loading' }\n  | { status: 'empty' }\n  | { status: 'error'; message: string }\n  | { status: 'ready'; data: T };",
          caption: "Storybook과 실제 화면에서 함께 사용하는 상태 모델 예시입니다."
        },
        {
          title: "인증 변환은 브라우저가 아니라 BFF의 책임으로",
          text: "브라우저에는 HttpOnly 세션만 남기고 내부 API가 요구하는 Bearer 변환은 서버 경계에서 처리했습니다.",
          code: "const session = await readHttpOnlySession(request);\nconst response = await api.fetch('/home', {\n  headers: { Authorization: `Bearer ${session.token}` }\n});\n\nreturn mapToViewState(response);",
          caption: "토큰 값과 실제 서버 구현을 노출하지 않은 흐름 예시입니다."
        }
      ]
    },
    {
      id: "checklist",
      nav: "Checklist",
      number: "06",
      eyebrow: "PUBLISHING CHECKLIST",
      title: "링크를 붙이기 전에 공개 가능한 근거인지 한 번 더 확인합니다.",
      type: "checklist",
      items: [
        "GitHub 이슈 번호·제목·URL이 실제 공개 범위와 일치하는가",
        "팀원 이름, 내부 서버 주소, 토큰, 계정 정보가 코드와 캡처에서 제거됐는가",
        "Notion 문서가 공개 가능한가—아니면 핵심 판단만 내 문장으로 요약했는가",
        "문제–판단–구현–결과가 같은 사례를 설명하고 있는가",
        "수치와 결과에 근거가 있으며 과장된 인과관계를 만들지 않았는가",
        "모바일·키보드·인쇄/PDF에서도 읽을 수 있는가"
      ]
    }
  ]
};
