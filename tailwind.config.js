/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    borderRadius: {
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      cc: '30px',
    },
    extend: {
      colors: {
        gray: {
          900: '#0f1011',
        },
      },
      minHeight: {
        14: '3.5rem',
      },
      minWidth: {
        14: '3.5rem',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.2, 1, 0.25, 1)',
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.transparent') },
          '100%': { backgroundColor: theme('colors.white') },
        },
      }),
    },
  },
}
