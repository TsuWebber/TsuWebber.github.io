// Phone and tablet header: the five links fold into a menu button (shared by every page).
(function () {
  "use strict";
  var bar = document.querySelector(".bar");
  var btn = document.querySelector("[data-menu]");
  if (!bar || !btn) return;
  var LABEL = { open: { en: "Open menu", zh: "打開選單" }, close: { en: "Close menu", zh: "關閉選單" } };
  var HOME = { en: "Home", zh: "首頁" };
  // The menu also carries the main outside links, so contact is one tap away on a phone.
  var ARROW = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5"/></svg>';
  var ext = bar.querySelector("[data-menu-ext]"), links = (window.HUB && window.HUB.links) || {};
  if (ext) ext.innerHTML = [["linkedin", "LinkedIn"], ["github", "GitHub"], ["medium", "Medium"], ["substack", "Substack"]]
    .filter(function (l) { return links[l[0]]; })
    .map(function (l) { return '<a href="' + links[l[0]] + '" target="_blank" rel="noopener">' + l[1] + ARROW + "</a>"; }).join("");
  function lang() { return document.documentElement.lang === "zh-Hant" ? "zh" : "en"; }
  // While the menu is open, everything outside the header is inert, so Tab and screen readers stay in the menu.
  var behind = Array.prototype.filter.call(document.body.children, function (el) { return el !== bar && el.tagName !== "SCRIPT"; });
  function set(open, focusFirst) {
    var was = bar.classList.contains("is-open");
    behind.forEach(function (el) { if (open) el.setAttribute("inert", ""); else el.removeAttribute("inert"); });
    if (open && !was && focusFirst) { var first = bar.querySelector("nav a"); if (first) setTimeout(function () { first.focus(); }, 50); }
    bar.classList.toggle("is-open", open);
    document.documentElement.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", LABEL[open ? "close" : "open"][lang()]);
    var label = bar.querySelector("[data-menu-label]");
    if (label) label.textContent = HOME[lang()];
  }
  btn.addEventListener("click", function (e) { set(!bar.classList.contains("is-open"), e.detail === 0); });   // keyboard opens move focus into the list
  // Tab cycles within the header (wordmark, language, menu button, links) while the menu is open.
  bar.addEventListener("keydown", function (e) {
    if (e.key !== "Tab" || !bar.classList.contains("is-open")) return;
    var items = Array.prototype.filter.call(bar.querySelectorAll("a, button"), function (el) { return el.offsetParent !== null || el.closest("nav"); });
    var first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  bar.querySelectorAll("nav a").forEach(function (a) { a.addEventListener("click", function () { set(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && bar.classList.contains("is-open")) { set(false); btn.focus(); } });
  // Back to a wide screen: the menu closes so the inline nav is never hidden behind an open state.
  window.matchMedia("(min-width: 961px)").addEventListener("change", function (m) { if (m.matches) set(false); });
  // Keep the button's label in the page's language when the language switches.
  new MutationObserver(function () { set(bar.classList.contains("is-open")); }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  set(false);
})();
