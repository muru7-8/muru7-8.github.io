/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFDB58",
        primaryLight: "#ECE4B7",
        secondary: "#F85E00",
        asparagus: "#7FB069",
      },
    },
  },
  plugins: [],
};
