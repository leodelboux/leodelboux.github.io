/* delboux.projects — renderização e interações.
   O conteúdo vive em /content/*.js; este arquivo só monta a página a partir dele. */
(() => {
  'use strict';

  const C = window.CONTENT;
  const root = document.documentElement;
  const LANG = root.lang.toLowerCase().startsWith('en') ? 'en' : 'pt';
  const ROOT = root.dataset.root || './';
  const UI = C.ui[LANG];
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FILE = location.protocol === 'file:';

  // Modo de edição: ?edit=1 liga, ?edit=0 desliga (lembrado durante a sessão do navegador).
  const EDIT = (() => {
    const p = new URLSearchParams(location.search);
    try {
      if (p.has('edit')) sessionStorage.setItem('dx-edit', p.get('edit') === '0' ? '0' : '1');
      return sessionStorage.getItem('dx-edit') === '1';
    } catch (e) { return p.get('edit') === '1'; }
  })();

  root.classList.add('js');
  if (EDIT) root.classList.add('is-edit');

  /* ---------- helpers ---------- */
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const t = (v) => (v == null ? '' : typeof v === 'object' ? (v[LANG] ?? v.pt ?? '') : String(v));
  const asset = (p) => (!p ? '' : /^(https?:)?\/\//.test(p) || p.startsWith('#') ? p : ROOT + p);
  const shown = (item) => item.publish !== false || EDIT;
  const flag = (label) => (EDIT ? `<span class="edit-flag">${esc(label)}</span>` : '');
  const langHref = (l) => {
    const base = l === LANG ? './' : l === 'en' ? ROOT + 'en/' : ROOT;
    return FILE ? base + 'index.html' : base;
  };
  const LANG_ATTR = { pt: 'pt-BR', en: 'en' };

  let sectionNo = 0;
  const eyebrow = (label) => `<p class="eyebrow"><span class="eyebrow-no">${String(++sectionNo).padStart(2, '0')}</span>${esc(label)}</p>`;

  /* ---------- header ---------- */
  const NAV = ['work', 'santinho', 'video', 'experience', 'about', 'contact'];

  function renderHeader() {
    const langs = ['pt', 'en'].map((l) =>
      `<a href="${langHref(l)}" hreflang="${LANG_ATTR[l]}" lang="${LANG_ATTR[l]}" data-lang-link${l === LANG ? ' aria-current="true"' : ''}>${l.toUpperCase()}</a>`
    ).join('');
    return `
      <div class="wrap header-inner">
        <a class="wordmark" href="#top" aria-label="delboux.projects">delboux<span>.projects</span></a>
        <nav class="nav" id="site-nav" aria-label="${esc(UI.menu)}">
          <ul>${NAV.map((id) => `<li><a href="#${id}" data-nav="${id}">${esc(UI.nav[id])}</a></li>`).join('')}</ul>
        </nav>
        <div class="lang" role="group" aria-label="${esc(UI.langLabel)}">${langs}</div>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">
          <span class="menu-btn-label">${esc(UI.menu)}</span><span class="menu-btn-icon" aria-hidden="true"></span>
        </button>
      </div>`;
  }

  /* ---------- hero ---------- */
  function renderHero() {
    const P = C.profile;
    const lines = t(P.headline).split(/(?<=\.)\s+/).map((s, i) => `<span class="line${i ? ' line-muted' : ''}">${esc(s)}</span>`).join('');
    return `
      <section class="hero" aria-labelledby="hero-title">
        <div class="wrap hero-grid">
          <div class="hero-copy">
            <p class="signature reveal">${esc(P.signature)}</p>
            <h1 id="hero-title" class="display reveal">${lines}</h1>
            <p class="lead reveal">${esc(t(P.lead))}</p>
            <div class="cta-row reveal">
              <a class="btn btn-primary" href="#work">${esc(UI.heroCtaWork)}<span class="btn-arrow" aria-hidden="true">→</span></a>
              ${contactLinks().length ? `<a class="btn btn-ghost" href="#contact">${esc(UI.heroCtaContact)}</a>` : ''}
            </div>
            ${P.proof && P.proof.length ? `
              <dl class="proof reveal">
                ${P.proof.map((p) => `<div><dt>${esc(t(p.value))}</dt><dd>${esc(t(p.label))}</dd></div>`).join('')}
              </dl>` : ''}
          </div>
          <figure class="hero-photo reveal">
            <img src="${asset(P.photo.src)}" width="${P.photo.width}" height="${P.photo.height}" alt="${esc(t(P.photo.alt))}" fetchpriority="high" decoding="async">
          </figure>
        </div>
        <div class="wrap">
          <ol class="pillars">
            ${P.pillars.map((p, i) => `
              <li class="pillar reveal" style="--d:${i * 70}ms">
                <span class="pillar-no">0${i + 1}</span>
                <h2 class="pillar-title">${esc(t(p.title))}</h2>
                <p>${esc(t(p.text))}</p>
              </li>`).join('')}
          </ol>
        </div>
      </section>`;
  }

  /* ---------- projetos ---------- */
  function renderWork() {
    const groups = C.projectGroups
      .map((g) => ({ ...g, projects: g.projects.filter(shown) }))
      .filter((g) => g.projects.length);

    const meta = (label, value, cls = '') => value ? `<div class="meta-row ${cls}"><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>` : '';

    const project = (p) => `
      <li class="project${p.image ? ' has-media' : ''} reveal">
        <div class="project-main">
          <h4 class="project-title">${esc(t(p.title))}${p.publish === false ? flag(UI.editHiddenItem) : ''}</h4>
          <dl class="meta">
            ${meta(UI.labelContext, t(p.context))}
            ${meta(UI.labelRole, t(p.role))}
            ${meta(UI.labelResult, t(p.result), 'meta-result')}
          </dl>
          ${p.link ? `<a class="text-link" href="${esc(asset(p.link.href))}">${esc(t(p.link.label))}<span aria-hidden="true"> →</span></a>` : ''}
        </div>
        ${p.image ? `<figure class="project-media${p.imageCutout ? ' is-cutout' : ''}"><img src="${asset(p.image)}" alt="${esc(t(p.imageAlt))}" loading="lazy" decoding="async" width="${p.imageWidth || 480}" height="${p.imageHeight || 1040}"></figure>` : ''}
      </li>`;

    return `
      <section class="section" id="work" aria-labelledby="work-title">
        <div class="wrap">
          <header class="section-head">
            ${eyebrow(UI.workEyebrow)}
            <h2 id="work-title" class="h2 reveal">${esc(UI.workTitle)}</h2>
          </header>
          ${groups.map((g, i) => `
            <div class="group">
              <h3 class="group-title"><span class="group-no">${String.fromCharCode(65 + i)}</span>${esc(UI.groups[g.id])}</h3>
              <ol class="project-list">${g.projects.map(project).join('')}</ol>
            </div>`).join('')}
        </div>
      </section>`;
  }

  /* ---------- case: Santinho Virtual ---------- */
  function renderCase() {
    const S = C.santinho;
    const hero = S.gallery.find((g) => g.tilt) || S.gallery[0];
    const rest = S.gallery.filter((g) => g !== hero);
    const shot = (g) => `
      <figure class="shot reveal">
        <div class="shot-media"><img src="${asset(g.src)}" alt="${esc(t(g.alt))}" width="${g.width}" height="${g.height}" loading="lazy" decoding="async"></div>
        <figcaption>${esc(t(g.caption))}</figcaption>
      </figure>`;
    // Em celulares, o botão só aparece se o navegador não liberar o giroscópio sozinho (caso do iPhone).
    const canAskMotion = typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function' && matchMedia('(pointer: coarse)').matches;

    return `
      <section class="section case" id="santinho" aria-labelledby="case-title">
        <div class="wrap">
          <header class="case-head">
            ${eyebrow(UI.caseEyebrow)}
            <h2 id="case-title" class="display-2 reveal">${esc(S.title)}</h2>
            <p class="lead reveal">${esc(t(S.summary))}</p>
            <div class="case-result reveal">
              <span class="case-result-value">${esc(t(S.result))}</span>
              <span class="case-result-note">${esc(t(S.resultNote))}</span>
            </div>
          </header>

          <div class="case-body">
            <div class="case-visual">
              <div class="tilt-stage" data-tilt>
                <div class="tilt-target">
                  <img src="${asset(hero.src)}" alt="${esc(t(hero.alt))}" width="${hero.width}" height="${hero.height}" decoding="async">
                  <span class="tilt-glare" aria-hidden="true" style="-webkit-mask-image:url('${asset(hero.src)}');mask-image:url('${asset(hero.src)}')"></span>
                </div>
              </div>
              <p class="tilt-hint">
                <span>${esc(UI.tiltHint)}</span>
                ${canAskMotion ? `<button type="button" class="chip" data-motion hidden>${esc(UI.tiltEnable)}</button>` : ''}
              </p>
            </div>
            <ol class="steps">
              ${S.steps.map((s, i) => `
                <li class="step reveal">
                  <span class="step-no">${String(i + 1).padStart(2, '0')}</span>
                  <div><h3 class="step-title">${esc(t(s.title))}</h3><p>${esc(t(s.text))}</p></div>
                </li>`).join('')}
            </ol>
          </div>

          <div class="case-features">
            <h3 class="h3">${esc(UI.caseFeatures)}</h3>
            <ul class="feature-list">${S.features.map((f) => `<li class="reveal">${esc(t(f))}</li>`).join('')}</ul>
          </div>

          <div class="case-gallery">
            <h3 class="h3">${esc(UI.caseGallery)}</h3>
            <div class="gallery-row">
              ${rest.map(shot).join('')}
            </div>
          </div>
        </div>
      </section>`;
  }

  /* ---------- vídeos ---------- */
  const PLAYABLE = {};
  function playButton(v) {
    PLAYABLE[v.id] = v;
    return `
      <button class="video-play" type="button" data-play="${esc(v.id)}" aria-label="${esc(UI.videoPlay)}: ${esc(t(v.title))}">
        ${v.poster ? `<img src="${asset(v.poster)}" alt="" loading="lazy" decoding="async">` : ''}
        <span class="play-icon" aria-hidden="true"></span>
      </button>`;
  }

  function renderVideo() {
    const videos = C.videos.filter(shown);
    const cats = [...new Set(videos.map((v) => v.category))];
    const filters = cats.length > 1 ? `
      <div class="filters" role="group" aria-label="${esc(UI.videoEyebrow)}">
        <button type="button" class="chip" data-filter="all" aria-pressed="true">${esc(UI.videoAll)}</button>
        ${cats.map((c) => `<button type="button" class="chip" data-filter="${esc(c)}" aria-pressed="false">${esc(UI.videoCats[c] || c)}</button>`).join('')}
      </div>` : '';

    const card = (v) => `
      <article class="video-card is-${v.orientation === 'horizontal' ? 'h' : 'v'} reveal" data-cat="${esc(v.category)}">
        <div class="video-frame">
          ${v.placeholder || !v.src
            ? `<div class="video-ph"><span>${esc(UI.editPlaceholder)}</span></div>`
            : playButton(v)}
        </div>
        <div class="video-info">
          <p class="video-cat">${esc(UI.videoCats[v.category] || v.category)} · ${esc(t(v.client))}${v.publish === false ? flag(UI.editHiddenItem) : ''}</p>
          <h3 class="video-title">${esc(t(v.title))}</h3>
          ${t(v.description) ? `<p class="video-desc">${esc(t(v.description))}</p>` : ''}
          ${t(v.contribution) ? `<p class="video-role"><span>${esc(UI.videoRole)}</span>${esc(t(v.contribution))}</p>` : ''}
          ${t(v.credit) ? `<p class="video-credit">${esc(t(v.credit))}</p>` : ''}
        </div>
      </article>`;

    return `
      <section class="section" id="video" aria-labelledby="video-title">
        <div class="wrap video-layout">
          <header class="section-head">
            ${eyebrow(UI.videoEyebrow)}
            <h2 id="video-title" class="h2 reveal">${esc(UI.videoTitle)}</h2>
            ${filters}
          </header>
          <div class="video-grid">${videos.map(card).join('')}</div>
        </div>
      </section>`;
  }

  function embedFor(src) {
    const yt = src.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/);
    if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0&playsinline=1`;
    const vm = src.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1`;
    return null;
  }

  function play(btn) {
    const v = PLAYABLE[btn.dataset.play];
    if (!v) return;
    const embed = embedFor(v.src);
    let el;
    if (embed) {
      el = document.createElement('iframe');
      el.src = embed;
      el.title = t(v.title);
      el.allow = 'autoplay; fullscreen; picture-in-picture; encrypted-media';
      el.allowFullscreen = true;
    } else {
      el = document.createElement('video');
      el.src = asset(v.src);
      if (v.poster) el.poster = asset(v.poster);
      el.controls = true;
      el.playsInline = true;
      el.preload = 'auto';
      el.setAttribute('aria-label', t(v.title));
      if (v.clipEnd) {
        const clamp = () => { if (el.currentTime > v.clipEnd) { el.pause(); el.currentTime = v.clipEnd; } };
        el.addEventListener('timeupdate', clamp);
        el.addEventListener('seeked', clamp);
      }
    }
    el.className = 'video-el';
    btn.replaceWith(el);
    if (el.tagName === 'VIDEO') { el.play().catch(() => {}); el.focus(); }
  }

  /* ---------- experiência ---------- */
  function renderExperience() {
    const areas = ['audiovisual', 'commercial', 'operations'];
    const items = C.experience.filter((e) => e.confirmed !== false || EDIT);
    const row = (e) => `
      <li class="exp-row">
        <div class="exp-main">
          <p class="exp-role">${esc(t(e.role))}${e.confirmed === false ? flag(UI.unconfirmed) : ''}</p>
          ${t(e.org) ? `<p class="exp-org">${esc(t(e.org))}</p>` : ''}
        </div>
        <p class="exp-period">${e.period ? esc(e.period) : flag(UI.periodPending)}</p>
      </li>`;
    return `
      <section class="section" id="experience" aria-labelledby="exp-title">
        <div class="wrap">
          <header class="section-head">
            ${eyebrow(UI.expEyebrow)}
            <h2 id="exp-title" class="h2 reveal">${esc(UI.expTitle)}</h2>
          </header>
          <div class="exp-grid">
            ${areas.map((a) => {
              const list = items.filter((e) => e.area === a);
              return list.length ? `<div class="exp-area reveal"><h3 class="exp-area-title">${esc(UI.expAreas[a])}</h3><ul>${list.map(row).join('')}</ul></div>` : '';
            }).join('')}
          </div>
        </div>
      </section>`;
  }

  /* ---------- sobre ---------- */
  function renderAbout() {
    const A = C.profile.about;
    return `
      <section class="section" id="about" aria-labelledby="about-title">
        <div class="wrap about-grid">
          <header class="section-head">
            ${eyebrow(UI.aboutEyebrow)}
            <h2 id="about-title" class="h2 reveal">${esc(t(A.title))}</h2>
          </header>
          <div class="about-body">
            ${A.paragraphs.map((p) => `<p class="reveal">${esc(t(p))}</p>`).join('')}
            <dl class="facts reveal">
              ${A.facts.filter((f) => f.confirmed !== false || EDIT).map((f) => `<div><dt>${esc(t(f.label))}</dt><dd>${esc(t(f.value))}${f.confirmed === false ? flag(UI.unconfirmed) : ''}</dd></div>`).join('')}
            </dl>
          </div>
        </div>
      </section>`;
  }

  /* ---------- depoimentos ---------- */
  function renderTestimonials() {
    const list = C.testimonials.filter((x) => x.authorized && t(x.text));
    if (!list.length && !EDIT) return '';
    const quote = (x) => {
      const own = x.text[LANG];
      const lang = own ? LANG_ATTR[LANG] : LANG_ATTR.pt;
      return `
        <figure class="quote reveal">
          <blockquote lang="${lang}"><p>${esc(own || x.text.pt)}</p></blockquote>
          <figcaption>
            ${x.photo ? `<img src="${asset(x.photo)}" alt="" width="48" height="48" loading="lazy">` : ''}
            <span><strong>${esc(x.name)}</strong>${t(x.role) ? `<span>${esc(t(x.role))}</span>` : ''}</span>
          </figcaption>
        </figure>`;
    };
    return `
      <section class="section" id="testimonials" aria-labelledby="tst-title">
        <div class="wrap">
          <header class="section-head">
            ${eyebrow(UI.testimonialsEyebrow)}
            <h2 id="tst-title" class="h2">${esc(UI.testimonialsTitle)}</h2>
          </header>
          ${list.length ? `<div class="quotes">${list.map(quote).join('')}</div>` : `<p class="edit-note">${esc(UI.editTestimonials)}</p>`}
        </div>
      </section>`;
  }

  /* ---------- contato ---------- */
  // Só canais preenchidos viram links; sem nenhum, a página não exibe botões de contato.
  function contactLinks() {
    const K = C.profile.contact;
    const links = [];
    if (K.email) links.push({ label: UI.contactEmail, value: K.email, href: `mailto:${K.email}` });
    if (K.whatsapp) links.push({ label: UI.contactWhatsapp, value: '+' + K.whatsapp.replace(/\D/g, ''), href: `https://wa.me/${K.whatsapp.replace(/\D/g, '')}`, ext: true });
    (K.links || []).filter((l) => l && l.url).forEach((l) => links.push({ label: l.label, value: l.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''), href: l.url, ext: true }));
    return links;
  }

  function renderContact() {
    const K = C.profile.contact;
    const links = contactLinks();

    return `
      <section class="section contact" id="contact" aria-labelledby="contact-title">
        <div class="wrap">
          ${eyebrow(UI.contactEyebrow)}
          <h2 id="contact-title" class="display-2 reveal">${esc(t(K.title))}</h2>
          <p class="lead reveal">${esc(t(K.text))}</p>
          ${links.length
            ? `<ul class="contact-list">${links.map((l) => `
                <li><a href="${esc(l.href)}"${l.ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>
                  <span class="contact-label">${esc(l.label)}</span><span class="contact-value">${esc(l.value)}</span><span aria-hidden="true">↗</span>
                </a></li>`).join('')}</ul>`
            : ''}
          ${EDIT ? `<p class="edit-note">${esc(UI.editContact)}</p>` : ''}
        </div>
      </section>`;
  }

  /* ---------- rodapé ---------- */
  function renderFooter() {
    return `
      <div class="wrap footer-inner">
        <p class="wordmark">delboux<span>.projects</span></p>
        <p class="footer-sig">${esc(C.profile.signature)}</p>
        <p class="footer-meta">
          <span>© ${new Date().getFullYear()} delboux.projects</span>
          <a href="#top">${esc(UI.footerTop)} ↑</a>
        </p>
      </div>`;
  }

  /* ---------- montagem ---------- */
  document.querySelector('.site-header').innerHTML = renderHeader();
  document.querySelector('.skip').textContent = UI.skip;
  const parts = [renderHero(), renderWork(), renderCase(), renderVideo(), renderExperience(), renderAbout(), renderTestimonials(), renderContact()];
  document.getElementById('main').insertAdjacentHTML('beforeend', parts.join(''));
  document.querySelector('.site-footer').innerHTML = renderFooter();

  if (EDIT) {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="edit-bar" role="status">
        <span>${esc(UI.editBanner)}</span>
        <a href="?edit=0">${esc(UI.editExit)}</a>
      </div>`);
  }

  // A página é montada por JS: ao chegar com #secao na URL (ex.: troca de idioma), rola até ela.
  const jumpToHash = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    const el = id && document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  };
  if (location.hash) {
    requestAnimationFrame(jumpToHash);
    addEventListener('load', jumpToHash, { once: true });
  }

  /* ---------- interações ---------- */
  const header = document.querySelector('.site-header');
  const menuBtn = header.querySelector('.menu-btn');
  const setMenu = (open) => {
    header.classList.toggle('nav-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.querySelector('.menu-btn-label').textContent = open ? UI.close : UI.menu;
    document.body.classList.toggle('no-scroll', open);
  };
  menuBtn.addEventListener('click', () => setMenu(!header.classList.contains('nav-open')));
  header.querySelectorAll('.nav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && header.classList.contains('nav-open')) { setMenu(false); menuBtn.focus(); } });

  // Troca de idioma preservando a seção atual.
  header.querySelectorAll('[data-lang-link]').forEach((a) => a.addEventListener('click', () => {
    if (location.hash) a.href = a.getAttribute('href').split('#')[0] + location.hash;
  }));

  const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Item ativo no menu.
  const navLinks = new Map([...header.querySelectorAll('[data-nav]')].map((a) => [a.dataset.nav, a]));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      navLinks.forEach((a) => a.removeAttribute('aria-current'));
      const a = navLinks.get(en.target.id);
      if (a) a.setAttribute('aria-current', 'location');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  NAV.forEach((id) => { const s = document.getElementById(id); if (s) spy.observe(s); });

  // Revelação ao rolar (desativada com movimento reduzido).
  const reveals = document.querySelectorAll('.reveal');
  if (REDUCED || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach((el) => io.observe(el));
  }

  // Reprodução sob demanda.
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-play]');
    if (btn) play(btn);
  });
  // Só um vídeo tocando por vez.
  document.addEventListener('play', (e) => {
    document.querySelectorAll('video').forEach((v) => { if (v !== e.target) v.pause(); });
  }, true);

  // Filtros da galeria.
  document.querySelectorAll('.filters').forEach((group) => group.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-filter]');
    if (!chip) return;
    const f = chip.dataset.filter;
    group.querySelectorAll('[data-filter]').forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
    document.querySelectorAll('.video-card').forEach((card) => { card.hidden = f !== 'all' && card.dataset.cat !== f; });
  }));

  // Card do Santinho: inclina com o mouse e com o giroscópio do celular, como no produto.
  const stage = document.querySelector('[data-tilt]');
  if (stage && !REDUCED) {
    const target = stage.querySelector('.tilt-target');
    const clamp = (n) => Math.max(-0.5, Math.min(0.5, n));
    // x, y entre -0.5 e 0.5
    const set = (x, y) => {
      target.style.setProperty('--rx', `${(-y * 22).toFixed(2)}deg`);
      target.style.setProperty('--ry', `${(x * 26).toFixed(2)}deg`);
      target.style.setProperty('--gx', `${((x + 0.5) * 100).toFixed(1)}%`);
      target.style.setProperty('--gy', `${((y + 0.5) * 100).toFixed(1)}%`);
    };
    stage.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const r = stage.getBoundingClientRect();
      target.classList.add('is-active');
      set(clamp((e.clientX - r.left) / r.width - 0.5), clamp((e.clientY - r.top) / r.height - 0.5));
    });
    stage.addEventListener('pointerleave', () => { target.classList.remove('is-active'); set(0, 0); });

    // Giroscópio: a primeira leitura vira a posição neutra (cada pessoa segura o celular num ângulo).
    let base = null;
    const motionBtn = document.querySelector('[data-motion]');
    const onOrient = (e) => {
      if (e.gamma == null || e.beta == null) return;
      if (base === null) { base = e.beta; if (motionBtn) motionBtn.remove(); }
      target.classList.add('is-active');
      set(clamp(e.gamma / 50), clamp((e.beta - base) / 50));
    };
    if (matchMedia('(pointer: coarse)').matches && typeof DeviceOrientationEvent !== 'undefined') {
      addEventListener('deviceorientation', onOrient, { passive: true });
      if (motionBtn) {
        setTimeout(() => { if (base === null && motionBtn.isConnected) motionBtn.hidden = false; }, 1200);
        motionBtn.addEventListener('click', () => {
          DeviceOrientationEvent.requestPermission().then((state) => { if (state === 'granted') motionBtn.remove(); }).catch(() => {});
        });
      }
    }
  }
})();
