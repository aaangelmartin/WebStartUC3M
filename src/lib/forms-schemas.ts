import { z } from 'zod';

// Un esquema por formulario, reflejando los campos que ya envían las páginas (ver <Form name="…">).
const email = z.string().trim().min(1, 'Falta el email').email('Email no válido');
const required = (msg: string) => z.string().trim().min(1, msg);
const optional = z.string().trim().optional();

export const formSchemas = {
  unete: z.object({
    nombre: required('Falta el nombre'),
    email,
    grado: required('Falta el grado y curso'),
    departamento: optional,
    linkedin: optional,
    motivo: required('Cuéntanos por qué quieres entrar en Start'),
  }),
  evento: z.object({
    nombre: required('Falta el nombre'),
    email,
    grado: required('Falta el grado y curso'),
    equipo: optional,
    evento: required('Falta el evento'),
    slug: required('Falta el evento'),
    tipo: optional,
  }),
  patrocinio: z.object({
    empresa: required('Falta el nombre de la empresa'),
    nombre: required('Falta la persona de contacto'),
    email,
    interes: optional,
    mensaje: optional,
  }),
  contacto: z.object({
    nombre: required('Falta el nombre'),
    email,
    asunto: required('Falta el asunto'),
    mensaje: required('Falta el mensaje'),
  }),
  newsletter: z.object({ email }),
} as const;

export type FormName = keyof typeof formSchemas;
