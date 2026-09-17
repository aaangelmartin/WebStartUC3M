# Estrategia de captación de capital

Contexto: el usuario planteó que la web sirva para "atraer inversores vía crowdfunding". Ninguna issue del repo cubre esto. Se documenta aquí en dos carriles porque tienen implicaciones legales muy distintas.

## Por qué no es tan simple como "poner un botón de invertir"

Start UC3M es una **asociación sin ánimo de lucro**. No tiene capital social ni participaciones — no hay nada que "comprar" a cambio de dinero. Cualquier promesa de retorno financiero a cambio de una aportación:

- No es legalmente posible sin cambiar la naturaleza jurídica de quien recibe el dinero (haría falta una sociedad aparte).
- Si se ofrece al público en general a cambio de participación en resultados, cae bajo la regulación de financiación participativa (crowdfunding de inversión), que en España requiere una plataforma autorizada por la CNMV. Ni la asociación ni esta web pueden operar eso directamente.

## Carril A — Mecenazgo (ejecutable ya)

Lo que se ha desarrollado en `content/apoya.md` esta sesión:

- Donaciones de alumni y comunidad, con contrapartidas no financieras (mención, merch, acceso a eventos).
- Legal para una asociación sin trámite especial más allá de: (a) transparencia sobre el destino de los fondos, (b) si se quieren emitir certificados de donación, revisar con Legal si Start está dada de alta para ello.
- Genera dinero en semanas, no meses.
- Necesita del CMS (#8): colección de "mecenas" y, más adelante, integración de pago (Stripe, Bizum, o una plataforma externa tipo Goteo).

**Siguiente paso técnico**: decidir la pasarela de cobro antes de poder implementar el CTA real de `/apoya`. No es parte de esta sesión.

## Carril B — Capital real / equity (no resuelto aquí, decisión de junta)

Si el objetivo de fondo es que Start reciba capital de inversores a cambio de algo (participación en un futuro vehículo, derechos sobre iniciativas que salgan de Start, lo que sea), eso exige:

1. Constituir una entidad separada de la asociación (una sociedad) que sea la que reciba la inversión.
2. Si se capta de público general y no de inversores cualificados uno a uno, usar una plataforma de financiación participativa autorizada por la CNMV — no se puede montar un formulario propio para esto.
3. Decidir qué se ofrece a cambio: esto ya no es mecenazgo, es una operación societaria y necesita asesoría legal específica, no copy de marketing.

**Esto no se decide en una sesión de contenido.** Se deja como decisión pendiente de junta (ver `docs/decisions.md`). La web se construye para que, si algún día existe ese vehículo, haya un sitio natural donde enlazarlo — pero hoy no se publica ninguna promesa de retorno.

## Recomendación de secuencia

1. Lanzar `/apoya` (mecenazgo) ya — es lo único legal y ejecutable hoy, y ya cubre la necesidad real de financiación de eventos.
2. Si la junta decide ir a por capital real más adelante, ese es un proyecto propio (legal + producto), no una sección de la web de contenido.
