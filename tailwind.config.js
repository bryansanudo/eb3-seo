/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#94171A",

          secondary: "#263D72",

          accent: "#000000",

          neutral: "#000000",

          "base-100": "#FFFFFF",

          info: "#94171A",

          success: "#94171A",

          warning: "#94171A",

          error: "#F87272",
          black: "#ffffff",
        },
      },
    ],
  },
};
