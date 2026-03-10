<template>
  <section class="s-managers">
    <div class="s-managers__container">

      <!-- Coluna esquerda -->
      <div class="s-managers__left">
        <div class="s-managers__header">
          <p class="s-managers__label">// PERFORMANCE PARA GESTORES</p>
          <h2 class="s-managers__title">Da estratégia à execução em minutos</h2>
          <p class="s-managers__description">
            Descubra como transformar suas metas comerciais em ações práticas
            sem a burocracia de planilhas ou a dependência de suporte técnico.
          </p>
        </div>

        <Accordion
          type="single"
          default-value="item-1"
          class="s-managers__accordion"
        >
          <AccordionItem
            v-for="item in accordionItems"
            :key="item.value"
            :value="item.value"
            class="s-managers__accordion-item"
          >
            <AccordionTrigger class="s-managers__accordion-trigger">
              <span>{{ item.title }}</span>
              <template #icon>
                <IconChevronDown class="s-managers__accordion-icon" />
              </template>
            </AccordionTrigger>
            <AccordionContent class="s-managers__accordion-content">
              <span v-if="item.body">{{ item.body }}</span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <!-- Coluna direita -->
      <div class="s-managers__right">
        <div class="s-managers__panel-wrapper">
          <span class="s-managers__dot s-managers__dot--tl" />
          <span class="s-managers__dot s-managers__dot--tr" />
          <span class="s-managers__dot s-managers__dot--bl" />
          <span class="s-managers__dot s-managers__dot--br" />

          <div class="s-managers__panel-border">
            <div class="s-managers__card">
              <div class="s-managers__card-topbar">
                <NuxtImg
                  src="/images/managers-rumo-logo.png"
                  alt="Rumo"
                  width="91"
                  height="24"
                  class="s-managers__card-logo"
                />
                <span class="s-managers__card-badge">ADMIN</span>
              </div>
              <div class="s-managers__card-separator" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Gestão por campanhas',
    body: 'Através do painel, o gestor detém autonomia total para definir o objetivo e o período da campanha, estabelecer o orçamento (seja ele de valor fixo ou variável), selecionar as equipes, regras e métricas específicas de performance.',
  },
  {
    value: 'item-2',
    title: 'Controle total em tempo real',
    body: null,
  },
]
</script>

<style scoped>
@reference "~/assets/css/main.css";

.s-managers {
  @apply w-full flex flex-col items-center bg-gray-1 border-t border-b border-gray-6;
}

.s-managers__container {
  @apply flex items-center w-full max-w-[1216px] py-20 overflow-hidden border-l border-r border-gray-6;
}

.s-managers__left {
  @apply flex flex-col gap-20 w-[608px] shrink-0 border-t border-b border-gray-6;
}

.s-managers__header {
  @apply flex flex-col gap-4 p-8;
}

.s-managers__label {
  @apply font-mono font-normal text-xs text-primary tracking-[0.12px] whitespace-nowrap;
}

.s-managers__title {
  @apply font-tight font-medium text-[30px] text-gray-12 leading-[1.15] tracking-[0.3px];
}

.s-managers__description {
  @apply font-sans font-normal text-sm text-gray-11 leading-[1.4];
}

.s-managers__accordion {
  @apply flex flex-col w-full;
}

.s-managers__accordion-item {
  @apply border-t border-b border-gray-6 rounded-none;
}

:deep(.s-managers__accordion-item[data-state="open"]) {
  @apply border-primary;
}

.s-managers__accordion-trigger {
  @apply flex items-center justify-between gap-[10px] w-full px-6 py-8
         font-tight font-medium text-[20px] tracking-[0.2px]
         text-gray-11 leading-[1.15] text-left no-underline hover:no-underline;
}

:deep(.s-managers__accordion-item[data-state="open"]) .s-managers__accordion-trigger {
  @apply text-gray-12;
}

.s-managers__accordion-icon {
  @apply size-6 shrink-0 text-gray-11 transition-transform duration-200;
}

:deep(.s-managers__accordion-item[data-state="open"]) .s-managers__accordion-icon {
  @apply rotate-180 text-gray-12;
}

.s-managers__accordion-content {
  @apply font-sans font-normal text-sm text-gray-11 leading-[1.4] px-6 pb-8;
}

.s-managers__right {
  @apply flex flex-1 flex-row items-center self-stretch;
}

.s-managers__panel-wrapper {
  @apply relative flex flex-1 h-full bg-gray-1;
}

.s-managers__panel-border {
  @apply relative flex flex-1 flex-col h-full overflow-hidden border border-gray-6;
}

.s-managers__dot {
  @apply absolute size-[5px] bg-gray-8 z-10;
}
.s-managers__dot--tl { @apply left-[-3px] top-[-3px]; }
.s-managers__dot--tr { @apply right-[-3px] top-[-3px]; }
.s-managers__dot--bl { @apply left-[-3px] bottom-[-3px]; }
.s-managers__dot--br { @apply right-[-3px] bottom-[-3px]; }

.s-managers__card {
  @apply absolute bottom-0 left-16 h-[460px] w-[544px] bg-white rounded-tl-[24px] border border-gray-6;
  box-shadow: -10px -10px 50px 0px rgba(0, 0, 0, 0.03);
}

.s-managers__card-topbar {
  @apply absolute flex items-center gap-3 top-[17px] left-8;
}

.s-managers__card-logo {
  @apply h-6;
}

.s-managers__card-badge {
  @apply bg-gray-4 text-gray-11 font-mono font-bold text-xs tracking-[0.48px] leading-[1.15] px-[6px] pt-[6px] pb-[5px] rounded-full;
}

.s-managers__card-separator {
  @apply absolute w-full h-px bg-gray-6 top-[57px];
}
</style>
