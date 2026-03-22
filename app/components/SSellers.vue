<template>
  <section class="s-sellers">
    <div class="s-sellers__container">

      <!-- Header -->
      <div class="s-sellers__header">
        <div class="s-sellers__header-text">
          <p class="s-sellers__label">// PERFORMANCE PARA VENDEDORES</p>
          <h2 class="s-sellers__title">
            Tudo que seu time precisa para performar nas vendas
          </h2>
        </div>
        <div class="s-sellers__header-deco">
          <span class="s-sellers__deco-line" />
          <span class="s-sellers__deco-line" />
          <span class="s-sellers__deco-line" />
        </div>
      </div>

      <!-- Grid -->
      <div class="s-sellers__grid">

        <!-- Cards 1–6: padrão -->
        <div
          v-for="card in standardCards"
          :key="card.slug"
          class="s-sellers__card"
        >
          <div class="s-sellers__card-text">
            <span class="s-sellers__card-accent" />
            <h3 class="s-sellers__card-title">{{ card.title }}</h3>
            <p class="s-sellers__card-body">{{ card.body }}</p>
          </div>
          <div v-if="card.hasImage" class="s-sellers__card-image">
            <NuxtImg
              :src="`/images/sellers-card-${card.slug}.png`"
              :alt="card.title"
              width="384"
              height="240"
              class="s-sellers__card-img"
            />
          </div>
        </div>

        <!-- Card 7: largo (col-span-2) -->
        <div class="s-sellers__card s-sellers__card--wide">
          <div class="s-sellers__card-text">
            <span class="s-sellers__card-accent" />
            <h3 class="s-sellers__card-title">{{ wideCard.title }}</h3>
            <p class="s-sellers__card-body">{{ wideCard.body }}</p>
          </div>
          <div class="s-sellers__card-image s-sellers__card-image--wide">
            <NuxtImg
              :src="`/images/sellers-card-${wideCard.slug}.png`"
              :alt="wideCard.title"
              width="384"
              height="240"
              class="s-sellers__card-img"
            />
          </div>
        </div>

        <!-- Célula vazia (3ª coluna, última linha) -->
        <div class="s-sellers__empty" aria-hidden="true" />

      </div>

      <!-- Dots decorativos do grid -->
      <span class="s-sellers__dot s-sellers__dot--bl" />
      <span class="s-sellers__dot s-sellers__dot--br" />

    </div>
  </section>
</template>

<script setup lang="ts">
const standardCards = [
  {
    slug: 'ranking',
    title: 'Ranking Competitivo',
    body: 'Visibilidade do desempenho para estimular competitividade saudável e senso de urgência. Todos sabem quem lidera, quem está atrás e quem precisa reagir agora.',
    hasImage: true,
  },
  {
    slug: 'meta',
    title: 'Meta Individual',
    body: 'Acompanhamento em tempo real do progresso e gaps. Sem ambiguidade ou desculpas: o vendedor sabe exatamente o que falta para bater a meta antes do fim do mês.',
    hasImage: true,
  },
  {
    slug: 'ofensiva',
    title: 'Ofensiva Semanal',
    body: 'Micro-metas semanais que criam ritmo e constância comercial. O time age no presente, garantindo presença diária sem esperar o fechamento do mês para reagir.',
    hasImage: true,
  },
  {
    slug: 'conteudo',
    title: 'Conteúdo dinâmico (CMS)',
    body: 'Centralize a comunicação estratégica. Distribua informações de produtos, treinamentos e atualizações comerciais para quem precisa vender melhor, no momento certo.',
    hasImage: true,
  },
  {
    slug: 'notificacoes',
    title: 'Central de Notificações',
    body: 'Alertas de inatividade e estímulos de performance via push. Notificações diretas, sem ruído ou distrações, focadas em manter o ritmo de execução da equipe.',
    hasImage: true,
  },
  {
    slug: 'feed',
    title: 'Feed Social',
    body: 'Reconhecimento público baseado em conquistas reais. Um feed focado em motivação social e performance, onde cada post celebra o alcance de objetivos comerciais.',
    hasImage: true,
  },
]

const wideCard = {
  slug: 'financeiros',
  title: 'Produtos financeiros',
  body: 'Conecte performance a dinheiro com pagamentos automáticos, antecipação e microcrédito. Gestão de premiações integrada, sem planilhas, retrabalho ou risco.',
}
</script>

<style scoped>
@reference "~/assets/css/main.css";

/* ── Section ─────────────────────────────────────────────── */
.s-sellers {
  @apply w-full flex flex-col items-center bg-gray-1 border-t border-page-border;
}

/* ── Container ───────────────────────────────────────────── */
.s-sellers__container {
  @apply relative flex flex-col gap-12 items-start
         w-full max-w-[1216px] pt-20 pb-20;
}

/* ── Header ──────────────────────────────────────────────── */
.s-sellers__header {
  @apply flex items-end justify-between w-full;
}

.s-sellers__header-text {
  @apply flex flex-col gap-4 w-[456px];
}

.s-sellers__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-sellers__title {
  @apply font-tight font-medium text-[30px] text-gray-12
         leading-[1.15] tracking-[0.3px];
}

/* Decoração 3 linhas (canto direito do header) */
.s-sellers__header-deco {
  @apply flex flex-col gap-3 shrink-0;
}

.s-sellers__deco-line {
  @apply block h-[2px] w-[100px] bg-gray-9 rounded-full;
}

/* ── Grid ────────────────────────────────────────────────── */
.s-sellers__grid {
  @apply grid grid-cols-3 gap-8 w-full;
}

/* ── Card base ───────────────────────────────────────────── */
.s-sellers__card {
  @apply flex flex-col bg-gray-3 border border-gray-6
         rounded-[8px] overflow-hidden;
}

/* Card largo: ocupa 2 colunas, layout horizontal */
.s-sellers__card--wide {
  @apply col-span-2 flex-row gap-8;
}

/* ── Célula vazia ────────────────────────────────────────── */
.s-sellers__empty {
  @apply col-span-1;
}

/* ── Card text ───────────────────────────────────────────── */
.s-sellers__card-text {
  @apply flex flex-col gap-6 p-8 shrink-0;
}

.s-sellers__card--wide .s-sellers__card-text {
  @apply w-[384px] self-stretch;
}

.s-sellers__card-accent {
  @apply block h-[2px] w-[40px] bg-primary rounded-full shrink-0;
}

.s-sellers__card-title {
  @apply font-tight font-medium text-2xl text-gray-12
         leading-[1.15] tracking-[0.24px];
}

.s-sellers__card-body {
  @apply font-sans font-normal text-sm text-gray-11 leading-[1.4];
}

/* ── Card image ──────────────────────────────────────────── */
.s-sellers__card-image {
  @apply relative overflow-hidden shrink-0 h-[240px] w-full;
}

/* Gradiente que faz a transição suave entre texto e imagem (conforme Figma) */
.s-sellers__card-image::before {
  content: '';
  @apply absolute top-0 left-0 right-0 z-10 pointer-events-none;
  height: 80px;
  background: linear-gradient(to bottom, var(--color-gray-3), transparent);
}

.s-sellers__card-image--wide {
  @apply w-[384px];
}

.s-sellers__card-img {
  @apply absolute inset-0 w-full h-full object-cover;
}

/* ── Dots decorativos ────────────────────────────────────── */
.s-sellers__dot {
  @apply absolute size-[5px] bg-text-subtle;
}
.s-sellers__dot--bl { @apply bottom-[-2px] left-[-3px]; }
.s-sellers__dot--br { @apply bottom-[-2px] right-[-3px]; }
</style>
