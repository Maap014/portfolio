import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        300: "300px",
        360: "360px",
        390: "390px",
        425: "425px",
        480: "480px",
        560: "560px",
        640: "640px",
        768: "768px",
        880: "880px",
        960: "960px",
        1024: "1024px",
        1180: "1180px",
        1240: "1240px",
        1300: "1300px",
        1400: "1400px",
        1500: "1500px",
        1600: "1600px",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      colors: {
        primary: {
          bg: "rgb(var(--background))",
          black: "#151312",
          white: "#fff",
          grey: {
            100: "#998f8f",
            200: "#6a6b6e",
            300: "#b6b4bd33",
          },
        },
        secondary: {
          opaqueWhite: "#ffffff08",
          mintGreen: "#bbebbe",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
