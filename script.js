(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---------- Custom cursor (desktop only) ---------- */

  if (finePointer && !reducedMotion) {
    var dot = document.querySelector(".cursor-dot");
    var ring = document.querySelector(".cursor-ring");

    if (dot && ring) {
      document.body.classList.add("has-cursor", "cursor-hidden");

      var mouseX = -100, mouseY = -100;
      var ringX = -100, ringY = -100;

      document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        document.body.classList.remove("cursor-hidden");
      });

      document.addEventListener("mouseleave", function () {
        document.body.classList.add("cursor-hidden");
      });

      document.addEventListener("mouseover", function (e) {
        if (e.target.closest("a, button")) {
          document.body.classList.add("cursor-on-link");
        }
      });

      document.addEventListener("mouseout", function (e) {
        if (e.target.closest("a, button")) {
          document.body.classList.remove("cursor-on-link");
        }
      });

      (function cursorLoop() {
        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;
        dot.style.transform = "translate(" + (mouseX - 3.5) + "px," + (mouseY - 3.5) + "px)";
        ring.style.transform = "translate(" + (ringX - 17) + "px," + (ringY - 17) + "px)";
        requestAnimationFrame(cursorLoop);
      })();
    }
  }

  /* ---------- Torch light on dark sections ---------- */

  if (finePointer && !reducedMotion) {
    var torchSections = document.querySelectorAll(".hero, .section-dark");
    var torches = [];

    torchSections.forEach(function (sec) {
      var t = document.createElement("div");
      t.className = "torch";
      t.setAttribute("aria-hidden", "true");
      sec.insertBefore(t, sec.firstChild);

      var state = { el: t, x: 0, y: 0, tx: 0, ty: 0, active: false };
      torches.push(state);

      sec.addEventListener("mouseenter", function (e) {
        var r = sec.getBoundingClientRect();
        state.tx = state.x = e.clientX - r.left;
        state.ty = state.y = e.clientY - r.top;
        state.active = true;
        t.classList.add("on");
      });

      sec.addEventListener("mousemove", function (e) {
        var r = sec.getBoundingClientRect();
        state.tx = e.clientX - r.left;
        state.ty = e.clientY - r.top;
      });

      sec.addEventListener("mouseleave", function () {
        state.active = false;
        t.classList.remove("on");
      });
    });

    if (torches.length) {
      (function torchLoop() {
        var now = performance.now() / 1000;
        torches.forEach(function (s) {
          if (!s.active && !s.el.classList.contains("on")) return;
          s.x += (s.tx - s.x) * 0.07;
          s.y += (s.ty - s.y) * 0.07;
          s.el.style.setProperty("--mx", s.x + "px");
          s.el.style.setProperty("--my", s.y + "px");
          s.el.style.setProperty("--j1x", Math.sin(now * 1.3) * 22 + "px");
          s.el.style.setProperty("--j1y", Math.cos(now * 1.1) * 16 + "px");
          s.el.style.setProperty("--j2x", Math.cos(now * 0.8 + 2) * 30 + "px");
          s.el.style.setProperty("--j2y", Math.sin(now * 1.6 + 1) * 20 + "px");
        });
        requestAnimationFrame(torchLoop);
      })();
    }
  }

  /* ---------- Scroll reveals ---------- */

  var reveals = document.querySelectorAll(".reveal");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Nav background after leaving hero ---------- */

  var nav = document.getElementById("nav");
  var hero = document.querySelector(".hero");

  function updateNav() {
    if (!nav || !hero) return;
    var passed = window.scrollY > hero.offsetHeight - 80;
    nav.classList.toggle("scrolled", passed);
  }

  /* ---------- Timeline progress line + node activation ---------- */

  var timeline = document.getElementById("timeline");
  var progress = document.getElementById("timeline-progress");
  var jobs = document.querySelectorAll(".job");

  function updateTimeline() {
    if (!timeline || !progress) return;

    var rect = timeline.getBoundingClientRect();
    var trigger = window.innerHeight * 0.55;
    var filled = Math.min(Math.max(trigger - rect.top, 0), rect.height);
    progress.style.height = filled + "px";

    jobs.forEach(function (job) {
      var jr = job.getBoundingClientRect();
      job.classList.toggle("passed", jr.top + 12 < trigger);
    });
  }

  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      updateNav();
      updateTimeline();
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateNav();
  updateTimeline();
})();
