import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f5f4f0',
        surface: '#ffffff',
        surfaceAlt: '#efe9de',
        border: '#171717',
        text: '#171717',
        textMuted: '#4f4a44',
        accent: '#f47c20',
        accentAlt: '#4a67f5',
        success: '#28b66f',
        warning: '#ef9f2f',
        danger: '#dd5f5f'
      },
      boxShadow: {
        soft: '0 20px 50px rgba(17, 17, 17, 0.10)',
        glow: '0 12px 28px rgba(74, 103, 245, 0.14), 0 8px 22px rgba(244, 124, 32, 0.12)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at 0% 0%, rgba(244,124,32,0.10), transparent 18%), radial-gradient(circle at 100% 0%, rgba(74,103,245,0.10), transparent 18%), linear-gradient(rgba(17,17,17,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.05) 1px, transparent 1px), linear-gradient(180deg, #f8f6f1 0%, #f1ece1 100%)'
      }
    }
  },
  plugins: []
}

export default config
