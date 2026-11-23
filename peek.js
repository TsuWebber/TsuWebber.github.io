// Link preview: any link with data-peek="<image>" shows that image in a small floating card
// while the mouse is over it (or beside it on keyboard focus). Mouse-and-trackpad only; touch screens skip it.
(function () {
  "use strict";
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  var card = document.createElement("div");
  card.className = "tl-peek"; card.setAttribute("aria-hidden", "true");
  card.innerHTML = '<img alt="" decoding="async">';
  document.body.appendChild(card);
  var img = card.firstChild, on = false, warmed = false;

  function place(x, y) {
    var w = card.offsetWidth || 280, h = card.offsetHeight || 200, gap = 22;
    var left = x + gap + w > window.innerWidth - 12 ? x - gap - w : x + gap;
    var top = Math.min(Math.max(12, y - h / 2), window.innerHeight - h - 12);
    card.style.transform = "translate3d(" + Math.round(left) + "px," + Math.round(top) + "px,0)";
  }
  function show(src) {
    if (img.getAttribute("src") !== src) img.setAttribute("src", src);
    card.classList.add("is-on"); on = true;
  }
  function hide() { card.classList.remove("is-on"); on = false; }
  // The first mouse movement fetches every preview on the page, so the first hover shows at once.
  function warm() {
    if (warmed) return; warmed = true;
    document.querySelectorAll("[data-peek]").forEach(function (a) { var im = new Image(); im.src = a.getAttribute("data-peek"); });
  }

  document.addEventListener("mouseover", function (e) {
    if (!fine.matches) return;
    warm();
    var a = e.target.closest && e.target.closest("[data-peek]");
    if (!a) { if (on) hide(); return; }
    show(a.getAttribute("data-peek")); place(e.clientX, e.clientY);
  });
  document.addEventListener("mousemove", function (e) { if (on) place(e.clientX, e.clientY); });
  document.addEventListener("focusin", function (e) {
    var a = e.target.closest && e.target.closest("[data-peek]");
    if (!a || !fine.matches) { if (on) hide(); return; }
    var r = a.getBoundingClientRect();
    show(a.getAttribute("data-peek")); place(r.right, r.top + r.height / 2);
  });
  document.addEventListener("focusout", hide);
  document.addEventListener("mouseleave", hide);
  window.addEventListener("scroll", function () { if (on) hide(); }, { passive: true });
})();
