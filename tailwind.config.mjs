/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#66a966", // green for light mode
          dark: "#3f704d", // dark green for dark mode
        },
        background: {
          light: "#ffffff",
          dark: "#1a1a1a",
        },
      },
    },
  },
  plugins: [],
};
