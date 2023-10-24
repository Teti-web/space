"use strict";

/** @type {import('tailwindcss').Configuration} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px"
      },
      colors: {
        dark: "#0B0D17",
        blue: "#D0D6F9",
        white: "#FFFFFF",
        grey: "#383B4B"
      },
      fontFamily: {
        primary: ["Barlow", "sans-serif"],
        secondary: ["Bellefair", "sans-serif"]
      },
      lineHeight: {
        25: "25px",
        28: "28px",
        32: "32px"
      },
      opacity: {
        0: "0",
        10: "0.1",
        20: "0.2",
        25: "0.25",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        80: "0.8",
        100: "1"
      },
      margin: {
        px: "1px",
        0: "0",
        16: "16px",
        24: "24px",
        auto: "auto"
      },
      translate: {
        center: "-50%"
      },
      backgroundImage: {
        imgHome: "url(./assets/Bitmap.jpg)",
        imgDest: "url(./assets/destination-bg.jpg)",
        imgCrew: "url(./assets/crew-bg.jpg)",
        imgTech: "url(./assets/technology-bg.jpg)"
      },
      animation: {
        fadeInLeft: "fadeInLeft 1s ease-in-out ",
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInRight: "fadeInRight 1s ease-in-out"
      },
      keyframes: {
        fadeInLeft: {
          "0%": {
            opacity: 0,
            transform: "translate3d(-80%, 0, 0)"
          },
          "100%": {
            opacity: 1,
            transform: "none"
          }
        },
        fadeIn: {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          }
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translate3d(65%, 0, 0)"
          },
          "100%": {
            opacity: 1,
            transform: "none"
          }
        }
      }
    }
  },
  plugins: []
};