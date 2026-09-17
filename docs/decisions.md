# Decisiones de contenido/producto

Registro de decisiones tomadas fuera de una issue, para que Ángel y Marco las vean antes de diseñar/maquetar. Issue #22 (README y guía de edición) pide este archivo al día.

## 2026-09-17 — `/apoya` en vez de `/recursos` para la campaña de financiación

**Contexto**: se pidió que la página `/recursos` sirviera para captar dinero para Start (mecenazgo/donación).

**Decisión**: se crea una página nueva, `/apoya`, en vez de reutilizar `/recursos`.

**Por qué**:
- `/recursos` ya tiene dueño de contenido: issue #17 ("Recursos: listado por categoría", Marco) la define como un listado de recursos útiles para starters, no como página de recaudación.
- El slug "recursos" no comunica una campaña de donación — nadie busca "recursos" esperando un CTA de "hazte mecenas", y es malo para SEO de esa intención de búsqueda.
- Separar ambas deja `/recursos` limpio para su propósito original y da a la campaña de financiación una URL y una narrativa propias.

**Pendiente de confirmar con Ángel**: si `/apoya` entra en la arquitectura del sitio del design system (#2) y en el modelo de contenido del CMS (#8). Se ha abierto una issue nueva en GitHub para esto.

## 2026-09-17 — Mecenazgo, no inversión

**Contexto**: el encargo original hablaba de "atraer inversores vía crowdfunding".

**Decisión**: la web no ofrece ni promete ningún retorno financiero. Se construye como campaña de mecenazgo/donación con contrapartidas no financieras.

**Por qué**: Start es una asociación sin ánimo de lucro sin participaciones que ofrecer; una campaña de inversión real exigiría un vehículo societario aparte y, si se dirige al público en general, una plataforma autorizada por la CNMV. Ver `docs/financiacion.md` para el desarrollo completo y el carril B (capital real) como decisión pendiente de junta.
