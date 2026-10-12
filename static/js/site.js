// Email links are assembled here so the plain address isn't in the HTML.
document.querySelectorAll("[data-email]").forEach((a) => { a.href = `mailto:${a.dataset.email.replace("|", "@")}`; });

// Demo videos play only while on screen; reduced-motion users get controls instead.
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const player = new IntersectionObserver((entries) => entries.forEach(({ target, isIntersecting }) =>
  isIntersecting ? target.play().catch(() => {}) : target.pause()), { threshold: 0.25 });
document.querySelectorAll("video[data-autoplay]").forEach((v) =>
  reduceMotion ? (v.controls = true) : player.observe(v));

// Mark the nav link of the section currently in view.
const navLinks = [...document.querySelectorAll(".nav a")].filter((a) => a.pathname === location.pathname);
const inView = new Set();
const spy = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => inView[isIntersecting ? "add" : "delete"](target.id));
  if (inView.size) navLinks.forEach((a) => inView.has(a.hash.slice(1)) ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current"));
}, { rootMargin: "-40% 0px -55% 0px" });
navLinks.forEach((a) => { const s = document.getElementById(a.hash.slice(1)); if (s) spy.observe(s); });
