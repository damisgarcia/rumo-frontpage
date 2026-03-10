<template>
  <section class="s-ecosystem-action">
    <div class="s-ecosystem-action__container">
      <span class="s-ecosystem-action__dot s-ecosystem-action__dot--tl" />
      <span class="s-ecosystem-action__dot s-ecosystem-action__dot--tr" />
      <span class="s-ecosystem-action__dot s-ecosystem-action__dot--bl" />
      <span class="s-ecosystem-action__dot s-ecosystem-action__dot--br" />

      <!-- Top block -->
      <div class="s-ecosystem-action__top">
        <div class="s-ecosystem-action__header">
          <p class="s-ecosystem-action__label">// NOSSO ECOSSISTEMA</p>
          <h2 class="s-ecosystem-action__title">Veja o Rumo em ação</h2>
        </div>

        <div class="s-ecosystem-action__video-frame">
          <div class="s-ecosystem-action__video-inner">
            <NuxtImg
              src="/images/ecosystem-action-video.jpg"
              alt="Rumo em ação"
              width="992"
              height="558"
              class="s-ecosystem-action__video-bg"
            />
            <div class="s-ecosystem-action__play">
              <NuxtImg
                src="/images/ecosystem-action-play.png"
                alt="Play"
                width="104"
                height="104"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom block -->
      <div class="s-ecosystem-action__bottom">
        <p class="s-ecosystem-action__subtitle">
          Do planejamento ao pagamento, tudo conectado.
        </p>

        <div class="s-ecosystem-action__steps">
          <div
            v-for="step in steps"
            :key="step.n"
            class="s-ecosystem-action__step"
          >
            <div class="s-ecosystem-action__step-header">
              <div class="s-ecosystem-action__step-number-row">
                <span class="s-ecosystem-action__step-number">{{ step.n }}</span>
                <span class="s-ecosystem-action__step-line" />
                <span class="s-ecosystem-action__step-dot" />
              </div>
              <h3 class="s-ecosystem-action__step-title">{{ step.title }}</h3>
            </div>
            <p class="s-ecosystem-action__step-body">{{ step.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    n: '//01',
    title: 'A empresa define',
    body: 'Metas, orçamento fixo ou variável e regras de campanha. Tudo pela aplicação, com total controle do gestor.',
  },
  {
    n: '//02',
    title: 'O time executa',
    body: 'Vendas, frequência, consistência. O vendedor acompanha seu progresso em tempo real pelo aplicativo.',
  },
  {
    n: '//03',
    title: 'O sistema converte',
    body: 'Ações viram pontos, engajamento vira métricas, performance vira valor tangível. Tudo automático.',
  },
  {
    n: '//04',
    title: 'O Rumo distribui',
    body: 'Bonificações e reconhecimento de forma auditável, rastreável e previsível. Sem planilha, sem erro.',
  },
]
</script>

<style scoped>
@reference "~/assets/css/main.css";

/* ── Section ─────────────────────────────────────────────── */
.s-ecosystem-action {
  @apply w-full flex items-center justify-center border-t border-page-border;
}

/* ── Container ───────────────────────────────────────────── */
.s-ecosystem-action__container {
  @apply relative flex flex-col flex-1 gap-16 items-center
         max-w-[1216px] px-8 py-20
         border-l border-r border-page-border;
}

/* ── Corner dots ─────────────────────────────────────────── */
.s-ecosystem-action__dot {
  @apply absolute size-[5px] bg-text-subtle;
}
.s-ecosystem-action__dot--tl { @apply left-[-3px] top-[-3px]; }
.s-ecosystem-action__dot--tr { @apply right-[-3px] top-[-3px]; }
.s-ecosystem-action__dot--bl { @apply left-[-3px] bottom-[-2px]; }
.s-ecosystem-action__dot--br { @apply right-[-3px] bottom-[-2px]; }

/* ── Top block ───────────────────────────────────────────── */
.s-ecosystem-action__top {
  @apply flex flex-col gap-12 items-center w-full;
}

/* ── Header ──────────────────────────────────────────────── */
.s-ecosystem-action__header {
  @apply flex flex-col gap-4 items-center w-[456px];
}

.s-ecosystem-action__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-ecosystem-action__title {
  @apply font-tight font-medium text-[30px] text-text-primary
         text-center leading-[1.15] tracking-[0.3px];
}

/* ── Video frame ─────────────────────────────────────────── */
.s-ecosystem-action__video-frame {
  @apply p-2 rounded-[24px] border border-page-border shrink-0;
  background: color-mix(in srgb, var(--color-page-border) 50%, transparent);
}

.s-ecosystem-action__video-inner {
  @apply relative w-[992px] h-[558px] rounded-[16px] overflow-hidden;
}

.s-ecosystem-action__video-bg {
  @apply absolute inset-0 w-full h-full object-cover scale-105;
  filter: blur(2.5px);
}

.s-ecosystem-action__play {
  @apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[104px];
}

/* ── Bottom block ────────────────────────────────────────── */
.s-ecosystem-action__bottom {
  @apply flex flex-col gap-16 items-center w-full;
}

/* ── Subtitle ────────────────────────────────────────────── */
.s-ecosystem-action__subtitle {
  @apply font-mono font-normal text-base text-text-muted
         tracking-[0.16px] uppercase text-center;
}

/* ── Steps grid ──────────────────────────────────────────── */
.s-ecosystem-action__steps {
  @apply flex gap-8 items-start w-full;
}

.s-ecosystem-action__step {
  @apply flex flex-col gap-8 flex-1 max-w-[320px];
}

.s-ecosystem-action__step-header {
  @apply flex flex-col gap-[10px];
}

.s-ecosystem-action__step-number-row {
  @apply flex items-center gap-[10px] w-full;
}

.s-ecosystem-action__step-number {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-ecosystem-action__step-line {
  @apply flex-1 h-px bg-page-border;
}

.s-ecosystem-action__step-dot {
  @apply size-[5px] shrink-0 bg-page-border;
}

.s-ecosystem-action__step-title {
  @apply font-tight font-medium text-2xl text-text-primary
         leading-[1.15] tracking-[0.24px];
}

.s-ecosystem-action__step-body {
  @apply font-sans font-normal text-sm text-text-body leading-[1.4];
}
</style>
