import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const output = join(root, "_site");
const pagesUrl = "https://kitturamiboiler.github.io/frontend-portfolio/";

await rm(output, { recursive: true, force: true });
await mkdir(join(output, "assets"), { recursive: true });

await Promise.all([
  cp(join(root, "app/globals.css"), join(output, "assets/style.css")),
  cp(join(root, "public/assets/app.js"), join(output, "assets/app.js")),
  cp(join(root, "public/assets/og.png"), join(output, "assets/og.png")),
  cp(join(root, "public/data.js"), join(output, "data.js")),
  cp(join(root, "public/m00n-resume.pdf"), join(output, "m00n-resume.pdf")),
  cp(join(root, "public/m00n-portfolio.pdf"), join(output, "m00n-portfolio.pdf")),
]);

const html = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>m00n · Frontend Developer</title>
    <meta name="description" content="오마고치의 게임 시스템 기획부터 React Island, 디자인 시스템, BFF 연동까지 설계한 프론트엔드 개발자 m00n의 포트폴리오입니다.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${pagesUrl}">
    <meta property="og:title" content="m00n · Frontend Developer">
    <meta property="og:description" content="Useful interfaces. Thoughtful code.">
    <meta property="og:image" content="${pagesUrl}assets/og.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="m00n · Frontend Developer">
    <meta name="twitter:description" content="Useful interfaces. Thoughtful code.">
    <meta name="twitter:image" content="${pagesUrl}assets/og.png">
    <link rel="canonical" href="${pagesUrl}">
    <link rel="stylesheet" href="./assets/style.css">
    <script src="./data.js"></script>
    <script defer src="./assets/app.js"></script>
  </head>
  <body>
    <a class="skip-link" href="#main">본문으로 바로가기</a>
    <header class="site-header">
      <a class="brand" href="#top" aria-label="m00n 포트폴리오 처음으로">
        <span class="brand-mark" aria-hidden="true"></span>
        <span id="brandName">m00n</span>
      </a>
      <nav id="nav" class="site-nav" aria-label="주요 섹션"></nav>
      <button type="button" id="themeBtn" class="theme-button" aria-pressed="false">
        <span class="theme-icon" aria-hidden="true"></span>
        <span class="theme-label">Dark</span>
      </button>
    </header>
    <main id="main" aria-busy="true">
      <noscript><div class="fallback">이 포트폴리오는 JavaScript가 켜진 브라우저에서 볼 수 있습니다.</div></noscript>
    </main>
    <footer class="site-footer">
      <p><span id="footName">m00n</span> <span aria-hidden="true">↗</span> <span id="updated"></span></p>
      <p>Designed in the browser. Built close to the details.</p>
    </footer>
  </body>
</html>
`;

await writeFile(join(output, "index.html"), html);
await writeFile(join(output, ".nojekyll"), "");
console.log(`GitHub Pages bundle written to ${output}`);
