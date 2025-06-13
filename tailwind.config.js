/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        retro: ['"Press Start 2P"', 'monospace'],
        pixel: ['"VT323"', 'monospace'],
      },
      colors: {
        skyretro: '#87CEEB',
        grassgreen: '#7FFF00',
        darkground: '#1a1a1a',
        black: '#000000',
        green: {
          400: '#00FF00',
        }
      },
    },
  },
  plugins: [],
}