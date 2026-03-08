import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts}',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E55A37',
          'orange-dark': '#D74C28',
          'orange-light': '#E57B60',
        },
        page: {
          bg: '#111111',
          border: '#292929',
        },
        text: {
          primary: '#F2F2F2',
          body: '#BFBFBF',
          muted: '#7D7D7D',
          subtle: '#565656',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tight: ['Inter Tight', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
