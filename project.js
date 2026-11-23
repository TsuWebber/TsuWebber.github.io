// Project page: one work in more depth. Card data from HUB.works, page content from HUB_PROJECTS.
(function () {
  "use strict";
  var HUB = window.HUB;
  var UI = {
    en: {
      wordmark: "Webber Hsu", skip: "Skip to the project", back: "All projects",
      "nav.build": "Build", "nav.think": "Think", "nav.learn": "Learn", "nav.exp": "Experience", "nav.work": "Projects", "nav.blog": "Blog",
      "work.h": "Projects",
      "work.sub": "Side projects I built and still run, and earlier projects from school, programmes and teams.",
      side: "Side projects", past: "Past projects",
      status: { live: "Live", built: "Built", planned: "Planned" },
      pending: "Private for now", readMore: "Read the story",
      "foot.h": "Elsewhere", "foot.meta": "Taipei",
      links: { github: "GitHub", linkedin: "LinkedIn", medium: "Medium", substack: "Substack", facebook: "Facebook", heptabase: "Heptabase invite" }
    },
    zh: {
      wordmark: "徐偉博", skip: "跳到專案內容", back: "全部專案",
      "nav.build": "實作", "nav.think": "思考", "nav.learn": "學習", "nav.exp": "經歷", "nav.work": "專案", "nav.blog": "部落格",
      "work.h": "專案",
      "work.sub": "我自己做、還在運作的個人專案，以及過去在學校、培訓計畫和團隊裡做過的專案。",
      side: "個人專案", past: "過去專案",
      status: { live: "上線中", built: "已完成", planned: "規劃中" },
      pending: "目前不公開", readMore: "看這段的文章",
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
  function t(o) { return o && typeof o === "object" ? (o[lang] || o.en) : o; }

  var pid = document.body.getAttribute("data-project");
  var card = (HUB.works || []).filter(function (w) { return w.id === pid; })[0] || {};
  var page = (window.HUB_PROJECTS || {})[pid] || { sections: [] };

  // A left-to-right process map: numbered stages on one rail, a dashed gold loop back to the spec,
  // a base band every stage reads from, and a side band for routine work outside the main line.
  var CYCLE = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13.5 8a5.5 5.5 0 1 1-1.6-3.9"/><path d="M12.4 1.6v2.9H9.5"/></svg>';
  function flowMap(f) {
    var cols = f.stages.length, from = -1, to = -1;
    f.stages.forEach(function (st, i) { if (st.loopTo) to = i; if (st.loopFrom) from = i; });
    var subs = function (list) { return '<ul class="flow-subs">' + list.map(function (x) { return "<li>" + esc(t(x)) + "</li>"; }).join("") + "</ul>"; };
    // A stage that repeats on its own (a sprint's daily cycle) wraps its skills in a dashed gold ring.
    function cycle(st, html) {
      if (!st.cycle) return html;
      return '<div class="flow-cycle"><span class="flow-cycle-h">' + CYCLE + esc(t(st.cycle.name)) + "</span>" + html +
        '<p class="flow-cycle-text">' + esc(t(st.cycle.text)) + "</p></div>";
    }
    var prevN = null;
    var stages = f.stages.map(function (st, i) {
      return '<li class="flow-stage' + (st.ring ? " has-ring" : "") + (st.loopTo ? " is-loop-to" : "") + (st.loopFrom ? " is-loop-from" : "") + '" style="grid-column:' + (i + 1) + (st.ring ? ";--size:" + (st.ring.size || 500) + "px;--node:" + (st.ring.node || 138) + "px" : "") + '">' +
        '<span class="flow-n' + (t(st.n) === prevN ? " is-same" : "") + '">' + esc((prevN = t(st.n), prevN)) + '</span><span class="flow-dot" aria-hidden="true"></span>' +
        (st.title ? '<h3 class="flow-title">' + esc(t(st.title)) + "</h3>" : "") + (st.text ? '<p class="flow-text">' + esc(t(st.text)) + "</p>" : "") +
        (st.ring ? cycleMap(st.ring) : "") +
        cycle(st, (st.skills || []).map(function (sk) {
          return '<div class="flow-skill"><code>' + esc(t(sk.name)) + "</code>" +
            (sk.optional ? '<span class="flow-opt">' + esc(lang === "zh" ? "選用" : "optional") + "</span>" : "") + subs(sk.subs) + "</div>";
        }).join("")) + "</li>";
    }).join("");
    var loop = from > -1 && to > -1 ? '<div class="flow-loop" style="grid-column:' + (to + 1) + " / " + (from + 2) + '"><span>' + esc(t(f.loop)) + "</span></div>" : "";
    var base = f.base ? '<div class="flow-band flow-base" style="grid-column:1 / ' + (cols + 1) + '"><code>' + esc(t(f.base.name)) + "</code><span>" + esc(t(f.base.text)) + "</span></div>" : "";
    var side = f.side ? '<div class="flow-band flow-side" style="grid-column:1 / ' + (cols + 1) + '"><code>' + esc(f.side.name) + "</code>" + subs(f.side.subs) + "<span>" + esc(t(f.side.text)) + "</span></div>" : "";
    var hasRing = f.stages.some(function (st) { return st.ring; });
    var tpl = hasRing ? ";grid-template-columns:" + f.stages.map(function (st) { return st.ring ? (st.ring.size || 500) + "px" : "minmax(136px,1fr)"; }).join(" ") +
      ";min-width:" + (f.stages.reduce(function (w, st) { return w + (st.ring ? (st.ring.size || 500) : 136); }, 0) + (cols - 1) * 14) + "px" : "";
    return '<div class="flow-scroll"><div class="flow" style="--cols:' + cols + tpl + '"><ol class="flow-stages">' + stages + "</ol>" + loop + base + side + "</div></div>";
  }

  // Stacked layers: application on top, support in the middle, the foundation at the bottom, widest and in gold.
  function layerMap(L) {
    var rows = L.rows.map(function (r) {
      return '<div class="layer' + (r.base ? " is-base" : "") + '">' +
        '<div class="layer-role"><span class="layer-name">' + esc(t(r.role)) + '</span><span class="layer-note">' + esc(t(r.note)) + "</span></div>" +
        '<ul class="layer-cells" style="--n:' + r.cells.length + '">' + r.cells.map(function (c) {
          return '<li class="layer-cell"><code>' + esc(c.name) + '</code><h3>' + esc(t(c.title)) + "</h3><p>" + esc(t(c.text)) + "</p></li>";
        }).join("") + "</ul></div>";
    }).join('<div class="layer-join" aria-hidden="true"></div>');
    return '<div class="layers">' + rows + "</div>" + (L.foot ? '<p class="layers-foot">' + esc(t(L.foot)) + "</p>" : "");
  }

  // A cycle: nodes evenly spaced on a dashed gold ring, clockwise, the first at the top.
  // Each node names who does it; only the PM's nodes carry a skill. Phones get a numbered list instead.
  function cycleMap(c) {
    var n = c.nodes.length, r = 38, arrows = "";
    for (var k = 0; k < n; k++) {
      var a = (-90 + (k + .5) * 360 / n) * Math.PI / 180;
      var deg = (-90 + (k + .5) * 360 / n) + 90;
      arrows += '<path d="M-1.8 -1.8 0 0 -1.8 1.8" transform="translate(' + (50 + r * Math.cos(a)).toFixed(2) + " " + (50 + r * Math.sin(a)).toFixed(2) + ") rotate(" + deg.toFixed(1) + ')"/>';
    }
    var nodes = c.nodes.map(function (d, k) {
      var a = (-90 + k * 360 / n) * Math.PI / 180;
      return '<li class="cyc-node' + (d.pm ? " is-pm" : "") + '" style="left:' + (50 + r * Math.cos(a)).toFixed(2) + "%;top:" + (50 + r * Math.sin(a)).toFixed(2) + '%">' +
        '<span class="cyc-who">' + esc(t(d.who)) + "</span><h3>" + esc(t(d.title)) + "</h3>" +
        (d.skill ? '<p class="cyc-skill"><code>' + esc(d.skill.name) + "</code>" + d.skill.subs.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</p>" : "") + "</li>";
    }).join("");
    return '<figure class="cyc"><div class="cyc-ring">' +
      '<svg class="cyc-svg" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="' + r + '"/>' + arrows + "</svg>" +
      '<div class="cyc-center"><span class="cyc-center-h">' + esc(t(c.center.name)) + "</span><span>" + esc(t(c.center.text)) + "</span>" +
        (c.center.skill ? '<p class="cyc-skill"><code>' + esc(c.center.skill.name) + "</code>" + c.center.skill.subs.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</p>" : "") + "</div>" +
      '<ol class="cyc-nodes">' + nodes + "</ol></div>" +
      (c.back ? '<figcaption class="cyc-back">' + CYCLE + esc(t(c.back)) + "</figcaption>" : "") + "</figure>";
  }

  function section(sec) {
    var out = '<section class="year proj-sec' + (sec.wide ? " is-wide" : "") + '"><h2 class="year-h">' + esc(t(sec.h)) + '</h2><div class="proj-body">';
    if (sec.intro) out += '<p class="proj-p">' + esc(t(sec.intro)) + "</p>";
    if (sec.flow) out += flowMap(sec.flow);
    if (sec.layers) out += layerMap(sec.layers);
    if (sec.figure) out += '<figure class="proj-figure"><img src="' + esc(sec.figure.src) + '" alt="' + esc(t(sec.figure.alt)) + '" loading="lazy" decoding="async"><figcaption>' + esc(t(sec.figure.caption)) + "</figcaption></figure>";
    if (sec.tree) out += '<ul class="ftree">' + sec.tree.map(function (r) {
      return '<li class="ftree-row" style="--d:' + r.d + '"><code class="ftree-path">' + esc(r.path) + '</code><span class="ftree-note">' + esc(t(r.note)) + "</span>" +
        (r.skill ? '<code class="ftree-skill">' + esc(r.skill) + "</code>" : "") + "</li>";
    }).join("") + "</ul>";
    if (sec.catalog) out += (sec.catalogNote ? '<p class="proj-p skcat-note">' + esc(t(sec.catalogNote)) + "</p>" : "") +
      '<div class="skcat">' + sec.catalog.map(function (k) {
        return '<details class="skcat-item"><summary><span class="skcat-n">' + esc(t(k.n)) + '</span><code class="skcat-name">' + esc(k.name) +
          '</code><span class="skcat-what">' + esc(t(k.what)) + '</span></summary><div class="skcat-body">' +
          mdButton(sec.catalogRepo, k.name, "SKILL.md", ["SKILL.md"], "skcat-skillfile") + '<dl class="skcat-subs">' +
          k.subs.map(function (s) {
            var files = s.files || ["reference/" + s.name + ".md"];
            return "<dt>" + mdButton(sec.catalogRepo, k.name, s.name, files, "skcat-sub") + "</dt><dd>" + esc(t(s.text)) + "</dd>";
          }).join("") + "</dl>" +
          (k.note ? '<p class="skcat-foot">' + esc(t(k.note)) + "</p>" : "") + "</div></details>";
      }).join("") + "</div>";
    if (sec.steps && sec.stepsFold) out += '<details class="proj-fold"><summary>' + esc(t(sec.stepsFold)) + "</summary>";
    if (sec.steps) out += '<ol class="proj-steps">' + sec.steps.map(function (st) {
      return '<li><span class="proj-step-name">' + esc(t(st.name)) + '</span><span class="proj-step-text">' + esc(t(st.text)) + "</span></li>";
    }).join("") + "</ol>" + (sec.stepsFold ? "</details>" : "");
    if (sec.table) out += '<div class="proj-table-wrap"><table class="proj-table"><thead><tr>' + sec.table.head.map(function (c) { return "<th>" + esc(t(c)) + "</th>"; }).join("") +
      "</tr></thead><tbody>" + sec.table.rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + esc(t(c)) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
    if (sec.p) out += '<p class="proj-p">' + esc(t(sec.p)) + "</p>";
    if (sec.list) out += '<ul class="proj-list">' + sec.list.map(function (x) { return "<li>" + esc(t(x)) + "</li>"; }).join("") + "</ul>";
    return out + "</div></section>";
  }

  // ---- Markdown preview: skill files read straight from the public repo, shown in a dialog.
  var DOC = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5h4l2.5 2.5v6.5h-6.5zM7 1.5V4h2.5"/></svg>';
  function mdButton(repo, skill, label, files, cls) {
    return '<button type="button" class="' + cls + '" data-md-repo="' + esc(repo) + '" data-md-skill="' + esc(skill) + '" data-md-files="' + esc(files.join(",")) + '">' +
      DOC + "<code>" + esc(label) + "</code></button>";
  }
  var MDUI = {
    en: { loading: "Loading…", failed: "Couldn't load this file.", gh: "Open on GitHub", close: "Close", zh: "The skill files are written in Traditional Chinese." },
    zh: { loading: "載入中…", failed: "這個檔案載入失敗，可以到 GitHub 看原檔。", gh: "在 GitHub 開啟", close: "關閉", zh: "" }
  };
  var mdCache = {};
  function cjk(ch) { return /[\u3000-\u303f\u3400-\u9fff\uff00-\uffef]/.test(ch || ""); }
  function mdInline(s, blob) {
    var keep = [];
    function hold(html) { keep.push(html); return "\u0000" + (keep.length - 1) + "\u0000"; }
    s = s.replace(/`([^`]+)`/g, function (_, c) { return hold("<code>" + esc(c) + "</code>"); });
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, txt, u) {
      var href;
      try { href = new URL(u, blob).href; } catch (e) { return txt; }
      if (!/^https:/.test(href)) return txt;
      return hold('<a href="' + esc(href) + '" target="_blank" rel="noopener">' + mdInline(txt, blob) + "</a>");
    });
    s = esc(s).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    return s.replace(/\u0000(\d+)\u0000/g, function (_, i) { return keep[+i]; });
  }
  var BLOCK = /^(```|#{1,6}\s|\s*>|\s*([-*+]|\d+\.)\s|\s*\||\s*(-{3,}|\*{3,})\s*$)/;
  function mdRender(src, blob) {
    var lines = src.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "").split(/\r?\n/), i = 0, out = "", m;
    function cells(l) { return l.trim().replace(/^\||\|$/g, "").split(/(?<!\\)\|/).map(function (c) { return mdInline(c.trim().replace(/\\\|/g, "|"), blob); }); }
    while (i < lines.length) {
      var l = lines[i];
      if (/^\s*```/.test(l)) {
        var code = []; i++;
        while (i < lines.length && !/^\s*```/.test(lines[i])) code.push(lines[i++]);
        i++; out += "<pre><code>" + esc(code.join("\n")) + "</code></pre>";
      } else if (/^\s*$/.test(l)) { i++; }
      else if ((m = /^(#{1,6})\s+(.*)$/.exec(l))) {
        var h = Math.min(m[1].length + 2, 6); out += "<h" + h + ">" + mdInline(m[2], blob) + "</h" + h + ">"; i++;
      } else if (/^\s*(-{3,}|\*{3,})\s*$/.test(l)) { out += "<hr>"; i++; }
      else if (/^\s*\|/.test(l) && /^\s*\|?\s*:?-{2,}/.test(lines[i + 1] || "")) {
        var head = cells(l); i += 2; var rows = [];
        while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(cells(lines[i++]));
        out += '<div class="mdv-table"><table><thead><tr>' + head.map(function (c) { return "<th>" + c + "</th>"; }).join("") + "</tr></thead><tbody>" +
          rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      } else if (/^\s*>/.test(l)) {
        var q = [];
        while (i < lines.length && /^\s*>/.test(lines[i])) q.push(lines[i++].replace(/^\s*>\s?/, ""));
        out += "<blockquote>" + mdRender(q.join("\n"), blob) + "</blockquote>";
      } else if (/^\s*([-*+]|\d+\.)\s/.test(l)) {
        var items = [];
        while (i < lines.length) {
          var li = /^(\s*)([-*+]|\d+\.)\s+(.*)$/.exec(lines[i]);
          if (li) { items.push({ d: li[1].length, o: /\d/.test(li[2]), x: li[3] }); i++; }
          else if (/^\s+\S/.test(lines[i]) && items.length) { var last = items[items.length - 1], nx = lines[i++].trim(); last.x += (cjk(last.x.slice(-1)) && cjk(nx[0]) ? "" : " ") + nx; }
          else if (/^\s*$/.test(lines[i]) && /^\s*([-*+]|\d+\.)\s/.test(lines[i + 1] || "")) i++;
          else break;
        }
        var k = 0;
        (function list(d) {
          var tag = items[k].o ? "ol" : "ul", html = "<" + tag + ">";
          while (k < items.length && items[k].d >= d) {
            if (items[k].d > d) { html = html.replace(/<\/li>$/, "") + list(items[k].d) + "</li>"; continue; }
            html += "<li>" + mdInline(items[k].x, blob) + "</li>"; k++;
          }
          html += "</" + tag + ">";
          if (d === items[0].d) out += html;
          return html;
        })(items[0].d);
      } else {
        var para = l.trim(); i++;
        while (i < lines.length && !/^\s*$/.test(lines[i]) && !BLOCK.test(lines[i])) {
          var n2 = lines[i++].trim(); para += (cjk(para.slice(-1)) && cjk(n2[0]) ? "" : " ") + n2;
        }
        out += "<p>" + mdInline(para, blob) + "</p>";
      }
    }
    return out;
  }
  var dlg = null;
  function mdDialog() {
    if (dlg) return dlg;
    dlg = document.createElement("dialog");
    dlg.className = "mdv";
    dlg.setAttribute("aria-labelledby", "mdv-title");
    dlg.innerHTML = '<div class="mdv-head"><div class="mdv-meta"><span class="mdv-skill"></span><code class="mdv-path" id="mdv-title"></code></div>' +
      '<a class="mdv-gh" target="_blank" rel="noopener"></a><button type="button" class="mdv-x"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 2.5l7 7M9.5 2.5l-7 7"/></svg></button></div>' +
      '<div class="mdv-tabs" role="tablist"></div><p class="mdv-lang"></p><div class="mdv-body"></div>';
    document.body.appendChild(dlg);
    dlg.querySelector(".mdv-x").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    return dlg;
  }
  function mdLoad(repo, path) {
    var d = mdDialog(), ui = MDUI[lang], body = d.querySelector(".mdv-body");
    var blob = "https://github.com/" + repo + "/blob/main/" + path;
    d.querySelector(".mdv-path").textContent = path.replace(/^pm-workflow\/skills\/[^/]+\//, "");
    var gh = d.querySelector(".mdv-gh"); gh.href = blob; gh.innerHTML = esc(ui.gh) + ARROW;
    d.querySelectorAll(".mdv-tab").forEach(function (b) { b.setAttribute("aria-selected", String(b.getAttribute("data-path") === path)); });
    body.scrollTop = 0;
    function show(src) { body.innerHTML = '<div class="mdv-doc">' + mdRender(src, blob) + "</div>"; }
    if (mdCache[path]) return show(mdCache[path]);
    body.innerHTML = '<p class="mdv-status">' + esc(ui.loading) + "</p>";
    fetch("https://raw.githubusercontent.com/" + repo + "/main/" + path).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    }).then(function (src) { mdCache[path] = src; if (d.open) show(src); })
      .catch(function () { body.innerHTML = '<p class="mdv-status">' + esc(ui.failed) + "</p>"; });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-md-files]");
    if (!b) return;
    var repo = b.getAttribute("data-md-repo"), skill = b.getAttribute("data-md-skill");
    var paths = b.getAttribute("data-md-files").split(",").map(function (f) { return "pm-workflow/skills/" + skill + "/" + f; });
    var d = mdDialog(), ui = MDUI[lang];
    d.querySelector(".mdv-skill").textContent = skill;
    d.querySelector(".mdv-x").setAttribute("aria-label", ui.close);
    d.querySelector(".mdv-lang").textContent = ui.zh;
    d.querySelector(".mdv-lang").hidden = !ui.zh;
    var tabs = d.querySelector(".mdv-tabs");
    tabs.hidden = paths.length < 2;
    tabs.innerHTML = paths.map(function (p) {
      return '<button type="button" role="tab" class="mdv-tab" data-path="' + esc(p) + '"><code>' + esc(p.split("/").pop()) + "</code></button>";
    }).join("");
    tabs.querySelectorAll(".mdv-tab").forEach(function (tb) { tb.addEventListener("click", function () { mdLoad(repo, tb.getAttribute("data-path")); }); });
    if (!d.open) d.showModal();
    mdLoad(repo, paths[0]);
  });

  function renderProject() {
    var ui = UI[lang];
    var links = (card.links || []).filter(function (l) { return l.url; }).map(function (l) {
      return '<a class="proj-link" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(t(l.label)) + ARROW + "</a>";
    }).join("");
    document.querySelector("[data-project-body]").innerHTML =
      '<header class="blog-head proj-head">' +
        '<p class="work-meta proj-meta"><span>' + esc(t(card.year)) + '</span><span class="status" data-s="' + esc(card.status) + '">' + esc((ui.status || {})[card.status] || "") + "</span>" + (card.stack ? "<span>" + esc(t(card.stack)) + "</span>" : "") + "</p>" +
        '<h1 class="blog-h proj-h">' + esc(t(card.name)) + "</h1>" +
        '<p class="blog-sub proj-lead">' + esc(t(page.lead || card.summary)) + "</p>" +
        (links ? '<div class="proj-links">' + links + "</div>" : "") +
      "</header>" + page.sections.map(section).join("");
    document.title = t(card.name) + " · Webber Hsu";
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
    renderProject();
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
