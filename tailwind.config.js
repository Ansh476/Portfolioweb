/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FCA5F1",
        secondary: "#B5FFFF",
        custompink: '#BE07A2',
        customblue:'#0D87F2',
        join:'#fde3fa',
        homic:"#414141",
      },
    },
    borderRadius:{
      'cust': '40px',
    }
  },
  plugins: [],
}

