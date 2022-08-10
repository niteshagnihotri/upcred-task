/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': "'Poppins', sans-serif",
      },
      backgroundImage: {
        'purple_gradient':"url('https://cdn.trell.co/w=640,h=640,fit=scale-down/format=png/user-images/images/orig/WNEJWbNin5YawKrW15PUyqY2z2lxzi71.png')",
      },
    },
  },
}

