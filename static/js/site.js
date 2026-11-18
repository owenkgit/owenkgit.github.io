// Email links are assembled here so the plain address isn't in the HTML.
document.querySelectorAll("[data-email]").forEach((a) => { a.href = `mailto:${a.dataset.email.replace("|", "@")}`; });

// Demo videos play only while on screen; reduced-motion users get controls instead.
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const player = new IntersectionObserver((entries) => entries.forEach(({ target, isIntersecting }) =>
  isIntersecting ? target.play().catch(() => {}) : target.pause()), { threshold: 0.25 });
document.querySelectorAll("video[data-autoplay]").forEach((v) =>
  reduceMotion ? (v.controls = true) : player.observe(v));
