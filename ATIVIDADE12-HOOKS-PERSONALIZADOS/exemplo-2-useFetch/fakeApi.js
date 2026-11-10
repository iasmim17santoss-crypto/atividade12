const usuarios = [
  { id: 1, nome: 'Ana', email: 'ana@email.com' },
  { id: 2, nome: 'Bruno', email: 'bruno@email.com' },
  { id: 3, nome: 'Carla', email: 'carla@email.com' },
  { id: 4, nome: 'Diego', email: 'diego@email.com' },
  { id: 5, nome: 'Elisa', email: 'elisa@email.com' },
];
const posts = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1, titulo: `Post número ${i + 1}`, texto: 'Conteúdo de exemplo do post.',
}));
export function fakeFetch(url, { atraso = 800, falhar = false } = {}) {
  return new Promise(resolve => {
    setTimeout(() => {
      const dados = falhar ? undefined : url === '/usuarios' ? usuarios : url === '/posts' ? posts : undefined;
      const status = falhar ? 500 : dados === undefined ? 404 : 200;
      resolve({ ok: status === 200, status, json: async () => JSON.parse(JSON.stringify(dados ?? null)) });
    }, atraso);
  });
}
