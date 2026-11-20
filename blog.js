(function () {
  "use strict";
  var HUB = window.HUB;
  var UI = {
    en: {
      wordmark: "Webber Hsu", skip: "Skip to posts",
      "nav.build": "Build", "nav.think": "Think", "nav.learn": "Learn", "nav.exp": "Experience", "nav.work": "Work", "nav.blog": "Blog",
      "blog.h": "Blog",
      sub: function (n, d, src) { return n + " posts from " + (src || "Medium and Substack") + ". Synced " + d + "."; },
      "f.all": "All",
      empty: "No posts here yet.",
      aiTag: "Translated by AI",
      failed: "Couldn’t load the post list. Try again in a moment.",
      "foot.h": "Elsewhere", "foot.meta": "Taipei",
      links: { github: "GitHub", linkedin: "LinkedIn", medium: "Medium", substack: "Substack", facebook: "Facebook", heptabase: "Heptabase invite" }
    },
    zh: {
      wordmark: "徐偉博", skip: "跳到文章",
      "nav.build": "實作", "nav.think": "思考", "nav.learn": "學習", "nav.exp": "經歷", "nav.work": "作品", "nav.blog": "部落格",
      "blog.h": "部落格",
      sub: function (n, d, src) { return (src || "Medium 與 Substack") + " 上的 " + n + " 篇文章，" + d + " 同步。"; },
      "f.all": "全部",
      empty: "這裡還沒有文章。",
      failed: "文章清單載入失敗，請稍後再試。",
      "foot.h": "其他地方", "foot.meta": "台北",
      links: { github: "GitHub", linkedin: "LinkedIn", medium: "Medium", substack: "Substack", facebook: "Facebook", heptabase: "Heptabase 邀請連結" }
    }
  };
  var ARROW = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5"/></svg>';
  var SOURCE_NAME = { medium: "Medium", substack: "Substack" };
  function withArrow(text) {
    text = String(text);
    var cut = text.lastIndexOf(" ");
    cut = cut < 0 ? text.length - Array.from(text).slice(-2).join("").length : cut + 1;
    return esc(text.slice(0, cut)) + '<span class="nowrap">' + esc(text.slice(cut)) + ARROW + "</span>";
  }

  var lang = (function () {
    var saved = null;
    try { saved = localStorage.getItem("hub-lang"); } catch (e) {}
    if (saved === "en" || saved === "zh") return saved;
    return /^zh/i.test(navigator.language || "") ? "zh" : "en";
  })();
  var data = null, failed = false, filter = "all";

  // English titles written for the homepage are reused here, matched by URL.
  var EN_TITLES = {};
  HUB.writing.concat(HUB.notes).forEach(function (e) { if (e.url && e.title && e.title.en) EN_TITLES[norm(e.url)] = e.title.en; });
  function norm(u) { try { return decodeURIComponent(u).split("?")[0].replace(/\/$/, ""); } catch (e) { return u; } }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function renderPosts() {
    var ui = UI[lang], el = document.querySelector("[data-posts]");
    if (failed) { el.innerHTML = '<p class="empty">' + esc(ui.failed) + "</p>"; return; }
    if (!data) return;
    var posts = data.posts.filter(function (p) { return filter === "all" || p.source === filter; });
    // The subtitle counts what is shown: all posts, or only the chosen platform's.
    document.querySelector("[data-blog-sub]").textContent = ui.sub(posts.length, data.updated, filter === "all" ? null : SOURCE_NAME[filter]);
    if (!posts.length) { el.innerHTML = '<p class="empty">' + esc(ui.empty) + "</p>"; return; }
    var years = [], byYear = {};
    posts.forEach(function (p) {
      var y = p.date.slice(0, 4);
      if (!byYear[y]) { byYear[y] = []; years.push(y); }
      byYear[y].push(p);
    });
    el.innerHTML = years.map(function (y) {
      return '<section class="year" aria-labelledby="y' + y + '"><h2 class="year-h" id="y' + y + '">' + y + '</h2><ol class="posts">' +
        byYear[y].map(function (p) {
          // English titles are AI translations; say so on every one that shows.
          var en = lang === "en" && (p.title_en || EN_TITLES[norm(p.url)]);
          return '<li class="post"><a href="' + esc(p.url) + '" target="_blank" rel="noopener" hreflang="zh-Hant">' +
            '<span class="post-title"' + (en ? "" : ' lang="zh-Hant"') + ">" + withArrow(en || p.title) +
            (en && p.title_en_by !== "author" ? '<span class="ai-tag">' + esc(UI.en.aiTag) + "</span>" : "") + "</span>" +
            '<span class="post-meta"><time datetime="' + esc(p.date) + '">' + esc(p.date.slice(5).replace("-", "/")) + "</time><span>" + SOURCE_NAME[p.source] + "</span></span></a></li>";
        }).join("") + "</ol></section>";
    }).join("");
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
    renderPosts();
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.getAttribute("data-lang");
      try { localStorage.setItem("hub-lang", lang); } catch (e) {}
      applyLang();
    });
  });
  document.querySelector("[data-filter]").addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    filter = b.getAttribute("data-src");
    document.querySelectorAll("[data-filter] button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
    renderPosts();
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
  fetch("posts.json", { cache: "no-cache" })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (j) { data = j; renderPosts(); })
    .catch(function () { failed = true; renderPosts(); });
})();
