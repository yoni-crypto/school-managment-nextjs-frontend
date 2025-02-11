import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yoSky:"#C3EBFA",
        yoSkyLight:"#EDF9FD",
        yoPurple:"#CFCEFF",
        yoPurpleLight:"#F1F0FF",
        yoYellow:"#FAE27c",
        yoYellowLight:"#FEFCE8"
      },
    },
  },
  plugins: [],
} satisfies Config;
