(function () {
  'use strict';

  function has(value) {
    return value !== undefined && value !== null && String(value).trim() !== '';
  }

  function list(value) {
    return Array.isArray(value) ? value : [];
  }

  function esc(value) {
    return String(value === undefined || value === null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function safeUrl(value) {
    var url = String(value || '').trim();
    return /^(https?:\/\/|mailto:|#|\.\.?\/|\/)/i.test(url) ? url : '#';
  }

  function externalAttrs(url) {
    return /^https?:\/\//i.test(String(url || ''))
      ? ' target="_blank" rel="noopener noreferrer"'
      : '';
  }

  function sectionHead(section) {
    return '<div class="section-head">'
      + '<div class="section-index"><span>' + esc(section.number || '') + '</span><span>' + esc(section.eyebrow || '') + '</span></div>'
      + '<h2>' + esc(section.title || '') + '</h2>'
      + (has(section.intro) ? '<p class="section-intro">' + esc(section.intro) + '</p>' : '')
      + '</div>';
  }

  function renderHero(meta) {
    var title = list(meta.headline).map(function (line, index) {
      return '<span class="hero-line hero-line-' + (index + 1) + '">' + esc(line) + '</span>';
    }).join('');

    return '<section class="hero" id="top" tabindex="-1">'
      + '<div class="hero-copy">'
      + '<p class="hero-kicker"><span></span>' + esc(meta.kicker || '') + '</p>'
      + '<h1>' + title + '</h1>'
      + '<p class="hero-intro">' + esc(meta.intro || '') + '</p>'
      + '<div class="hero-actions">'
      + '<a class="action action-primary" href="#work">작업 보기 <span aria-hidden="true">↓</span></a>'
      + '<a class="action action-secondary" href="' + esc(safeUrl(meta.github)) + '"' + externalAttrs(meta.github) + '>GitHub <span aria-hidden="true">↗</span></a>'
      + '<a class="action action-pdf" href="' + esc(safeUrl(meta.resumePdf)) + '" download>이력서 PDF <span aria-hidden="true">↓</span></a>'
      + '<a class="action action-pdf" href="' + esc(safeUrl(meta.portfolioPdf)) + '" download>전체 PDF <span aria-hidden="true">↓</span></a>'
      + '</div>'
      + '</div>'
      + '<div class="hero-aside" aria-label="개발 철학 요약">'
      + '<div class="code-window">'
      + '<div class="window-bar"><span></span><span></span><span></span><b>interface.ts</b></div>'
      + '<div class="code-body" aria-hidden="true">'
      + '<p><i>01</i><span class="code-violet">const</span> interface = {</p>'
      + '<p><i>02</i>&nbsp;&nbsp;purpose: <span class="code-green">&quot;useful&quot;</span>,</p>'
      + '<p><i>03</i>&nbsp;&nbsp;state: <span class="code-green">&quot;predictable&quot;</span>,</p>'
      + '<p><i>04</i>&nbsp;&nbsp;details: <span class="code-green">&quot;considered&quot;</span></p>'
      + '<p><i>05</i>};</p>'
      + '</div>'
      + '<div class="window-result">READY TO SHIP <span></span></div>'
      + '</div>'
      + '<p class="availability"><span aria-hidden="true"></span>' + esc(meta.availability || '') + '</p>'
      + '</div>'
      + '<div class="hero-ticker" aria-hidden="true"><div>FRONTEND · INTERACTION · ACCESSIBILITY · PERFORMANCE · FRONTEND · INTERACTION · ACCESSIBILITY · PERFORMANCE ·</div></div>'
      + '</section>';
  }

  var renderers = {
    manifesto: function (section) {
      var body = list(section.body).map(function (paragraph) {
        return '<p>' + esc(paragraph) + '</p>';
      }).join('');
      var values = list(section.values).map(function (item) {
        return '<article class="value-card">'
          + '<p class="micro-label">' + esc(item.code || '') + '</p>'
          + '<h3>' + esc(item.title || '') + '</h3>'
          + '<p>' + esc(item.text || '') + '</p>'
          + '</article>';
      }).join('');
      return '<div class="manifesto-copy">' + body + '</div><div class="value-grid">' + values + '</div>';
    },

    projects: function (section) {
      return '<div class="project-list">' + list(section.items).map(function (item) {
        var points = list(item.points).map(function (point) {
          return '<li>' + esc(point) + '</li>';
        }).join('');
        var stack = list(item.stack).map(function (skill) {
          return '<span>' + esc(skill) + '</span>';
        }).join('');
        var metrics = list(item.metrics).map(function (metric) {
          return '<div><strong>' + esc(metric.value || '') + '</strong><span>' + esc(metric.label || '') + '</span></div>';
        }).join('');
        var decisions = list(item.decisions).map(function (decision) {
          return '<details class="decision-item">'
            + '<summary><span class="micro-label">' + esc(decision.label || '') + '</span><b>' + esc(decision.title || '') + '</b><i aria-hidden="true">+</i></summary>'
            + '<p>' + esc(decision.text || '') + '</p>'
            + '</details>';
        }).join('');
        var codeNotes = list(item.codeNotes).map(function (note, index) {
          return '<details class="code-note">'
            + '<summary><span>' + esc(String(index + 1).padStart(2, '0')) + '</span><b>' + esc(note.title || '') + '</b><i aria-hidden="true">+</i></summary>'
            + '<div class="code-note-body">'
            + '<p>' + esc(note.text || '') + '</p>'
            + '<pre><code>' + esc(note.code || '') + '</code></pre>'
            + (has(note.caption) ? '<small>' + esc(note.caption) + '</small>' : '')
            + '</div>'
            + '</details>';
        }).join('');
        var links = list(item.links).map(function (link) {
          return '<a href="' + esc(safeUrl(link.url)) + '"' + externalAttrs(link.url) + '>'
            + esc(link.label || link.url) + ' <span aria-hidden="true">↗</span></a>';
        }).join('');
        var caseStudy = item.caseStudy && has(item.caseStudy.url)
          ? '<a class="project-case-link" href="' + esc(safeUrl(item.caseStudy.url)) + '" aria-label="' + esc(item.title || '프로젝트') + ' 상세 케이스스터디 보기">'
            + '<span class="project-case-label"><span>' + esc(item.caseStudy.label || 'Case study') + '</span><b aria-hidden="true">→</b></span></a>'
          : '';
        return '<article class="project-card tone-' + esc(item.tone || 'paper') + (item.featured ? ' is-featured' : '') + (caseStudy ? ' has-case-study' : '') + '">'
          + caseStudy
          + '<div class="project-number">' + esc(item.index || '') + '</div>'
          + '<div class="project-main">'
          + '<p class="micro-label">' + esc(item.kind || '') + '</p>'
          + (has(item.period) ? '<p class="project-period">' + esc(item.period) + '</p>' : '')
          + '<h3>' + esc(item.title || '') + '</h3>'
          + (has(item.role) ? '<p class="project-role">' + esc(item.role) + '</p>' : '')
          + '<p class="project-description">' + esc(item.description || '') + '</p>'
          + (metrics ? '<div class="project-metrics">' + metrics + '</div>' : '')
          + (points ? '<details class="project-detail"><summary><span>핵심 구현</span><b>' + list(item.points).length + '가지</b><i aria-hidden="true">+</i></summary><ul class="project-points">' + points + '</ul></details>' : '')
          + (decisions ? '<div class="decision-list"><div class="decision-list-head"><p class="micro-label">FRONTEND DECISIONS</p><span>선택의 이유를 펼쳐보세요</span></div>' + decisions + '</div>' : '')
          + (codeNotes ? '<div class="code-notes"><div class="code-notes-head"><p class="micro-label">CODE NOTES / REPRESENTATIVE</p><h4>코드로 보는 설계 의도</h4></div>' + codeNotes + '</div>' : '')
          + '</div>'
          + '<div class="project-meta">'
          + '<div class="tag-list">' + stack + '</div>'
          + '<div class="project-links">' + links + '</div>'
          + '</div>'
          + '</article>';
      }).join('') + '</div>';
    },

    stack: function (section) {
      return '<div class="stack-grid">' + list(section.groups).map(function (group) {
        var skills = list(group.items).map(function (skill) {
          return '<li><span aria-hidden="true">+</span>' + esc(skill) + '</li>';
        }).join('');
        return '<article class="stack-card">'
          + '<p class="micro-label">' + esc(group.note || '') + '</p>'
          + '<h3>' + esc(group.label || '') + '</h3>'
          + '<ul>' + skills + '</ul>'
          + '</article>';
      }).join('') + '</div>';
    },

    process: function (section) {
      return '<ol class="process-list">' + list(section.items).map(function (item) {
        return '<li>'
          + '<div class="process-marker"><span>' + esc(item.step || '') + '</span><b>' + esc(item.verb || '') + '</b></div>'
          + '<div><h3>' + esc(item.title || '') + '</h3><p>' + esc(item.text || '') + '</p></div>'
          + '</li>';
      }).join('') + '</ol>';
    },

    contact: function (section) {
      var links = list(section.links).map(function (link) {
        return '<a href="' + esc(safeUrl(link.url)) + '"' + externalAttrs(link.url) + '>'
          + esc(link.label || '') + ' <span aria-hidden="true">↗</span></a>';
      }).join('');
      return '<div class="contact-panel">'
        + '<p>' + esc(section.text || '') + '</p>'
        + '<a class="contact-email" href="mailto:' + esc(section.email || '') + '">' + esc(section.email || '') + '</a>'
        + '<div class="contact-actions">' + links
        + '<button type="button" class="copy-button" data-copy="' + esc(section.email || '') + '">Copy email</button>'
        + '</div>'
        + '<div class="contact-orbit" aria-hidden="true"><span>HELLO</span></div>'
        + '</div>';
    }
  };

  function renderSection(section) {
    var renderer = renderers[section.type];
    if (!renderer) return '';
    return '<section class="content-section section-' + esc(section.type) + '" id="' + esc(section.id) + '" tabindex="-1">'
      + sectionHead(section)
      + renderer(section)
      + '</section>';
  }

  function build() {
    var data = window.PORTFOLIO;
    var main = document.getElementById('main');
    var nav = document.getElementById('nav');
    if (!data || !data.meta || !main || !nav) {
      if (main) main.innerHTML = '<div class="fallback">포트폴리오 데이터를 불러오지 못했습니다.</div>';
      return;
    }

    var meta = data.meta;
    var sections = list(data.sections).filter(function (section) {
      return section && section.id && !section.hidden;
    });

    if (has(meta.accent)) document.documentElement.style.setProperty('--accent', meta.accent);

    document.title = [meta.name, meta.role].filter(has).join(' · ');
    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', meta.intro || document.title);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', document.title);
    var brandName = document.getElementById('brandName');
    if (brandName) brandName.textContent = meta.name || 'm00n';

    main.innerHTML = renderHero(meta) + sections.map(renderSection).join('');
    main.setAttribute('aria-busy', 'false');

    nav.innerHTML = sections.map(function (section) {
      return '<a href="#' + esc(section.id) + '" data-target="' + esc(section.id) + '">' + esc(section.nav || section.id) + '</a>';
    }).join('');

    var footName = document.getElementById('footName');
    var updated = document.getElementById('updated');
    if (footName) footName.textContent = meta.name || '';
    if (updated) updated.textContent = meta.updated || '';

    setupScrollSpy(sections);
    setupCopy();
  }

  function setupScrollSpy(sections) {
    var nav = document.getElementById('nav');
    if (!nav) return;
    var links = Array.prototype.slice.call(nav.querySelectorAll('a'));
    var targets = sections.map(function (section) {
      return document.getElementById(section.id);
    }).filter(Boolean);
    if (!links.length || !targets.length) return;

    var current = '';
    function update() {
      var next = targets[0].id;
      targets.forEach(function (target) {
        if (target.getBoundingClientRect().top <= 150) next = target.id;
      });
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 4) {
        next = targets[targets.length - 1].id;
      }
      if (next === current) return;
      current = next;
      links.forEach(function (link) {
        if (link.dataset.target === current) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    }

    var queued = false;
    window.addEventListener('scroll', function () {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(function () {
        queued = false;
        update();
      });
    }, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }

  function setupTheme() {
    var button = document.getElementById('themeBtn');
    if (!button) return;
    var label = button.querySelector('.theme-label');
    var stored = null;
    try { stored = localStorage.getItem('portfolio-theme'); } catch (error) { stored = null; }
    if (stored === 'light' || stored === 'dark') document.documentElement.dataset.theme = stored;

    function isDark() {
      var selected = document.documentElement.dataset.theme;
      return selected === 'dark' || (!selected && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    function sync() {
      var dark = isDark();
      button.setAttribute('aria-pressed', String(dark));
      if (label) label.textContent = dark ? 'Light' : 'Dark';
    }

    button.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('portfolio-theme', next); } catch (error) { /* no-op */ }
      sync();
    });
    sync();
  }

  function setupCopy() {
    var button = document.querySelector('[data-copy]');
    if (!button) return;
    button.addEventListener('click', function () {
      var value = button.getAttribute('data-copy') || '';
      if (!navigator.clipboard || !value) return;
      navigator.clipboard.writeText(value).then(function () {
        var original = button.textContent;
        button.textContent = 'Copied!';
        window.setTimeout(function () { button.textContent = original; }, 1600);
      });
    });
  }

  try {
    build();
    setupTheme();
  } catch (error) {
    var main = document.getElementById('main');
    if (main) main.innerHTML = '<div class="fallback">화면을 만드는 중 오류가 발생했습니다.</div>';
    if (window.console) console.error(error);
  }
}());
