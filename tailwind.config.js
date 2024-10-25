/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btnGradient: 'linear-gradient(#E65895, #BC6BE8)',
        mainTextColor: '#E2E4F3',
        secondTextColor: '#8B8EAB',
        bgQuiz: '#343964',
        btnColor: '#393F6E'
      },
      fontFamily:{
        'main': ['Be Vietnam Pro']
      },
      backgroundImage:{
        'background': "url('/src/imgs/bg.jpg')"
      }
    },
  },
  plugins: [],
}