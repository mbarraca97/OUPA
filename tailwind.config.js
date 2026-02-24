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
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'spin-slow': 'spin 16s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
