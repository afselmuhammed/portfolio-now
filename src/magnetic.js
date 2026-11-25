const SELECTOR = [
  ".btn-outline",
  ".btn-fill",
  ".service-card",
  ".tech-chip",
  ".experience-card",
  ".works-controls button",
  ".mood-play",
  ".contact-form button",
  ".career-highlights > div",
  ".works-badge",
  ".mood-filters button",
  ".cycling-card",
].join(", ");

export function initMagneticHover() {
  if (typeof window === "undefined") return () => {};
  if (window.matchMedia("(pointer: coarse)").matches) return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  const cleanups = [];

  function bind(el) {
    if (el.dataset.magneticBound === "1") return;
    el.dataset.magneticBound = "1";
    el.classList.add("magnetic");

    const strength = Number(el.dataset.magnet || 0.42);
    let frame = 0;

    function onMove(event) {
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const dx = (x - rect.width / 2) * strength;
      const dy = (y - rect.height / 2) * strength;

      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
        el.style.setProperty("--tx", `${dx.toFixed(2)}px`);
        el.style.setProperty("--ty", `${dy.toFixed(2)}px`);
        el.classList.add("is-magnetic");
      });
    }

    function onLeave() {
      if (frame) cancelAnimationFrame(frame);
      el.style.setProperty("--tx", "0px");
      el.style.setProperty("--ty", "0px");
      el.classList.remove("is-magnetic");
    }

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    cleanups.push(() => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
      el.classList.remove("magnetic", "is-magnetic");
      delete el.dataset.magneticBound;
      el.style.removeProperty("--tx");
      el.style.removeProperty("--ty");
      el.style.removeProperty("--mx");
      el.style.removeProperty("--my");
    });
  }

  function scan() {
    document.querySelectorAll(SELECTOR).forEach(bind);
  }

  scan();
  const timer = window.setTimeout(scan, 300);
  const observer = new MutationObserver(scan);
  observer.observe(document.body, { childList: true, subtree: true });

  cleanups.push(() => {
    window.clearTimeout(timer);
    observer.disconnect();
  });

  return () => cleanups.forEach((fn) => fn());
}
