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
        "adoption-banner": "url('https://firebasestorage.googleapis.com/v0/b/huellitasctgna.appspot.com/o/static%2Fadopcion-banner-mobile.jpg?alt=media&token=626c28ba-db02-40ad-a98c-c88e4e6ef22f')",
        "hero-banner-lg": "url('https://firebasestorage.googleapis.com/v0/b/huellitasctgna.appspot.com/o/static%2Fhome-banner-desktop.jpg?alt=media&token=ebc65f25-88e7-41ab-b635-c676c8eb85b9')",
        "hero-banner-sm": "url('https://firebasestorage.googleapis.com/v0/b/huellitasctgna.appspot.com/o/static%2Fhome-banner-mobile.jpg?alt=media&token=6b677669-84df-42b4-a76d-563e2c30cd70')",
        "colab-banner": "url('https://firebasestorage.googleapis.com/v0/b/huellitasctgna.appspot.com/o/static%2Fcolaboraciones-banner.jpg?alt=media&token=6c73f4a9-8c4e-4cd1-bfff-8fa51932004c')",
        "sample": "url('/assets/Sumate/girl&dog.png')",
        "error-mobile": "url('/assets/Error/error-mobile.png')",
        "error-desktop": "url('/assets/Error/error-desktop.png')",
        "gradient-one": "linear-gradient(to bottom, white 59%, #F0F1F0 41%)",
        "gradient-two": "linear-gradient(to bottom, white 52%, #F0F1F0 48%)",
        "gradient-three": "linear-gradient(to bottom, white 66%, #F0F1F0 34%)",
        "ig-mobile": "url('/assets/Contacto/ig-img.png')",
        "tk-mobile": "url('/assets/Contacto/tk-img.png')",
        "error-icon": "url('/assets/Error/errorIcon.svg')",
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
