import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        4.5: "1.125rem",
      },
      lineHeight: {
        7.5: "1.875rem",
        9.5: "2.375rem",
        11: "2.75rem",
        18: "4.5rem",
      },
      fontFamily: {
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
      height: {
        45: "11.25rem",
      },
      maxWidth: {
        "screen-xl": "1280px",
      },
    },
    colors: {
      white: "#FFF",
      gray: {
        100: "#F2F4F7",
        200: "#E4E7EC",
      },
      secondary: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        400: "#64748B",
        600: "#334155",
        800: "#1E293B",
        900: "#0F172A",
      },
      primary: "#7C3AED",
    },
    screens: {
      "2xl": { max: "1535px" }, // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" }, // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" }, // => @media (max-width: 1023px) { ... }
      md: { max: "767px" }, // => @media (max-width: 767px) { ... }
      sm: { max: "639px" }, // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
export default config;
