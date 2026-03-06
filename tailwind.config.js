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
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'spin-slow': 'spin 16s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'fade-in-down': 'fadeInDown 0.7s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.7s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.7s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-left-float': 'fadeInLeft 0.7s ease-out forwards, float 6s ease-in-out 0.7s infinite',
        'fade-in-right-float': 'fadeInRight 0.7s ease-out forwards, float 6s ease-in-out 0.7s infinite',
        'fade-in-up-float': 'fadeInUp 0.7s ease-out forwards, float 6s ease-in-out 0.7s infinite',
        'fade-in-down-float': 'fadeInDown 0.7s ease-out forwards, float 6s ease-in-out 0.7s infinite',
      },
    },
  },
  plugins: [],
}
