/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        positive: ["Space Grotesk"],
      },

      colors: {
        "custom-green": "#B9FF66",
        "custom-black": "#191A23",
        "custom-gray": "#F3F3F3",
      },
    },
  },
  plugins: [],
};
