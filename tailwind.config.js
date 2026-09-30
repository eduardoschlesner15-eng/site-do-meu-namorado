/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f3ff',
          purple: '#b026ff',
          pink: '#ff007f'
        },
        dark: {
          900: '#0a0a0f',
          800: '#11111a',
          700: '#1a1a2e'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
