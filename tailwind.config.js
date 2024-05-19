/** @type {import('tailwindcss').Config} */
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
        "adoption-banner": "url('../../public/assets/Adopcion/banner-img.jpg')",
        "hero-banner-lg": "url('../../public/assets/Hero/banner-img-lg.jpg')",
        "hero-banner-sm": "url('../../public/assets/Hero/banner-img-sm.jpg')",
      },
      colors: {
        "violetHtas":"#6C5CE7",
        "grayHtas":"#585564",
        "blackHtas":"#22202a",
        "pinkHtas":"#FD79A8",
        "colorTerciario": "#f2f0fd",

      }
    },
  },
  plugins: [],
};
