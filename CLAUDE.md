# CLAUDE.md — rumo.com.br frontpage

Leia este arquivo inteiro antes de qualquer ação. Ele define o contexto do projeto, o stack atual e as regras de workflow.

---

## Sobre o Projeto

Site institucional/frontpage da **rumo.com.br**, construído com Nuxt 4. Usa `@nuxt/content` para gerenciar o conteúdo via Markdown.

---

## Stack Atual

| Camada | Tecnologia |
|---|---|
| Framework | Nuxt 4 (`nuxt ^4.3.1`) |
| Conteúdo | `@nuxt/content ^3.12.0` |
| Fontes | `@nuxt/fonts 0.14.0` |
| Ícones | `@nuxt/icon 2.2.1` |
| Estilos | `@nuxtjs/tailwindcss` (Tailwind v3) — *instalação pendente* |
| State | `@pinia/nuxt` — *instalação pendente* |
| Scripts | `@nuxt/scripts` — *instalação pendente* |
| DB | `better-sqlite3 ^12.6.2` |
| Package manager | **bun** (sempre use bun, nunca npm ou yarn) |

> Os módulos marcados como "instalação pendente" foram planejados em `docs/plans/2026-03-07-basic-modules-setup.md` e ainda não foram executados.

---

## Estrutura do Projeto

```
frontpage/
├── app/
│   ├── app.vue               # Entry point — <NuxtRouteAnnouncer> + <NuxtPage>
│   ├── pages/
│   │   └── [...slug].vue     # Rota catch-all para conteúdo Markdown
│   └── components/
│       ├── Alert.vue
│       └── Counter.vue
├── content/
│   ├── index.md              # Página inicial
│   └── about.md              # Página sobre
├── content.config.ts         # Coleção de conteúdo (type: page, source: **)
├── nuxt.config.ts            # Configuração principal do Nuxt
├── tailwind.config.ts        # (a criar) Configuração do Tailwind
├── assets/css/main.css       # (a criar) Diretivas Tailwind
├── docs/plans/               # Planos de implementação
└── CLAUDE.md                 # Este arquivo
```

---

## Regras de Workflow

1. **Sempre use `bun`** — `bun add`, `bun run dev`, nunca `npm` ou `yarn`
2. **Dev server roda na porta 8000** — `http://localhost:8000`
2. **Nunca commite sem perguntar** — proponha o commit, aguarde aprovação
3. **Nunca faça push sem perguntar explicitamente**
4. **Brainstorm antes de implementar** — use `superpowers:brainstorming` para qualquer feature nova
5. **Plano antes de código** — use `superpowers:writing-plans` após o brainstorm
6. **Atualize este arquivo** ao final de cada sessão ou tarefa concluída para refletir o estado real do projeto

---

## Convenções de Código

- TypeScript em todos os arquivos de configuração
- Componentes Vue em `app/components/`
- Páginas em `app/pages/`
- Conteúdo Markdown em `content/`
- Planos de implementação em `docs/plans/YYYY-MM-DD-<feature>.md`

---

## Histórico de Decisões

| Data | Decisão |
|---|---|
| 2026-03-07 | Escolhido `@nuxtjs/tailwindcss` (Tailwind v3) em vez de Tailwind v4 direto |
| 2026-03-07 | `@pinia/nuxt` para state management (auto-imports habilitados) |
| 2026-03-07 | `@nuxt/scripts` para gerenciamento de scripts de terceiros |
