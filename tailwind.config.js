/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "RedTheme":"#bb1a04"
      },
      backgroundImage: {
        'total_user': "url('../images/1.jpg')",
        'total_user1': "url('../images/2.jpg')",
        'total_user2': "url('../images/3.jpg')",
        'total_user3': "url('../images/4.jpg')",
        'total_user4': "url('../images/register.png')",
      }
    },
  },
  plugins: [],
}   