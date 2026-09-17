// Ruta compartida al almacén local de envíos de formularios (usado por api/forms.ts y por las
// rutas que necesitan leer envíos ya guardados, como el conteo de plazas de un evento).
export const SUBMISSIONS_FILE = new URL('../../data/submissions.json', import.meta.url);

export async function readSubmissions(): Promise<{ id: string; form: string; at: string; data: Record<string, string> }[]> {
  const { readFile } = await import('node:fs/promises');
  return readFile(SUBMISSIONS_FILE, 'utf8').then(JSON.parse).catch(() => []);
}
