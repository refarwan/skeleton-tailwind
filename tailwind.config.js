/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./results/index.html"],
  theme: {
    extend: {
      animation: {
        'splash-skeleton': 'move 2s infinite',
      },
      keyframes: {
        move: {
          "100%": {
            transform: "translateX(100%)"
          }
        }
      }
    },
  },
  plugins: [],
}
