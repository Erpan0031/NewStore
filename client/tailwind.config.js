/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
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
      animation: {
        boxrotate: "wiggle 20s linear infinite",
        boxtoleft: "ToLeft .5s linear 1",
        boxtoTop: "ToTop 0.6s linear 1",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)" },
        },
        ToLeft: {
          "0%": { transform: "translateX(200px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        ToTop: {
          "0%": { transform: "translateY(600px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
