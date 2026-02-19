/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ← ここで src 以下の全 tsx を指定しているか？
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}