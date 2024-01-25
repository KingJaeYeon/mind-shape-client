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
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
          disable: "var(--primary-disable)",
          shadowBorder: "var(--primary-shadow-input)",
        },

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

        modalBg: "var(--modal-bg)",
        modalTitle: "var(--modal-title)",
        iconColor: "var(--icon-color)",
        inputValueText: "var(--input-value-text)",
        inputLabelText: "var(--input-label-text)",
        inputReadOnly: "var(--grayscale-dark-pale)",
        inputFocusBorderShadow: "var(--primary-shadow-input)",
        orange: "var(--orange)",
        gold1: "var(--gold1)",
        gold2: "var(--gold2)",
        red: "var(--red)",
        green: "var(--primary)",

        bg: "var(--bg)",
        border: "var(--border)",
        button: {
          DEFAULT: "var(--button)",
          hover: "var(--button-hover)",
          disable: "var(--button-disable)",
          secondary: {
            DEFAULT: "var(--button-secondary)",
            hover: "var(--button-secondary-hover)",
            disable: "var(--button-secondary-disable)",
          },
        },
      },
      borderColor: {
        line: "var(--line)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        green: "0px 0px 20px var(--primary)",
        red: "0px 0px 20px var(--red)",
        orange: "0px 0px 20px var(--orange)",
        gold: "0px 0px 20px var(--gold1)",
        dark: "0px 0px 30px #000",
        switch: "0 2px 10px var(--grayscale-black)",
        switchThumb: "0 2px 2px var(--grayscale-black)",
        dropdown:
          "rgba(128, 138, 157, 0.12) 0px 1px 2px, rgba(128, 138, 157, 0.24) 0px 8px 32px",
        dropdown2: "0px 0px 20px (--primary-shadow-input)",
        input: "var(--focus-input-shadow) 0px 0px 0px 4px",
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
