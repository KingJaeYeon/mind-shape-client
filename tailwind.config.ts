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
      backgroundColor: {
        gray: "var(--grayscale-gray)",
        white: "var(--grayscale-white)",
        paleGray: "var(--grayscale-pale-gray)",
        weakGray: "var(--grayscale-weak-gray)",
        lightGray: "var(--grayscale-lightgray)",
        neutralGray: "var(--grayscale-neutral-gray)",
        deepGray: "var(--grayscale-deep-gray)",
        darkGray: "var(--grayscale-darkgray)",
        black: "var(--grayscale-black)",
        orange: "var(--orange)",
        gold1: "var(--gold1)",
        gold2: "var(--gold2)",
      },
      textColor: {
        gray: "var(--grayscale-gray)",
        white: "var(--grayscale-white)",
        paleGray: "var(--grayscale-pale-gray)",
        weakGray: "var(--grayscale-weak-gray)",
        lightGray: "var(--grayscale-lightgray)",
        neutralGray: "var(--grayscale-neutral-gray)",
        deepGray: "var(--grayscale-deep-gray)",
        darkGray: "var(--grayscale-darkgray)",
        black: "var(--grayscale-black)",
        orange: "var(--orange)",
        gold1: "var(--gold1)",
        gold2: "var(--gold2)",
      },
      borderColor: {
        line: "var(--line)",
      },
      fontFamily: {
        maple: ["MaplestoryOTFBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
