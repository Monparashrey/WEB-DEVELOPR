/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*"], 
  theme: {
    fontFamily: {
      jost: ['sans-serif'],
      body: ['"sans-serif"'],
    },
    extend: {
      animation: {
        'spin': 'spin 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

