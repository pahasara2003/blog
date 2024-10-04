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

        "custom-gradient": `
          radial-gradient(18% 28% at 24% 50%, #CEFAFFFF 7%, #073AFF00 100%),
          radial-gradient(18% 28% at 18% 71%, #FFFFFF59 6%, #073AFF00 100%),
          radial-gradient(70% 53% at 36% 76%, #73F2FFFF 0%, #073AFF00 100%),
          radial-gradient(42% 53% at 15% 94%, #FFFFFFFF 7%, #073AFF00 100%),
          radial-gradient(42% 53% at 34% 72%, #FFFFFFFF 7%, #073AFF00 100%),
          radial-gradient(18% 28% at 35% 87%, #FFFFFFFF 7%, #073AFF00 100%),
          radial-gradient(31% 43% at 7% 98%, #FFFFFFFF 24%, #073AFF00 100%),
          radial-gradient(21% 37% at 72% 23%, #D3FF6D9C 24%, #073AFF00 100%),
          radial-gradient(35% 56% at 91% 74%, #8A4FFFF5 9%, #073AFF00 100%),
          radial-gradient(74% 86% at 67% 38%, #6DFFAEF5 24%, #073AFF00 100%),
          linear-gradient(125deg, #4EB5FFFF 1%, #4C00FCFF 100%)
        `,
      },
      backgroundSize: {
        "custom-size": "100% 100%",
      },
      backgroundPosition: {
        "custom-position": `
          0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 0px 0px, 
          0px 0px, 0px 0px, 0px 0px, 0px 0px
        `,
      },
    },
    colors: {
      bg: "#141414",
      white: "#ffffff",
      fg: "#303233",
      transparent: "rgba(0,0,0,0)",
      s1: "#4299E1",
      s2: "#9F7AEA",
      gray: "#A0AEC0",
      light: "#f2f2f2",
    },
    fontFamily: {
      serif: ["Book", "Arial"],
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
    require("@tailwindcss/line-clamp"),
  ],
};
export default config;
