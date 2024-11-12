/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true, // container'ni markazlashtiradi
      padding: '1rem', // ichki chet (padding) qo'shadi
      screens: {
        sm: '100%', // kichik ekranlar uchun (mobil) to'liq kenglik
        md: '768px', // o'rta ekranlar uchun kenglik
        lg: '1024px', // katta ekranlar uchun kenglik
        xl: '1280px', // juda katta ekranlar uchun kenglik
        '2xl': '1440px', // juda katta ekranlar uchun kenglik
      },
    },
  },
  plugins: [],
}