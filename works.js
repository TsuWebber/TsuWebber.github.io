// Work page: every side project, then past projects from school, programmes and teams.
(function () {
  "use strict";
  var HUB = window.HUB;
  var UI = {
    en: {
      wordmark: "Webber Hsu", skip: "Skip to work",
      "nav.build": "Build", "nav.think": "Think", "nav.learn": "Learn", "nav.exp": "Experience", "nav.work": "Work", "nav.blog": "Blog",
      "work.h": "Work",
      "work.sub": "Side projects I built and still run, and earlier projects from school, programmes and teams.",
      side: "Side projects", past: "Past projects",
      status: { live: "Live", built: "Built", planned: "Planned" },
      pending: "Private for now", readMore: "Read the story", details: "About this project",
      "foot.h": "Elsewhere", "foot.meta": "Taipei",
      links: { github: "GitHub", linkedin: "LinkedIn", medium: "Medium", substack: "Substack", facebook: "Facebook", heptabase: "Heptabase invite" }
    },
    zh: {
      wordmark: "徐偉博", skip: "跳到作品",
      "nav.build": "實作", "nav.think": "思考", "nav.learn": "學習", "nav.exp": "經歷", "nav.work": "作品", "nav.blog": "部落格",
      "work.h": "作品",
      "work.sub": "我做出來、還在運作的個人作品，以及過去在學校、培訓計畫和團隊裡做過的專案。",
      side: "個人作品", past: "過去專案",
      status: { live: "上線中", built: "已完成", planned: "規劃中" },
      pending: "目前不公開", readMore: "看這段的文章", details: "看專案介紹",
      "foot.h": "其他地方", "foot.meta": "台北",
      links: { github: "GitHub", linkedin: "LinkedIn", medium: "Medium", substack: "Substack", facebook: "Facebook", heptabase: "Heptabase 邀請連結" }
    }
  };
  var ARROW = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5"/></svg>';
  function withArrow(text) {
    text = String(text);
    var cut = text.lastIndexOf(" ");
    cut = cut < 0 ? text.length - Array.from(text).slice(-2).join("").length : cut + 1;
    return esc(text.slice(0, cut)) + '<span class="nowrap">' + esc(text.slice(cut)) + ARROW + "</span>";
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  var lang = (function () {
    var saved = null;
    try { saved = localStorage.getItem("hub-lang"); } catch (e) {}
    if (saved === "en" || saved === "zh") return saved;
    return /^zh/i.test(navigator.language || "") ? "zh" : "en";
  })();
  var SIZES = { 1: 15, 2: 11, 3: 8 };
  function t(o) { return o && typeof o === "object" ? (o[lang] || o.en) : o; }
  function workRow(w) {
    var ui = UI[lang];
    // A work with its own page gets an inside link first; the rest open outside.
    var inside = w.page ? '<a class="work-page" href="' + esc(w.page) + '">' + esc(ui.details) + ARROW + "</a>" : "";
    var links = (w.links || []).filter(function (l) { return l.url; }).map(function (l) {
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(t(l.label)) + ARROW + "</a>";
    }).join("");
    links = inside + links;
    if (!links && w.status !== "planned") links = '<span class="work-pending">' + esc(ui.pending) + "</span>";
    var dot = w.mag === 1 ? "background:var(--gold)" : "";
    return '<li class="work" id="work-' + esc(w.id) + '" data-status="' + w.status + '">' +
      '<div class="work-title"><span class="dot" style="--d:' + (SIZES[w.mag] || 11) + "px;" + dot + '" aria-hidden="true"></span><h3>' + esc(t(w.name)) + "</h3></div>" +
      '<p class="work-meta"><span>' + esc(t(w.year)) + '</span><span class="status" data-s="' + w.status + '">' + esc(ui.status[w.status]) + "</span>" + (w.stack ? "<span>" + esc(t(w.stack)) + "</span>" : "") + "</p>" +
      '<p class="work-summary">' + esc(t(w.summary)) + "</p>" +
      (links ? '<div class="work-links">' + links + "</div>" : "") + "</li>";
  }
  function pastRow(p) {
    var ui = UI[lang];
    return '<li class="work is-past" id="work-' + esc(p.id) + '">' +
      '<div class="work-title"><span class="dot" style="--d:9px;background:none;border:1px solid var(--ink-3)" aria-hidden="true"></span><h3>' + esc(t(p.name)) + "</h3></div>" +
      '<p class="work-meta"><span>' + esc(p.year) + "</span><span>" + esc(t(p.context)) + "</span></p>" +
      '<p class="work-summary">' + esc(t(p.summary)) + "</p>" +
      (p.link ? '<div class="work-links"><a href="' + esc(p.link) + '" target="_blank" rel="noopener" hreflang="zh-Hant">' + esc(ui.readMore) + ARROW + "</a></div>" : "") + "</li>";
  }
  function renderWorks() {
    var ui = UI[lang];
    // Side projects: everything on the Build track, the homepage picks first, then finished before planned.
    var rank = { live: 0, built: 1, planned: 2 };
    var side = (HUB.works || []).filter(function (w) { return w.orbit === "build"; }).slice()
      .sort(function (a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || rank[a.status] - rank[b.status]; });
    var past = HUB.past || [];
    document.querySelector("[data-works]").innerHTML =
      '<section class="year" aria-labelledby="w-side"><h2 class="year-h" id="w-side">' + esc(ui.side) + '</h2><ol class="works">' + side.map(workRow).join("") + "</ol></section>" +
      (past.length ? '<section class="year" aria-labelledby="w-past"><h2 class="year-h" id="w-past">' + esc(ui.past) + '</h2><ol class="works">' + past.map(pastRow).join("") + "</ol></section>" : "");
  }

  function renderLinks() {
    var ui = UI[lang];
    document.querySelector("[data-links]").innerHTML = Object.keys(HUB.links).filter(function (k) { return HUB.links[k]; }).map(function (k) {
      // The Heptabase invite carries the official Heptabase mark, floating at its top-right corner.
      if (k === "heptabase") {
        return '<li><a class="ext-invite" href="' + esc(HUB.links[k]) + '" target="_blank" rel="noopener">' +
          '<span>' + esc(ui.links[k]) + "</span>" + ARROW +
          '<svg class="invite-logo" viewBox="0 0 28 28" aria-hidden="true" focusable="false"><path d="M27.96 24.466a3.495 3.495 0 1 1-6.99 0 3.495 3.495 0 0 1 6.99 0ZM0 20.388V2.913a2.913 2.913 0 0 1 5.825 0c0 .73 0 3.799.002 5.242v1.517c0 .848.501 1.616 1.278 1.956a5.34 5.34 0 0 0 4.115.073l.243-.096a2.145 2.145 0 0 0 1.354-1.994l-.001-2.038a2.913 2.913 0 0 1 5.825 0v17.475a2.913 2.913 0 0 1-5.825 0V18.35c0-.879-.536-1.669-1.353-1.993l-.243-.097a5.34 5.34 0 0 0-4.115.073 2.136 2.136 0 0 0-1.278 1.957v1.517l-.002.582a2.913 2.913 0 0 1-5.825 0Z"/></svg></a></li>';
      }
      return '<li><a href="' + esc(HUB.links[k]) + '" target="_blank" rel="noopener">' + esc(ui.links[k]) + ARROW + "</a></li>";
    }).join("");
  }

  function applyLang() {
    var ui = UI[lang];
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) { var v = ui[el.getAttribute("data-i18n")]; if (typeof v === "string") el.textContent = v; });
    document.querySelectorAll("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    renderLinks();
    renderWorks();
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.getAttribute("data-lang");
      try { localStorage.setItem("hub-lang", lang); } catch (e) {}
      applyLang();
    });
  });

  // Same fixed header and drifting background as the homepage.
  var bar = document.querySelector(".bar"), root = document.documentElement.style;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  function measureBar() { root.setProperty("--bar-h", bar.offsetHeight + "px"); }
  window.addEventListener("resize", measureBar);
  measureBar();
  var BG = [{ k: "gold", a0: -52, rx: 46, ry: 40 }, { k: "ember", a0: -8, rx: 44, ry: 36 }, { k: "blue", a0: 140, rx: 48, ry: 44 }];
  var turn = 0;
  (function tick() {
    bar.classList.toggle("is-scrolled", window.scrollY > 8);
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var target = reduce.matches ? 0 : (window.scrollY / max) * 150;
    turn += (target - turn) * (reduce.matches ? 1 : 0.06);
    BG.forEach(function (p) {
      var a = (p.a0 + turn) * Math.PI / 180;
      root.setProperty("--" + p.k + "-x", (50 + p.rx * Math.cos(a)).toFixed(2) + "%");
      root.setProperty("--" + p.k + "-y", (50 + p.ry * Math.sin(a)).toFixed(2) + "%");
    });
    requestAnimationFrame(tick);
  })();

  applyLang();
})();
