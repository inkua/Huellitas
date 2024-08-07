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
        "adoption-banner": "url('https://res.cloudinary.com/dorljfo6v/image/upload/v1718050129/huellitas/adopcion-banner-mobile.jpg')",
        "hero-banner-lg": "url('https://res.cloudinary.com/dorljfo6v/image/upload/v1718046400/huellitas/home-banner-desktop.jpg')",
        "hero-banner-sm": "url('https://res.cloudinary.com/dorljfo6v/image/upload/v1718046399/huellitas/home-banner-mobile.jpg')",
        "colab-banner": "url('https://res.cloudinary.com/dorljfo6v/image/upload/v1718050498/huellitas/colaboraciones-banner.jpg')",
        "sample": "url('/assets/Sumate/girl&dog.png')",
        "error-mobile": "url('/assets/Error/error-mobile.png')",
        "error-desktop": "url('/assets/Error/error-desktop.png')",
        "gradient-one": "linear-gradient(to bottom, white 59%, #F0F1F0 41%)",
        "gradient-two": "linear-gradient(to bottom, white 52%, #F0F1F0 48%)",
        "gradient-three": "linear-gradient(to bottom, white 66%, #F0F1F0 34%)",
        "ig-mobile": "url('/assets/Contacto/ig-img.png')",
        "tk-mobile": "url('/assets/Contacto/tk-img.png')",
      },
      backgroundSize: {
        '1': '45%',
        '2': '30%',
        '3': '25%',
      },
      colors: {

        "primaryColor": "#6C5CE7",
        "secondaryColor": "#FD79A8",
        "tertiaryColor": "#F2F0FD",
        "activeButton": "#FF5490",
        "primaryFont": "#22202A",
        "grayFont": "#6B6B6B",

      },
      screens: {
        'xs': '320px',
        'b-mob': '430px',
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
