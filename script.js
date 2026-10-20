/* No framework, autoplay, particle loop or third-party widgets. */
(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  function closeMenu() { menu.setAttribute('aria-expanded', 'false'); links.classList.remove('open'); }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open)); links.classList.toggle('open', open);
  });
  links.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
  });
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reduced.matches) {
    document.documentElement.classList.add('js-ready');
    const reveals = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add('visible'); reveals.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px 30px 0px', threshold: 0.04 });
    document.querySelectorAll('.reveal').forEach(item => reveals.observe(item));
    reduced.addEventListener('change', () => {
      if (reduced.matches) { document.documentElement.classList.remove('js-ready'); reveals.disconnect(); }
    });
  }
  if ('IntersectionObserver' in window) {
    const sections = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach(link => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }, { rootMargin: '-15% 0px -60% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => sections.observe(section));
  }
  const copy = document.getElementById('copy-discord');
  const message = document.getElementById('copy-message');
  let reset = 0;
  copy.addEventListener('click', async () => {
    clearTimeout(reset);
    try { await navigator.clipboard.writeText(copy.dataset.username); message.textContent = 'Discord username copied.'; }
    catch (_) { message.textContent = 'Username: ' + copy.dataset.username; }
    reset = setTimeout(() => { message.textContent = ''; }, 4000);
  });
})();
