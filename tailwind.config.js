/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f6ede4',
      },
      fontFamily: {
        display: ['Londrina Solid', 'Londrina Solid Local', 'sans-serif'],
        body: ['DM Sans Local', 'sans-serif'],
        accent: ['Bricolage Local', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 16s linear infinite',
      },
    },
  },
  plugins: [],
}
