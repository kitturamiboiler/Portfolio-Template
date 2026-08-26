import Script from "next/script";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="m00n 포트폴리오 처음으로">
          <span className="brand-mark" aria-hidden="true" />
          <span id="brandName">m00n</span>
        </a>

        <nav id="nav" className="site-nav" aria-label="주요 섹션" />

        <button type="button" id="themeBtn" className="theme-button" aria-pressed="false">
          <span className="theme-icon" aria-hidden="true" />
          <span className="theme-label">Dark</span>
        </button>
      </header>

      <main id="main" aria-busy="true">
        <noscript>
          <div className="fallback">이 포트폴리오는 JavaScript가 켜진 브라우저에서 볼 수 있습니다.</div>
        </noscript>
      </main>

      <footer className="site-footer">
        <p><span id="footName">m00n</span> <span aria-hidden="true">↗</span> <span id="updated" /></p>
        <p>Designed in the browser. Built close to the details.</p>
      </footer>

      <Script src="/data.js" strategy="beforeInteractive" />
      <Script src="/assets/app.js" strategy="afterInteractive" />
    </>
  );
}
