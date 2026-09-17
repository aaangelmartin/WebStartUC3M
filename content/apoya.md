# Copy — `/apoya` (campaña de mecenazgo)

Página nueva, no existía en ninguna issue del repo. Sustituye lo que el usuario pedía en `/recursos` — ver `docs/decisions.md` para el porqué del cambio de slug.

**Restricción dura que gobierna cada línea de este archivo**: Start es una asociación sin ánimo de lucro, no tiene participaciones que vender. Esto es una campaña de **mecenazgo/donación**, nunca de inversión. Prohibido: "invierte", "inversión", "rentabilidad", "retorno", "participación" (en sentido societario). Verificable con `grep -rniE "invier|rentab|retorno" content/apoya.md` — debe salir vacío.
Referencia de tono: `docs/tono.md`, registro "mecenas".
Cifras sin fuente marcadas `[DATO: …]`.

---

## 1. Hero

**Título**
> Start lo construyen los starters. Que siga en pie también depende de quien ya pasó por aquí.

**Subtítulo**
> Cada Buildathon, cada Start Camp, cada mentor que viene una tarde a ayudar — cuesta dinero real que hoy sale de cuotas y patrocinios puntuales. Apóyanos y te contamos exactamente a qué va cada euro.

CTA: "Hazte mecenas" → flujo de donación (fuera de alcance técnico esta sesión, ver `docs/financiacion.md`).

## 2. A qué se destina exactamente (bloque de transparencia — es lo que convierte)

No se pide dinero "para Start" en abstracto. Se pide para partidas concretas:

| Partida | Qué cubre | Coste aprox. |
|---|---|---|
| Espacio y catering de eventos | Alquiler de sala fuera de campus (TeamLabs, Madrid Startup Bar), catering de Buildathon/StartXperience | [DATO: Eventos/Legal] |
| Material y créditos técnicos | Créditos de herramientas (cuando no vienen de un colaborador como Lovable), material de Buildathon | [DATO: Eventos] |
| Becas de asistencia a Start Camp | Plazas subvencionadas para starters que no pueden pagar la cuota del campamento | [DATO: RRHH] |
| Producción de contenido | Fotografía/vídeo de eventos, podcast | [DATO: Marketing] |

**Nota de producto**: esta tabla es el corazón de la página. Sin partidas concretas, "apoya a Start" suena a la caja genérica de cualquier asociación y no mueve a nadie. Con partidas concretas (una beca, un catering), sí.

## 3. Niveles de aportación (contrapartidas NO financieras)

Cuidado: "contrapartida" aquí nunca es dinero ni participación, es reconocimiento y acceso.

- **Starter honorario** — aportación puntual, la que sea. Mención en la página de mecenas.
- **Amigo de Start** — [DATO: importe, p. ej. 10€/mes] — mención + acceso a los podcasts/contenido antes que nadie.
- **Alumni Partner** — [DATO: importe] — mención destacada + invitación a un evento del curso + merch.
- **Fundador honorario** — [DATO: importe alto, pensado para alumni con más recorrido] — todo lo anterior + logo/nombre en la página de "quiénes hacen posible Start" + invitación VIP a Start Camp.

## 4. Por qué desde alumni (prueba social)

> Los primeros starters montaron Alternativa Emprender sin presupuesto, en 2013. Trece años después, muchos de los que pasaron por Start dirigen sus propias empresas. Esto no es caridad — es que quien construyó esto la primera vez quiere que la próxima generación tenga lo que a ellos les faltó.

[DATO: 1-2 nombres de alumni conocidos dispuestos a aparecer citados · Junta] — refuerza más que cualquier cifra.

## 5. Transparencia de fondos

> Cada curso publicamos en qué se ha usado lo recaudado. [DATO: formato — memoria anual, post de blog, PDF descargable · Legal/Junta]

Esto no es opcional: es lo que distingue una campaña de mecenazgo seria de una petición de dinero sin más, y es lo que evita que se lea como una promesa implícita de retorno.

## 6. FAQ

- **¿Esto es una inversión?** No. Start es una asociación de estudiantes sin ánimo de lucro; no hay participaciones ni retorno financiero. Es una donación para financiar eventos y becas concretas.
- **¿Puedo pedir factura/certificado?** [DATO: si Start puede emitir certificados de donación · Legal — depende de si está dada de alta para ello]
- **¿Y si quiero aportar dinero a cambio de una startup mía?** Eso no es esto. Habla con Partnerships sobre patrocinio de evento (`/patrocina`) si eres empresa, o revisa `docs/financiacion.md` — el vehículo para capital real todavía no existe.

## 7. CTA final

> No hace falta ser millonario. Hace falta que a la próxima Buildathon no le falte catering.
> [Hazte mecenas]

---

## Nota para Ángel/Marco (modelo de contenido)

Esta página necesita: (a) un flujo de pago/donación — no está en el scope del CMS actual (#8), (b) una colección de "mecenas" para las menciones, (c) decidir la plataforma de cobro — ver `docs/financiacion.md`. No se puede implementar el CTA real hasta esa decisión.
