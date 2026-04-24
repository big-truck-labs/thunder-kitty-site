/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,md,js}", "./src/_includes/**/*.{html,njk}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          '"Fraunces"',
          "Iowan Old Style",
          "Palatino",
          "Georgia",
          "serif",
        ],
        sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ['"JetBrains Mono"', '"SF Mono"', "Menlo", "monospace"],
      },
      colors: {
        paper: "#fbf7f2",
        "paper-deep": "#f3ece0",
        ink: "#1a1a1a",
        "ink-soft": "#4a4540",
        "ink-faded": "#8a827a",
        rose: "#d06b7e",
        "rose-soft": "#e8b8c2",
        coral: "#e47764",
        "coral-deep": "#c85d4b",
        slate: "#4a90d9",
        cardstock: "#e8ddd0",
        line: "#d9cfc2",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        thunderkitty: {
          primary: "#1a1a1a",
          "primary-content": "#fbf7f2",
          secondary: "#d06b7e",
          "secondary-content": "#fbf7f2",
          accent: "#e47764",
          "accent-content": "#fbf7f2",
          neutral: "#4a4540",
          "neutral-content": "#fbf7f2",
          "base-100": "#fbf7f2",
          "base-200": "#f3ece0",
          "base-300": "#e8ddd0",
          "base-content": "#1a1a1a",
          info: "#d06b7e",
          success: "#28c840",
          warning: "#febc2e",
          error: "#ff5f57",
          "--rounded-box": "0.5rem",
          "--rounded-btn": "9999px",
        },
      },
    ],
    base: false,
    styled: true,
    utils: true,
  },
};
