import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Base de motion: scroll suave (Lenis) + reveals + scroll horizontal de podcasts.
// Todo se desactiva con prefers-reduced-motion.
// Espera a que la cortina CSS termine (si se muestra) antes de arrancar los reveals.
export function initLoader() {
  const showing = document.querySelector('.loader') && !document.documentElement.classList.contains('no-loader');
  return new Promise<void>((r) => setTimeout(r, showing ? 1400 : 0));
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

  // Podcasts: pista horizontal pineada que avanza con el scroll
  const track = document.querySelector<HTMLElement>('[data-podcast-track]');
  const pin = document.querySelector<HTMLElement>('[data-podcast-pin]');
  if (track && pin) {
    const distance = () => track.scrollWidth - window.innerWidth + 64;
    gsap.to(track, {
      x: () => -distance(), ease: 'none',
      scrollTrigger: { trigger: pin, start: 'top top', end: () => `+=${distance()}`, pin: true, pinSpacing: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1 },
    });
    track.querySelectorAll<HTMLElement>('[data-ep-number]').forEach((n) => {
      gsap.to(n, { xPercent: -40, ease: 'none', scrollTrigger: { trigger: pin, start: 'top top', end: () => `+=${distance()}`, scrub: true } });
    });
  }

  // Parallax constante al scroll en imágenes y números grandes
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const amount = Number(el.dataset.parallax || 12);
    gsap.fromTo(el, { yPercent: -amount }, { yPercent: amount, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // Contadores
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const obj = { v: 0 };
    ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () =>
      gsap.to(obj, { v: end, duration: 1.6, ease: 'power2.out', onUpdate: () => (el.textContent = Math.round(obj.v).toLocaleString('es-ES')) }) });
  });
}
