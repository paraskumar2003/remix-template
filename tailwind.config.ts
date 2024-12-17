import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: '#EBEAFF',
        secondary: '#9694FF',
        accent: '#3D3BF3',
        danger: '#FF2929',
        'p-white': "#FFFFFF",
        's-white': "#F0F0F0",
        't-white': "#F7F7F7",
      },
    },
  },
  plugins: [],
} satisfies Config;
