<template>
  <nav
    class="r-navbar"
    :class="{
      'r-navbar--hidden': isHidden,
      'r-navbar--scrolled': isScrolled,
    }"
  >
    <div class="r-navbar__container">
      <span class="r-navbar__dot r-navbar__dot--left" />
      <span class="r-navbar__dot r-navbar__dot--right" />

      <!-- brand: logo / identidade -->
      <div class="r-navbar__brand">
        <slot name="brand">
          <a href="/" class="r-navbar__logo">
            <NuxtImg
              src="/images/logo-rumo.png"
              alt="Rumo"
              width="140"
              height="37"
            />
          </a>
        </slot>
      </div>

      <!-- start: navegação principal -->
      <div class="r-navbar__start">
        <slot name="start">
          <ul class="r-navbar__nav">
            <li><a href="#o-rumo" class="r-navbar__link">O Rumo</a></li>
            <li><a href="#funcionalidades" class="r-navbar__link">Funcionalidades</a></li>
            <li><a href="#performance" class="r-navbar__link">Performance</a></li>
            <li><a href="#depoimentos" class="r-navbar__link">Depoimentos</a></li>
            <li><a href="#planos" class="r-navbar__link">Ver Planos</a></li>
          </ul>
        </slot>
      </div>

      <!-- end: ação principal -->
      <div class="r-navbar__end">
        <slot name="end">
          <Button variant="cta">
            Solicitar demonstração
          </Button>
        </slot>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isHidden = ref(false)
const isScrolled = ref(false)
let lastScrollY = 0

function onScroll() {
  const currentScrollY = window.scrollY
  const delta = currentScrollY - lastScrollY

  if (Math.abs(delta) > 10) {
    isHidden.value = delta > 0 && currentScrollY > 80
    lastScrollY = currentScrollY
  }

  isScrolled.value = currentScrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
@reference "~/assets/css/main.css";

.r-navbar {
  @apply fixed top-0 left-0 right-0 z-50
         w-full flex items-center justify-center
         bg-page-bg border-b border-page-border
         transition-transform duration-300 ease-in-out;
}

.r-navbar--hidden {
  @apply -translate-y-full;
}

.r-navbar--scrolled {
  @apply bg-page-bg/80 backdrop-blur-md border-page-border/60;
}

.r-navbar__container {
  @apply relative flex flex-1 items-center justify-between
         max-w-[1216px] px-8 py-6
         border-l border-r border-page-border;
}

.r-navbar__dot {
  @apply absolute bottom-[-3px] size-[5px] bg-text-subtle;
}

.r-navbar__dot--left  { @apply left-[-3px]; }
.r-navbar__dot--right { @apply right-[-3px]; }

.r-navbar__brand {
  @apply shrink-0;
}

.r-navbar__logo {
  @apply block h-[37px] w-[139.895px];
}

.r-navbar__start {
  @apply flex-1 flex items-center justify-center;
}

.r-navbar__nav {
  @apply flex items-center gap-4 list-none m-0 p-0;
}

.r-navbar__link {
  @apply font-sans font-normal text-[12px] text-text-muted
         tracking-[0.12px] leading-[1.15] whitespace-nowrap
         no-underline transition-colors hover:text-text-body;
}

.r-navbar__end {
  @apply shrink-0 flex items-center;
}
</style>
