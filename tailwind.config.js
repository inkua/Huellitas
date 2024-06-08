/** @type {import('tailwindcss').Config} */
const importantPlugin = require('tailwindcss-important')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "adoption-banner": "url('/assets/Adopcion/banner-img.jpg')",
        "hero-banner-lg": "url('/assets/Hero/banner-img-lg.jpg')",
        "hero-banner-sm": "url('/assets/Hero/banner-img-sm.jpg')",
        "colab-banner": "url('/assets/Colaboracion/banner-img.jpg')",
      },
      colors: {
        "violetHtas":"#6C5CE7",
        "grayHtas":"#585564",
        "blackHtas":"#22202a",
        "pinkHtas":"#FD79A8",
        "colorTerciario": "#f2f0fd",

        "primaryColor": "#6C5CE7",
        "secondaryColor": "#FD79A8",
        "tertiaryColor": "#F2F0FD",
        "activeButton": "#FF5490",
        "primaryFont": "#22202A",

      },
      fontSize: {
        "h1-w": "31px",
        "h1-m": "25px",
        "h2-w": "25px",
        "h2-m": "20px",
        "p1-w": "20px",
        "p1-m": "16px",
        "p2-w": "18px",
        "p2-m": "16px",
        "p3-w": "16px",
        "p3-m": "13px",

      }

    },
  },
  plugins: [
    importantPlugin(),

  ],
};
