import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        floralwhite: "#fcf5eb",
        gray: {
          100: "#929292",
          200: "#8f8f8f",
          300: "#868686",
          400: "#141414",
          500: "rgba(255, 255, 255, 0.35)",
        },
        white: "#fff",
        cornflowerblue: {
          100: "#4ca9ff",
          200: "#3096f4",
        },
        lavender: "#d3eaff",
        darkGreen: "#49A649",
        lightGreen: "#CFFFCF",
        darkslategray: {
          100: "#404040",
          200: "#313131",
          300: "#2f2f2f",
        },
        blueviolet: "#624dff",
        mediumslateblue: "#7a66ff",
        darkOrange: "#FF5733",
        lightOrange: "#FCAC9B",
        black: "#000",
        lightblue: "#c1e1ff",
        lightgray: "#d1d1d1",
        silver: "#b8b8b8",
        dodgerblue: "#267fe5",
        whitesmoke: "#f4f4f4",
        turquoise: "#3fe0d0",
        goldenrod: "#cda427",
      },
      spacing: {},
      borderRadius: {
        "13xl": "32px",
        "7xs-8": "5.8px",
        "7xs-5": "5.5px",
        "2xs": "11px",
        "10xs-8": "2.8px",
        "8xs-1": "4.1px",
        "10xs-4": "2.4px",
        "base-5": "15.5px",
        "4xs": "9px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "38xl-2": "57.2px",
      "15xl": "34px",
      "27xl": "46px",
      xs: "12px",
      lg: "18px",
      sm: "14px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "11xl": "30px",
      "6xl-6": "25.6px",
      "13xl": "32px",
      "7xl": "26px",
      "45xl": "64px",
      "32xl": "51px",
      "4xs-3": "8.3px",
      "6xs-9": "6.9px",
      "7xs-8": "5.8px",
      "6xs-5": "6.5px",
      "4xs-7": "8.7px",
      "7xs-9": "5.9px",
      "9xl": "28px",
      "3xl": "22px",
      "base-5": "15.5px",
      "61xl": "80px",
      "21xl": "40px",
      "17xl-5": "36.5px",
      inherit: "inherit",
    },
    fontFamily: {
      default: [
        "Atyp Display",
        "Atyp Text",
        "Atyp Variable",
        ...fontFamily.sans,
        ...fontFamily.serif,
        ...fontFamily.mono,
      ],
      "atyp-display": [
        "Atyp Display",
        "Atyp Text",
        "Atyp Variable",
        ...fontFamily.sans,
        ...fontFamily.serif,
        ...fontFamily.mono,
      ],
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq650:{
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [
    //@ts-ignore
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
        },
        '.scrollbar-thumb-accent': {
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#000000', // Replace with your actual accent color
            borderRadius: '2px',
          },
        },
        '.scrollbar-track-muted-foreground': {
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#ffffff', // Replace with your actual muted foreground color
          },
        },
      })
    },
  ],
};
export default config;
