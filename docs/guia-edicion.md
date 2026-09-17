# Guía de edición — para la junta de Start

Esta guía asume que ya has hecho `npm install` una vez (ver `README.md` → "Arrancar"). No hace falta saber programar para lo de aquí abajo: son archivos de texto (markdown) o listas dentro de un archivo de configuración.

## Publicar un post de blog

1. Crea un archivo nuevo en `src/content/blog/`, con nombre corto y sin espacios: `mi-post.md`.
2. Arriba del todo, entre `---`, pon estos datos (cópialos de cualquier post que ya exista, como `src/content/blog/asi-fue-el-buildathon.md`):

```markdown
---
title: "Título del post"
excerpt: "Una frase que resume el post, aparece en el listado."
date: 2026-10-05
category: Eventos
---
```

- `category` solo puede ser una de estas cuatro: `Eventos`, `Comunidad`, `Recursos`, `Prensa`. Si pones otra, la web no compila.
- Debajo de los `---`, escribe el post en markdown normal: `## Subtítulo`, párrafos normales, `[texto del enlace](/unete)` para enlaces.
3. Guarda, haz commit y push (o pide a alguien de IT que lo suba). El post aparece solo en `/blog`.
4. Antes de publicar, revisa el tono contra `docs/tono.md` — sin autoelogio, sin jerga, con al menos un dato concreto.

## Crear un evento

1. Archivo nuevo en `src/content/eventos/mi-evento.md`. Copia el frontmatter de un evento existente (`src/content/eventos/buildathon-pitchless-nomulabs.md`) — tiene más campos que un post (fecha, hora, lugar, agenda, plazas).
2. Pon `status: abierto` para que aparezca el formulario de inscripción, o `status: sold-out` / `status: pasado` cuando corresponda.
3. Si el evento tiene aforo limitado, rellena `seats` con el número de plazas — el sitio controla las inscripciones automáticamente.

## Cambiar el equipo

Todo el equipo vive en un solo sitio: `src/lib/site.ts`, en las listas `departments` y `team`. Para añadir o quitar a alguien, edita directamente esa lista siguiendo el mismo formato que las entradas de al lado (nombre, foto, cargo, departamento, LinkedIn). Las fotos van en `public/media/equipo/`.

## Subir un patrocinador

En `src/lib/site.ts`, lista `sponsors`: añade `{ name: 'Nombre', logo: '/logos/archivo.png', tier: 'Partner' }` (o `'Evento'` / `'Colaborador'` según el tipo de patrocinio — ver `docs/decisions.md` para qué significa cada uno). El logo va en `public/logos/`.

## Exportar inscripciones

Los envíos de todos los formularios (inscripción a Start, a eventos, patrocinio, contacto, newsletter) se guardan en `data/submissions.json` en el servidor donde corra la web. Pide a IT que te pase ese archivo o que monte una exportación a Excel/CSV si hace falta hacerlo a menudo — hoy es un archivo de texto plano, no hay panel visual todavía.

## Reglas antes de publicar cualquier texto

- Tono de voz completo: `docs/tono.md`.
- Nunca prometer a un patrocinador acceso a CVs o datos de estudiantes — ver `docs/decisions.md`, es una decisión tomada, no una opción de redacción.
- Nunca hablar de "inversión" o "retorno" en relación a dar dinero a Start — Start es una asociación sin ánimo de lucro. Ver `docs/decisions.md`.
- Cifras: si no estás seguro/a de un dato, pregunta antes de publicarlo. Es peor una cifra falsa en el media kit de patrocinadores que un hueco.

## Qué falta para que esta guía sea completa

- Capturas de pantalla del proceso (esta guía no las tiene: hoy no hay panel visual, es edición de archivos — cuando exista un panel de verdad, esta guía se actualiza con capturas).
- Validar con alguien de Comunicación que, siguiendo solo esta guía, consigue publicar un post sin ayuda — es la prueba de que la guía funciona (issue #22).
