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

## 2026-09-17 — Se cierra `/apoya`: la financiación viene de patrocinio corporativo, no de mecenazgo

**Contexto**: en esta misma sesión se había diseñado `/apoya` (ver las dos entradas anteriores) como página de mecenazgo/donación de alumni. El usuario ha revisado la decisión y la ha revertido.

**Decisión**: `/apoya` sale del alcance del proyecto. Se borra `content/apoya.md`. La financiación de Start pasa a depender de **patrocinio corporativo**: 2-3 partners de temporada, gestionados a través de `/patrocina` (media kit para empresas) y mostrados públicamente en `/patrocinadores` (logos). `/recursos` vuelve a su propósito original — página informativa sobre qué ofrece Start a estudiantes y asistentes a eventos, sin ningún CTA de donación.

**Por qué**:
- El patrocinio corporativo es el carril de financiación que Start ya opera (ver lista de partners en `.agents/product-marketing.md`) — no requiere construir un flujo de pago nuevo ni una colección de "mecenas" en el CMS, a diferencia del mecenazgo.
- Evita el terreno legal más ambiguo del mecenazgo individual (certificados de donación, régimen fiscal de las aportaciones) descrito en `docs/financiacion.md`, que no aportaba valor si el modelo real de ingresos es corporativo.
- Simplifica la arquitectura del sitio: dos páginas de negocio (`/patrocina`, `/patrocinadores`) en vez de tres audiencias distintas (estudiante, empresa, mecenas) con lenguajes y flujos separados.

**Qué queda de lo anterior**: el análisis legal sobre por qué Start no puede ofrecer equity/inversión real sin un vehículo societario aparte se mantiene en `docs/financiacion.md` como referencia, por si se retoma la idea de capital real en el futuro. No se ha perdido el trabajo, solo se ha registrado por qué no se usa ahora — ver `docs/financiacion.md` para el detalle completo de qué se consideró (carril mecenazgo) y qué queda como referencia (carril capital real).
