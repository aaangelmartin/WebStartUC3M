import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Base de motion: scroll suave (Lenis) + reveals + scroll horizontal de podcasts.
// Todo se desactiva con prefers-reduced-motion.
// Loader: cortina con el wordmark start_. Solo la primera vez por sesión.
export function initLoader() {
  const loader = document.querySelector<HTMLElement>('.loader');
  if (!loader) return Promise.resolve();
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let seen = false;
  try { seen = sessionStorage.getItem('start-loaded') === '1'; sessionStorage.setItem('start-loaded', '1'); } catch {}
  if (reduced || seen || location.search.includes('noloader')) { loader.remove(); document.documentElement.classList.remove('is-loading'); return Promise.resolve(); }
  return new Promise<void>((resolve) => {
    const done = () => { loader.remove(); document.documentElement.classList.remove('is-loading'); resolve(); };
    setTimeout(done, 3000); // seguro: nunca más de 3 s aunque falle la animación
    const tl = gsap.timeline({ onComplete: done });
    tl.from('.loader-mark span', { yPercent: 110, duration: 0.6, ease: 'power4.out' })
      .from('.loader-mark i', { scaleX: 0, duration: 0.4, ease: 'power3.out' }, '-=0.2')
      .to('.loader-bar', { width: '100%', duration: 0.5, ease: 'power2.inOut' }, '-=0.3')
      .to(loader, { yPercent: -100, duration: 0.7, ease: 'power4.inOut' }, '+=0.1');
  });
}

export function initMotion() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  // Reveal por sección
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    ScrollTrigger.create({ trigger: el, start: 'top 85%', once: true, onEnter: () => el.classList.add('is-in') });
  });

  // Titulares grandes: entran letra a letra por palabras
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    const words = el.textContent!.trim().split(/\s+/);
    el.innerHTML = words.map((w) => `<span class="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"><span class="inline-block will-change-transform">${w}</span></span>`).join(' ');
    gsap.from(el.querySelectorAll('span > span'), {
      yPercent: 110, duration: 1, ease: 'power4.out', stagger: 0.06,
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });

  // Parallax constante al scroll en imágenes y números grandes
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const amount = Number(el.dataset.parallax || 12);
    gsap.fromTo(el, { yPercent: -amount }, { yPercent: amount, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // Marcador de progreso del scroll en la nav
  const bar = document.querySelector<HTMLElement>('[data-progress]');
  if (bar) gsap.to(bar, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });

  // Contadores
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const obj = { v: 0 };
    ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () =>
      gsap.to(obj, { v: end, duration: 1.6, ease: 'power2.out', onUpdate: () => (el.textContent = Math.round(obj.v).toLocaleString('es-ES')) }) });
  });
}
