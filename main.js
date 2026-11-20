(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var HUB = window.HUB;
  var UI = {
    en: {
      wordmark: "Webber Hsu",
      skip: "Skip to work",
      "nav.build": "Build", "nav.think": "Think", "nav.learn": "Learn", "nav.exp": "Experience", "nav.work": "Projects", "nav.blog": "Blog",
      motto: "I build, write and wander to build a deeper understanding of the world :)",
      "hub.h": "Build, Think, Learn",
      cats: {
        build: { h: "Build" },
        think: { h: "Think" },
        learn: { h: "Learn" }
      },
      "foot.h": "Elsewhere",
      "foot.meta": "Taipei",
      "foot.pending": "Links are on their way.",
      status: { live: "Live", built: "Built", planned: "Planned" },
      pending: "Private for now",
      aiTag: "Translated by AI",
      "exp.h": "Experience",
      now: "Now",
      types: { work: "Work", school: "Education", program: "Programme", award: "Award", life: "Interest" },
      lanes: { main: "Education & work", side: "Projects", interest: "Interests" },
      ongoing: "ongoing",
      more: function (n) { return n + " more: internships, projects, awards and interests"; },
      readMore: "Read the story",
      emptyThink: "Nothing here yet.",
      emptyLearn: "Nothing here yet.",
      allWork: "All projects", details: "About this project",
      readOn: { medium: "More on Medium", substack: "More on Substack", github: "More on GitHub" },
      links: { github: "GitHub", linkedin: "LinkedIn", medium: "Medium", substack: "Substack", facebook: "Facebook", heptabase: "Heptabase invite" }
    },
    zh: {
      wordmark: "徐偉博",
      skip: "跳到作品",
      "nav.build": "實作", "nav.think": "思考", "nav.learn": "學習", "nav.exp": "經歷", "nav.work": "專案", "nav.blog": "部落格",
      motto: "做產品、寫文章、流浪，對這個世界建立深度的理解:)",
      "hub.h": "實作、思考、學習",
      cats: {
        build: { h: "實作" },
        think: { h: "思考" },
        learn: { h: "學習" }
      },
      "foot.h": "其他地方",
      "foot.meta": "台北",
      "foot.pending": "連結整理中。",
      status: { live: "上線中", built: "已完成", planned: "規劃中" },
      pending: "目前不公開",
      "exp.h": "經歷",
      now: "現在",
      types: { work: "工作", school: "學歷", program: "計畫", award: "獲獎", life: "興趣" },
      lanes: { main: "學業與工作", side: "計畫與社團", interest: "興趣" },
      ongoing: "持續中",
      more: function (n) { return "還有 " + n + " 筆：實習、計畫、獎項與興趣"; },
      readMore: "看這段的文章",
      emptyThink: "這裡還沒有東西。",
      emptyLearn: "這裡還沒有東西。",
      allWork: "全部專案", details: "看專案介紹",
      readOn: { medium: "Medium 上還有更多", substack: "Substack 上還有更多", github: "GitHub 上還有更多" },
      links: { github: "GitHub", linkedin: "LinkedIn", medium: "Medium", substack: "Substack", facebook: "Facebook", heptabase: "Heptabase 邀請連結" }
    }
  };

  var SIZES = { 1: 15, 2: 11, 3: 8, 4: 6 };
  var ARROW = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5"/></svg>';

  var lang = initialLang();
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  // The homepage shows at most three per category.
  var PER_CATEGORY = 3;
  function featured(list) {
    var picked = list.filter(function (x) { return x.featured; });
    return (picked.length ? picked : list).slice(0, PER_CATEGORY);
  }

  function t(o) { return o && typeof o === "object" ? (o[lang] || o.en) : o; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function orbitName(id) { var o = HUB.orbits.filter(function (x) { return x.id === id; })[0]; return o ? t(o.name) : id; }

  function initialLang() {
    var saved = null;
    try { saved = localStorage.getItem("hub-lang"); } catch (e) {}
    if (saved === "en" || saved === "zh") return saved;
    return /^zh/i.test(navigator.language || "") ? "zh" : "en";
  }

  var TAG_ICONS = {
    product: '<path d="M12 3 20 7.5v9L12 21 4 16.5v-9Z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>',
    workflow: '<circle cx="5" cy="6" r="2.2"/><circle cx="19" cy="6" r="2.2"/><circle cx="12" cy="18.5" r="2.2"/><path d="M7.4 6h9.2M6.3 8 10.8 16.4M17.7 8 13.2 16.4"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.6 8.4 13.4 13.4 8.4 15.6 10.6 10.6Z"/>',
    basketball: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18M5.7 5.6c3.3 3.5 3.3 9.3 0 12.8M18.3 5.6c-3.3 3.5-3.3 9.3 0 12.8"/>',
    trail: '<path d="M2.5 19 9 8.5l3.6 5.6 2.4-3.4L21.5 19Z"/><path d="M6 19c1.6-1.6 3.2-.6 4.6-2.2s2.4-1.2 3.4-2.4" stroke-dasharray="1.4 2.2"/>',
    // Timeline interests
    shell: '<path d="M12 18.6 3.8 9.6a8.7 8.7 0 0 1 16.4 0Z"/><path d="M12 18.6 7.4 4.4M12 18.6V3.3M12 18.6 16.6 4.4M12 18.6 4.9 7M12 18.6 19.1 7"/><path d="M9.6 17.4 8.4 20.6h7.2l-1.2-3.2"/>',
    dive: '<path d="M3.5 10.5h13v4.2a2 2 0 0 1-2 2h-2.3l-1.7-2.2h-1L7.8 16.7H5.5a2 2 0 0 1-2-2Z"/><path d="M20 4.5v10.5a3 3 0 0 1-3 3h-1"/><circle cx="9" cy="6" r="1.2"/><circle cx="12.5" cy="3.8" r=".9"/>',
    lotus: '<path d="M12 19c-2.6-2.4-2.6-8.6 0-12 2.6 3.4 2.6 9.6 0 12Z"/><path d="M12 19c-4.2-.4-7.4-3.6-7.6-8.4 3.4.6 6 2.8 7.6 8.4ZM12 19c4.2-.4 7.4-3.6 7.6-8.4-3.4.6-6 2.8-7.6 8.4Z"/><path d="M3.5 19h17"/>',
    crow: '<path d="M1.8 17.2 7.4 13c1-3.2 3.6-5.3 6.8-5.6l1.5-1.6c1.5-.5 2.8.1 3.6 1.2l3 1.4-3.6.6c0 3.7-2.6 6.6-6.6 7.4l-2.2 2.1H6.6l1.5-1.9Z"/><path d="M8.6 12.8c2.3.3 4.6-.7 6-2.6"/><path d="M11.6 16.6v3.7M13.6 16.2v4.1M15.6 15.2v5"/><circle cx="17.2" cy="7.3" r=".55"/>'
  };

  function renderTags() {
    document.querySelector("[data-tags]").innerHTML = (HUB.tags || []).map(function (g, i) {
      var icon = TAG_ICONS[g.icon] ? '<svg class="tag-icon" data-at="' + (g.at === "below" ? "below" : "above") + '" style="--x:' + (g.x || 0) + "px;--tilt:" + (g.tilt || 0) + "deg;--i:" + i + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + TAG_ICONS[g.icon] + "</svg>" : "";
      return "<li>" + icon + "<span>#" + esc(t(g)) + "</span></li>";
    }).join("");
  }

  // ---------- The four-part dial, driven by scroll ----------
  var CATS = ["build", "think", "learn"];
  var SOURCE = { build: "github", think: "medium", learn: "substack" };
  var STEP = 360 / CATS.length;      // each part spans a third of the dial
  var DC = 320;                       // dial centre in its viewBox
  var R_ARC = 262, R_IN = 196, R_OUT = 296, R_LABEL = 220, R_DOTS = 287;
  var HOLD = 0.62;                    // share of each section during which its quarter sits still at the pointer
  var active = 0, rot = 0, rotTarget = 0;
  var dialSvg = document.querySelector("[data-dial-svg]");
  var rotorEl = document.querySelector("[data-rotor]");
  var labelsEl = document.querySelector("[data-dial-labels]");
  var panelEl = document.querySelector("[data-panel]");
  var blocks = [];

  function pt(r, deg) { var a = deg * Math.PI / 180; return [DC + r * Math.sin(a), DC - r * Math.cos(a)]; }
  function arc(r, a0, a1) { var p0 = pt(r, a0), p1 = pt(r, a1); return "M" + p0[0].toFixed(2) + " " + p0[1].toFixed(2) + " A" + r + " " + r + " 0 0 1 " + p1[0].toFixed(2) + " " + p1[1].toFixed(2); }
  function sector(a0, a1) { var o0 = pt(R_OUT, a0), o1 = pt(R_OUT, a1), i1 = pt(R_IN, a1), i0 = pt(R_IN, a0);
    return "M" + o0 + " A" + R_OUT + " " + R_OUT + " 0 0 1 " + o1 + " L" + i1 + " A" + R_IN + " " + R_IN + " 0 0 0 " + i0 + " Z"; }

  function itemsFor(cat) {
    if (cat === "build") return featured(HUB.works);
    if (cat === "learn") return featured(HUB.notes.filter(function (e) { return e.url; }));
    return featured(HUB.writing.filter(function (e) { return e.url && (e.orbit || "think") === cat; }));
  }

  function renderDial() {
    var ticks = "";
    for (var d = 0; d < 360; d += 6) { var a = pt(306, d), b = pt(d % 30 === 0 ? 316 : 311, d); ticks += '<line x1="' + a[0].toFixed(1) + '" y1="' + a[1].toFixed(1) + '" x2="' + b[0].toFixed(1) + '" y2="' + b[1].toFixed(1) + '"/>'; }
    document.querySelector("[data-dial-ticks]").innerHTML = ticks;
    rotorEl.innerHTML = CATS.map(function (c, i) {
      var mid = i * STEP, items = itemsFor(c), dots = "";
      items.forEach(function (it, k) {
        var at = pt(R_DOTS, mid + (k - (items.length - 1) / 2) * 5);
        dots += '<circle class="seg-dot' + (it.status === "planned" ? " is-planned" : "") + '" cx="' + at[0].toFixed(1) + '" cy="' + at[1].toFixed(1) + '" r="3"/>';
      });
      return '<g class="seg" data-seg="' + i + '">' +
        '<path class="seg-hit" d="' + sector(mid - STEP / 2 + 1, mid + STEP / 2 - 1) + '" role="link" tabindex="0" aria-label="' + esc(orbitName(c)) + '" data-tab="' + i + '"/>' +
        '<path class="seg-arc" d="' + arc(R_ARC, mid - STEP / 2 + 6, mid + STEP / 2 - 6) + '"/>' + dots + "</g>";
    }).join("");
    labelsEl.innerHTML = CATS.map(function (c, i) {
      return '<text class="seg-label" data-label="' + i + '" text-anchor="middle" dominant-baseline="middle">' + esc(orbitName(c)) + "</text>";
    }).join("");
    rotorEl.querySelectorAll(".seg-hit").forEach(function (h) {
      h.addEventListener("keydown", function (e) {
        var k = e.key, n = null, i = +h.getAttribute("data-tab");
        if (k === "Enter" || k === " ") n = i;
        if (k === "ArrowRight" || k === "ArrowDown") n = (active + 1) % CATS.length;
        if (k === "ArrowLeft" || k === "ArrowUp") n = (active + CATS.length - 1) % CATS.length;
        if (n !== null) { e.preventDefault(); goTo(n); }
      });
    });
    drawDial();
  }

  function drawDial() {
    rotorEl.setAttribute("transform", "rotate(" + rot.toFixed(2) + " " + DC + " " + DC + ")");
    labelsEl.querySelectorAll("[data-label]").forEach(function (l) {
      var i = +l.getAttribute("data-label"), at = pt(R_LABEL, i * STEP + rot);
      l.setAttribute("x", at[0].toFixed(1)); l.setAttribute("y", at[1].toFixed(1));
      l.classList.toggle("is-active", i === active);
    });
    rotorEl.querySelectorAll(".seg").forEach(function (g) { g.classList.toggle("is-active", +g.getAttribute("data-seg") === active); });
  }

  function setActive(i, inHub) {
    if (i !== active) {
      active = i;
      var ui = UI[lang];
      document.querySelectorAll("[data-core-name]").forEach(function (el) { el.textContent = orbitName(CATS[i]); });
    }
    document.querySelectorAll(".bar [data-cat-link]").forEach(function (a) { a.classList.toggle("is-current", inHub && a.getAttribute("data-cat-link") === CATS[i]); });
  }

  // Scroll position -> dial angle. Each quarter holds still at the pointer while its
  // section is read, then the dial turns on toward the next one as that section ends.
  function readScroll() {
    if (!blocks.length) return;
    var anchor = window.innerHeight * 0.42, pos = 0, inHub = false;
    var N = CATS.length, first = blocks[0].getBoundingClientRect(), last = blocks[N - 1].getBoundingClientRect();
    if (anchor < first.top) pos = 0;
    else if (anchor >= last.bottom) pos = N - 1;
    else {
      inHub = true;
      for (var i = 0; i < N; i++) {
        // A section's stretch runs to the next section's top, so the gap between them still turns the dial.
        var top = blocks[i].getBoundingClientRect().top;
        var bottom = i < N - 1 ? blocks[i + 1].getBoundingClientRect().top : last.bottom;
        if (anchor >= top && anchor < bottom) {
          var f = (anchor - top) / (bottom - top);
          var turn = i < N - 1 && f > HOLD ? (f - HOLD) / (1 - HOLD) : 0;
          pos = i + turn * turn * (3 - 2 * turn);   // smoothstep between quarters
          break;
        }
      }
    }
    rotTarget = -STEP * pos;
    setActive(Math.min(N - 1, Math.round(pos)), inHub);
  }

  function stepDial() {
    if (dragging) return;
    readScroll();
    var d = rotTarget - rot;
    if (Math.abs(d) < 0.02) rot = rotTarget; else rot += reduce.matches ? d : d * 0.16;
    drawDial();
  }

  function goTo(i) {
    var el = blocks[i];
    if (!el) return;
    var y = el.getBoundingClientRect().top + window.scrollY - parseFloat(getComputedStyle(el).scrollMarginTop || 0) - (document.querySelector(".bar").offsetHeight || 0);
    window.scrollTo({ top: Math.max(0, y), behavior: reduce.matches ? "auto" : "smooth" });
    history.replaceState(null, "", "#" + CATS[i]);
  }

  function workRow(w) {
    var ui = UI[lang];
    // A work with its own page gets an inside link first; the rest open outside.
    var inside = w.page ? '<a class="work-page" href="' + esc(w.page) + '">' + esc(ui.details) + ARROW + "</a>" : "";
    var links = w.links.filter(function (l) { return l.url; }).map(function (l) {
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(t(l.label)) + ARROW + "</a>";
    }).join("");
    links = inside + links;
    if (!links && w.status !== "planned") links = '<span class="work-pending">' + esc(ui.pending) + "</span>";
    var dot = w.mag === 1 ? "background:var(--gold)" : w.status === "planned" ? "background:none;border:1px dashed var(--ink-3)" : "";
    return '<li class="work" id="work-' + w.id + '" data-status="' + w.status + '">' +
      '<div class="work-title"><span class="dot" style="--d:' + SIZES[w.mag] + "px;" + dot + '" aria-hidden="true"></span><h4>' + esc(t(w.name)) + "</h4></div>" +
      '<p class="work-meta"><span>' + esc(t(w.year)) + '</span><span class="status" data-s="' + w.status + '">' + esc(ui.status[w.status]) + "</span>" + (w.stack ? "<span>" + esc(t(w.stack)) + "</span>" : "") + "</p>" +
      '<p class="work-summary">' + esc(t(w.summary)) + "</p>" +
      (links ? '<div class="work-links">' + links + "</div>" : "") + "</li>";
  }
  // The arrow travels with the last word, so it never wraps onto a line of its own.
  function withArrow(text) {
    text = String(text);
    var cut = text.lastIndexOf(" ");
    cut = cut < 0 ? text.length - Array.from(text).slice(-2).join("").length : cut + 1;
    return esc(text.slice(0, cut)) + '<span class="nowrap">' + esc(text.slice(cut)) + ARROW + "</span>";
  }
  function entryRow(e) {
    return '<li class="entry"><a hreflang="zh-Hant" href="' + esc(e.url) + '" target="_blank" rel="noopener">' + withArrow(t(e.title)) + "</a>" +
      '<p class="entry-meta">' + (e.date ? '<time datetime="' + esc(e.date) + '">' + esc(e.date) + "</time>" : "") +
      (lang === "en" && e.title && e.title.en ? '<span class="ai-tag">' + esc(UI.en.aiTag) + "</span>" : "") + "</p></li>";
  }

  function renderPanel() {
    var ui = UI[lang];
    panelEl.innerHTML = CATS.map(function (cat) {
      var copy = ui.cats[cat], items = itemsFor(cat), src = SOURCE[cat];
      var list = cat === "build"
        ? '<ol class="works">' + items.map(workRow).join("") + "</ol>"
        : items.length ? '<ol class="entries">' + items.map(entryRow).join("") + "</ol>"
        : '<p class="empty"><span class="dot" style="--d:8px" aria-hidden="true"></span>' + esc(cat === "learn" ? ui.emptyLearn : ui.emptyThink) + "</p>";
      // Build points to the site's own Work page; Think and Learn point out to Medium and Substack.
      var more = cat === "build" ? '<a class="panel-more" href="works.html">' + esc(ui.allWork) + ARROW + "</a>"
        : HUB.links[src] ? '<a class="panel-more" href="' + esc(HUB.links[src]) + '" target="_blank" rel="noopener">' + esc(ui.readOn[src]) + ARROW + "</a>" : "";
      return '<section class="cat" id="' + cat + '" aria-labelledby="' + cat + '-h"><header class="panel-head"><h3 class="panel-h" id="' + cat + '-h">' + esc(copy.h) + "</h3></header>" + list + more + "</section>";
    }).join("");
    blocks = CATS.map(function (c) { return document.getElementById(c); });
    active = -1; readScroll();
    if (active < 0) setActive(0, false);
  }

  // Drag to turn: the dial follows the pointer, then the page scrolls to the quarter it settles on.
  var dragging = false, dragA0 = 0, dragRot0 = 0, dragMoved = 0, dragHit = null;
  function pointerAngle(e) {
    var b = dialSvg.getBoundingClientRect();
    return Math.atan2(e.clientX - (b.left + b.width / 2), -(e.clientY - (b.top + b.height / 2))) * 180 / Math.PI;
  }
  dialSvg.addEventListener("pointerdown", function (e) {
    dragging = true; dragMoved = 0; dragA0 = pointerAngle(e); dragRot0 = rot;
    dragHit = e.target.closest ? e.target.closest("[data-tab]") : null;
    dialSvg.setPointerCapture(e.pointerId);
  });
  dialSvg.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    var d = ((pointerAngle(e) - dragA0 + 540) % 360) - 180;
    dragMoved = Math.max(dragMoved, Math.abs(d));
    if (dragMoved > 4) { rot = Math.max(-STEP * (CATS.length - 1), Math.min(0, dragRot0 + d)); drawDial(); dialSvg.classList.add("is-dragging"); }
  });
  function endDrag() {
    if (!dragging) return;
    dragging = false; dialSvg.classList.remove("is-dragging");
    if (dragMoved > 4) goTo(Math.max(0, Math.min(CATS.length - 1, Math.round(-rot / STEP))));
    else if (dragHit) goTo(+dragHit.getAttribute("data-tab"));
  }
  dialSvg.addEventListener("pointerup", endDrag);
  dialSvg.addEventListener("pointercancel", endDrag);

  // ---------- Experience: three lines ----------
  // The main line (school and work) and a side line (programmes and clubs) split at the far left, so the
  // diagonal sits in empty space; the interest line is a separate track running in from the left edge.
  // Entries are evenly spaced in time order; each prints its own dates.
  function renderTimeline() {
    var ui = UI[lang], list = HUB.timeline || [];
    var narrow = !window.matchMedia("(min-width: 761px)").matches;
    var SLOT = narrow ? 230 : 268, PAD = narrow ? 16 : 40, GAP_SIDE = narrow ? 64 : 78;
    var FORK = narrow ? 150 : 210;                   // room on the left for the diagonals

    function when(e) {
      if (e.to === e.from) return e.from;          // a single month, e.g. a trip
      var to = e.to === "now" ? ui.now : e.to === "ongoing" ? ui.ongoing : t(e.to);
      return e.from + (to ? (/^\d/.test(to) ? " – " : " · ") + to : "");
    }
    function body(e, i) {
      // Awards are footnotes: the date row and one short line, no org.
      var whenRow = '<p class="tl-when"><span>' + esc(when(e)) + '</span><span class="tl-type">' + esc(ui.types[e.type]) + "</span></p>";
      if (e.type === "award") return whenRow + '<p class="tl-mini">' + esc(t(e.title)) + "</p>";
      return '<p class="tl-when"><span>' + esc(when(e)) + '</span><span class="tl-type">' + esc(ui.types[e.type]) + "</span></p>" +
        '<h3 class="tl-title">' + esc(t(e.title)) +
          (e.icon && TAG_ICONS[e.icon] ? '<svg class="tl-icon" style="--i:' + (i % 5) + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + TAG_ICONS[e.icon] + "</svg>" : "") + "</h3>" +
        (e.org ? '<p class="tl-org">' + esc(t(e.org)) + "</p>" : "") +
        // Only the current role carries a description; the rest stay to title, place and story link.
        (e.note && e.to === "now" ? '<p class="tl-note">' + esc(t(e.note)) + "</p>" : "") +
        (e.link ? '<a class="tl-link" href="' + esc(e.link) + '" target="_blank" rel="noopener">' + esc(ui.readMore) + ARROW + "</a>" : "");
    }
    var track = document.querySelector("[data-timeline]");
    // Phones: a plain vertical list, newest first. The three-line map needs a wide screen.
    track.classList.toggle("is-list", narrow);
    if (narrow) {
      track.style.width = ""; track.style.height = "";
      // Order: the current job first, then the rest of education and work (newest first);
      // projects, awards and interests fold behind one "more" toggle.
      var row = function (e) {
        var i = list.indexOf(e), now = e.to === "now" || e.to === "ongoing";
        return '<li class="tl tl-' + e.lane + (e.type === "award" ? " is-award" : "") + '" data-lane="' + e.lane + '"' + (now ? " data-now" : "") + ">" + body(e, i) + "</li>";
      };
      var newest = list.slice().reverse();
      var shown = function (e) { return e.show || (e.lane === "main" && !e.fold); };
      var work = newest.filter(shown);
      work.sort(function (a, b) { return (b.to === "now") - (a.to === "now"); });
      var rest = newest.filter(function (e) { return !shown(e); });
      track.innerHTML = work.map(row).join("") + (rest.length ?
        '<li class="tl-more"><details><summary>' + esc(ui.more(rest.length)) + '</summary><ol class="timeline is-list">' + rest.map(row).join("") + "</ol></details></li>" : "");
      return;
    }
    // Wide screens: newest on the left, so the current role is in view as soon as the map pins.
    list = list.slice().reverse();
    var X = function (i) { return PAD + FORK + i * SLOT; };
    var W = X(list.length - 1) + (narrow ? 250 : 300) + PAD;

    var items = "";
    list.forEach(function (e, i) {
      // The current role and ongoing interests get the gold highlight.
      var now = e.to === "now" || e.to === "ongoing";
      var attrs = ' data-lane="' + e.lane + '" data-i="' + i + '"' + (now ? " data-now" : "") + (e.cover && e.link ? ' data-cover="' + esc(e.cover) + '"' : "");
      items += '<li class="tl tl-' + e.lane + '"' + attrs + ' style="left:' + X(i) + "px;top:0;width:" + (SLOT - 20) + 'px">' + body(e, i) + "</li>";
    });
    track.style.width = W + "px";
    track.innerHTML = items;

    // The main line sits just below its tallest label; labels hang bottom-aligned above it.
    var tallest = 0;
    track.querySelectorAll(".tl-main").forEach(function (li) { tallest = Math.max(tallest, li.offsetHeight); });
    var MAIN = tallest + 34, SIDE = MAIN + GAP_SIDE;
    track.querySelectorAll(".tl-main").forEach(function (li) { li.style.top = (MAIN - 22 - li.offsetHeight) + "px"; });
    track.querySelectorAll(".tl-side").forEach(function (li) { li.style.top = (SIDE + 22) + "px"; });
    // The interest line runs below the tallest side-line card.
    var sideBottom = SIDE + 40;
    track.querySelectorAll(".tl-side").forEach(function (li) { sideBottom = Math.max(sideBottom, li.offsetTop + li.offsetHeight); });
    var INTEREST = sideBottom + (narrow ? 36 : 44);
    var h = INTEREST;
    track.querySelectorAll(".tl-interest").forEach(function (li) { li.style.top = (INTEREST + 22) + "px"; h = Math.max(h, li.offsetTop + li.offsetHeight); });
    track.style.height = (h + 24) + "px";

    var first = { side: -1, interest: -1 }, last = { side: -1, interest: -1 }, nowAt = -1, nodes = "";
    list.forEach(function (e, i) {
      var y = e.lane === "main" ? MAIN : e.lane === "side" ? SIDE : INTEREST;
      if (e.lane !== "main") { if (first[e.lane] < 0) first[e.lane] = i; last[e.lane] = i; }
      if (e.lane === "main" && e.to === "now") nowAt = i;
      nodes += '<circle class="tl-node is-' + e.lane + (e.to === "now" || e.to === "ongoing" ? " is-now" : "") + (e.type === "award" ? " is-mini" : "") + '" cx="' + X(i) + '" cy="' + y + '" r="' + (e.lane === "main" ? 6 : e.type === "award" ? 3 : 4.5) + '"/>';
    });
    var fx = PAD, lines = '<line class="tl-rail is-main" x1="0" y1="' + MAIN + '" x2="' + W + '" y2="' + MAIN + '"/>';
    // The gold stretch runs from the current role back toward the left edge, where the present is.
    if (nowAt >= 0) lines += '<line class="tl-rail is-now" x1="' + (PAD + FORK - 24) + '" y1="' + MAIN + '" x2="' + X(nowAt) + '" y2="' + MAIN + '"/>';
    // The side line forks off the main line; the interest line is its own track from the left edge.
    if (first.side >= 0) {
      var endFork = Math.min(PAD + FORK - 24, fx + (SIDE - MAIN) * 1.2);
      lines += '<path class="tl-rail is-side" d="M' + fx + " " + MAIN + " L" + endFork.toFixed(1) + " " + SIDE + " H" + (X(last.side) + 40) + '"/>';
    }
    if (first.interest >= 0) lines += '<path class="tl-rail is-interest" d="M0 ' + INTEREST + " H" + (X(last.interest) + 40) + '"/>';
    // Lane names sit at the start of each line, in the fork.
    var names = [["main", MAIN], ["side", SIDE], ["interest", INTEREST]].map(function (l) {
      return '<text class="tl-lane" x="' + (PAD + FORK - 28) + '" y="' + (l[1] - 10) + '" text-anchor="end">' + esc(ui.lanes[l[0]]) + "</text>";
    }).join("");
    track.insertAdjacentHTML("afterbegin", '<svg class="tl-lines" width="' + W + '" height="100%" aria-hidden="true" focusable="false">' + lines + nodes + names + "</svg>");
  }

  // ---------- Article preview: hovering "Read the story" shows that post's cover ----------
  // One floating card follows the pointer over "Read the story" (mouse only); keyboard focus shows it beside the link.
  var peek = document.createElement("div");
  peek.className = "tl-peek"; peek.setAttribute("aria-hidden", "true");
  peek.innerHTML = '<img alt="" decoding="async">';
  document.body.appendChild(peek);
  var peekImg = peek.firstChild, peekOn = false, fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  function placePeek(x, y) {
    var w = peek.offsetWidth || 280, h = peek.offsetHeight || 200, gap = 22;
    var left = x + gap + w > window.innerWidth - 12 ? x - gap - w : x + gap;
    var top = Math.min(Math.max(12, y - h / 2), window.innerHeight - h - 12);
    peek.style.transform = "translate3d(" + Math.round(left) + "px," + Math.round(top) + "px,0)";
  }
  function showPeek(src) {
    if (peekImg.getAttribute("src") !== src) peekImg.setAttribute("src", src);
    peek.classList.add("is-on"); peekOn = true;
  }
  function hidePeek() { peek.classList.remove("is-on"); peekOn = false; }
  var tlTrack = document.querySelector("[data-timeline]");
  tlTrack.addEventListener("mouseover", function (e) {
    if (!fine.matches) return;
    // Only the "Read the story" link opens the preview, so panning the map under a still cursor stays quiet.
    var a = e.target.closest(".tl-link"), li = a && a.closest(".tl[data-cover]");
    if (!li) { hidePeek(); return; }
    showPeek(li.getAttribute("data-cover")); placePeek(e.clientX, e.clientY);
  });
  tlTrack.addEventListener("mousemove", function (e) { if (peekOn) placePeek(e.clientX, e.clientY); });
  tlTrack.addEventListener("mouseleave", hidePeek);
  tlTrack.addEventListener("focusin", function (e) {
    var li = e.target.closest(".tl[data-cover]");
    if (!li || !fine.matches) return;
    var r = e.target.getBoundingClientRect();
    showPeek(li.getAttribute("data-cover")); placePeek(r.right, r.top + r.height / 2);
  });
  tlTrack.addEventListener("focusout", hidePeek);
  window.addEventListener("scroll", function () { if (peekOn && !fine.matches) hidePeek(); }, { passive: true });
  // Warm the covers once the timeline is near, so the first hover shows at once.
  if ("IntersectionObserver" in window) {
    var warm = new IntersectionObserver(function (es) {
      if (!es.some(function (x) { return x.isIntersecting; })) return;
      warm.disconnect();
      (HUB.timeline || []).forEach(function (t) { if (t.cover) { var im = new Image(); im.src = t.cover; } });
    }, { rootMargin: "600px" });
    warm.observe(document.getElementById("experience"));
  }

  function renderLinks() {
    var ui = UI[lang];
    var html = Object.keys(HUB.links).filter(function (k) { return HUB.links[k]; }).map(function (k) {
      // The Heptabase invite carries the official Heptabase mark, floating at its top-right corner.
      if (k === "heptabase") {
        return '<li><a class="ext-invite" href="' + esc(HUB.links[k]) + '" target="_blank" rel="noopener">' +
          '<span>' + esc(ui.links[k]) + "</span>" + ARROW +
          '<svg class="invite-logo" viewBox="0 0 28 28" aria-hidden="true" focusable="false"><path d="M27.96 24.466a3.495 3.495 0 1 1-6.99 0 3.495 3.495 0 0 1 6.99 0ZM0 20.388V2.913a2.913 2.913 0 0 1 5.825 0c0 .73 0 3.799.002 5.242v1.517c0 .848.501 1.616 1.278 1.956a5.34 5.34 0 0 0 4.115.073l.243-.096a2.145 2.145 0 0 0 1.354-1.994l-.001-2.038a2.913 2.913 0 0 1 5.825 0v17.475a2.913 2.913 0 0 1-5.825 0V18.35c0-.879-.536-1.669-1.353-1.993l-.243-.097a5.34 5.34 0 0 0-4.115.073 2.136 2.136 0 0 0-1.278 1.957v1.517l-.002.582a2.913 2.913 0 0 1-5.825 0Z"/></svg></a></li>';
      }
      return '<li><a href="' + esc(HUB.links[k]) + '" target="_blank" rel="noopener">' + esc(ui.links[k]) + ARROW + "</a></li>";
    }).join("");
    document.querySelectorAll("[data-links]").forEach(function (ul) { ul.innerHTML = html; });
    document.querySelector("[data-links-pending]").hidden = !!html;
  }

  function applyLang() {
    var ui = UI[lang];
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = ui[el.getAttribute("data-i18n")];
      if (typeof v === "string") el.textContent = v;
    });
    document.querySelectorAll("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    renderTags();
    renderDial();
    renderPanel();
    renderTimeline();
    if (typeof measureExp === "function" && exp) measureExp();
    renderLinks();
  }

  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.getAttribute("data-lang");
      try { localStorage.setItem("hub-lang", lang); } catch (e) {}
      document.documentElement.classList.remove("js"); // no re-entrance animation on language switch
      applyLang();
    });
  });

  // ---------- One clock: the dial eases toward the scroll position ----------
  // The background's colour patches orbit the page centre as you scroll (about 150° from top to bottom),
  // eased so they glide rather than track the wheel. Reduced motion: they stay put.
  var BG = [
    { k: "gold",  a0: -52, rx: 46, ry: 40 },
    { k: "ember", a0: -8,  rx: 44, ry: 36 },
    { k: "blue",  a0: 140, rx: 48, ry: 44 }
  ];
  var bgTurn = 0, bgTarget = 0, rootStyle = document.documentElement.style;
  function stepBackground() {
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var target = bgTarget = reduce.matches ? 0 : (window.scrollY / max) * 150;
    bgTurn += (target - bgTurn) * (reduce.matches ? 1 : 0.06);
    BG.forEach(function (p) {
      var a = (p.a0 + bgTurn) * Math.PI / 180;
      rootStyle.setProperty("--" + p.k + "-x", (50 + p.rx * Math.cos(a)).toFixed(2) + "%");
      rootStyle.setProperty("--" + p.k + "-y", (50 + p.ry * Math.sin(a)).toFixed(2) + "%");
    });
  }

  // Fixed header: publish its height for sticky offsets and anchor landings, and veil it once the page scrolls.
  var bar = document.querySelector(".bar");
  function measureBar() { rootStyle.setProperty("--bar-h", bar.offsetHeight + "px"); }
  window.addEventListener("resize", measureBar);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measureBar);
  measureBar();

  // Experience: on wide screens the section is pinned while the page scroll pans the timeline
  // from the newest entry (left) to the oldest (right). On phones the row simply swipes.
  var exp = document.getElementById("experience");
  var expStage = document.querySelector("[data-exp-stage]");
  var expTrack = document.querySelector("[data-timeline]");
  var expViewport = document.querySelector("[data-exp-viewport]");
  var expWide = window.matchMedia("(min-width: 761px)");
  var expTravel = 0, expScale = 1, PIN_GAP = 16, expMapOffset = 0;
  // The heading scrolls away; the map itself pins under the header and, on short screens,
  // scales down so it always fits the viewport while the page scroll pans it sideways.
  function measureExp() {
    expTrack.style.transform = "";
    if (!expWide.matches) { exp.style.height = ""; expViewport.style.height = ""; expTravel = 0; expScale = 1; return; }
    var room = window.innerHeight - (bar.offsetHeight || 0) - PIN_GAP * 2;
    expScale = Math.min(1, room / expTrack.offsetHeight);
    expViewport.style.height = Math.ceil(expTrack.offsetHeight * expScale) + "px";
    expTravel = Math.max(0, expTrack.offsetWidth * expScale - expViewport.clientWidth);
    // Where the map sits inside the section before it pins (a sticky element's own offset moves once stuck).
    var head = document.getElementById("exp-h");
    expMapOffset = head.offsetTop + head.offsetHeight + parseFloat(getComputedStyle(head).marginBottom || 0);
    exp.style.height = (expMapOffset + expViewport.offsetHeight + PIN_GAP + expTravel) + "px";
    stepExp();
  }
  function stepExp() {
    if (!expWide.matches) return;
    var pinAt = (bar.offsetHeight || 0) + PIN_GAP;
    var start = exp.getBoundingClientRect().top + expMapOffset - pinAt;
    var p = expTravel ? Math.min(1, Math.max(0, -start / expTravel)) : 0;
    expTrack.style.transform = "translate3d(" + (-p * expTravel).toFixed(1) + "px,0,0) scale(" + expScale.toFixed(4) + ")";
  }
  window.addEventListener("resize", measureExp);
  expWide.addEventListener("change", function () { renderTimeline(); measureExp(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measureExp);

  // The frame loop runs only while something is moving: a scroll, a resize, a drag, or the dial and
  // background still easing toward where the scroll put them. Idle, it stops (battery on phones).
  var running = false, lastY = -1, still = 0;
  function tick() {
    stepExp();
    bar.classList.toggle("is-scrolled", window.scrollY > 8);
    stepDial();
    stepBackground();
    var moved = window.scrollY !== lastY || dragging || Math.abs(rotTarget - rot) > 0.02 || Math.abs(bgTarget - bgTurn) > 0.05;
    lastY = window.scrollY;
    still = moved ? 0 : still + 1;
    if (still > 20) { running = false; return; }
    requestAnimationFrame(tick);
  }
  function wake() { if (!running) { running = true; still = 0; requestAnimationFrame(tick); } }
  ["scroll", "resize", "pointermove", "pointerdown", "keydown"].forEach(function (ev) { window.addEventListener(ev, wake, { passive: true }); });

  applyLang();
  // Content is drawn by script, so a deep link (#learn, #work-lifeos) is honoured once it exists.
  if (location.hash.length > 1) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ block: "start" });
  }
  wake();
})();

