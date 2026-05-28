import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        graphite: "#27313d",
        copper: "#b46b43",
        ocean: "#032253",
        mist: "#f4f7f8",
        steel: "#77a5c4",
        sage: "#7c8f79"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        premium: "0 24px 70px rgba(17, 24, 39, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
