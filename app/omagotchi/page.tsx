import Script from "next/script";

export default function OmagotchiCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#caseStudy">본문으로 바로가기</a>

      <header className="site-header case-header">
        <a className="brand" href="../#work" aria-label="포트폴리오 작업 목록으로 돌아가기">
          <span className="brand-mark" aria-hidden="true" />
          <span>m00n / Omagotchi</span>
        </a>

        <nav id="caseNav" className="site-nav" aria-label="오마고치 상세 목차" />

        <button type="button" id="themeBtn" className="theme-button" aria-pressed="false">
          <span className="theme-icon" aria-hidden="true" />
          <span className="theme-label">Dark</span>
        </button>
      </header>

      <main id="caseStudy" className="case-main" aria-busy="true">
        <noscript>
          <div className="fallback">이 케이스스터디는 JavaScript가 켜진 브라우저에서 볼 수 있습니다.</div>
        </noscript>
      </main>

      <footer className="site-footer case-footer">
        <a href="../#work">← 프로젝트 목록으로</a>
        <p>Omagotchi case study template · <span id="caseUpdated" /></p>
      </footer>

      <Script src="../omagotchi-case.js" strategy="beforeInteractive" />
      <Script src="../assets/omagotchi.js" strategy="afterInteractive" />
    </>
  );
}
