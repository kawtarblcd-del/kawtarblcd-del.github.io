/* =========================
   app.js — Portfolio KB (FULL STABLE)
   Compatible avec data.js (sections, projects.images, passionsCategories, languages)
   ========================= */

(function () {
  /* ---------- DOM ---------- */
  const introEl = document.getElementById("intro");
  const appEl = document.getElementById("app");

  // Modal
  const modalEl = document.getElementById("modal");
  const modalTitleEl = document.getElementById("modalTitle");
  const modalBodyEl = document.getElementById("modalBody");
  const modalPrimaryBtn = document.getElementById("modalPrimaryAction");

  // Lang buttons
  const langFRBtn = document.getElementById("langFR");
  const langENBtn = document.getElementById("langEN");

  // Mobile nav (if present)
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  const DATA = window.KB_DATA;
  if (!DATA) {
    console.error("KB_DATA introuvable. Vérifie que data.js est chargé avant app.js");
    return;
  }

  /* ---------- LANGUAGE ---------- */
  const LANG_KEY = "kb_lang";
  let currentLang = (localStorage.getItem(LANG_KEY) || "fr").toLowerCase();
  if (!["fr", "en"].includes(currentLang)) currentLang = "fr";

  function t(key) {
    return DATA?.i18n?.[currentLang]?.[key] ?? key;
  }

  function applyStaticI18n() {
    // Navbar labels (elements with data-i18n)
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });

    // Toggle state (if present)
    if (langFRBtn && langENBtn) {
      const isFR = currentLang === "fr";
      langFRBtn.classList.toggle("is-active", isFR);
      langENBtn.classList.toggle("is-active", !isFR);
      langFRBtn.setAttribute("aria-pressed", String(isFR));
      langENBtn.setAttribute("aria-pressed", String(!isFR));
    }
  }

  function setLanguage(lang) {
    currentLang = lang === "en" ? "en" : "fr";
    localStorage.setItem(LANG_KEY, currentLang);
    applyStaticI18n();
    navigate(); // re-render current view
  }

  langFRBtn?.addEventListener("click", () => setLanguage("fr"));
  langENBtn?.addEventListener("click", () => setLanguage("en"));

  /* ---------- INTRO ---------- */
  function hideIntro() {
    if (!introEl) return;
    introEl.classList.add("is-hidden");
    setTimeout(() => (introEl.style.display = "none"), 750);
  }
  window.addEventListener("load", () => setTimeout(hideIntro, 900));

  /* ---------- MOBILE NAV ---------- */
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }

  /* ---------- ROUTER ---------- */
  const routes = {
    "/": renderHome,
    "/diplomes": renderDiplomas,
    "/projets": renderProjects,
    "/experiences": renderExperiences,
    "/competences": renderSkills,
    "/passions": renderPassions,
    "/contact": renderContact,
  };

  function getPath() {
    const hash = window.location.hash || "#/";
    return hash.replace("#", "") || "/";
  }

  function navigate() {
    const path = getPath();
    const view = routes[path] || renderNotFound;
    appEl.innerHTML = view();
    setActiveNav(path);

    // Wire interactions (after render)
    wireHomeCardsModal();
    wireProjectDetails();
    applyStaticI18n();

    // accessibility: focus main
    appEl.focus();
  }

  window.addEventListener("hashchange", navigate);

  function setActiveNav(path) {
    document.querySelectorAll(".nav__link").forEach((a) => {
      const href = a.getAttribute("href")?.replace("#", "") || "";
      a.classList.toggle("is-active", href === path);
    });
  }

  /* ---------- MODAL ---------- */
  function openModal({ title, html, primaryText, onPrimary }) {
    modalTitleEl.textContent = title;
    modalBodyEl.innerHTML = html;

    if (primaryText && typeof onPrimary === "function") {
      modalPrimaryBtn.style.display = "inline-flex";
      modalPrimaryBtn.textContent = primaryText;
      modalPrimaryBtn.onclick = onPrimary;
    } else {
      modalPrimaryBtn.style.display = "none";
      modalPrimaryBtn.onclick = null;
    }

    modalEl.classList.add("is-open");
    modalEl.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // focus close button if present
    const closeBtn = modalEl.querySelector("[data-modal-close]");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modalEl.classList.remove("is-open");
    modalEl.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // close by X button(s)
  modalEl?.addEventListener("click", (e) => {
    if (e.target.closest("[data-modal-close]")) closeModal();
  });

  // close by ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalEl.classList.contains("is-open")) {
      closeModal();
    }
  });

  /* ---------- HOME ---------- */
  function renderHome() {
    const p = DATA.profile;

    const sectionsHtml = (DATA.sections || [])
      .map(
        (s) => `
        <a class="card" href="${escapeAttr(s.route)}" data-section-key="${escapeAttr(s.key)}">
          <div class="card__body">
            <div class="card__kicker">${escapeHtml(currentLang === "fr" ? "Section" : "Section")}</div>
            <h3 class="card__title">${escapeHtml(s.title[currentLang])}</h3>
            <p class="card__desc">${escapeHtml(s.desc[currentLang])}</p>
          </div>
        </a>`
      )
      .join("");

    return `
      <section class="page">
        <header class="hero" role="region" aria-label="Hero">
          <h1 class="hero__name">${escapeHtml(p.fullName)}</h1>
          <p class="hero__text">${escapeHtml(p.heroText[currentLang])}</p>

          <div class="hero__actions">
            <a class="btn btn--primary" href="#/projets">${escapeHtml(t("hero_projects"))}</a>
            <a class="btn btn--ghost" href="${escapeAttr(p.links.cv)}" target="_blank" rel="noopener">
              ${escapeHtml(t("hero_cv"))}
            </a>
            <a class="btn btn--ghost" href="#/contact">${escapeHtml(t("hero_contact"))}</a>
          </div>
        </header>

        <section class="rail" aria-label="Sections">
          <div class="rail__head">
            <h2 class="rail__title">${escapeHtml(t("home_explore"))}</h2>
            <p class="rail__hint">${escapeHtml(t("home_hint"))}</p>
          </div>
          <div class="rail__scroller">
            ${sectionsHtml}
          </div>
        </section>
      </section>
    `;
  }

  function wireHomeCardsModal() {
    const cards = document.querySelectorAll("[data-section-key]");
    if (!cards.length) return;

    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        e.preventDefault();
        const key = card.getAttribute("data-section-key");
        const section = (DATA.sections || []).find((s) => s.key === key);
        if (!section) return;

        openModal({
          title: section.title[currentLang],
          html: `
            <p style="margin:0; color: rgba(255,255,255,0.78); line-height:1.7;">
              ${escapeHtml(section.details[currentLang])}
            </p>
          `,
          primaryText: t("modal_primary"),
          onPrimary: () => {
            closeModal();
            window.location.hash = section.route; // route already has #/...
          },
        });
      });
    });
  }

  /* ---------- PROJECTS ---------- */
  function renderProjects() {
    const items = (DATA.projects || []).map((p, i) => projectCard(p, i)).join("");

    return `
      <section class="page">
        <header class="page__header">
          <h1 class="page__title">${escapeHtml(t("projects_title"))}</h1>
          <p class="page__subtitle">${escapeHtml(t("projects_subtitle"))}</p>
        </header>

        <div class="grid">
          ${items}
        </div>
      </section>
    `;
  }

  // Project card: no images shown directly, only a "Détails" CTA
  function projectCard(p, index) {
    const tech = (p.tech || []).map((x) => `<span class="tag">${escapeHtml(x)}</span>`).join("");
    const hasImages = Array.isArray(p.images) && p.images.length > 0;

    const detailsLabel = currentLang === "fr"
      ? (hasImages ? "Détails • Images disponibles" : "Détails")
      : (hasImages ? "Details • Images available" : "Details");

    return `
      <article class="tile" data-project-index="${index}" role="button" tabindex="0" aria-label="${escapeHtml(p.title[currentLang])}">
        <div class="tile__head">
          <h3 class="tile__title">${escapeHtml(p.title[currentLang])}</h3>
          <div class="tile__meta">${escapeHtml(p.role?.[currentLang] || "")}</div>
        </div>

        <p class="tile__desc">${escapeHtml(p.description[currentLang])}</p>
        <div class="tags">${tech}</div>

        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:8px;">
          <button class="btn btn--ghost" type="button" data-project-open="${index}">
            ${escapeHtml(detailsLabel)}
          </button>
        </div>
      </article>
    `;
  }

  function wireProjectDetails() {
    const openers = document.querySelectorAll("[data-project-open], [data-project-index]");
    if (!openers.length) return;

    openers.forEach((el) => {
      const open = () => {
        const idx = Number(el.getAttribute("data-project-open") ?? el.getAttribute("data-project-index"));
        if (Number.isNaN(idx)) return;
        openProjectDetails(idx);
      };

      el.addEventListener("click", (e) => {
        const button = e.target.closest("[data-project-open]");
        if (button || el.hasAttribute("data-project-index")) {
          e.preventDefault();
          open();
        }
      });

      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    });
  }

  function openProjectDetails(index) {
    const proj = (DATA.projects || [])[index];
    if (!proj) return;

    const tech = (proj.tech || []).map((x) => `<span class="tag">${escapeHtml(x)}</span>`).join("");
    const highlights = (proj.highlights?.[currentLang] || []).map((x) => `<span class="tag">${escapeHtml(x)}</span>`).join("");

    const github = proj.links?.github
      ? `<a class="mini-link" href="${escapeAttr(proj.links.github)}" target="_blank" rel="noopener">GitHub</a>`
      : "";
    const demo = proj.links?.demo
      ? `<a class="mini-link" href="${escapeAttr(proj.links.demo)}" target="_blank" rel="noopener">Demo</a>`
      : "";

    const hasImages = Array.isArray(proj.images) && proj.images.length > 0;

    openModal({
      title: proj.title[currentLang],
      html: `
        <div style="display:grid; gap:12px;">
          <p style="margin:0; color: rgba(255,255,255,0.78); line-height:1.7;">
            ${escapeHtml(proj.description[currentLang])}
          </p>

          ${proj.role?.[currentLang] ? `
            <div style="color: rgba(255,255,255,0.65); font-weight:800; font-size:12px;">
              ${escapeHtml(proj.role[currentLang])}
            </div>
          ` : ""}

          <div class="tags">${tech}</div>
          ${highlights ? `<div class="tags">${highlights}</div>` : ""}

          ${(github || demo) ? `<div class="tile__links" style="justify-content:flex-start;">${github}${demo}</div>` : ""}

          ${hasImages ? `
            <div style="margin-top:6px;">
              <button class="btn btn--primary" type="button" id="openGalleryBtn">
                ${escapeHtml(currentLang === "fr" ? "Voir les images" : "View images")}
              </button>
            </div>
          ` : ""}
        </div>
      `,
      // For details modal, we don’t need bottom primary button (we already have a CTA inside)
      primaryText: null,
      onPrimary: null,
    });

    // wire "Voir les images" inside modal content
    if (hasImages) {
      const btn = document.getElementById("openGalleryBtn");
      if (btn) btn.addEventListener("click", () => openProjectViewer(index, 0));
    }
  }

  function openProjectViewer(index, startIndex = 0) {
    const proj = (DATA.projects || [])[index];
    const images = proj?.images || [];
    if (!images.length) return;

    let i = Math.max(0, Math.min(startIndex, images.length - 1));

    const render = () => {
      openModal({
        title: proj.title[currentLang],
        html: `
          <div class="viewer">
            <img class="viewer__img" src="${escapeAttr(images[i])}" alt="${escapeHtml(proj.title[currentLang])} — image ${i + 1}">
            <div class="viewer__bar">
              <div class="viewer__count">${i + 1} / ${images.length}</div>
              <div class="viewer__nav">
                <button class="btn btn--ghost" type="button" id="prevImg" ${i === 0 ? "disabled" : ""}>←</button>
                <button class="btn btn--ghost" type="button" id="nextImg" ${i === images.length - 1 ? "disabled" : ""}>→</button>
              </div>
            </div>
          </div>
        `,
        primaryText: currentLang === "fr" ? "Retour détails" : "Back to details",
        onPrimary: () => openProjectDetails(index),
      });

      const prev = document.getElementById("prevImg");
      const next = document.getElementById("nextImg");
      if (prev) prev.onclick = () => { i = Math.max(0, i - 1); render(); };
      if (next) next.onclick = () => { i = Math.min(images.length - 1, i + 1); render(); };
    };

    render();
  }

  /* ---------- DIPLOMAS ---------- */
  function renderDiplomas() {
    const items = (DATA.diplomas || []).map((d) => diplomaCard(d)).join("");
    return `
      <section class="page">
        <header class="page__header">
          <h1 class="page__title">${escapeHtml(t("diplomes_title"))}</h1>
          <p class="page__subtitle">${escapeHtml(t("diplomes_subtitle"))}</p>
        </header>
        <div class="grid">
          ${items}
        </div>
      </section>
    `;
  }

  function diplomaCard(d) {
    const meta = [d.period?.[currentLang], d.institution?.[currentLang]].filter(Boolean).join(" • ");
    return `
      <article class="tile">
        <div class="tile__head">
          <h3 class="tile__title">${escapeHtml(d.title?.[currentLang] || "")}</h3>
          <div class="tile__meta">${escapeHtml(meta)}</div>
        </div>
        <p class="tile__desc">${escapeHtml(d.details?.[currentLang] || "")}</p>
      </article>
    `;
  }

  /* ---------- EXPERIENCES ---------- */
  function renderExperiences() {
    const items = (DATA.experiences || []).map((x) => experienceCard(x)).join("");
    return `
      <section class="page">
        <header class="page__header">
          <h1 class="page__title">${escapeHtml(t("experiences_title"))}</h1>
          <p class="page__subtitle">${escapeHtml(t("experiences_subtitle"))}</p>
        </header>
        <div class="grid">
          ${items}
        </div>
      </section>
    `;
  }

  function experienceCard(x) {
    const meta = [x.organization?.[currentLang], x.period?.[currentLang], x.location?.[currentLang]]
      .filter(Boolean)
      .join(" • ");

    const highlights = (x.highlights?.[currentLang] || []).map((h) => `<span class="tag">${escapeHtml(h)}</span>`).join("");

    return `
      <article class="tile">
        <div class="tile__head">
          <h3 class="tile__title">${escapeHtml(x.title?.[currentLang] || "")}</h3>
          <div class="tile__meta">${escapeHtml(meta)}</div>
        </div>
        <p class="tile__desc">${escapeHtml(x.description?.[currentLang] || "")}</p>
        ${highlights ? `<div class="tags">${highlights}</div>` : ""}
      </article>
    `;
  }

  /* ---------- SKILLS ---------- */
  function renderSkills() {
    const items = (DATA.skills || []).map((c) => categoryTagsCard({
      title: c.category?.[currentLang] || "",
      tags: c.tags || [],
    })).join("");

    return `
      <section class="page">
        <header class="page__header">
          <h1 class="page__title">${escapeHtml(t("skills_title"))}</h1>
          <p class="page__subtitle">${escapeHtml(t("skills_subtitle"))}</p>
        </header>
        <div class="grid">
          ${items}
        </div>
      </section>
    `;
  }

  /* ---------- PASSIONS (catégories + tags) ---------- */
  function renderPassions() {
    const items = (DATA.passionsCategories || []).map((c) => categoryTagsCard({
      title: c.category?.[currentLang] || "",
      tags: (c.tags?.[currentLang] || []),
    })).join("");

    return `
      <section class="page">
        <header class="page__header">
          <h1 class="page__title">${escapeHtml(t("passions_title"))}</h1>
          <p class="page__subtitle">${escapeHtml(t("passions_subtitle"))}</p>
        </header>
        <div class="grid">
          ${items}
        </div>
      </section>
    `;
  }

  function categoryTagsCard({ title, tags }) {
    const tagsHtml = (tags || []).map((x) => `<span class="tag">${escapeHtml(x)}</span>`).join("");
    return `
      <article class="tile">
        <div class="tile__head">
          <h3 class="tile__title">${escapeHtml(title)}</h3>
        </div>
        <div class="tags">${tagsHtml}</div>
      </article>
    `;
  }

  /* ---------- CONTACT ---------- */
  function renderContact() {
    const links = DATA.profile.links;

    const languagesList = (DATA.languages || [])
      .map((l) => `<span class="tag">${escapeHtml(l.name[currentLang])} — ${escapeHtml(l.level[currentLang])}</span>`)
      .join("");

    return `
      <section class="page">
        <header class="page__header">
          <h1 class="page__title">${escapeHtml(t("contact_title"))}</h1>
          <p class="page__subtitle">${escapeHtml(t("contact_subtitle"))}</p>
        </header>

        <div class="contact-card">
          <div class="contact-row">
            <div class="contact-label">${escapeHtml(t("contact_email"))}</div>
            <a class="contact-value" href="mailto:${escapeAttr(links.email)}">${escapeHtml(links.email)}</a>
          </div>

          <div class="contact-row">
            <div class="contact-label">${escapeHtml(t("contact_linkedin"))}</div>
            <a class="contact-value" href="${escapeAttr(links.linkedin)}" target="_blank" rel="noopener">
              ${escapeHtml(links.linkedin.replace("https://", ""))}
            </a>
          </div>

          <div class="contact-row">
            <div class="contact-label">${escapeHtml(t("contact_github"))}</div>
            <a class="contact-value" href="${escapeAttr(links.github)}" target="_blank" rel="noopener">
              ${escapeHtml(links.github.replace("https://", ""))}
            </a>
          </div>

          <div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap;">
            <a class="btn btn--primary" href="mailto:${escapeAttr(links.email)}">
              ${escapeHtml(t("contact_sendmail"))}
            </a>
            <a class="btn btn--ghost" href="${escapeAttr(links.cv)}" target="_blank" rel="noopener">
              ${escapeHtml(t("hero_cv"))}
            </a>
          </div>

          ${languagesList ? `
            <div style="margin-top:16px;">
              <div style="color: rgba(255,255,255,0.65); font-weight:900; font-size:12px; letter-spacing:0.02em; text-transform:uppercase;">
                ${escapeHtml(t("contact_languages"))}
              </div>
              <div class="tags" style="margin-top:10px;">${languagesList}</div>
            </div>
          ` : ""}
        </div>
      </section>
    `;
  }

  /* ---------- NOT FOUND ---------- */
  function renderNotFound() {
    return `
      <section class="page">
        <header class="page__header">
          <h1 class="page__title">404</h1>
          <p class="page__subtitle">${escapeHtml(currentLang === "fr" ? "Page introuvable." : "Page not found.")}</p>
        </header>
        <a class="btn btn--primary" href="#/">${escapeHtml(t("back_home"))}</a>
      </section>
    `;
  }

  /* ---------- ESCAPE UTILS ---------- */
  function escapeHtml(str) {
    return String(str ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replaceAll("`", "&#096;");
  }

  /* ---------- INIT ---------- */
  applyStaticI18n();
  setLanguage(currentLang); // triggers navigate() too
})();
