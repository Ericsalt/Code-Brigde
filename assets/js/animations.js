/* ================================================================
   CodeBridge AI — Animations JS
   ================================================================ */
'use strict';

// ── Progress bars (insight section on homepage) ───────────────
const bars = document.querySelectorAll('.insight-bar-fill');
if (bars.length) {
  const bio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.width || '0%';
        bio.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => { b.style.width = '0%'; bio.observe(b); });
}

// ── TSM bars (market section on homepage) ────────────────────
const tsmBars = document.querySelectorAll('.tsm-bar[data-w]');
if (tsmBars.length) {
  const tio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.w;
        tio.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  tsmBars.forEach(b => { b.style.transition = 'width 1.2s cubic-bezier(0,0,0.2,1)'; b.style.width = '0'; tio.observe(b); });
}

// ── Stagger child cards inside visible parents ────────────────
document.querySelectorAll('.services-grid, .team-grid, .problem-grid').forEach(grid => {
  const children = Array.from(grid.children);
  const gio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        children.forEach((child, i) => {
          setTimeout(() => child.classList.add('visible'), i * 80);
        });
        gio.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  children.forEach(c => c.classList.add('reveal'));
  gio.observe(grid);
});
