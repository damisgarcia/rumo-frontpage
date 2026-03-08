<template>
  <nav class="r-navbar">
    <div class="r-navbar__container">
      <span class="r-navbar__dot r-navbar__dot--left" />
      <span class="r-navbar__dot r-navbar__dot--right" />

      <a href="/" class="r-navbar__logo">
        <img
          src="https://www.figma.com/api/mcp/asset/0f7dc73c-a553-476e-8dba-47251e5c93af"
          alt="Rumo"
          width="140"
          height="37"
        />
      </a>

      <div class="r-navbar__actions">
        <ul class="r-navbar__nav">
          <li><a href="#o-rumo" class="r-navbar__link">O Rumo</a></li>
          <li><a href="#funcionalidades" class="r-navbar__link">Funcionalidades</a></li>
          <li><a href="#performance" class="r-navbar__link">Performance</a></li>
          <li><a href="#depoimentos" class="r-navbar__link">Depoimentos</a></li>
          <li><a href="#planos" class="r-navbar__link">Ver Planos</a></li>
        </ul>

        <Button variant="cta">
          Solicitar demonstração
        </Button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.r-navbar {
  @apply w-full flex items-center justify-center bg-[#111111] border-b border-[#292929];
}

.r-navbar__container {
  @apply relative flex flex-1 items-center justify-between
         max-w-[1216px] px-8 py-6
         border-l border-r border-[#292929];
}

.r-navbar__dot {
  @apply absolute bottom-[-3px] size-[5px] bg-[#565656];
}

.r-navbar__dot--left  { @apply left-[-3px]; }
.r-navbar__dot--right { @apply right-[-3px]; }

.r-navbar__logo {
  @apply shrink-0 block h-[37px] w-[139.895px];
}

.r-navbar__logo img {
  @apply h-full w-full object-contain;
}

.r-navbar__actions {
  @apply flex items-center gap-6;
}

.r-navbar__nav {
  @apply flex items-center gap-4 list-none m-0 p-0;
}

.r-navbar__link {
  @apply font-sans font-normal text-[12px] text-[#7d7d7d]
         tracking-[0.12px] leading-[1.15] whitespace-nowrap
         no-underline transition-colors hover:text-[#bfbfbf];
}
</style>
