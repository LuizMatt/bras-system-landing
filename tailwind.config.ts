import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': 'var(--bg-base)',
        'bg-surface': 'var(--bg-surface)',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        'accent': 'var(--accent)',
        'btn-bg': 'var(--btn-bg)',
        'btn-text': 'var(--btn-text)',
        'btn-border': 'var(--btn-border)',
        'border-token': 'var(--border)',
      },
    },
  },
} satisfies Config
