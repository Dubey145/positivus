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
        "dark-gray": "#292A32",
      },
      keyframes: {
        rotate4: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(4deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" },
          "100%": { transform: "translateY(0)" },
        },
        'heart':{
          '0%':{transform:'translate(-70px,30px) scale(0.25)'},
          "100%": {transform: 'translate(0, 0) scale(1)'}
        },
        'share':{
          '0%':{transform:'translate(-130px,20px) scale(0.25)'},
          "100%": {transform: 'translate(0, 0) scale(1)'},
        },
        'play':{
          '0%':{transform:'translate(-110px,15px) scale(0.25)'},
          "100%": {transform: 'translate(0, 0) scale(1)'},
        },
        'location':{
          '0%':{transform:'translate(-70px,-15px) scale(0.25)'},
          "100%": {transform: 'translate(0, 0) scale(1)'},
        },
        wiggle: {
          '0%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
          '100%': { transform: 'rotate(-3deg)' },
        },
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        rotate4: "rotate4 2s ease-in-out infinite",
        floating: "float 2s ease-in-out infinite ",
        heart: 'heart 2s forwards, float 2s ease-in-out 3s infinite',
        share: 'share 2s forwards, float 2s ease-in-out 3s infinite',
        play: 'play 2s forwards, float 2s ease-in-out 3s infinite',
        location: 'location 2s forwards, float 2s ease-in-out 3s infinite',
        wiggle: 'wiggle 1s ease-in-out, float 2s ease-in-out 3s infinite',
      },
    },
  },
  plugins: [],
};
