/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          animation: {
            'spin-slow': 'spin 12s linear infinite',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'marquee': 'marquee 25s linear infinite', // ← CRITICAL ADDTION
          },
          keyframes: {
            marquee: {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(-50%)' }, // ← Smooth infinite loop transition point
            }
          }
        },
      },
    plugins: [],
  }