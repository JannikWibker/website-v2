import defaultTheme from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {}, // TODO: add some colors here!
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segeo UI', ...defaultTheme.fontFamily.sans],
        mono: ['Menlo', ...defaultTheme.fontFamily.mono]
      }
    }
  },
  plugins: []
} satisfies Config
