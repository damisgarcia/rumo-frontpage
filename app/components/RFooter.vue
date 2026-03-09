<template>
  <footer class="r-footer">
    <div class="r-footer__container">
      <span class="r-footer__dot r-footer__dot--left" />
      <span class="r-footer__dot r-footer__dot--right" />

      <a href="/" class="r-footer__logo">
        <NuxtImg
          src="/images/logo-rumo.png"
          alt="Rumo"
          width="140"
          height="37"
        />
      </a>

      <p class="r-footer__copy">Direitos reservados</p>
    </div>
  </footer>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.r-footer {
  @apply w-full flex items-center justify-center
         bg-page-bg border-t border-page-border;
}

.r-footer__container {
  @apply relative flex flex-1 items-center justify-between
         max-w-[1216px] px-8 py-6
         border-l border-r border-page-border;
}

.r-footer__dot {
  @apply absolute top-[-3px] size-[5px] bg-text-subtle;
}

.r-footer__dot--left  { @apply left-[-3px]; }
.r-footer__dot--right { @apply right-[-3px]; }

.r-footer__logo {
  @apply block h-[37px] w-[139.895px];
}

.r-footer__copy {
  @apply font-sans font-normal text-[16px] text-gray-6
         leading-[24px] whitespace-nowrap;
}
</style>
