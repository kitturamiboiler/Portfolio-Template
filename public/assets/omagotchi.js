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
    return /^(https?:\/\/|#|\.\.?\/|\/)/i.test(url) ? url : '';
  }

  function externalAttrs(url) {
    return /^https?:\/\//i.test(String(url || ''))
      ? ' target="_blank" rel="noopener noreferrer"'
      : '';
  }

  function sourceControl(label, url) {
    var safe = safeUrl(url);
    if (!safe) {
      return '<span class="case-source is-pending"><i aria-hidden="true"></i>' + esc(label || '링크 연결 예정') + '</span>';
    }
    return '<a class="case-source" href="' + esc(safe) + '"' + externalAttrs(safe) + '>'
      + esc(label || 'Source') + '<span aria-hidden="true">↗</span></a>';
  }

  function sectionHead(section) {
    return '<div class="section-head case-section-head">'
      + '<div class="section-index"><span>' + esc(section.number || '') + '</span><span>' + esc(section.eyebrow || '') + '</span></div>'
      + '<h2>' + esc(section.title || '') + '</h2>'
      + (has(section.intro) ? '<p class="section-intro">' + esc(section.intro) + '</p>' : '')
      + '</div>';
  }

  function renderHero(meta) {
    var metrics = list(meta.metrics).map(function (metric) {
      return '<div><strong>' + esc(metric.value || '') + '</strong><span>' + esc(metric.label || '') + '</span></div>';
    }).join('');

    return '<section class="case-hero" id="case-top" tabindex="-1">'
      + '<div class="case-hero-top">'
      + '<a class="case-back" href="' + esc(safeUrl(meta.backUrl) || '../#work') + '"><span aria-hidden="true">←</span> Portfolio / Work</a>'
      + '<p class="micro-label">' + esc(meta.eyebrow || '') + '</p>'
      + '</div>'
      + '<div class="case-hero-grid">'
      + '<div class="case-hero-index">01</div>'
      + '<div class="case-hero-copy">'
      + '<p class="micro-label">' + esc(meta.team || '') + '</p>'
      + '<p class="case-period">' + esc(meta.period || '') + '</p>'
      + '<h1>' + esc(meta.title || '') + '</h1>'
      + '<p class="case-role">' + esc(meta.role || '') + '</p>'
      + '<p class="case-summary">' + esc(meta.summary || '') + '</p>'
      + '</div>'
      + '<aside class="case-template-note">'
      + '<span class="case-status-dot" aria-hidden="true"></span>'
      + '<p class="micro-label">HOW TO EDIT</p>'
      + '<p><code>public/omagotchi-case.js</code>에서 문구와 링크만 바꾸면 이 페이지 전체가 갱신됩니다.</p>'
      + '</aside>'
      + '</div>'
      + '<div class="case-metrics">' + metrics + '</div>'
      + '<div class="case-scroll-cue"><span>SCROLL TO EVIDENCE</span><b aria-hidden="true">↓</b></div>'
      + '</section>';
  }

  var renderers = {
    overview: function (section) {
      var flow = list(section.flow).map(function (item, index) {
        return '<li>'
          + '<div class="case-flow-step"><span>' + esc(item.step || '') + '</span><b>' + esc(item.label || '') + '</b></div>'
          + '<p>' + esc(item.text || '') + '</p>'
          + (index < list(section.flow).length - 1 ? '<i aria-hidden="true">→</i>' : '')
          + '</li>';
      }).join('');
      var scope = list(section.scope).map(function (item) {
        return '<li><span aria-hidden="true">+</span>' + esc(item) + '</li>';
      }).join('');
      return '<ol class="case-flow">' + flow + '</ol>'
        + '<div class="case-scope"><p class="micro-label">MY SCOPE / WORKING DRAFT</p><ul>' + scope + '</ul></div>';
    },

    issues: function (section) {
      var items = list(section.items).map(function (item, index) {
        var evidence = list(item.evidence).map(function (entry) {
          return '<li><span aria-hidden="true">□</span>' + esc(entry) + '</li>';
        }).join('');
        return '<details class="issue-card"' + (index === 0 ? ' open' : '') + '>'
          + '<summary>'
          + '<div><p class="micro-label">' + esc(item.issue || '') + '</p><h3>' + esc(item.title || '') + '</h3></div>'
          + '<div class="issue-summary-meta"><span>' + esc(item.status || '') + '</span><i aria-hidden="true">+</i></div>'
          + '</summary>'
          + '<div class="issue-body">'
          + '<div class="issue-source-row">' + sourceControl(item.sourceLabel, item.sourceUrl) + '<p>실제 이슈 번호·URL을 확인한 뒤 연결하세요.</p></div>'
          + '<div class="issue-grid">'
          + '<section><p class="micro-label">01 / PROBLEM</p><h4>무슨 문제가 있었나</h4><p>' + esc(item.problem || '') + '</p></section>'
          + '<section><p class="micro-label">02 / EVIDENCE</p><h4>무엇으로 확인했나</h4><ul>' + evidence + '</ul></section>'
          + '<section><p class="micro-label">03 / DECISION</p><h4>어떤 판단을 내렸나</h4><p>' + esc(item.decision || '') + '</p></section>'
          + '<section><p class="micro-label">04 / IMPLEMENTATION</p><h4>어떻게 구현했나</h4><p>' + esc(item.implementation || '') + '</p></section>'
          + '<section class="issue-result"><p class="micro-label">05 / RESULT</p><h4>무엇이 달라졌나</h4><p>' + esc(item.result || '') + '</p></section>'
          + '</div>'
          + '</div>'
          + '</details>';
      }).join('');
      return '<div class="issue-list">' + items + '</div>';
    },

    notion: function (section) {
      var docs = list(section.documents).map(function (doc, index) {
        var prompts = list(doc.prompts).map(function (prompt) {
          return '<li><span aria-hidden="true">□</span>' + esc(prompt) + '</li>';
        }).join('');
        return '<article class="notion-card">'
          + '<div class="notion-card-top"><span>' + esc(String(index + 1).padStart(2, '0')) + '</span><p class="micro-label">OWNER / ' + esc(doc.owner || '') + '</p></div>'
          + '<h3>' + esc(doc.title || '') + '</h3>'
          + '<p>' + esc(doc.summary || '') + '</p>'
          + '<ul>' + prompts + '</ul>'
          + '<div class="notion-card-link">' + sourceControl(doc.status, doc.url) + '</div>'
          + '</article>';
      }).join('');
      return '<div class="notion-grid">' + docs + '</div>';
    },

    decisions: function (section) {
      var items = list(section.items).map(function (item, index) {
        return '<article class="decision-card">'
          + '<div class="decision-card-number">' + esc(String(index + 1).padStart(2, '0')) + '</div>'
          + '<div class="decision-card-main"><p class="micro-label">' + esc(item.label || '') + '</p><h3>' + esc(item.title || '') + '</h3><p>' + esc(item.reason || '') + '</p></div>'
          + '<div class="decision-compare">'
          + '<div><span>BEFORE</span><p>' + esc(item.before || '') + '</p></div>'
          + '<b aria-hidden="true">→</b>'
          + '<div><span>AFTER</span><p>' + esc(item.after || '') + '</p></div>'
          + '</div>'
          + '</article>';
      }).join('');
      return '<div class="case-decision-list">' + items + '</div>';
    },

    code: function (section) {
      var notes = list(section.notes).map(function (note, index) {
        return '<details class="case-code-note">'
          + '<summary><span>' + esc(String(index + 1).padStart(2, '0')) + '</span><b>' + esc(note.title || '') + '</b><i aria-hidden="true">+</i></summary>'
          + '<div class="case-code-body"><p>' + esc(note.text || '') + '</p><pre><code>' + esc(note.code || '') + '</code></pre>'
          + (has(note.caption) ? '<small>' + esc(note.caption) + '</small>' : '') + '</div>'
          + '</details>';
      }).join('');
      return '<div class="case-code-list">' + notes + '</div>';
    },

    checklist: function (section) {
      var items = list(section.items).map(function (item, index) {
        return '<li><span>' + esc(String(index + 1).padStart(2, '0')) + '</span><p>' + esc(item) + '</p><i aria-hidden="true">□</i></li>';
      }).join('');
      return '<ol class="publish-checklist">' + items + '</ol>'
        + '<div class="case-next"><p class="micro-label">NEXT UPDATE</p><h3>GitHub와 Notion을 연결하면 템플릿 칸을 실제 근거로 교체합니다.</h3><a href="../#work">요약 카드로 돌아가기 <span aria-hidden="true">←</span></a></div>';
    }
  };

  function renderSection(section) {
    var renderer = renderers[section.type];
    if (!renderer) return '';
    return '<section class="content-section case-section section-case-' + esc(section.type) + '" id="' + esc(section.id || '') + '" tabindex="-1">'
      + sectionHead(section)
      + renderer(section)
      + '</section>';
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

  function setupScrollSpy(sections) {
    var nav = document.getElementById('caseNav');
    if (!nav) return;
    var links = Array.prototype.slice.call(nav.querySelectorAll('a'));
    var targets = sections.map(function (section) {
      return document.getElementById(section.id);
    }).filter(Boolean);
    var current = '';

    function update() {
      if (!targets.length) return;
      var next = targets[0].id;
      targets.forEach(function (target) {
        if (target.getBoundingClientRect().top <= 150) next = target.id;
      });
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

  function build() {
    var data = window.OMAGOTCHI_CASE;
    var main = document.getElementById('caseStudy');
    var nav = document.getElementById('caseNav');
    if (!data || !data.meta || !main || !nav) {
      if (main) main.innerHTML = '<div class="fallback">오마고치 케이스스터디 데이터를 불러오지 못했습니다.</div>';
      return;
    }

    var meta = data.meta;
    var sections = list(data.sections).filter(function (section) {
      return section && section.id && !section.hidden;
    });

    if (has(meta.accent)) document.documentElement.style.setProperty('--accent', meta.accent);
    document.title = [meta.title, 'Case Study', 'm00n'].filter(has).join(' · ');
    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', meta.summary || document.title);

    main.innerHTML = renderHero(meta) + sections.map(renderSection).join('');
    main.setAttribute('aria-busy', 'false');

    nav.innerHTML = sections.map(function (section) {
      return '<a href="#' + esc(section.id) + '" data-target="' + esc(section.id) + '">' + esc(section.nav || section.id) + '</a>';
    }).join('');

    var updated = document.getElementById('caseUpdated');
    if (updated) updated.textContent = meta.updated || '';
    setupScrollSpy(sections);
  }

  try {
    build();
    setupTheme();
  } catch (error) {
    var main = document.getElementById('caseStudy');
    if (main) main.innerHTML = '<div class="fallback">오마고치 상세 화면을 만드는 중 오류가 발생했습니다.</div>';
    if (window.console) console.error(error);
  }
}());
