import type { APIRoute } from 'astro';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { SUBMISSIONS_FILE } from '../../lib/submissions';
import { logConfirmationEmail } from '../../lib/mail';

export const prerender = false;

// Guarda cada envío en data/submissions.json (local, sin servicios externos).
const FILE = SUBMISSIONS_FILE;
const ALLOWED = new Set(['unete', 'evento', 'patrocinio', 'contacto', 'newsletter']);

export const POST: APIRoute = async ({ request }) => {
  const fd = await request.formData();
  const form = String(fd.get('form') ?? '');
  if (!ALLOWED.has(form)) return json({ error: 'Formulario desconocido' }, 400);
  if (fd.get('website')) return json({ ok: true }); // honeypot: fingimos éxito
  const data: Record<string, string> = {};
  for (const [k, v] of fd.entries()) if (k !== 'website' && typeof v === 'string') data[k] = v.trim();
  const email = data.email ?? '';
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return json({ error: 'Email no válido' }, 400);

  await mkdir(new URL('./', FILE), { recursive: true });
  const list = await readFile(FILE, 'utf8').then(JSON.parse).catch(() => []);
  list.push({ id: crypto.randomUUID(), form, at: new Date().toISOString(), data });
  await writeFile(FILE, JSON.stringify(list, null, 2));
  logConfirmationEmail(email, form, data);
  return json({ ok: true });
};

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });
