import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      bg: "#292a2b",
      white: "#ffffff",
      fg: "#303233",
      transparent: "rgba(0,0,0,0)",
      s1: "#4299E1",
      s2: "#9F7AEA",
      gray: "#A0AEC0",
      light: "#f2f2f2",
    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      Headers: ["Nue", "sans-serif"],
    },
  },
  plugins: [
    nextui({
      defaultTheme: "light",
      addCommonColors: true,

      themes: {
        light: {
          colors: {
            primary: {
              //... 50 to 900
              DEFAULT: "#9F7AEA",
            },
          },
        },
        dark: {
          // ...
          colors: {
            primary: {
              DEFAULT: "#9F7AEA",
            },
          },
        },
        // ... custom themes
      },
    }),
    require("@tailwindcss/typography"),
  ],
};
export default config;
