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
| Estilos | Tailwind CSS v4 via `@tailwindcss/vite` |
| Componentes UI | `shadcn-nuxt@2.4.3` — componentes em `app/components/ui/` |
| State | `@pinia/nuxt` — *instalação pendente* |
| Scripts | `@nuxt/scripts` — *instalação pendente* |
| DB | `better-sqlite3 ^12.6.2` |
| Package manager | **bun** (sempre use bun, nunca npm ou yarn) |

---

## Estrutura do Projeto

```
frontpage/
├── app/
│   ├── app.vue                    # Entry point — dark class no <html>
│   ├── assets/css/main.css        # Design tokens + tipografia base
│   ├── lib/utils.ts               # cn() helper (shadcn)
│   ├── pages/
│   │   └── [...slug].vue          # Rota catch-all para conteúdo Markdown
│   └── components/
│       ├── ui/                    # Componentes shadcn (não editar diretamente)
│       │   └── button/            # Button com variante "cta"
│       ├── RNavbar.vue
│       └── RFooter.vue
├── content/
│   ├── index.md                   # Página inicial (composta via MDC)
│   └── about.md
├── content.config.ts
├── nuxt.config.ts                 # Tailwind via vite.plugins + shadcn config
├── components.json                # Configuração do shadcn-vue
├── docs/plans/                    # Planos de implementação
└── CLAUDE.md                      # Este arquivo
```

---

## Regras de Workflow

1. **Sempre use `bun`** — `bun add`, `bun run dev`, nunca `npm` ou `yarn`
2. **Dev server roda na porta 8000** — `http://localhost:8000`
3. **Nunca commite sem perguntar** — proponha o commit, aguarde aprovação
4. **Nunca faça push sem perguntar explicitamente**
5. **Brainstorm antes de implementar** — use `superpowers:brainstorming` para qualquer feature nova
6. **Plano antes de código** — use `superpowers:writing-plans` após o brainstorm
7. **Atualize este arquivo** ao final de cada sessão ou tarefa concluída
8. **Implementação via Figma** — sempre que for implementar um layout ou componente a partir do Figma, use o skill `/figma:implement-design` antes de qualquer ação. Forneça a URL do nó Figma como argumento.

---

## Design Tokens

Todos os tokens estão em `app/assets/css/main.css` dentro do bloco `@theme`.

**Regra absoluta: NUNCA use hexadecimais hardcoded em componentes. Use sempre um token.**

### Escala de Cinza (Figma: Gray/1 → Gray/12)

| Token Tailwind | CSS Var | Hex | Uso |
|---|---|---|---|
| `gray-1` | `--color-gray-1` | `#F2F2F2` | texto mais claro |
| `gray-2` | `--color-gray-2` | `#EDEDED` | |
| `gray-3` | `--color-gray-3` | `#E4E4E4` | |
| `gray-4` | `--color-gray-4` | `#DBDBDB` | |
| `gray-5` | `--color-gray-5` | `#D3D3D3` | |
| `gray-6` | `--color-gray-6` | `#CBCBCB` | |
| `gray-7` | `--color-gray-7` | `#BFBFBF` | texto corpo |
| `gray-8` | `--color-gray-8` | `#ACACAC` | |
| `gray-9` | `--color-gray-9` | `#7D7D7D` | texto muted |
| `gray-10` | `--color-gray-10` | `#737373` | |
| `gray-11` | `--color-gray-11` | `#565656` | decorativo (dots) |
| `gray-12` | `--color-gray-12` | `#111111` | fundo da página |

### Cor Primária (Laranja — Figma: Orange/*)

| Token Tailwind | CSS Var | Hex | Uso |
|---|---|---|---|
| `primary` | `--color-primary` | `#E55A37` | cor principal, botões, CTAs |
| `primary-dark` | `--color-primary-dark` | `#D74C28` | hover / pressed |
| `primary-light` | `--color-primary-light` | `#E57B60` | destaque suave |
| `primary-subtle` | `--color-primary-subtle` | `#F3ECEA` | fundo sutil |
| `primary-border` | `--color-primary-border` | `#EEAF9F` | borda do CTA |
| `primary-shadow` | `--color-primary-shadow` | `#592A1F` | cor do glow |

### Cor de Suporte (Figma: Support/*)

| Token Tailwind | CSS Var | Hex | Uso |
|---|---|---|---|
| `support` | `--color-support` | `#35B177` | sucesso, checkmarks |

### Aliases Semânticos

| Token Tailwind | Aponta para | Uso |
|---|---|---|
| `page-bg` | `gray-12` | fundo da página |
| `page-border` | `#292929` | bordas estruturais |
| `text-primary` | `gray-1` | headings |
| `text-body` | `gray-7` | parágrafos |
| `text-muted` | `gray-9` | texto secundário |
| `text-subtle` | `gray-11` | elementos decorativos |

### Sombras

| CSS Var | Valor | Uso |
|---|---|---|
| `--shadow-primary-glow` | `0px 10px 40px 0px var(--color-primary-shadow)` | glow do CTA |

---

## Convenções de Código

- TypeScript em todos os arquivos de configuração
- Componentes Vue em `app/components/`
- Páginas em `app/pages/`
- Conteúdo Markdown em `content/`
- Planos de implementação em `docs/plans/YYYY-MM-DD-<feature>.md`

### Estilização de Componentes

1. **Verificar shadcn/nuxt primeiro** — antes de criar componente do zero, verifique se existe no `shadcn-nuxt`. Se existir, instale e customize.
   - Ref: https://www.shadcn-vue.com/docs/installation/nuxt
   - Componentes ficam em `app/components/ui/`

2. **Padrão BEM com `@apply`** — nomenclatura BEM, estilos via `@apply` em `<style scoped>`.
   ```css
   /* OBRIGATÓRIO em todo <style scoped>: */
   @reference "~/assets/css/main.css";

   /* BEM: bloco__elemento--modificador */
   .card                { @apply bg-page-bg border border-page-border; }
   .card__title         { @apply font-tight font-semibold text-text-primary; }
   .card__title--hero   { @apply text-4xl; }
   .card__body          { @apply font-sans text-sm text-text-body; }
   ```

3. **Sem hexadecimais hardcoded** — use sempre tokens da tabela acima. Exceção: valores sem equivalente no Figma (use CSS var inline).

4. **shadcn com variantes** — para customizar um componente shadcn, adicione uma variante via `cva` no `index.ts`. Nunca sobrescreva as classes base do shadcn diretamente.

### Imagens e Ícones

**Imagens** (fotos, ilustrações, mockups) — usar sempre `<NuxtImg>`:
```vue
<NuxtImg src="/images/hero-phone-body.png" alt="..." width="280" height="570" />
```
- Assets ficam em `public/images/`
- Sempre informar `width` e `height`
- Nunca usar `<img>` diretamente

**Ícones** — criar componente Vue em `app/components/icons/`:
- Nome do arquivo: PascalCase descritivo, ex: `IconEyeOpen.vue`, `IconArrowRight.vue`
- Copiar o SVG do Figma e colocar no `<template>`
- **Obrigatório:** substituir todas as cores hardcoded (`fill`, `stroke`) por `currentColor`
- O componente herda a cor do pai via CSS `color`

```vue
<!-- app/components/icons/IconEyeOpen.vue -->
<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M..." stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
  </svg>
</template>
```

Uso:
```vue
<!-- cor herdada do contexto -->
<IconEyeOpen class="text-primary" />
<IconEyeOpen class="text-text-muted size-5" />
```

---

## Histórico de Decisões

| Data | Decisão |
|---|---|
| 2026-03-07 | `@pinia/nuxt` para state management (auto-imports habilitados) |
| 2026-03-07 | `@nuxt/scripts` para gerenciamento de scripts de terceiros |
| 2026-03-08 | Tailwind v4 via `@tailwindcss/vite` (descartado `@nuxtjs/tailwindcss`) |
| 2026-03-08 | Dark mode via `class` — `<html class="dark">` estático (site 100% dark) |
| 2026-03-08 | Fontes: Inter (sans), Inter Tight (headings), JetBrains Mono (mono/labels) |
| 2026-03-08 | Padrão BEM + `@apply` para estilização; `@reference` obrigatório em scoped styles |
| 2026-03-08 | `shadcn-nuxt@2.4.3` como biblioteca base de componentes UI |
| 2026-03-08 | `--color-primary` = `#E55A37` (laranja Figma Orange/9) — cor principal do projeto |
| 2026-03-08 | Escala de cinza `gray-1` a `gray-12` baseada nos tokens do Figma |
| 2026-03-08 | Hexadecimais hardcoded proibidos — usar sempre tokens de `app/assets/css/main.css` |
| 2026-03-08 | `@nuxt/image` instalado — usar `<NuxtImg>` para todas as imagens |
| 2026-03-08 | Ícones como componentes Vue em `app/components/icons/` com `currentColor` |
| 2026-03-10 | Skill `/figma:implement-design` obrigatório para toda implementação via Figma MCP |
| 2026-03-10 | Token `--color-support` (#35B177) adicionado — Figma Support/5, usado em checkmarks |
