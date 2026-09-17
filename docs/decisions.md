# Decisiones

## 2026-09-17 · Dirección visual
- **Azul cobalto `#2b3a91` como color principal** (hero y cabeceras), papel `#f8fafc` para lectura y navy `#070d22` para bloques de datos. Nada de colores nuevos: toda la paleta sale de la CSS de startuc3m.es. Amarillo y cian, casi sin uso.
- **Titillium Web** para todo el texto: es la familia más cercana al wordmark `start_` (el logo original parece Klavika, comercial). JetBrains Mono para etiquetas con cursor `_`.
- Titulares monumentales, etiquetas mono, sin tarjetas innecesarias.
- Podcasts con protagonismo: pista horizontal pineada que avanza con el scroll en la home (GSAP ScrollTrigger).

## 2026-09-17 · Stack
- **Astro 7 + Tailwind v4 + GSAP + Lenis**, salida estática con adaptador Node solo para `/api/forms`.
- "CMS" = markdown en `src/content` + `src/lib/site.ts`. Un panel (Keystatic/Payload) queda para más adelante (#8) si hace falta.
- Formularios propios (Start, evento, patrocinio, contacto, newsletter) guardan en `data/submissions.json`; sustituyen a Tally y Luma.

## 2026-09-17 · Email de confirmación
- Sin SMTP/Mailpit por ahora: cada envío registra en consola (dev) el email de confirmación que se mandaría (`src/lib/mail.ts`), como contempla el issue #9. Se sustituye por un SMTP local el día que haga falta probar la entrega real.

## 2026-09-17 · Financiación: patrocinio corporativo, no mecenazgo
- Se planteó una página `/apoya` de mecenazgo/donación de alumni para financiar eventos. Se descartó (issue #29, cerrada): la financiación de Start es **patrocinio corporativo** — Partner de Temporada (2-3 plazas/curso) + patrocinio de evento (rampa de entrada, dinero o en especie) — no donación individual.
- Motivo: el patrocinio corporativo es el carril que Start ya opera (ver `sponsors` en `src/lib/site.ts`); el mecenazgo habría exigido un flujo de pago y una colección de "mecenas" nuevos sin necesidad clara. Simplifica de dos páginas de negocio (`/patrocina`, `/patrocinadores`) en vez de tres audiencias con lenguajes y flujos distintos.
- El análisis legal de por qué Start (asociación sin ánimo de lucro) no puede ofrecer equity/inversión real sin un vehículo societario aparte se conserva como referencia por si se retoma en el futuro — no hay trabajo activo en esa dirección.

## 2026-09-17 · Modelo de patrocinio: 2 niveles, sin cesión de datos
- Los tiers de patrocinio pasan de 4 (Partner anual/Gold/Silver/Colaborador) a **2**: **Partner de Temporada** (oferta ancla, 2-3 plazas por curso, acompaña toda la temporada) y **patrocinio de evento** (rampa de entrada, un evento concreto, dinero o en especie).
- **Restricción dura**: Start no cede CVs ni datos personales de estudiantes a los patrocinadores. El valor que se ofrece es contacto presencial en los eventos, nunca una base de datos exportable. Se corrigió texto que prometía "acceso a los perfiles de los asistentes" en `src/lib/site.ts` y `src/pages/patrocina.astro` — contradecía esta decisión.
