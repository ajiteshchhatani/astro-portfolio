/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(230px, 1fr))",
      },
      gridTemplateRows: {
        "max-content-200": "max-content 200px 1fr",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
