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
        "copper-light": "#d59a72",
        ocean: "#032253",
        "ocean-2": "#071a32",
        mist: "#f4f7f8",
        steel: "#77a5c4",
        cyan: "#52c7da",
        sage: "#7c8f79",
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
        glass: "0 20px 80px rgba(3, 34, 83, 0.18)",
      },
      backgroundImage: {
        "technical-grid":
          "linear-gradient(rgba(119,165,196,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(119,165,196,0.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
