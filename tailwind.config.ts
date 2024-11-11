import type { Config } from "tailwindcss";

export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        island: "var(--island-background)", // New color for the floating island
      },
      maxWidth: {
        '8x1': '90rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
