<template>
  <section id="depoimentos" class="s-testimonials">
    <div class="s-testimonials__container">

      <!-- Left Panel -->
      <div class="s-testimonials__left">
        <div class="s-testimonials__heading">
          <p class="s-testimonials__label">// DEPOIMENTOS</p>
          <h2 class="s-testimonials__title">Quem usa não volta para as planilhas</h2>
        </div>

        <div class="s-testimonials__bottom">
          <!-- Navigation -->
          <div class="s-testimonials__nav">
            <div class="s-testimonials__nav-btns">
              <button class="s-testimonials__nav-btn" aria-label="Depoimento anterior" @click="prev">
                <IconArrowRight class="s-testimonials__nav-icon s-testimonials__nav-icon--prev" />
              </button>
              <button class="s-testimonials__nav-btn" aria-label="Próximo depoimento" @click="next">
                <IconArrowRight class="s-testimonials__nav-icon" />
              </button>
            </div>
            <span class="s-testimonials__counter">// {{ String(current + 1).padStart(2, '0') }} / {{ String(testimonials.length).padStart(2, '0') }}</span>
          </div>

          <!-- Quote excerpt -->
          <div class="s-testimonials__excerpt">
            <p class="s-testimonials__excerpt-text">{{ testimonials[current].excerpt }}</p>
          </div>
        </div>
      </div>

      <!-- Right Panel: Testimonial Card -->
      <div class="s-testimonials__card">
        <div class="s-testimonials__card-body">
          <p class="s-testimonials__card-quote">{{ testimonials[current].quote }}</p>
          <NuxtImg
            :src="testimonials[current].logo"
            :alt="testimonials[current].company"
            width="172"
            height="32"
            class="s-testimonials__card-logo"
          />
        </div>
        <div class="s-testimonials__card-stats">
          <div
            v-for="(stat, i) in testimonials[current].stats"
            :key="i"
            class="s-testimonials__stat"
            :class="{ 's-testimonials__stat--bordered': i < testimonials[current].stats.length - 1 }"
          >
            <p class="s-testimonials__stat-value">{{ stat.value }}</p>
            <p class="s-testimonials__stat-label">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <!-- Decorative quote mark -->
      <div class="s-testimonials__deco" aria-hidden="true">
        <NuxtImg src="/images/testimonials-quote-deco.svg" alt="" width="108" height="87" />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: 'Tínhamos um volume alto de bônus sendo pagos, mas sem correlação clara com resultado. Com o Rumo, finalmente conseguimos ver o que estava gerando retorno e o que era só custo disfarçado.',
    excerpt: 'Lorem ipsum dolor sit amet consectetur. Nunc lacus at mauris in maecenas augue interdum. Aliquam quis cras.',
    logo: '/images/testimonials-logo.svg',
    company: 'Logoipsum',
    stats: [
      { value: '-27%', label: 'Custo de incentivo' },
      { value: '+18%', label: 'Produtividade da equipe' },
    ],
  },
  {
    quote: 'O Rumo transformou a forma como gerenciamos campanhas de incentivo. Agora temos visibilidade total do que funciona e podemos agir rápido quando algo não performa.',
    excerpt: 'Sem clareza sobre o impacto dos incentivos, era difícil justificar os investimentos para o board.',
    logo: '/images/testimonials-logo.svg',
    company: 'Logoipsum',
    stats: [
      { value: '+32%', label: 'Conversão de campanhas' },
      { value: '-15%', label: 'Custo por venda' },
    ],
  },
  {
    quote: 'A plataforma nos deu governança real sobre o time comercial. Cada vendedor sabe exatamente o que precisa fazer para bater a meta antes do fim do mês.',
    excerpt: 'A falta de visibilidade em tempo real nos forçava a tomar decisões no escuro.',
    logo: '/images/testimonials-logo.svg',
    company: 'Logoipsum',
    stats: [
      { value: '+41%', label: 'Engajamento do time' },
      { value: '+23%', label: 'Meta alcançada' },
    ],
  },
  {
    quote: 'Integramos o Rumo com nosso ERP em menos de uma semana. Os relatórios em tempo real mudaram completamente nossa dinâmica de reuniões de performance.',
    excerpt: 'A integração com sistemas legados era nosso maior receio antes de contratar.',
    logo: '/images/testimonials-logo.svg',
    company: 'Logoipsum',
    stats: [
      { value: '-60%', label: 'Tempo em relatórios' },
      { value: '+19%', label: 'Produtividade geral' },
    ],
  },
]

const current = ref(0)

function prev() {
  current.value = (current.value - 1 + testimonials.length) % testimonials.length
}

function next() {
  current.value = (current.value + 1) % testimonials.length
}
</script>

<style scoped>
@reference "~/assets/css/main.css";

/* ── Section ─────────────────────────────────────────────── */
.s-testimonials {
  @apply w-full flex items-center justify-center
         bg-page-bg border-t border-b border-page-border;
}

/* ── Container ───────────────────────────────────────────── */
.s-testimonials__container {
  @apply relative flex items-start justify-between
         max-w-[1216px] w-full py-20;
}

/* ── Left Panel ──────────────────────────────────────────── */
.s-testimonials__left {
  @apply flex flex-col items-start justify-between self-stretch shrink-0 w-[384px];
}

.s-testimonials__heading {
  @apply flex flex-col gap-4 w-full;
}

.s-testimonials__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-testimonials__title {
  @apply font-tight font-medium text-[36px] text-text-primary
         leading-[1.15] tracking-[0.36px];
}

/* ── Bottom controls ─────────────────────────────────────── */
.s-testimonials__bottom {
  @apply flex flex-col gap-8 items-start w-full;
}

.s-testimonials__nav {
  @apply flex gap-6 items-center;
}

.s-testimonials__nav-btns {
  @apply flex gap-[10px] items-center;
}

.s-testimonials__nav-btn {
  @apply flex items-center justify-center p-[10px]
         bg-primary border-t border-l border-r border-primary-border
         rounded-full shadow-[var(--shadow-primary-glow)]
         cursor-pointer transition-colors;
}

.s-testimonials__nav-btn:hover {
  @apply bg-primary-dark;
}

.s-testimonials__nav-icon {
  @apply w-6 h-6 text-text-primary;
}

.s-testimonials__nav-icon--prev {
  @apply rotate-180;
}

.s-testimonials__counter {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap leading-[1.15];
}

/* ── Quote excerpt ───────────────────────────────────────── */
.s-testimonials__excerpt {
  @apply flex items-center justify-center py-6 w-full
         border-t border-b border-text-subtle;
}

.s-testimonials__excerpt-text {
  @apply font-sans font-normal text-sm text-text-body leading-[1.4];
}

/* ── Card ────────────────────────────────────────────────── */
.s-testimonials__card {
  @apply flex flex-col gap-10 items-start
         bg-page-bg border border-page-border rounded-[8px]
         p-10 shrink-0 w-[696px] h-[428px];
}

/* ── Card Body ───────────────────────────────────────────── */
.s-testimonials__card-body {
  @apply flex flex-col items-start justify-between flex-1 min-h-0 w-full;
}

.s-testimonials__card-quote {
  @apply font-tight font-medium text-2xl text-text-primary
         leading-[1.3] tracking-[0.24px];
}

.s-testimonials__card-logo {
  @apply block shrink-0;
}

/* ── Card Stats ──────────────────────────────────────────── */
.s-testimonials__card-stats {
  @apply flex gap-10 items-start pt-6 pr-10 w-full
         border-t border-page-border shrink-0;
}

.s-testimonials__stat {
  @apply flex flex-col items-start justify-between h-20;
}

.s-testimonials__stat--bordered {
  @apply border-r border-page-border pr-10 w-[216px] shrink-0;
}

.s-testimonials__stat-value {
  @apply font-tight font-medium text-[32px] text-primary-light
         leading-[1.2] tracking-[0.32px] w-full;
}

.s-testimonials__stat-label {
  @apply font-mono font-normal text-base text-text-primary
         leading-[1.15] tracking-[0.16px] w-full;
}

/* ── Decorative quote mark ───────────────────────────────── */
.s-testimonials__deco {
  @apply absolute right-0 bottom-[88px] pointer-events-none;
}
</style>
