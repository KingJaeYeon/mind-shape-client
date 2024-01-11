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
      colors: {
        gray: "var(--grayscale-gray)",
        white: "var(--grayscale-white)",
        paleGray: "var(--grayscale-pale-gray)",
        weakGray: "var(--grayscale-weak-gray)",
        lightGray: "var(--grayscale-lightgray)",
        neutralGray: "var(--grayscale-neutral-gray)",
        deepGray: "var(--grayscale-deep-gray)",
        darkGray: "var(--grayscale-dark-gray)",
        black: "var(--grayscale-black)",
        switchBg: "var(--switch-bg)",
        dialogOverlay: "var(--dialog-overlay)",

        bg: "var(--bg)",
        orange: "var(--orange)",
        gold1: "var(--gold1)",
        gold2: "var(--gold2)",
        red: "var(--red)",
        green: "var(--green)",
      },
      borderColor: {
        line: "var(--line)",
      },
      fontFamily: {
        maple: ["MaplestoryOTFBold", "sans-serif"],
      },
      boxShadow: {
        green: "0px 0px 20px var(--green)",
        red: "0px 0px 20px var(--red)",
        orange: "0px 0px 20px var(--orange)",
        gold: "0px 0px 20px var(--gold1)",
        dark: "0px 0px 30px #000",
        switch: "0 2px 10px var(--grayscale-black)",
        switchThumb: "0 2px 2px var(--grayscale-black)",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
